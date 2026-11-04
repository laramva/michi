// Trilha de Kanji (JLPT N5 → N3): 360 kanji, cada um com leituras, significado e 2 palavras de exemplo.
// Formato: 'kanji|on|kun|significado|palavra:leitura:significado|palavra:leitura:significado'
window.EXTRA = window.EXTRA || [];
(function () {
  const TIPS = [
    'Decomponha o kanji em partes (radicais) e crie uma história com elas. Ex.: 休 = pessoa 亻 + árvore 木 → descansar encostado na árvore.',
    'Aprenda o kanji DENTRO de palavras. Saber 電車 (trem) é mais útil do que decorar todas as leituras de 電.',
    'Escreva cada kanji 3 vezes dizendo a palavra de exemplo em voz alta. A memória motora ajuda muito.',
    'Procure esses kanji em placas, embalagens e legendas hoje. Reconhecer no mundo real fixa mais do que qualquer lista.',
    'Revise na aba Revisar todos os dias: kanji esquecem rápido sem repetição espaçada.'
  ];
  function K(m, id, title, icon, rows) {
    const ks = rows.map(r => r.split('|'));
    const vocab = [], kanji = [];
    ks.forEach(p => {
      kanji.push([p[0], p[1], p[2], p[3]]);
      p.slice(4).forEach(w => { const [jp, rd, pt] = w.split(':'); vocab.push([jp, rd, pt, '🈶']); });
    });
    const sentences = vocab.slice(0, 6).map(v => [`${v[0]}[${v[1]}]`, v[2]]);
    window.EXTRA.push({ m, l: {
      id, title, icon, track: 'kanji', kanji, vocab, sentences: [],
      cando: [`Ler, escrever e entender: ${ks.map(p => p[0]).join(' ')}`, `Reconhecer ${vocab.length} palavras com esses kanji`],
      intro: `<p>Kanji desta aula: <span class="jp" style="font-size:22px">${ks.map(p => p[0]).join('　')}</span></p><p>Para cada um: leitura <b>on</b> (音, de origem chinesa, usada em compostos) e <b>kun</b> (訓, japonesa, usada sozinha ou com hiragana). Foque nas palavras de exemplo — é assim que você vai encontrá-los na vida real.</p>`,
      tip: TIPS[id.length % TIPS.length + (id.charCodeAt(id.length - 1) % 2)] || TIPS[0],
      mission: `Encontre pelo menos 3 destes kanji (${ks.slice(0, 5).map(p => p[0]).join(', ')}…) em sites japoneses, cardápios, mangás ou embalagens e anote a palavra em que apareceram.`,
      examples: sentences
    } });
  }
  // ---------------- N5 ----------------
  K('m1', 'kn5a', 'Kanji N5: números 1–10', '一', [
    '一|イチ・イツ|ひと(つ)|um|一人:ひとり:uma pessoa|一月:いちがつ:janeiro',
    '二|ニ|ふた(つ)|dois|二人:ふたり:duas pessoas|二月:にがつ:fevereiro',
    '三|サン|みっ(つ)|três|三日:みっか:dia 3|三月:さんがつ:março',
    '四|シ|よ・よん|quatro|四日:よっか:dia 4|四時:よじ:quatro horas',
    '五|ゴ|いつ(つ)|cinco|五日:いつか:dia 5|五分:ごふん:cinco minutos',
    '六|ロク|むっ(つ)|seis|六日:むいか:dia 6|六百:ろっぴゃく:seiscentos',
    '七|シチ|なな|sete|七日:なのか:dia 7|七時:しちじ:sete horas',
    '八|ハチ|やっ(つ)|oito|八日:ようか:dia 8|八百:はっぴゃく:oitocentos',
    '九|キュウ・ク|ここの(つ)|nove|九日:ここのか:dia 9|九時:くじ:nove horas',
    '十|ジュウ|とお|dez|十日:とおか:dia 10|十分:じゅっぷん:dez minutos'
  ]);
  K('m1', 'kn5b', 'Kanji N5: dinheiro e tempo', '円', [
    '百|ヒャク|—|cem|三百:さんびゃく:trezentos|百円:ひゃくえん:cem ienes',
    '千|セン|ち|mil|千円:せんえん:mil ienes|三千:さんぜん:três mil',
    '万|マン・バン|—|dez mil|一万円:いちまんえん:dez mil ienes|万一:まんいち:por acaso',
    '円|エン|まる(い)|iene; círculo|円高:えんだか:iene valorizado|百円:ひゃくえん:cem ienes',
    '年|ネン|とし|ano|今年:ことし:este ano|来年:らいねん:ano que vem',
    '時|ジ|とき|hora; tempo|時間:じかん:tempo|時計:とけい:relógio',
    '分|フン・ブン|わ(かる)|minuto; parte; entender|自分:じぶん:si mesmo|半分:はんぶん:metade',
    '半|ハン|なか(ば)|metade|三時半:さんじはん:três e meia|半年:はんとし:meio ano',
    '今|コン|いま|agora|今日:きょう:hoje|今週:こんしゅう:esta semana',
    '何|カ|なに・なん|o quê|何時:なんじ:que horas|何人:なんにん:quantas pessoas'
  ]);
  K('m1', 'kn5c', 'Kanji N5: dias da semana', '曜', [
    '日|ニチ・ジツ|ひ・か|sol; dia|日本:にほん:Japão|毎日:まいにち:todo dia',
    '月|ゲツ・ガツ|つき|lua; mês|月曜日:げつようび:segunda-feira|今月:こんげつ:este mês',
    '火|カ|ひ|fogo|火曜日:かようび:terça-feira|花火:はなび:fogos de artifício',
    '水|スイ|みず|água|水曜日:すいようび:quarta-feira|水道:すいどう:água encanada',
    '木|モク・ボク|き|árvore; madeira|木曜日:もくようび:quinta-feira|木村:きむら:Kimura (sobrenome)',
    '金|キン|かね|ouro; dinheiro|金曜日:きんようび:sexta-feira|お金:おかね:dinheiro',
    '土|ド|つち|terra; solo|土曜日:どようび:sábado|土地:とち:terreno',
    '曜|ヨウ|—|dia da semana|日曜日:にちようび:domingo|何曜日:なんようび:que dia da semana',
    '週|シュウ|—|semana|来週:らいしゅう:semana que vem|週末:しゅうまつ:fim de semana',
    '毎|マイ|—|cada; todo|毎朝:まいあさ:toda manhã|毎週:まいしゅう:toda semana'
  ]);
  K('m1', 'kn5d', 'Kanji N5: pessoas', '人', [
    '人|ジン・ニン|ひと|pessoa|日本人:にほんじん:japonês(a)|三人:さんにん:três pessoas',
    '子|シ|こ|criança|子供:こども:criança|女の子:おんなのこ:menina',
    '女|ジョ|おんな|mulher|女性:じょせい:mulher (formal)|彼女:かのじょ:ela; namorada',
    '男|ダン・ナン|おとこ|homem|男性:だんせい:homem (formal)|男の子:おとこのこ:menino',
    '父|フ|ちち|pai|お父さん:おとうさん:pai (de alguém)|父母:ふぼ:pai e mãe',
    '母|ボ|はは|mãe|お母さん:おかあさん:mãe (de alguém)|母国:ぼこく:país natal',
    '友|ユウ|とも|amigo|友達:ともだち:amigo(a)|友人:ゆうじん:amigo (formal)',
    '名|メイ|な|nome|名前:なまえ:nome|有名:ゆうめい:famoso',
    '先|セン|さき|antes; à frente|先生:せんせい:professor|先週:せんしゅう:semana passada',
    '生|セイ|い(きる)・う(まれる)|vida; nascer|学生:がくせい:estudante|生まれる:うまれる:nascer'
  ]);
  K('m1', 'kn5e', 'Kanji N5: posições e direções', '上', [
    '上|ジョウ|うえ・あ(がる)|em cima; subir|上手:じょうず:habilidoso|上着:うわぎ:casaco',
    '下|カ・ゲ|した・さ(がる)|embaixo; descer|地下鉄:ちかてつ:metrô|下手:へた:desajeitado',
    '中|チュウ|なか|dentro; meio|中国:ちゅうごく:China|中学校:ちゅうがっこう:ensino fundamental II',
    '外|ガイ|そと|fora|外国:がいこく:país estrangeiro|外国人:がいこくじん:estrangeiro',
    '右|ウ|みぎ|direita|右手:みぎて:mão direita|右側:みぎがわ:lado direito',
    '左|サ|ひだり|esquerda|左手:ひだりて:mão esquerda|左側:ひだりがわ:lado esquerdo',
    '前|ゼン|まえ|frente; antes|午前:ごぜん:manhã (a.m.)|名前:なまえ:nome',
    '後|ゴ|うし(ろ)・あと|atrás; depois|午後:ごご:tarde (p.m.)|最後:さいご:último',
    '東|トウ|ひがし|leste|東京:とうきょう:Tóquio|東口:ひがしぐち:saída leste',
    '西|セイ・サイ|にし|oeste|関西:かんさい:Kansai|西口:にしぐち:saída oeste'
  ]);
  K('m1', 'kn5f', 'Kanji N5: natureza e clima', '山', [
    '山|サン|やま|montanha|富士山:ふじさん:Monte Fuji|山道:やまみち:trilha',
    '川|セン|かわ|rio|川口:かわぐち:Kawaguchi|小川:おがわ:riacho',
    '田|デン|た|arrozal|田中:たなか:Tanaka (sobrenome)|田舎:いなか:interior; roça',
    '天|テン|あま|céu|天気:てんき:tempo (clima)|天国:てんごく:paraíso',
    '気|キ・ケ|—|espírito; energia|元気:げんき:saudável; animado|気分:きぶん:humor; sensação',
    '雨|ウ|あめ|chuva|大雨:おおあめ:chuva forte|雨季:うき:estação chuvosa',
    '花|カ|はな|flor|花見:はなみ:ver as cerejeiras|花火:はなび:fogos de artifício',
    '空|クウ|そら・あ(く)|céu; vazio|空港:くうこう:aeroporto|空気:くうき:ar',
    '南|ナン|みなみ|sul|南口:みなみぐち:saída sul|南米:なんべい:América do Sul',
    '北|ホク|きた|norte|北海道:ほっかいどう:Hokkaido|北口:きたぐち:saída norte'
  ]);
  K('m1', 'kn5g', 'Kanji N5: verbos do dia a dia', '行', [
    '見|ケン|み(る)|ver|見物:けんぶつ:passeio turístico|花見:はなみ:ver cerejeiras',
    '行|コウ・ギョウ|い(く)・おこな(う)|ir; realizar|銀行:ぎんこう:banco|旅行:りょこう:viagem',
    '来|ライ|く(る)|vir|来年:らいねん:ano que vem|来月:らいげつ:mês que vem',
    '出|シュツ|で(る)・だ(す)|sair; tirar|出口:でぐち:saída|出発:しゅっぱつ:partida',
    '入|ニュウ|はい(る)・い(れる)|entrar; colocar|入口:いりぐち:entrada|入学:にゅうがく:ingresso na escola',
    '食|ショク|た(べる)|comer|食事:しょくじ:refeição|食堂:しょくどう:refeitório',
    '飲|イン|の(む)|beber|飲み物:のみもの:bebida|飲食:いんしょく:comer e beber',
    '買|バイ|か(う)|comprar|買い物:かいもの:compras|売買:ばいばい:compra e venda',
    '休|キュウ|やす(む)|descansar|休み:やすみ:folga; férias|休日:きゅうじつ:feriado',
    '立|リツ|た(つ)|ficar de pé|国立:こくりつ:nacional (público)|立場:たちば:posição'
  ]);
  K('m1', 'kn5h', 'Kanji N5: escola e comunicação', '語', [
    '書|ショ|か(く)|escrever|辞書:じしょ:dicionário|図書館:としょかん:biblioteca',
    '読|ドク|よ(む)|ler|読書:どくしょ:leitura|読み方:よみかた:modo de ler',
    '話|ワ|はな(す)・はなし|falar; conversa|電話:でんわ:telefone|会話:かいわ:conversação',
    '語|ゴ|かた(る)|língua; palavra|日本語:にほんご:japonês|英語:えいご:inglês',
    '聞|ブン|き(く)|ouvir; perguntar|新聞:しんぶん:jornal|聞こえる:きこえる:ser ouvido',
    '言|ゲン・ゴン|い(う)|dizer|言葉:ことば:palavra|伝言:でんごん:recado',
    '学|ガク|まな(ぶ)|estudar|大学:だいがく:universidade|学校:がっこう:escola',
    '校|コウ|—|escola|高校:こうこう:ensino médio|校長:こうちょう:diretor',
    '本|ホン|もと|livro; origem|本屋:ほんや:livraria|日本:にほん:Japão',
    '会|カイ|あ(う)|encontrar; reunião|会社:かいしゃ:empresa|会議:かいぎ:reunião'
  ]);
  K('m1', 'kn5i', 'Kanji N5: adjetivos', '大', [
    '大|ダイ・タイ|おお(きい)|grande|大学:だいがく:universidade|大切:たいせつ:importante',
    '小|ショウ|ちい(さい)・こ|pequeno|小学校:しょうがっこう:escola primária|小説:しょうせつ:romance',
    '高|コウ|たか(い)|alto; caro|高校:こうこう:ensino médio|最高:さいこう:o melhor',
    '安|アン|やす(い)|barato; tranquilo|安心:あんしん:tranquilidade|不安:ふあん:ansiedade',
    '新|シン|あたら(しい)|novo|新聞:しんぶん:jornal|新幹線:しんかんせん:trem-bala',
    '古|コ|ふる(い)|velho|中古:ちゅうこ:usado (seminovo)|古本:ふるほん:livro usado',
    '長|チョウ|なが(い)|longo; chefe|社長:しゃちょう:presidente da empresa|長さ:ながさ:comprimento',
    '多|タ|おお(い)|muitos|多分:たぶん:provavelmente|多数:たすう:maioria',
    '少|ショウ|すく(ない)・すこ(し)|poucos; um pouco|少年:しょうねん:garoto|少々:しょうしょう:um momento',
    '白|ハク|しろ(い)|branco|白人:はくじん:pessoa branca|白黒:しろくろ:preto e branco'
  ]);
  K('m1', 'kn5j', 'Kanji N5: cidade e corpo', '駅', [
    '電|デン|—|eletricidade|電車:でんしゃ:trem|電気:でんき:luz; eletricidade',
    '車|シャ|くるま|carro|自転車:じてんしゃ:bicicleta|駐車場:ちゅうしゃじょう:estacionamento',
    '駅|エキ|—|estação|駅員:えきいん:funcionário da estação|東京駅:とうきょうえき:Estação de Tóquio',
    '道|ドウ|みち|caminho|道路:どうろ:estrada|柔道:じゅうどう:judô',
    '店|テン|みせ|loja|店員:てんいん:atendente|喫茶店:きっさてん:cafeteria',
    '社|シャ|やしろ|empresa; santuário|会社員:かいしゃいん:funcionário de empresa|神社:じんじゃ:santuário xintoísta',
    '国|コク|くに|país|外国:がいこく:exterior|国際:こくさい:internacional',
    '口|コウ|くち|boca; entrada|人口:じんこう:população|出口:でぐち:saída',
    '目|モク|め|olho|目的:もくてき:objetivo|一つ目:ひとつめ:o primeiro',
    '手|シュ|て|mão|手紙:てがみ:carta|歌手:かしゅ:cantor'
  ]);
  // ---------------- N4 ----------------
  K('m2', 'kn4a', 'Kanji N4: família', '家', [
    '兄|キョウ|あに|irmão mais velho|兄弟:きょうだい:irmãos|お兄さん:おにいさん:irmão mais velho (de alguém)',
    '姉|シ|あね|irmã mais velha|お姉さん:おねえさん:irmã mais velha (de alguém)|姉妹:しまい:irmãs',
    '弟|ダイ|おとうと|irmão mais novo|兄弟:きょうだい:irmãos|弟子:でし:discípulo',
    '妹|マイ|いもうと|irmã mais nova|姉妹:しまい:irmãs|妹さん:いもうとさん:irmã mais nova (de alguém)',
    '家|カ・ケ|いえ・や|casa; família|家族:かぞく:família|家賃:やちん:aluguel',
    '族|ゾク|—|tribo; família|家族:かぞく:família|民族:みんぞく:etnia',
    '親|シン|おや・した(しい)|pais; íntimo|両親:りょうしん:pais|親切:しんせつ:gentil',
    '主|シュ|ぬし・おも|principal; dono|主人:しゅじん:marido; dono|主婦:しゅふ:dona de casa',
    '自|ジ・シ|みずか(ら)|si mesmo|自分:じぶん:si mesmo|自由:じゆう:liberdade',
    '私|シ|わたし|eu; privado|私立:しりつ:particular (escola)|私用:しよう:uso pessoal'
  ]);
  K('m2', 'kn4b', 'Kanji N4: corpo e saúde', '体', [
    '体|タイ|からだ|corpo|体重:たいじゅう:peso corporal|体育:たいいく:educação física',
    '頭|トウ・ズ|あたま|cabeça|頭痛:ずつう:dor de cabeça|先頭:せんとう:a frente (da fila)',
    '顔|ガン|かお|rosto|笑顔:えがお:sorriso|洗顔:せんがん:lavar o rosto',
    '首|シュ|くび|pescoço|首都:しゅと:capital|手首:てくび:pulso',
    '心|シン|こころ|coração; mente|安心:あんしん:alívio|心配:しんぱい:preocupação',
    '病|ビョウ|やまい・や(む)|doença|病気:びょうき:doença|病院:びょういん:hospital',
    '医|イ|—|medicina|医者:いしゃ:médico|医学:いがく:medicina',
    '院|イン|—|instituição|入院:にゅういん:internação|大学院:だいがくいん:pós-graduação',
    '死|シ|し(ぬ)|morte|死亡:しぼう:falecimento|必死:ひっし:desesperadamente',
    '力|リョク・リキ|ちから|força|努力:どりょく:esforço|協力:きょうりょく:cooperação'
  ]);
  K('m2', 'kn4c', 'Kanji N4: partes do dia e estações', '春', [
    '朝|チョウ|あさ|manhã|朝ご飯:あさごはん:café da manhã|今朝:けさ:hoje de manhã',
    '昼|チュウ|ひる|meio-dia|昼ご飯:ひるごはん:almoço|昼休み:ひるやすみ:intervalo do almoço',
    '夕|セキ|ゆう|entardecer|夕方:ゆうがた:fim de tarde|夕食:ゆうしょく:jantar',
    '夜|ヤ|よる・よ|noite|今夜:こんや:esta noite|夜中:よなか:madrugada',
    '春|シュン|はる|primavera|春休み:はるやすみ:férias de primavera|青春:せいしゅん:juventude',
    '夏|カ|なつ|verão|夏休み:なつやすみ:férias de verão|真夏:まなつ:pleno verão',
    '秋|シュウ|あき|outono|秋分:しゅうぶん:equinócio de outono|秋晴れ:あきばれ:céu limpo de outono',
    '冬|トウ|ふゆ|inverno|冬休み:ふゆやすみ:férias de inverno|真冬:まふゆ:pleno inverno',
    '早|ソウ|はや(い)|cedo|早朝:そうちょう:madrugada; manhã cedo|早口:はやくち:falar rápido',
    '晩|バン|—|noite|今晩:こんばん:esta noite|晩ご飯:ばんごはん:jantar'
  ]);
  K('m2', 'kn4d', 'Kanji N4: cores e luz', '色', [
    '色|ショク・シキ|いろ|cor|景色:けしき:paisagem|黄色:きいろ:amarelo',
    '赤|セキ|あか(い)|vermelho|赤ちゃん:あかちゃん:bebê|赤字:あかじ:prejuízo',
    '青|セイ|あお(い)|azul; verde|青年:せいねん:jovem|青信号:あおしんごう:sinal verde',
    '黒|コク|くろ(い)|preto|黒板:こくばん:lousa|白黒:しろくろ:preto e branco',
    '茶|チャ・サ|—|chá; marrom|茶色:ちゃいろ:marrom|喫茶店:きっさてん:cafeteria',
    '銀|ギン|—|prata|銀行:ぎんこう:banco|銀色:ぎんいろ:prateado',
    '光|コウ|ひかり・ひか(る)|luz; brilhar|観光:かんこう:turismo|日光:にっこう:luz do sol',
    '明|メイ|あか(るい)|claro; brilhante|説明:せつめい:explicação|明日:あした:amanhã',
    '暗|アン|くら(い)|escuro|暗記:あんき:decorar|暗号:あんごう:código secreto',
    '音|オン|おと|som|音楽:おんがく:música|発音:はつおん:pronúncia'
  ]);
  K('m2', 'kn4e', 'Kanji N4: movimento', '歩', [
    '歩|ホ|ある(く)|andar|散歩:さんぽ:passeio|歩道:ほどう:calçada',
    '走|ソウ|はし(る)|correr|走者:そうしゃ:corredor|逃走:とうそう:fuga',
    '止|シ|と(まる)・と(める)|parar|中止:ちゅうし:cancelamento|禁止:きんし:proibição',
    '動|ドウ|うご(く)|mover|運動:うんどう:exercício|自動:じどう:automático',
    '起|キ|お(きる)|acordar; levantar|起床:きしょう:levantar-se|起こる:おこる:acontecer',
    '乗|ジョウ|の(る)|embarcar|乗車:じょうしゃ:embarque|乗り換え:のりかえ:baldeação',
    '帰|キ|かえ(る)|voltar|帰国:きこく:voltar ao país|日帰り:ひがえり:bate-volta',
    '送|ソウ|おく(る)|enviar|送料:そうりょう:frete|放送:ほうそう:transmissão',
    '運|ウン|はこ(ぶ)|transportar; sorte|運転:うんてん:dirigir|運命:うんめい:destino',
    '急|キュウ|いそ(ぐ)|pressa; urgente|急行:きゅうこう:expresso|救急車:きゅうきゅうしゃ:ambulância'
  ]);
  K('m2', 'kn4f', 'Kanji N4: casa e lugares', '屋', [
    '屋|オク|や|loja; telhado|部屋:へや:quarto|本屋:ほんや:livraria',
    '室|シツ|むろ|sala|教室:きょうしつ:sala de aula|会議室:かいぎしつ:sala de reunião',
    '部|ブ|—|parte; departamento|全部:ぜんぶ:tudo|部長:ぶちょう:gerente',
    '門|モン|かど|portão|専門:せんもん:especialidade|校門:こうもん:portão da escola',
    '住|ジュウ|す(む)|morar|住所:じゅうしょ:endereço|住民:じゅうみん:morador',
    '所|ショ|ところ|lugar|台所:だいどころ:cozinha|近所:きんじょ:vizinhança',
    '地|チ・ジ|—|terra; solo|地図:ちず:mapa|地震:じしん:terremoto',
    '場|ジョウ|ば|local|場所:ばしょ:lugar|工場:こうじょう:fábrica',
    '堂|ドウ|—|salão|食堂:しょくどう:refeitório|講堂:こうどう:auditório',
    '館|カン|—|edifício público|図書館:としょかん:biblioteca|映画館:えいがかん:cinema'
  ]);
  K('m2', 'kn4g', 'Kanji N4: estudo', '勉', [
    '勉|ベン|—|esforço|勉強:べんきょう:estudo|勤勉:きんべん:dedicado',
    '強|キョウ|つよ(い)|forte|強い:つよい:forte|強調:きょうちょう:ênfase',
    '教|キョウ|おし(える)|ensinar|教室:きょうしつ:sala de aula|教育:きょういく:educação',
    '習|シュウ|なら(う)|aprender|練習:れんしゅう:treino|習慣:しゅうかん:hábito',
    '問|モン|と(う)|pergunta|質問:しつもん:pergunta|問題:もんだい:problema; questão',
    '題|ダイ|—|tema; título|宿題:しゅくだい:lição de casa|話題:わだい:assunto',
    '答|トウ|こた(える)|resposta|答え:こたえ:resposta|回答:かいとう:resposta (formal)',
    '研|ケン|と(ぐ)|polir; pesquisar|研究:けんきゅう:pesquisa|研修:けんしゅう:treinamento',
    '究|キュウ|きわ(める)|investigar|研究者:けんきゅうしゃ:pesquisador|追究:ついきゅう:investigação',
    '試|シ|ため(す)|testar|試験:しけん:exame|試合:しあい:partida (jogo)'
  ]);
  K('m2', 'kn4h', 'Kanji N4: trabalho', '仕', [
    '仕|シ|つか(える)|servir|仕事:しごと:trabalho|仕方:しかた:jeito; maneira',
    '事|ジ|こと|coisa; assunto|大事:だいじ:importante|食事:しょくじ:refeição',
    '働|ドウ|はたら(く)|trabalhar|労働:ろうどう:trabalho (labor)|働き方:はたらきかた:modo de trabalhar',
    '員|イン|—|membro|店員:てんいん:atendente|社員:しゃいん:funcionário',
    '業|ギョウ|わざ|negócio; indústria|授業:じゅぎょう:aula|残業:ざんぎょう:hora extra',
    '産|サン|う(む)|produzir; dar à luz|お土産:おみやげ:lembrancinha|産業:さんぎょう:indústria',
    '工|コウ|—|artesanato; construção|工場:こうじょう:fábrica|工事:こうじ:obra',
    '作|サク|つく(る)|fazer|作品:さくひん:obra|作文:さくぶん:redação',
    '用|ヨウ|もち(いる)|uso|用事:ようじ:compromisso|利用:りよう:utilização',
    '使|シ|つか(う)|usar|大使館:たいしかん:embaixada|使用:しよう:uso'
  ]);
  K('m2', 'kn4i', 'Kanji N4: comida', '料', [
    '料|リョウ|—|taxa; ingrediente|料理:りょうり:culinária|料金:りょうきん:tarifa',
    '理|リ|—|razão; lógica|理由:りゆう:motivo|無理:むり:impossível',
    '肉|ニク|—|carne|牛肉:ぎゅうにく:carne bovina|鶏肉:とりにく:frango',
    '魚|ギョ|さかな・うお|peixe|金魚:きんぎょ:peixe dourado|魚屋:さかなや:peixaria',
    '米|ベイ・マイ|こめ|arroz; América|米国:べいこく:EUA|新米:しんまい:arroz novo; novato',
    '飯|ハン|めし|arroz cozido; refeição|ご飯:ごはん:arroz; refeição|夕飯:ゆうはん:jantar',
    '野|ヤ|の|campo|野菜:やさい:verduras|野球:やきゅう:beisebol',
    '味|ミ|あじ|sabor|意味:いみ:significado|趣味:しゅみ:hobby',
    '牛|ギュウ|うし|vaca; boi|牛乳:ぎゅうにゅう:leite|牛丼:ぎゅうどん:tigela de carne',
    '鳥|チョウ|とり|pássaro|焼き鳥:やきとり:espetinho de frango|白鳥:はくちょう:cisne'
  ]);
  K('m2', 'kn4j', 'Kanji N4: cidade e viagem', '町', [
    '町|チョウ|まち|cidade; bairro|町長:ちょうちょう:prefeito (de vila)|下町:したまち:bairro antigo',
    '村|ソン|むら|vila|村長:そんちょう:chefe da vila|農村:のうそん:zona rural',
    '区|ク|—|distrito|区役所:くやくしょ:prefeitura do distrito|地区:ちく:região',
    '都|ト・ツ|みやこ|capital; metrópole|京都:きょうと:Kyoto|都合:つごう:conveniência',
    '京|キョウ|—|capital|東京:とうきょう:Tóquio|上京:じょうきょう:ir para Tóquio',
    '県|ケン|—|província|県庁:けんちょう:governo da província|千葉県:ちばけん:Chiba',
    '市|シ|いち|cidade; mercado|市役所:しやくしょ:prefeitura|市場:いちば:mercado',
    '鉄|テツ|—|ferro|地下鉄:ちかてつ:metrô|鉄道:てつどう:ferrovia',
    '旅|リョ|たび|viagem|旅行:りょこう:viagem|旅館:りょかん:pousada japonesa',
    '館|カン|—|edifício|旅館:りょかん:pousada|美術館:びじゅつかん:museu de arte'
  ]);
  K('m2', 'kn4k', 'Kanji N4: comunicação e mídia', '写', [
    '写|シャ|うつ(す)|copiar; fotografar|写真:しゃしん:foto|写生:しゃせい:desenho do natural',
    '真|シン|ま|verdade; exato|真ん中:まんなか:bem no meio|真面目:まじめ:sério; dedicado',
    '映|エイ|うつ(る)|refletir; projetar|映画:えいが:filme|映像:えいぞう:imagem; vídeo',
    '画|ガ・カク|—|imagem; traço|漫画:まんが:mangá|計画:けいかく:plano',
    '知|チ|し(る)|saber|知識:ちしき:conhecimento|知人:ちじん:conhecido',
    '思|シ|おも(う)|pensar|思い出:おもいで:lembrança|意思:いし:intenção',
    '考|コウ|かんが(える)|pensar; refletir|考え:かんがえ:ideia|参考:さんこう:referência',
    '意|イ|—|intenção; sentido|意見:いけん:opinião|注意:ちゅうい:atenção',
    '声|セイ|こえ|voz|声優:せいゆう:dublador|大声:おおごえ:voz alta',
    '歌|カ|うた|canção|歌手:かしゅ:cantor|歌舞伎:かぶき:kabuki'
  ]);
  K('m2', 'kn4l', 'Kanji N4: compras e números', '売', [
    '売|バイ|う(る)|vender|売店:ばいてん:quiosque|売り場:うりば:seção (loja)',
    '貸|タイ|か(す)|emprestar|賃貸:ちんたい:aluguel|貸し出し:かしだし:empréstimo',
    '借|シャク|か(りる)|pegar emprestado|借金:しゃっきん:dívida|借家:しゃくや:casa alugada',
    '物|ブツ・モツ|もの|coisa|荷物:にもつ:bagagem|動物:どうぶつ:animal',
    '品|ヒン|しな|artigo; produto|商品:しょうひん:mercadoria|食品:しょくひん:alimento',
    '代|ダイ|か(わる)|substituir; geração; taxa|時代:じだい:época|電気代:でんきだい:conta de luz',
    '計|ケイ|はか(る)|medir; calcular|時計:とけい:relógio|合計:ごうけい:total',
    '番|バン|—|número; vez|番号:ばんごう:número|交番:こうばん:posto policial',
    '号|ゴウ|—|número; sinal|信号:しんごう:semáforo|記号:きごう:símbolo',
    '回|カイ|まわ(る)|vez; girar|今回:こんかい:desta vez|回答:かいとう:resposta'
  ]);
  K('m2', 'kn4m', 'Kanji N4: adjetivos 2', '広', [
    '広|コウ|ひろ(い)|amplo|広告:こうこく:propaganda|広場:ひろば:praça',
    '近|キン|ちか(い)|perto|近所:きんじょ:vizinhança|最近:さいきん:ultimamente',
    '遠|エン|とお(い)|longe|遠足:えんそく:excursão|遠慮:えんりょ:cerimônia; reserva',
    '重|ジュウ|おも(い)|pesado|体重:たいじゅう:peso|重要:じゅうよう:importante',
    '軽|ケイ|かる(い)|leve|軽食:けいしょく:lanche|手軽:てがる:fácil; prático',
    '弱|ジャク|よわ(い)|fraco|弱点:じゃくてん:ponto fraco|弱気:よわき:pessimista',
    '低|テイ|ひく(い)|baixo|最低:さいてい:o pior; mínimo|低温:ていおん:baixa temperatura',
    '短|タン|みじか(い)|curto|短所:たんしょ:ponto fraco|短期:たんき:curto prazo',
    '太|タイ|ふと(い)|grosso; gordo|太陽:たいよう:sol|太る:ふとる:engordar',
    '暑|ショ|あつ(い)|quente (clima)|暑さ:あつさ:calor|残暑:ざんしょ:calor do fim do verão'
  ]);
  K('m2', 'kn4n', 'Kanji N4: natureza 2', '海', [
    '風|フウ|かぜ|vento|台風:たいふう:tufão|風呂:ふろ:banho (ofurô)',
    '雪|セツ|ゆき|neve|大雪:おおゆき:nevasca|雪だるま:ゆきだるま:boneco de neve',
    '海|カイ|うみ|mar|海外:かいがい:exterior|海岸:かいがん:litoral',
    '池|チ|いけ|lagoa|電池:でんち:pilha|池袋:いけぶくろ:Ikebukuro',
    '石|セキ|いし|pedra|石油:せきゆ:petróleo|宝石:ほうせき:joia',
    '林|リン|はやし|bosque|林業:りんぎょう:silvicultura|小林:こばやし:Kobayashi',
    '森|シン|もり|floresta|森林:しんりん:floresta|青森:あおもり:Aomori',
    '晴|セイ|は(れる)|céu limpo|晴れ:はれ:tempo bom|快晴:かいせい:céu totalmente limpo',
    '寒|カン|さむ(い)|frio (clima)|寒さ:さむさ:frio|寒気:さむけ:calafrio',
    '洋|ヨウ|—|oceano; ocidental|洋服:ようふく:roupa ocidental|太平洋:たいへいよう:Oceano Pacífico'
  ]);
  K('m2', 'kn4o', 'Kanji N4: qualidades e mundo', '世', [
    '楽|ガク・ラク|たの(しい)|divertido; música|音楽:おんがく:música|気楽:きらく:despreocupado',
    '悪|アク|わる(い)|mau|最悪:さいあく:o pior|悪口:わるぐち:fofoca maldosa',
    '好|コウ|す(き)|gostar|好物:こうぶつ:comida favorita|好み:このみ:preferência',
    '正|セイ・ショウ|ただ(しい)|correto|正月:しょうがつ:Ano-Novo|正直:しょうじき:honesto',
    '良|リョウ|よ(い)|bom|不良:ふりょう:delinquente; defeituoso|良心:りょうしん:consciência',
    '特|トク|—|especial|特別:とくべつ:especial|特急:とっきゅう:trem expresso limitado',
    '別|ベツ|わか(れる)|separar; outro|別々:べつべつ:separado|特別:とくべつ:especial',
    '同|ドウ|おな(じ)|mesmo; igual|同じ:おなじ:igual|同僚:どうりょう:colega',
    '世|セ・セイ|よ|mundo; geração|世界:せかい:mundo|世話:せわ:cuidado',
    '界|カイ|—|mundo; limite|世界:せかい:mundo|業界:ぎょうかい:setor (indústria)'
  ]);
  K('m2', 'kn4p', 'Kanji N4: início e fim', '始', [
    '発|ハツ・ホツ|—|partir; emitir|出発:しゅっぱつ:partida|発表:はっぴょう:apresentação',
    '着|チャク|き(る)・つ(く)|chegar; vestir|到着:とうちゃく:chegada|着物:きもの:quimono',
    '開|カイ|あ(く)・ひら(く)|abrir|開始:かいし:início|開店:かいてん:abertura da loja',
    '閉|ヘイ|し(まる)・と(じる)|fechar|閉店:へいてん:fechamento da loja|開閉:かいへい:abrir e fechar',
    '去|キョ|さ(る)|ir embora; passado|去年:きょねん:ano passado|過去:かこ:passado',
    '転|テン|ころ(ぶ)|rolar; virar|運転:うんてん:dirigir|自転車:じてんしゃ:bicicleta',
    '通|ツウ|とお(る)・かよ(う)|passar; frequentar|交通:こうつう:trânsito|普通:ふつう:normal',
    '終|シュウ|お(わる)|terminar|終電:しゅうでん:último trem|最終:さいしゅう:final',
    '始|シ|はじ(める)|começar|開始:かいし:início|始発:しはつ:primeiro trem',
    '待|タイ|ま(つ)|esperar|招待:しょうたい:convite|期待:きたい:expectativa'
  ]);
  // ---------------- N3 ----------------
  K('m3', 'kn3a', 'Kanji N3: emoções', '感', [
    '感|カン|—|sentimento|感謝:かんしゃ:gratidão|感動:かんどう:emoção',
    '情|ジョウ|なさ(け)|emoção; compaixão|感情:かんじょう:sentimento|情報:じょうほう:informação',
    '喜|キ|よろこ(ぶ)|alegria|喜び:よろこび:alegria|歓喜:かんき:júbilo',
    '悲|ヒ|かな(しい)|tristeza|悲しみ:かなしみ:tristeza|悲劇:ひげき:tragédia',
    '怒|ド|おこ(る)・いか(る)|raiva|怒り:いかり:raiva|激怒:げきど:fúria',
    '笑|ショウ|わら(う)・え(む)|rir|笑顔:えがお:sorriso|苦笑:くしょう:sorriso amarelo',
    '泣|キュウ|な(く)|chorar|泣き声:なきごえ:choro|号泣:ごうきゅう:choro copioso',
    '驚|キョウ|おどろ(く)|surpresa|驚き:おどろき:surpresa|驚異:きょうい:maravilha',
    '恐|キョウ|おそ(れる)・こわ(い)|medo|恐怖:きょうふ:pavor|恐竜:きょうりゅう:dinossauro',
    '愛|アイ|—|amor|愛情:あいじょう:afeto|恋愛:れんあい:romance'
  ]);
  K('m3', 'kn3b', 'Kanji N3: política e sociedade', '政', [
    '政|セイ|まつりごと|governo; política|政府:せいふ:governo|政治:せいじ:política',
    '治|ジ・チ|おさ(める)・なお(る)|governar; curar|政治:せいじ:política|治療:ちりょう:tratamento',
    '経|ケイ|へ(る)|passar por; administrar|経済:けいざい:economia|経験:けいけん:experiência',
    '済|サイ|す(む)|terminar; liquidar|経済:けいざい:economia|返済:へんさい:pagamento de dívida',
    '法|ホウ|—|lei; método|方法:ほうほう:método|法律:ほうりつ:lei',
    '選|セン|えら(ぶ)|escolher|選挙:せんきょ:eleição|選手:せんしゅ:atleta',
    '議|ギ|—|debate|会議:かいぎ:reunião|議員:ぎいん:parlamentar',
    '民|ミン|たみ|povo|国民:こくみん:cidadãos|市民:しみん:cidadão',
    '党|トウ|—|partido|政党:せいとう:partido político|与党:よとう:partido do governo',
    '権|ケン|—|direito; poder|人権:じんけん:direitos humanos|権利:けんり:direito'
  ]);
  K('m3', 'kn3c', 'Kanji N3: escritório', '職', [
    '職|ショク|—|emprego; ofício|就職:しゅうしょく:conseguir emprego|職場:しょくば:local de trabalho',
    '給|キュウ|—|salário; fornecer|給料:きゅうりょう:salário|時給:じきゅう:salário por hora',
    '営|エイ|いとな(む)|administrar|営業:えいぎょう:comercial; vendas|経営:けいえい:gestão',
    '管|カン|くだ|tubo; administrar|管理:かんり:gestão|血管:けっかん:vaso sanguíneo',
    '担|タン|かつ(ぐ)|carregar; encarregar-se|担当:たんとう:responsável|負担:ふたん:ônus',
    '当|トウ|あ(たる)|acertar; apropriado|本当:ほんとう:verdade|弁当:べんとう:marmita',
    '務|ム|つと(める)|tarefa; dever|事務所:じむしょ:escritório|義務:ぎむ:obrigação',
    '参|サン|まい(る)|participar; ir (hum.)|参加:さんか:participação|参考:さんこう:referência',
    '加|カ|くわ(える)|adicionar|追加:ついか:adição|増加:ぞうか:aumento',
    '費|ヒ|つい(やす)|despesa|交通費:こうつうひ:despesa de transporte|費用:ひよう:custo'
  ]);
  K('m3', 'kn3d', 'Kanji N3: saúde', '薬', [
    '薬|ヤク|くすり|remédio|薬局:やっきょく:farmácia|目薬:めぐすり:colírio',
    '健|ケン|すこ(やか)|saudável|健康:けんこう:saúde|保健:ほけん:saúde pública',
    '康|コウ|—|paz; saúde|健康:けんこう:saúde|健康診断:けんこうしんだん:check-up',
    '症|ショウ|—|sintoma; doença|症状:しょうじょう:sintoma|花粉症:かふんしょう:rinite de pólen',
    '状|ジョウ|—|estado; carta|状態:じょうたい:condição|招待状:しょうたいじょう:convite (carta)',
    '痛|ツウ|いた(い)|dor|頭痛:ずつう:dor de cabeça|苦痛:くつう:sofrimento',
    '血|ケツ|ち|sangue|血液:けつえき:sangue|出血:しゅっけつ:sangramento',
    '骨|コツ|ほね|osso|骨折:こっせつ:fratura|背骨:せぼね:coluna',
    '熱|ネツ|あつ(い)|calor; febre|熱心:ねっしん:dedicado|発熱:はつねつ:febre',
    '保|ホ|たも(つ)|manter; proteger|保険:ほけん:seguro|保存:ほぞん:salvar; conservar'
  ]);
  K('m3', 'kn3e', 'Kanji N3: notícias e mídia', '報', [
    '報|ホウ|むく(いる)|notícia; recompensa|情報:じょうほう:informação|天気予報:てんきよほう:previsão do tempo',
    '記|キ|しる(す)|registrar|記事:きじ:artigo|日記:にっき:diário',
    '届|—|とど(く)・とど(ける)|entregar; notificar|届け出:とどけで:notificação oficial|欠席届:けっせきとどけ:aviso de falta',
    '放|ホウ|はな(す)|soltar; transmitir|放送:ほうそう:transmissão|解放:かいほう:libertação',
    '雑|ザツ|—|misto|雑誌:ざっし:revista|複雑:ふくざつ:complicado',
    '誌|シ|—|revista; registro|雑誌:ざっし:revista|週刊誌:しゅうかんし:revista semanal',
    '信|シン|—|confiança; mensagem|信号:しんごう:semáforo|自信:じしん:autoconfiança',
    '伝|デン|つた(える)|transmitir|伝統:でんとう:tradição|手伝う:てつだう:ajudar',
    '表|ヒョウ|おもて・あらわ(す)|tabela; expressar|発表:はっぴょう:anúncio|表現:ひょうげん:expressão',
    '示|ジ・シ|しめ(す)|mostrar|表示:ひょうじ:exibição|指示:しじ:instrução'
  ]);
  K('m3', 'kn3f', 'Kanji N3: meio ambiente e desastres', '災', [
    '環|カン|—|anel; ao redor|環境:かんきょう:meio ambiente|循環:じゅんかん:circulação',
    '境|キョウ|さかい|fronteira|環境:かんきょう:meio ambiente|国境:こっきょう:fronteira',
    '然|ゼン・ネン|—|natural; assim|自然:しぜん:natureza|全然:ぜんぜん:nem um pouco',
    '植|ショク|う(える)|plantar|植物:しょくぶつ:planta|植民地:しょくみんち:colônia',
    '葉|ヨウ|は|folha|言葉:ことば:palavra|紅葉:こうよう:folhas de outono',
    '島|トウ|しま|ilha|半島:はんとう:península|広島:ひろしま:Hiroshima',
    '岸|ガン|きし|margem; costa|海岸:かいがん:litoral|川岸:かわぎし:margem do rio',
    '震|シン|ふる(える)|tremer|地震:じしん:terremoto|震度:しんど:intensidade sísmica',
    '災|サイ|わざわ(い)|desastre|災害:さいがい:desastre|火災:かさい:incêndio',
    '害|ガイ|—|dano|被害:ひがい:dano; prejuízo|公害:こうがい:poluição'
  ]);
  K('m3', 'kn3g', 'Kanji N3: ideias abstratas', '価', [
    '価|カ|あたい|preço; valor|価格:かかく:preço|物価:ぶっか:custo de vida',
    '値|チ|ね・あたい|valor; preço|値段:ねだん:preço|価値:かち:valor',
    '性|セイ・ショウ|—|natureza; sexo|性格:せいかく:personalidade|女性:じょせい:mulher',
    '的|テキ|まと|alvo; -ico|目的:もくてき:objetivo|具体的:ぐたいてき:concreto',
    '化|カ・ケ|ば(ける)|transformar|文化:ぶんか:cultura|変化:へんか:mudança',
    '果|カ|は(たす)|fruto; resultado|結果:けっか:resultado|果物:くだもの:fruta',
    '結|ケツ|むす(ぶ)|amarrar; concluir|結婚:けっこん:casamento|結論:けつろん:conclusão',
    '実|ジツ|み|realidade; fruto|実は:じつは:na verdade|実力:じつりょく:capacidade real',
    '現|ゲン|あらわ(れる)|aparecer; atual|現在:げんざい:atualmente|現金:げんきん:dinheiro vivo',
    '在|ザイ|あ(る)|existir|存在:そんざい:existência|滞在:たいざい:estadia'
  ]);
  K('m3', 'kn3h', 'Kanji N3: decisões e resultados', '決', [
    '決|ケツ|き(める)|decidir|決定:けってい:decisão|解決:かいけつ:solução',
    '定|テイ|さだ(める)|fixar; determinar|予定:よてい:plano|安定:あんてい:estabilidade',
    '変|ヘン|か(わる)|mudar; estranho|大変:たいへん:difícil; muito|変化:へんか:mudança',
    '続|ゾク|つづ(く)|continuar|連続:れんぞく:sequência|手続き:てつづき:procedimento',
    '失|シツ|うしな(う)|perder|失敗:しっぱい:fracasso|失礼:しつれい:falta de educação',
    '敗|ハイ|やぶ(れる)|derrota|失敗:しっぱい:fracasso|勝敗:しょうはい:vitória ou derrota',
    '成|セイ|な(る)|tornar-se; realizar|成功:せいこう:sucesso|成長:せいちょう:crescimento',
    '功|コウ|—|mérito|成功:せいこう:sucesso|功績:こうせき:realização',
    '守|シュ|まも(る)|proteger|留守:るす:ausência de casa|保守:ほしゅ:conservador',
    '認|ニン|みと(める)|reconhecer|確認:かくにん:confirmação|認識:にんしき:percepção'
  ]);
  K('m3', 'kn3i', 'Kanji N3: tarefas da casa', '洗', [
    '窓|ソウ|まど|janela|窓口:まどぐち:guichê|同窓会:どうそうかい:reunião de ex-alunos',
    '庭|テイ|にわ|jardim|家庭:かてい:lar|校庭:こうてい:pátio da escola',
    '掃|ソウ|は(く)|varrer|掃除:そうじ:limpeza|掃除機:そうじき:aspirador',
    '除|ジョ|のぞ(く)|remover|削除:さくじょ:exclusão|掃除:そうじ:limpeza',
    '洗|セン|あら(う)|lavar|洗濯:せんたく:lavar roupa|お手洗い:おてあらい:banheiro',
    '濯|タク|すす(ぐ)|enxaguar|洗濯機:せんたくき:máquina de lavar|洗濯物:せんたくもの:roupa para lavar',
    '片|ヘン|かた|um lado; fragmento|片付け:かたづけ:arrumação|片道:かたみち:só ida',
    '付|フ|つ(く)・つ(ける)|anexar|受付:うけつけ:recepção|付近:ふきん:arredores',
    '鍵|ケン|かぎ|chave|鍵穴:かぎあな:fechadura|合鍵:あいかぎ:cópia da chave',
    '箱|—|はこ|caixa|ゴミ箱:ごみばこ:lixeira|本箱:ほんばこ:estante de livros'
  ]);
  K('m3', 'kn3j', 'Kanji N3: trânsito', '駐', [
    '降|コウ|お(りる)・ふ(る)|descer; cair (chuva)|以降:いこう:a partir de|降車:こうしゃ:desembarque',
    '駐|チュウ|—|estacionar|駐車場:ちゅうしゃじょう:estacionamento|駐在:ちゅうざい:residir a serviço',
    '停|テイ|—|parar|バス停:ばすてい:ponto de ônibus|停電:ていでん:queda de energia',
    '港|コウ|みなと|porto|空港:くうこう:aeroporto|港町:みなとまち:cidade portuária',
    '橋|キョウ|はし|ponte|鉄橋:てっきょう:ponte ferroviária|日本橋:にほんばし:Nihonbashi',
    '路|ロ|じ|estrada|道路:どうろ:estrada|線路:せんろ:trilho',
    '線|セン|—|linha|新幹線:しんかんせん:trem-bala|直線:ちょくせん:linha reta',
    '横|オウ|よこ|lado; horizontal|横断歩道:おうだんほどう:faixa de pedestres|横浜:よこはま:Yokohama',
    '断|ダン|ことわ(る)|cortar; recusar|横断:おうだん:atravessar|判断:はんだん:julgamento',
    '側|ソク|がわ|lado|右側:みぎがわ:lado direito|両側:りょうがわ:ambos os lados'
  ]);
})();
