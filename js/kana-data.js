// Tabelas de kana com mnemônicos em português e palavra-exemplo (com emoji).
// Formato: [kana, romaji, mnemônico, palavra (kana), significado, emoji]
window.KANA = {
  hiragana: {
    vogais: [
      ['あ','a','Uma pessoa com um "A" de antena na cabeça, gritando "Aaah!"','あめ','chuva','☔'],
      ['い','i','Duas linhas como dois "i" minúsculos lado a lado','いぬ','cachorro','🐕'],
      ['う','u','Uma orelha ouvindo "Uuu" do fantasma','うみ','mar','🌊'],
      ['え','e','Uma pessoa andando de lado: "Ê, espera aí!"','えき','estação','🚉'],
      ['お','o','Um "O" com uma bolinha fugindo: "Oh! caiu!"','おにぎり','bolinho de arroz','🍙']
    ],
    k: [
      ['か','ka','Uma faca (KAtana) cortando o ar','かさ','guarda-chuva','☂️'],
      ['き','ki','Uma chave (KIi = key) com dentes','きつね','raposa','🦊'],
      ['く','ku','Bico de pássaro: "KUkuruku"','くるま','carro','🚗'],
      ['け','ke','Um barril de KEtchup ao lado de uma placa','けいたい','celular','📱'],
      ['こ','ko','Duas minhocas deitadas: COminhocas','こども','criança','🧒']
    ],
    s: [
      ['さ','sa','SAmurai segurando a espada torta','さかな','peixe','🐟'],
      ['し','shi','Um anzol: "SHIi, silêncio, estou pescando"','しお','sal','🧂'],
      ['す','su','Um laço de SUéter enrolado','すし','sushi','🍣'],
      ['せ','se','Uma boca aberta dizendo "SEi lá!"','せんせい','professor','👩‍🏫'],
      ['そ','so','Um zigue-zague de SOrvete escorrendo','そら','céu','🌤️']
    ],
    t: [
      ['た','ta','Letras "t" e "a" juntas: TA','たまご','ovo','🥚'],
      ['ち','chi','Um número 5 de CHIclete','ちず','mapa','🗺️'],
      ['つ','tsu','Uma onda de TSUnami','つき','lua','🌙'],
      ['て','te','Um braço estendido pedindo TÊnis','てがみ','carta','✉️'],
      ['と','to','Um prego cravado no dedão (TOe)','とり','pássaro','🐦']
    ],
    n: [
      ['な','na','Uma freira (NAn) rezando com uma cruz','なつ','verão','☀️'],
      ['に','ni','Um joelho (kNee) com duas linhas','にく','carne','🥩'],
      ['ぬ','nu','Macarrão (NUdles) com hashi','ぬいぐるみ','pelúcia','🧸'],
      ['ね','ne','Um gato (NEko) com o rabo enrolado','ねこ','gato','🐈'],
      ['の','no','Placa de proibido: "NO!"','のり','alga nori','🍙']
    ],
    h: [
      ['は','ha','Uma pessoa rindo: "HA HA!"','はな','flor','🌸'],
      ['ひ','hi','Um sorriso largo: "HIhi!"','ひこうき','avião','✈️'],
      ['ふ','fu','O monte FUji com nuvens ao redor','ふね','barco','⛵'],
      ['へ','he','Um telhado/monte: "HEy, suba!"','へび','cobra','🐍'],
      ['ほ','ho','Um boneco de neve com cachecol: "HO HO HO"','ほし','estrela','⭐']
    ],
    m: [
      ['ま','ma','Uma MÃe com laço de fita','まど','janela','🪟'],
      ['み','mi','O número 21 = "MI-nha idade"','みみ','orelha','👂'],
      ['む','mu','Uma vaca dizendo "MUuu" com o rabo','むし','inseto','🐛'],
      ['め','me','Um olho (ME) com lágrima','め','olho','👁️'],
      ['も','mo','Anzol com mais (MOre) minhocas','もも','pêssego','🍑']
    ],
    y: [
      ['や','ya','Um iaque (YAk) com chifres','やま','montanha','⛰️'],
      ['ゆ','yu','Um peixe nadando no YUki (neve)','ゆき','neve','❄️'],
      ['よ','yo','Um ioiô (YOyo) pendurado','よる','noite','🌃']
    ],
    r: [
      ['ら','ra','Um RApper com boné','らいおん','leão','🦁'],
      ['り','ri','Dois rios (RIo) correndo','りんご','maçã','🍎'],
      ['る','ru','Um laço que dá uma volta: RUa sem saída','くるま','carro','🚗'],
      ['れ','re','Uma pessoa ajoelhada fazendo REverência','れいぞうこ','geladeira','🧊'],
      ['ろ','ro','O número 3 sem laço: ROda','ろうそく','vela','🕯️']
    ],
    w: [
      ['わ','wa','Uma pessoa dizendo "WAu!" com a mão levantada','わに','jacaré','🐊'],
      ['を','wo','Alguém engolindo (WOah) um bumerangue; partícula de objeto','を','(partícula)','🎯'],
      ['ん','n','Um "n" minúsculo de cursiva','ほん','livro','📕']
    ],
    dakuten: [
      ['が','ga'],['ぎ','gi'],['ぐ','gu'],['げ','ge'],['ご','go'],
      ['ざ','za'],['じ','ji'],['ず','zu'],['ぜ','ze'],['ぞ','zo'],
      ['だ','da'],['ぢ','ji'],['づ','zu'],['で','de'],['ど','do'],
      ['ば','ba'],['び','bi'],['ぶ','bu'],['べ','be'],['ぼ','bo'],
      ['ぱ','pa'],['ぴ','pi'],['ぷ','pu'],['ぺ','pe'],['ぽ','po']
    ],
    youon: [
      ['きゃ','kya'],['きゅ','kyu'],['きょ','kyo'],['しゃ','sha'],['しゅ','shu'],['しょ','sho'],
      ['ちゃ','cha'],['ちゅ','chu'],['ちょ','cho'],['にゃ','nya'],['にゅ','nyu'],['にょ','nyo'],
      ['ひゃ','hya'],['ひゅ','hyu'],['ひょ','hyo'],['みゃ','mya'],['みゅ','myu'],['みょ','myo'],
      ['りゃ','rya'],['りゅ','ryu'],['りょ','ryo'],['ぎゃ','gya'],['ぎゅ','gyu'],['ぎょ','gyo'],
      ['じゃ','ja'],['じゅ','ju'],['じょ','jo'],['びゃ','bya'],['びゅ','byu'],['びょ','byo'],
      ['ぴゃ','pya'],['ぴゅ','pyu'],['ぴょ','pyo']
    ]
  },
  katakana: {
    a: [
      ['ア','a','Um machado (Axe) inclinado','アイス','sorvete','🍦'],
      ['イ','i','Uma pessoa de lado: "I" de indivíduo','イギリス','Inglaterra','🇬🇧'],
      ['ウ','u','Igual a う, com um chapéu reto','ウイルス','vírus','🦠'],
      ['エ','e','Uma viga de Elevador (I deitado)','エレベーター','elevador','🛗'],
      ['オ','o','Um cantor de ÓPera com braços abertos','オレンジ','laranja','🍊'],
      ['カ','ka','Igual a か, sem o tracinho','カメラ','câmera','📷'],
      ['キ','ki','Uma chave (KEY) com dois dentes','キス','beijo','💋'],
      ['ク','ku','Um bico de pássaro: "KUkuruku"','クッキー','biscoito','🍪'],
      ['ケ','ke','Um K torto de KEtchup','ケーキ','bolo','🍰'],
      ['コ','ko','Um canto de COzinha','コーヒー','café','☕'],
      ['サ','sa','Um SAco com duas alças','サッカー','futebol','⚽'],
      ['シ','shi','Um rosto sorrindo de lado (olhos à ESQUERDA, traço sobe)','シャツ','camisa','👕'],
      ['ス','su','Uma pessoa esquiando: SUper rápido','スープ','sopa','🍲'],
      ['セ','se','Igual a せ, mais anguloso','セーター','suéter','🧶'],
      ['ソ','so','Uma agulha costurando: SOrriso de lado (traço DESCE)','ソファ','sofá','🛋️'],
      ['タ','ta','Um TAnque com antena','タクシー','táxi','🚕'],
      ['チ','chi','Um homem com CHIcote','チーズ','queijo','🧀'],
      ['ツ','tsu','Um rosto olhando PARA CIMA (traço desce de cima)','ツアー','tour','🧳'],
      ['テ','te','Uma TElevisão com antena','テレビ','TV','📺'],
      ['ト','to','Um TOtem com um galho','トマト','tomate','🍅'],
      ['ナ','na','Uma cruz de NAtal','ナイフ','faca','🔪'],
      ['ニ','ni','Duas linhas, igual a に sem o traço','テニス','tênis','🎾'],
      ['ヌ','nu','Um par de hashi pegando NUdles','カヌー','canoa','🛶'],
      ['ネ','ne','Uma NEcktie (gravata) num cabide','ネクタイ','gravata','👔'],
      ['ノ','no','Um único traço: "NO!"','ノート','caderno','📓']
    ],
    b: [
      ['ハ','ha','Duas pernas rindo: "HA"','ハンバーガー','hambúrguer','🍔'],
      ['ヒ','hi','Um calcanhar (HEEl)','コーヒー','café','☕'],
      ['フ','fu','Igual à primeira parte de ふ','フランス','França','🇫🇷'],
      ['ヘ','he','Idêntico a へ','ヘリコプター','helicóptero','🚁'],
      ['ホ','ho','Uma cruz com braços: HOspital','ホテル','hotel','🏨'],
      ['マ','ma','Um MArtelo de cabeça para baixo','マスク','máscara','😷'],
      ['ミ','mi','Três traços: MI MI MI','ミルク','leite','🥛'],
      ['ム','mu','Um nariz de vaca: MUuu','ゲーム','jogo','🎮'],
      ['メ','me','Um X que marca o mapa: MEta','メール','e-mail','📧'],
      ['モ','mo','Igual a も sem o gancho','モデル','modelo','🧍'],
      ['ヤ','ya','Igual a や','タイヤ','pneu','🛞'],
      ['ユ','yu','Um U quadrado (YOU)','ユニフォーム','uniforme','🎽'],
      ['ヨ','yo','Um E invertido: YOga','ヨーグルト','iogurte','🥣'],
      ['ラ','ra','Um RApper de boné','ラーメン','lámen','🍜'],
      ['リ','ri','Igual a り','リボン','fita','🎀'],
      ['ル','ru','Duas pernas de uma RUa','ビール','cerveja','🍺'],
      ['レ','re','Um L de "Lemon" que vira RE','レモン','limão','🍋'],
      ['ロ','ro','Um quadrado de ROBÔ','ロボット','robô','🤖'],
      ['ワ','wa','Um copo de vinho (WIne)','ワイン','vinho','🍷'],
      ['ヲ','wo','Quase não usado; partícula を','ヲ','(raro)','🔤'],
      ['ン','n','Rosto de lado (traço sobe), como シ com um olho','パン','pão','🍞']
    ]
  }
};

// Romaji para pares extras de katakana (sons estrangeiros)
window.KANA_EXTRA = [
  ['ティ','ti','パーティー','festa','🎉'],['ディ','di','ディズニー','Disney','🏰'],
  ['ファ','fa','ファン','fã','📣'],['フィ','fi','フィルム','filme (rolo)','🎞️'],
  ['フェ','fe','カフェ','café (lugar)','☕'],['フォ','fo','フォーク','garfo','🍴'],
  ['ウィ','wi','ウィンドウ','janela (PC)','🪟'],['ウェ','we','ウェブ','web','🌐'],
  ['ヴァ','va','ヴァイオリン','violino','🎻'],['チェ','che','チェック','checar','✅'],
  ['シェ','she','シェフ','chef','👨‍🍳'],['ジェ','je','ジェット','jato','🛩️']
];
