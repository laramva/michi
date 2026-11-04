// Conversão romaji -> hiragana (estilo IME) e utilidades de normalização.
(function () {
  const T = {
    a:'あ',i:'い',u:'う',e:'え',o:'お',
    ka:'か',ki:'き',ku:'く',ke:'け',ko:'こ', ga:'が',gi:'ぎ',gu:'ぐ',ge:'げ',go:'ご',
    sa:'さ',shi:'し',si:'し',su:'す',se:'せ',so:'そ', za:'ざ',ji:'じ',zi:'じ',zu:'ず',ze:'ぜ',zo:'ぞ',
    ta:'た',chi:'ち',ti:'ち',tsu:'つ',tu:'つ',te:'て',to:'と', da:'だ',di:'ぢ',du:'づ',de:'で',do:'ど',
    na:'な',ni:'に',nu:'ぬ',ne:'ね',no:'の',
    ha:'は',hi:'ひ',fu:'ふ',hu:'ふ',he:'へ',ho:'ほ', ba:'ば',bi:'び',bu:'ぶ',be:'べ',bo:'ぼ', pa:'ぱ',pi:'ぴ',pu:'ぷ',pe:'ぺ',po:'ぽ',
    ma:'ま',mi:'み',mu:'む',me:'め',mo:'も', ya:'や',yu:'ゆ',yo:'よ',
    ra:'ら',ri:'り',ru:'る',re:'れ',ro:'ろ', wa:'わ',wo:'を',nn:'ん',"n'":'ん',
    kya:'きゃ',kyu:'きゅ',kyo:'きょ', gya:'ぎゃ',gyu:'ぎゅ',gyo:'ぎょ',
    sha:'しゃ',shu:'しゅ',sho:'しょ',she:'しぇ', sya:'しゃ',syu:'しゅ',syo:'しょ',
    ja:'じゃ',ju:'じゅ',jo:'じょ',je:'じぇ', jya:'じゃ',jyu:'じゅ',jyo:'じょ',
    cha:'ちゃ',chu:'ちゅ',cho:'ちょ',che:'ちぇ', tya:'ちゃ',tyu:'ちゅ',tyo:'ちょ',
    nya:'にゃ',nyu:'にゅ',nyo:'にょ', hya:'ひゃ',hyu:'ひゅ',hyo:'ひょ',
    bya:'びゃ',byu:'びゅ',byo:'びょ', pya:'ぴゃ',pyu:'ぴゅ',pyo:'ぴょ',
    mya:'みゃ',myu:'みゅ',myo:'みょ', rya:'りゃ',ryu:'りゅ',ryo:'りょ',
    fa:'ふぁ',fi:'ふぃ',fe:'ふぇ',fo:'ふぉ', va:'ゔぁ',vi:'ゔぃ',vu:'ゔ',ve:'ゔぇ',vo:'ゔぉ',
    thi:'てぃ',dhi:'でぃ',wi:'うぃ',we:'うぇ',
    xa:'ぁ',xi:'ぃ',xu:'ぅ',xe:'ぇ',xo:'ぉ',xtsu:'っ',xtu:'っ',xya:'ゃ',xyu:'ゅ',xyo:'ょ',
    '-':'ー', '.':'。', ',':'、', '?':'？', '!':'！'
  };
  const MAXLEN = 4;

  function toHiragana(input) {
    const s = String(input || '').toLowerCase();
    let out = '', i = 0;
    while (i < s.length) {
      const c = s[i];
      // consoante dobrada -> っ
      if (i + 1 < s.length && c === s[i + 1] && /[bcdfghjklmpqrstvwxyz]/.test(c) && c !== 'n') {
        out += 'っ'; i++; continue;
      }
      // n antes de consoante (não y) -> ん
      if (c === 'n' && i + 1 < s.length && /[bcdfghjklmpqrstvwz]/.test(s[i + 1])) {
        out += 'ん'; i++; continue;
      }
      let matched = false;
      for (let len = MAXLEN; len >= 1; len--) {
        const chunk = s.substr(i, len);
        if (T[chunk]) { out += T[chunk]; i += len; matched = true; break; }
      }
      if (!matched) {
        if (c === 'n' && i === s.length - 1) { out += 'ん'; i++; continue; }
        out += c; i++;
      }
    }
    return out;
  }

  function kataToHira(s) {
    return String(s || '').replace(/[ァ-ヶ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
  }
  function hiraToKata(s) {
    return String(s || '').replace(/[ぁ-ゖ]/g, ch => String.fromCharCode(ch.charCodeAt(0) + 0x60));
  }
  // remove pontuação/espaços para comparação
  function strip(s) {
    return String(s || '').replace(/[\s、。，．,.!?！？「」『』（）()・〜~…"'“”]/g, '');
  }
  // "漢字[かんじ]" -> "かんじ" ; remove marcas de token
  const RUBY = /([㐀-鿿々〆ヶ]+)\[([^\]]+)\]/g;
  function reading(s) { return String(s || '').replace(RUBY, '$2'); }
  function ruby(s) { return String(s || '').replace(RUBY, '<ruby>$1<rt>$2</rt></ruby>'); }
  function surface(s) { return String(s || '').replace(/\[([^\]]+)\]/g, ''); }
  function hasKana(s) { return /[぀-ヿ]/.test(s); }

  function normalizeAnswer(s) {
    let v = String(s || '').trim();
    if (!hasKana(v)) v = toHiragana(v);
    return kataToHira(strip(v)).replace(/ー/g, '');
  }

  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }
  function similarity(a, b) {
    a = kataToHira(strip(a)); b = kataToHira(strip(b));
    if (!a && !b) return 1;
    return 1 - levenshtein(a, b) / Math.max(a.length, b.length);
  }

  window.JP = { toHiragana, kataToHira, hiraToKata, strip, reading, ruby, surface, normalizeAnswer, similarity, hasKana };
})();
