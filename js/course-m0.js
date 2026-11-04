// Módulo 0 — Fundamentos: sons, hiragana, katakana e o que é kanji.
// Vocab: [escrita, leitura(kana, vazio = igual), português, emoji]
// Frases: [japonês com espaços entre blocos e 漢字[かな], português]
window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: 'm0', title: 'Fundamentos', level: 'Pré-A1', color: '#ff7a59', icon: '🌱',
  desc: 'Sons do japonês, hiragana, katakana e a lógica dos kanji. Base de tudo.',
  lessons: [
    {
      id: 'm0l1', title: 'Os sons do japonês e como estudar', icon: '🗣️',
      cando: ['Pronunciar as 5 vogais e entender o que é uma "mora"', 'Montar uma rotina de estudo que funciona de verdade'],
      intro: `<p>Boa notícia para quem fala português: as <b>vogais japonesas são quase iguais às nossas</b>. São só cinco: <b>a, i, u, e, o</b> — sempre "abertas" e curtas, nunca anasaladas.</p>
<ul>
<li><b>u</b> é falado com os lábios relaxados, sem fazer biquinho.</li>
<li><b>r</b> é sempre o "r" fraco de <i>caro</i>, <i>arara</i> — nunca o "r" de <i>rato</i>.</li>
<li><b>h</b> é aspirado, como o "rr" carioca de <i>carro</i>: は = "ha" soa quase como "rá".</li>
<li><b>Mora</b>: cada "batida" tem o mesmo tempo. にっぽん = に・っ・ぽ・ん (4 batidas). Vogal longa (おばあさん) e o っ pequeno (pausa) contam como uma batida inteira — e mudam o significado!</li>
<li><b>Acento de altura (pitch)</b>: o japonês não tem sílaba "forte"; ele sobe e desce o tom. はし (↘ hashi) = hashi de comer; はし (↗) = ponte. No começo, imite os áudios — não decore regras.</li>
</ul>
<h4>O método deste curso</h4>
<ol>
<li><b>Repetição espaçada (SRS)</b>: revise na aba <i>Revisar</i> todos os dias. O app mostra cada palavra pouco antes de você esquecer.</li>
<li><b>Lembrança ativa</b>: tente responder antes de olhar. Errar e corrigir fixa mais do que reler.</li>
<li><b>Shadowing</b>: ouça a frase e repita junto, imitando ritmo e melodia. Faça em voz alta.</li>
<li><b>Input compreensível</b>: assista e leia coisas que você entende 80–90%. Os vídeos de cada aula ajudam.</li>
<li><b>Uso real</b>: cada aula termina com uma <i>missão</i> para usar o japonês na sua vida.</li>
</ol>
<p><b>Meta realista:</b> 20–40 minutos por dia, todos os dias, vale mais que 4 horas no domingo.</p>`,
      vocab: [
        ['こんにちは','','olá / boa tarde','👋'], ['ありがとう','','obrigado(a)','🙏'], ['すし','','sushi','🍣'],
        ['にっぽん','','Japão (forma enfática)','🗾'], ['おばあさん','','avó / senhora idosa','👵'], ['おばさん','','tia / senhora','👩'],
        ['きって','','selo','📮'], ['きて','','venha (forma て de くる)','🫴']
      ],
      sentences: [
        ['こんにちは。','Olá.'], ['ありがとう。','Obrigado(a).'], ['すし が すき。','Gosto de sushi.']
      ],
      dialogue: [['A','こんにちは！','Olá!'],['B','こんにちは！','Olá!'],['A','ありがとう。','Obrigado.']],
      quiz: [
        ['Quantas moras (batidas) tem にっぽん?', ['2','3','4'], 2],
        ['O "r" japonês soa como o "r" de…', ['rato','caro','carro'], 1],
        ['おばあさん e おばさん significam a mesma coisa?', ['Sim','Não — a vogal longa muda o sentido'], 1]
      ],
      tip: 'Crie o hábito antes da intensidade: escolha um horário fixo (ex.: depois do café) e só abra o app. Dois minutos já contam como dia de estudo — a sequência (streak) é o que te leva ao avançado.',
      mission: 'Hoje, cumprimente alguém (ou o espelho) com "こんにちは" e agradeça algo com "ありがとう". Grave sua voz no celular e compare com o áudio do app.'
    },
    {
      id: 'm0l2', title: 'Hiragana 1: あ か さ', icon: 'あ',
      cando: ['Ler e escrever あ い う え お, か行 e さ行'],
      kana: { set: 'hiragana', groups: ['vogais','k','s'] },
      intro: `<p>O <b>hiragana</b> é o alfabeto silábico básico: cada símbolo é uma sílaba. São 46 no total e com eles você já consegue escrever qualquer palavra japonesa.</p>
<p><b>Técnica:</b> use o mnemônico (a historinha) para lembrar a forma, depois <i>escreva à mão</i> cada caractere 5 vezes falando o som. Escrever ativa a memória motora.</p>
<p>Atenção: し é "shi" (não "si").</p>
<p><b>Fontes de letra:</b> alguns kana mudam de aparência entre a letra impressa e a manuscrita. Na fonte do computador き e さ às vezes aparecem com o traço de baixo ligado; à mão, escreva-os separados. O mesmo vale para そ (pode ter um ou dois traços em cima) e り (com ou sem ligação). Os dois jeitos estão certos.</p>`,
      sentences: [['あおい そら','céu azul'], ['すし を ください','sushi, por favor'], ['あかい かさ','guarda-chuva vermelho']],
      tip: 'Não estude romaji por muito tempo. Assim que reconhecer um kana, leia direto o símbolo — o romaji é só uma rodinha de bicicleta.',
      mission: 'Escreva seu nome (ou algo parecido) com os kana que já sabe. Ex.: "Sakura" → さくら? (ら vem na próxima aula!)'
    },
    {
      id: 'm0l3', title: 'Hiragana 2: た な は', icon: 'た',
      cando: ['Ler e escrever た行, な行 e は行'],
      kana: { set: 'hiragana', groups: ['t','n','h'] },
      intro: `<p>Mais 15 hiragana. Atenção às exceções: ち = "chi", つ = "tsu", ふ = "fu" (entre "f" e "h", sopre de leve).</p>
<p>Quando は é <b>partícula de tópico</b>, lê-se "wa": わたし<b>は</b> = watashi <b>wa</b>.</p>`,
      sentences: [['ねこ と いぬ','gato e cachorro'], ['はな が すき','gosto de flores'], ['つき は きれい','a lua é bonita']],
      tip: 'Agrupe por "famílias" parecidas para não confundir: は/ほ, ね/れ/わ, ぬ/め. Compare-as lado a lado na aba Kana.',
      mission: 'Procure 3 palavras em hiragana em embalagens de produtos japoneses, mangás ou na internet e tente lê-las.'
    },
    {
      id: 'm0l4', title: 'Hiragana 3: ま や ら わ ん', icon: 'ま',
      cando: ['Completar os 46 hiragana básicos'],
      kana: { set: 'hiragana', groups: ['m','y','r','w'] },
      intro: `<p>Últimos hiragana básicos! を (wo) é usado praticamente só como <b>partícula de objeto</b> e soa "o". ん é o único som que é só consoante.</p>
<p>Depois desta aula, faça a <b>revisão da tabela inteira</b> na aba Kana.</p>`,
      sentences: [['りんご を たべる','comer maçã'], ['やま と うみ','montanha e mar'], ['ほん を よむ','ler um livro']],
      tip: 'Teste-se de trás para frente: veja o som e escreva o kana. Reconhecer é fácil; produzir é que prova que você sabe.',
      mission: 'Escreva à mão a tabela inteira de hiragana de memória. Marque os que errou e revise só esses amanhã.'
    },
    {
      id: 'm0l5', title: 'Hiragana 4: ゛ ゜, きゃ, っ e vogais longas', icon: 'が',
      cando: ['Ler sílabas com dakuten/handakuten, combinações e っ'],
      kana: { set: 'hiragana', groups: ['dakuten','youon'] },
      intro: `<ul>
<li><b>Dakuten ゛</b> deixa o som "sonoro": か→が (ga), さ→ざ, た→だ, は→ば.</li>
<li><b>Handakuten ゜</b> só no は行: は→ぱ (pa).</li>
<li><b>Combinações (yōon)</b>: kana da coluna "i" + ゃゅょ pequenos: き+ゃ = きゃ (kya), し+ょ = しょ (sho).</li>
<li><b>っ pequeno</b>: pausa de uma batida antes da consoante seguinte: きって (kitte, selo).</li>
<li><b>Vogais longas</b>: おかあさん (okaasan), せんせい (sensei, o い alonga o え), こうこう (koukou, o う alonga o お).</li>
</ul>`,
      vocab: [['がっこう','','escola','🏫'],['ぎゅうにゅう','','leite','🥛'],['しゃしん','','foto','📸'],['でんしゃ','','trem','🚃'],['きっぷ','','bilhete','🎫'],['りょこう','','viagem','🧳'],['びょういん','','hospital','🏥'],['ちょっと','','um pouco','🤏']],
      sentences: [['でんしゃ で がっこう に いく','ir à escola de trem'], ['しゃしん を とる','tirar foto'], ['ちょっと まって','espere um pouco']],
      tip: 'びょういん (hospital) × びよういん (salão de beleza): a diferença é só o ょ pequeno! Treine ouvindo os dois e repetindo.',
      mission: 'Diga em voz alta 10 palavras com っ ou vogal longa, batendo palmas em cada mora.'
    },
    {
      id: 'm0l6', title: 'Katakana 1: ア 〜 ノ', icon: 'ア',
      cando: ['Ler os primeiros 25 katakana'],
      kana: { set: 'katakana', groups: ['a'] },
      intro: `<p><b>Katakana</b> tem os mesmos sons do hiragana, mas é usado para <b>palavras estrangeiras</b> (コーヒー, café), nomes estrangeiros (ブラジル), onomatopeias e ênfase.</p>
<p>O traço <b>ー</b> alonga a vogal: ケーキ (kēki, bolo). Cuidado com os pares traiçoeiros: <b>シ/ツ</b> e <b>ソ/ン</b>.</p>`,
      sentences: [['コーヒー と ケーキ','café e bolo'], ['テニス が すき','gosto de tênis'], ['タクシー で いく','ir de táxi']],
      tip: 'Leia cardápios e embalagens: quase todo produto importado no Japão é escrito em katakana. É treino de leitura grátis no dia a dia.',
      mission: 'Escreva seu nome em katakana (ex.: Lara → ララ, João → ジョアン). Use a tabela da aba Kana.'
    },
    {
      id: 'm0l7', title: 'Katakana 2: ハ 〜 ン e sons estrangeiros', icon: 'ン',
      cando: ['Ler todo o katakana e palavras estrangeiras com ティ, ファ etc.'],
      kana: { set: 'katakana', groups: ['b'] },
      intro: `<p>Para sons que não existem em japonês, combinamos katakana com vogais pequenas: <b>ティ</b> (ti), <b>ファ</b> (fa), <b>ウェ</b> (we), <b>チェ</b> (che).</p>
<p>Português no Japão: パン (pão!), カステラ (pão de ló, de "Castela"), ボタン (botão), タバコ — vieram do português no século XVI.</p>`,
      vocab: [['パーティー','','festa','🎉'],['カフェ','','café (lugar)','☕'],['フォーク','','garfo','🍴'],['ブラジル','','Brasil','🇧🇷'],['パン','','pão','🍞'],['ボタン','','botão','🔘'],['アメリカ','','EUA','🇺🇸'],['スマホ','','smartphone','📱']],
      sentences: [['ブラジル の パン','pão do Brasil'], ['カフェ で コーヒー を のむ','tomar café na cafeteria'], ['パーティー に いく','ir à festa']],
      tip: 'Adivinhe o significado de katakana lendo em voz alta e "desjaponizando": アイスクリーム → aisukurīmu → ice cream.',
      mission: 'Encontre 5 palavras em katakana num site japonês (ex.: um cardápio do McDonald\'s Japão) e descubra o que são.'
    },
    {
      id: 'm0l8', title: 'O que são kanji (e os primeiros 12)', icon: '漢',
      cando: ['Entender on\'yomi e kun\'yomi', 'Reconhecer números e kanji básicos'],
      intro: `<p><b>Kanji</b> são ideogramas vindos da China. Cada um tem significado e normalmente duas famílias de leitura:</p>
<ul><li><b>Kun'yomi</b> (japonesa): usada quando o kanji está sozinho ou com hiragana. 山 = やま (montanha).</li>
<li><b>On'yomi</b> (chinesa): usada em compostos. 富士山 = ふじ<b>さん</b>.</li></ul>
<p>Kanji são formados por <b>radicais</b> (peças): 休 (descansar) = 人 pessoa + 木 árvore → pessoa encostada na árvore. Aprender os radicais transforma decoreba em lógica.</p>
<p><b>Meta:</b> ~100 kanji até o fim do A1, ~300 no A2, ~650 no B1, ~1000 no B2 e os 2.136 jōyō no C1.</p>`,
      vocab: [['一','いち','um','1️⃣'],['二','に','dois','2️⃣'],['三','さん','três','3️⃣'],['人','ひと','pessoa','🧍'],['山','やま','montanha','⛰️'],['川','かわ','rio','🏞️'],['日','ひ','sol / dia','☀️'],['月','つき','lua / mês','🌙'],['木','き','árvore','🌳'],['口','くち','boca','👄'],['目','め','olho','👁️'],['休む','やすむ','descansar','😴']],
      kanji: [['一','イチ','ひと(つ)','um'],['二','ニ','ふた(つ)','dois'],['三','サン','みっ(つ)','três'],['人','ジン・ニン','ひと','pessoa'],['山','サン','やま','montanha'],['川','セン','かわ','rio'],['日','ニチ・ジツ','ひ・か','sol, dia'],['月','ゲツ・ガツ','つき','lua, mês'],['木','モク・ボク','き','árvore'],['口','コウ','くち','boca'],['目','モク','め','olho'],['休','キュウ','やす(む)','descansar']],
      sentences: [['日本[にほん] の 山[やま]','as montanhas do Japão'], ['三人[さんにん]','três pessoas'], ['月[つき] と 日[ひ]','a lua e o sol']],
      tip: 'Não decore kanji isolados para sempre: aprenda-os dentro de palavras que você usa. O app mostra furigana (a leitura pequena por cima) — desligue em Perfil quando estiver seguro.',
      mission: 'Procure o kanji 山 ou 川 em nomes de cidades japonesas (山形, 川崎…) no mapa.'
    }
  ]
});
