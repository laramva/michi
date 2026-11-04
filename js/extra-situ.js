// Trilha "Situações reais": diálogos de sobrevivência e vida no Japão, do A1 ao B2.
window.EXTRA = window.EXTRA || [];
(function () {
  function S(m, id, title, icon, o) {
    window.EXTRA.push({ m, l: Object.assign({ id, title, icon, track: 'situ',
      tip: 'Faça o role-play do diálogo nos dois papéis (botão "Interpretar"). Depois troque detalhes (lugar, preço, horário) e repita. É assim que a fala fica espontânea.' }, o) });
  }
  S('m1', 'sa1', 'Situação: no restaurante', '🍽️', {
    cando: ['Entrar, pedir, pedir a conta e pagar num restaurante'],
    vocab: [['なんめいさま','','quantas pessoas? (resp.)','👥'],['きんえんせき','','mesa para não fumantes','🚭'],['メニュー','','cardápio','📋'],['おすすめ','','recomendação','👍'],['ちゅうもん','','pedido','📝'],['おかいけい','','conta','🧾'],['べつべつ','','separado','➗'],['おいしかった','','estava gostoso','😋']],
    dialogue: [['店員[てんいん]','いらっしゃいませ！ なんめいさま です か。','Bem-vindos! Quantas pessoas?'],['客[きゃく]','ふたり です。','Duas.'],['店員[てんいん]','こちら へ どうぞ。','Por aqui, por favor.'],['客[きゃく]','すみません、おすすめ は なん です か。','Com licença, qual é a recomendação?'],['店員[てんいん]','てんぷら ていしょく が にんき です よ。','O combo de tempurá é popular.'],['客[きゃく]','じゃ、それ を ふたつ ください。','Então, dois desses, por favor.'],['客[きゃく]','おかいけい、おねがいします。べつべつ で。','A conta, por favor. Separada.']],
    sentences: [['ふたり です。','Somos dois.'],['おすすめ は なん です か。','Qual é a recomendação?'],['これ を ください。','Quero isto, por favor.'],['おかいけい、おねがいします。','A conta, por favor.'],['ごちそうさまでした。おいしかった です。','Obrigado pela refeição. Estava gostoso.']],
    quiz: [['なんめいさま ですか pergunta…', ['o que vai comer','quantas pessoas','como vai pagar'], 1], ['Para pedir a conta:', ['おかいけい、おねがいします','いらっしゃいませ'], 0]],
    mission: 'Na próxima vez que for a um restaurante, ensaie mentalmente o pedido inteiro em japonês antes de falar em português.'
  });
  S('m1', 'sa2', 'Situação: perdido na estação', '🚉', {
    cando: ['Pedir ajuda para encontrar a plataforma e o trem certo'],
    vocab: [['〜ばんせん','','plataforma nº','🔢'],['のりば','','local de embarque','🚏'],['かいさつ','','catraca','🚧'],['でぐち','','saída','🚪'],['いりぐち','','entrada','🚪'],['とまる','','parar (em estação)','🛑'],['かくえきていしゃ','','parador (para em todas)','🚃'],['きゅうこう','','expresso','⚡']],
    dialogue: [['旅行者[りょこうしゃ]','すみません、しんじゅく へ いきたい ん です が。','Com licença, quero ir para Shinjuku.'],['駅員[えきいん]','やまのてせん で いけます よ。３ばんせん です。','Dá para ir pela linha Yamanote. Plataforma 3.'],['旅行者[りょこうしゃ]','この でんしゃ は しんじゅく に とまります か。','Este trem para em Shinjuku?'],['駅員[えきいん]','はい、とまります。','Sim, para.'],['旅行者[りょこうしゃ]','ひがしぐち は どこ です か。','Onde é a saída leste?'],['駅員[えきいん]','かいさつ を でて、みぎ です。','Saindo da catraca, à direita.']],
    sentences: [['しんじゅく へ いきたい ん です が。','Quero ir para Shinjuku.'],['この でんしゃ は しんじゅく に とまります か。','Este trem para em Shinjuku?'],['なんばんせん です か。','Qual plataforma?'],['ひがしぐち は どこ です か。','Onde é a saída leste?']],
    quiz: [['Para perguntar se o trem para em uma estação:', ['〜にとまりますか','〜をでますか'], 0]],
    mission: 'Abra o mapa do metrô de Tóquio na internet e planeje uma rota dizendo as frases desta aula em voz alta.'
  });
  S('m1', 'sa3', 'Situação: comprando roupas', '👗', {
    cando: ['Pedir outro tamanho/cor, experimentar e decidir a compra'],
    vocab: [['サイズ','','tamanho','📏'],['エス／エム／エル','','P / M / G','🔤'],['しちゃくしつ','','provador','🚪'],['きて みる','','experimentar','👕'],['おおきい','','grande','🔼'],['ちいさい','','pequeno','🔽'],['ほか の いろ','','outra cor','🎨'],['けっこうです','','não, obrigado','🙅']],
    dialogue: [['客[きゃく]','すみません、これ の エム サイズ は あります か。','Com licença, tem este no tamanho M?'],['店員[てんいん]','はい、こちら です。','Sim, aqui está.'],['客[きゃく]','きて みても いい です か。','Posso experimentar?'],['店員[てんいん]','どうぞ、しちゃくしつ は あちら です。','Fique à vontade, o provador é ali.'],['客[きゃく]','ちょっと ちいさい です ね。ほか の いろ は あります か。','Está um pouco pequeno. Tem outra cor?'],['店員[てんいん]','くろ と しろ が ございます。','Temos preto e branco.'],['客[きゃく]','じゃ、くろ の エル を ください。','Então, o preto G, por favor.']],
    sentences: [['エム サイズ は あります か。','Tem tamanho M?'],['きて みても いい です か。','Posso experimentar?'],['ちょっと おおきい です。','Está um pouco grande.'],['ほか の いろ は あります か。','Tem outra cor?']],
    mission: 'Entre num site de roupas japonês (ex.: Uniqlo JP) e escolha uma peça dizendo tamanho e cor em japonês.'
  });
  S('m1', 'sa4', 'Situação: fazendo amigos', '🤝', {
    cando: ['Puxar conversa, trocar contato e marcar algo'],
    vocab: [['どこ から','','de onde','🌍'],['しゅみ','','hobby','🎯'],['れんらくさき','','contato','📇'],['ライン','','LINE (app de mensagens)','💬'],['こうかん','','troca','🔁'],['また あいましょう','','vamos nos ver de novo','👋'],['よかったら','','se quiser','🙂'],['ぜひ','','com certeza','💯']],
    dialogue: [['ユキ','あの、日本語[にほんご] じょうず です ね。どこ から 来[き]ました か。','Nossa, seu japonês é bom. De onde você é?'],['ルーカス','ありがとう！ ブラジル から です。','Obrigado! Do Brasil.'],['ユキ','へえ！ しゅみ は なん です か。','Nossa! Qual é o seu hobby?'],['ルーカス','アニメ と サッカー です。ユキさん は？','Anime e futebol. E você, Yuki?'],['ユキ','わたし も アニメ が すき です！','Eu também gosto de anime!'],['ルーカス','よかったら、ライン を こうかん しません か。','Se quiser, vamos trocar LINE?'],['ユキ','ぜひ！','Claro!']],
    sentences: [['どこ から 来[き]ました か。','De onde você veio?'],['よかったら、ライン を こうかん しません か。','Se quiser, vamos trocar LINE?'],['わたし も アニメ が すき です。','Eu também gosto de anime.'],['また あいましょう！','Vamos nos ver de novo!']],
    mission: 'Crie conta num app de intercâmbio (HelloTalk ou Tandem) e mande sua primeira mensagem em japonês usando esta aula.'
  });
  S('m2', 'sb1', 'Situação: na farmácia', '💊', {
    cando: ['Descrever sintomas simples e comprar remédio sem receita'],
    vocab: [['かぜぐすり','','remédio para resfriado','💊'],['いたみどめ','','analgésico','💊'],['ねつ','','febre','🤒'],['せき','','tosse','😷'],['はなみず','','coriza','🤧'],['〜かい','','~ vezes','🔁'],['しょくご','','após as refeições','🍽️'],['ふくさよう','','efeito colateral','⚠️']],
    dialogue: [['客[きゃく]','すみません、かぜぐすり が ほしい ん です が。','Com licença, quero um remédio para resfriado.'],['薬剤師[やくざいし]','どんな しょうじょう です か。','Quais são os sintomas?'],['客[きゃく]','せき と はなみず が でて、すこし ねつ が あります。','Estou com tosse e coriza, e um pouco de febre.'],['薬剤師[やくざいし]','では、こちら が いい です よ。いちにち ３かい、しょくご に のんで ください。','Então este é bom. Tome 3 vezes ao dia, após as refeições.'],['客[きゃく]','ねむく なります か。','Dá sono?'],['薬剤師[やくざいし]','すこし ねむく なる かも しれません。','Pode dar um pouco de sono.']],
    sentences: [['かぜぐすり が ほしい ん です が。','Quero um remédio para resfriado.'],['せき が でます。','Estou com tosse.'],['いちにち ３かい のんで ください。','Tome 3 vezes ao dia.'],['ねむく なります か。','Dá sono?']],
    mission: 'Escreva no celular, em japonês, os remédios que você costuma tomar e suas alergias.'
  });
  S('m2', 'sb2', 'Situação: alugando um apartamento', '🔑', {
    cando: ['Explicar o que procura e perguntar condições de aluguel'],
    vocab: [['へや','','quarto / apartamento','🚪'],['えきから','','a partir da estação','🚉'],['とほ','','a pé','🚶'],['やちん','','aluguel','💴'],['しききん','','caução','💰'],['かんりひ','','condomínio','🏢'],['ないけん','','visita ao imóvel','👀'],['ペットか','','aceita pets','🐾']],
    dialogue: [['客[きゃく]','えき から ちかい へや を さがして います。','Procuro um apartamento perto da estação.'],['不動産屋[ふどうさんや]','ごよさん は どのぐらい です か。','Qual é o seu orçamento?'],['客[きゃく]','やちん は ７まんえん ぐらい まで で。','Aluguel até uns 70 mil ienes.'],['不動産屋[ふどうさんや]','こちら は とほ ５ふん、６まん ８せんえん です。','Este fica a 5 minutos a pé, 68 mil ienes.'],['客[きゃく]','かんりひ と しききん は いくら です か。','Quanto são o condomínio e a caução?'],['不動産屋[ふどうさんや]','かんりひ は ３せんえん、しききん は いっかげつ ぶん です。','Condomínio 3 mil ienes, caução de um mês.'],['客[きゃく]','ないけん できます か。','Posso visitar?']],
    sentences: [['えき から ちかい へや を さがして います。','Procuro um apartamento perto da estação.'],['やちん は いくら です か。','Quanto é o aluguel?'],['ないけん できます か。','Posso visitar o imóvel?'],['ペット は だいじょうぶ です か。','Aceita animais?']],
    mission: 'Entre num site japonês de imóveis (ex.: SUUMO) e leia o preço, a distância da estação e a planta de um apartamento.'
  });
  S('m2', 'sb3', 'Situação: no correio', '📮', {
    cando: ['Enviar um pacote para o exterior e escolher o tipo de envio'],
    vocab: [['こづつみ','','pacote','📦'],['ふうとう','','envelope','✉️'],['こうくうびん','','via aérea','✈️'],['ふなびん','','via marítima','🚢'],['そくたつ','','expresso','⚡'],['なかみ','','conteúdo','📦'],['あてさき','','destinatário / endereço','🏠'],['おもさ','','peso','⚖️']],
    dialogue: [['客[きゃく]','この こづつみ を ブラジル に おくりたい ん です が。','Quero enviar este pacote para o Brasil.'],['局員[きょくいん]','こうくうびん と ふなびん、どちら に します か。','Via aérea ou marítima?'],['客[きゃく]','こうくうびん だと、どのぐらい かかります か。','Por via aérea, quanto tempo leva?'],['局員[きょくいん]','いっしゅうかん ぐらい です。なかみ は なん です か。','Cerca de uma semana. Qual é o conteúdo?'],['客[きゃく]','ふく と おかし です。','Roupas e doces.'],['局員[きょくいん]','では、こちら に あてさき を かいて ください。','Então escreva o endereço aqui, por favor.']],
    sentences: [['ブラジル に おくりたい ん です が。','Quero enviar para o Brasil.'],['どのぐらい かかります か。','Quanto tempo leva?'],['こうくうびん で おねがいします。','Por via aérea, por favor.'],['なかみ は ふく です。','O conteúdo são roupas.']]
  });
  S('m2', 'sb4', 'Situação: no cabeleireiro', '💇', {
    cando: ['Explicar o corte que você quer'],
    vocab: [['びよういん','','salão de beleza','💇'],['カット','','corte','✂️'],['みじかく','','curto (adv.)','✂️'],['そろえる','','acertar / igualar','📏'],['まえがみ','','franja','💁'],['パーマ','','permanente','🌀'],['カラー','','tintura','🎨'],['このぐらい','','mais ou menos assim','🤏']],
    dialogue: [['美容師[びようし]','きょう は どう しますか。','O que vamos fazer hoje?'],['客[きゃく]','カット を おねがいします。','Um corte, por favor.'],['美容師[びようし]','どのぐらい きりましょうか。','Quanto vamos cortar?'],['客[きゃく]','３センチ ぐらい みじかく して ください。まえがみ は そろえる だけ で。','Uns 3 cm mais curto, por favor. A franja só acertar.'],['美容師[びようし]','かしこまりました。','Pois não.'],['美容師[びようし]','こんな かんじ で いかが です か。','Que tal assim?'],['客[きゃく]','ちょうど いい です。ありがとうございます！','Perfeito. Obrigado!']],
    sentences: [['カット を おねがいします。','Um corte, por favor.'],['３センチ ぐらい みじかく して ください。','Corte uns 3 cm, por favor.'],['まえがみ は そろえる だけ で。','A franja é só acertar.'],['ちょうど いい です。','Está perfeito.']]
  });
  S('m2', 'sb5', 'Situação: emergência', '🚨', {
    cando: ['Pedir ajuda, chamar ambulância/polícia e explicar o problema'],
    vocab: [['たすけて','','socorro','🆘'],['きゅうきゅうしゃ','','ambulância','🚑'],['けいさつ','','polícia','🚓'],['かじ','','incêndio','🔥'],['けが','','ferimento','🩹'],['なくす','','perder (algo)','❓'],['ぬすまれる','','ser roubado','🦹'],['１１９ばん','','número de emergência (bombeiros/ambulância)','☎️']],
    dialogue: [['通報者[つうほうしゃ]','もしもし、きゅうきゅうしゃ を おねがいします！','Alô, uma ambulância, por favor!'],['消防[しょうぼう]','かじ です か、きゅうきゅう です か。','É incêndio ou emergência médica?'],['通報者[つうほうしゃ]','きゅうきゅう です。ひと が たおれて います。','Emergência médica. Uma pessoa desmaiou.'],['消防[しょうぼう]','ばしょ は どこ です か。','Qual é o local?'],['通報者[つうほうしゃ]','しぶや えき の ハチこう まえ です。','Em frente ao Hachiko, na estação de Shibuya.'],['消防[しょうぼう]','すぐ に いきます。','Estamos indo imediatamente.']],
    sentences: [['たすけて！','Socorro!'],['きゅうきゅうしゃ を よんで ください！','Chame uma ambulância!'],['さいふ を ぬすまれました。','Roubaram minha carteira.'],['パスポート を なくしました。','Perdi o passaporte.'],['けいさつ は どこ です か。','Onde fica a polícia?']],
    quiz: [['No Japão, ambulância e bombeiros são…', ['110','119','190'], 1], ['Polícia no Japão é…', ['110','119'], 0]],
    mission: 'Salve no celular: 110 (polícia) e 119 (ambulância/bombeiros), com as frases desta aula.'
  });
  S('m2', 'sb6', 'Situação: na prefeitura (registro)', '🏛️', {
    cando: ['Fazer registro de residência e entender formulários básicos'],
    vocab: [['しやくしょ','','prefeitura','🏛️'],['てんにゅうとどけ','','registro de mudança (entrada)','📄'],['ざいりゅうカード','','cartão de residente','🪪'],['じゅうしょ','','endereço','🏠'],['しょめい','','assinatura','✍️'],['まどぐち','','guichê','🪟'],['ばんごうふだ','','senha (número de espera)','🎫'],['しょるい','','documentos','📑']],
    dialogue: [['外国人[がいこくじん]','すみません、てんにゅうとどけ を だしたい ん です が。','Com licença, quero fazer o registro de residência.'],['職員[しょくいん]','ばんごうふだ を とって、３ばん まどぐち で おまち ください。','Pegue uma senha e aguarde no guichê 3.'],['職員[しょくいん]','ざいりゅうカード を おもち です か。','Tem o cartão de residente?'],['外国人[がいこくじん]','はい、これ です。','Sim, aqui está.'],['職員[しょくいん]','こちら に じゅうしょ と おなまえ を かいて ください。','Escreva aqui o endereço e o nome, por favor.']],
    sentences: [['てんにゅうとどけ を だしたい ん です が。','Quero fazer o registro de residência.'],['ばんごうふだ を とって ください。','Pegue uma senha.'],['ここ に しょめい して ください。','Assine aqui, por favor.'],['どの まどぐち です か。','Qual guichê?']]
  });
  S('m3', 'sc1', 'Situação: reclamação educada', '😤', {
    cando: ['Reclamar de um problema (produto, serviço, vizinho) sem ser rude'],
    vocab: [['こしょう','','defeito','⚙️'],['こうかん','','troca','🔁'],['へんぴん','','devolução','↩️'],['へんきん','','reembolso','💴'],['じつは','','na verdade (introduz problema)','🗣️'],['こまる','','ter problema / ficar em apuros','😣'],['そうおん','','barulho','🔊'],['おそれいりますが','','sinto incomodar, mas','🙇']],
    dialogue: [['客[きゃく]','すみません、じつは きのう かった ドライヤー が うごかない ん です が…','Com licença, na verdade o secador que comprei ontem não funciona…'],['店員[てんいん]','たいへん もうしわけ ございません。レシート は おもち です か。','Peço muitas desculpas. Tem o recibo?'],['客[きゃく]','はい。こうかん して いただけます か。','Sim. Poderia trocar?'],['店員[てんいん]','はい、すぐ に あたらしい もの と おとりかえ いたします。','Sim, troco imediatamente por um novo.']],
    sentences: [['じつは、ちょっと こまって いる ん です が…','Na verdade, estou com um probleminha…'],['こうかん して いただけます か。','Poderia trocar?'],['へんきん は できます か。','Dá para reembolsar?'],['おそれいります が、もう すこし しずか に して いただけます か。','Desculpe incomodar, mas poderiam fazer um pouco menos de barulho?']],
    tip: 'Em japonês, reclamação começa suave (じつは…、〜んですが…) e deixa a frase "em aberto". O outro entende e oferece a solução. Ser direto demais soa agressivo.',
    mission: 'Pense numa reclamação real que você já fez e reescreva-a em japonês, no estilo suave desta aula.'
  });
  S('m3', 'sc2', 'Situação: conversa com o chefe', '👔', {
    cando: ['Pedir folga, avisar atraso e dar um relatório rápido ao superior'],
    vocab: [['やすみ','','folga','🏖️'],['ちこく','','atraso','⏰'],['ほうこく','','relatório','📋'],['そうだん','','consulta','💬'],['ごめいわく','','incômodo (causado)','🙇'],['ぐあい','','condição de saúde','🌡️'],['おやすみをいただく','','tirar folga (humilde)','🛌'],['しょうちしました','','entendido (formal)','✅']],
    dialogue: [['部下[ぶか]','ぶちょう、いま よろしい でしょう か。','Chefe, tem um momento?'],['部長[ぶちょう]','うん、どう した？','Sim, o que houve?'],['部下[ぶか]','らいしゅう の きんようび、おやすみ を いただきたい の です が。','Gostaria de tirar folga na sexta da semana que vem.'],['部長[ぶちょう]','いい よ。しごと の ひきつぎ は だいじょうぶ？','Pode. A passagem do trabalho está ok?'],['部下[ぶか]','はい、すずきさん に おねがい して あります。','Sim, já pedi para o Suzuki.'],['部長[ぶちょう]','わかった。','Entendido.']],
    sentences: [['いま よろしい でしょう か。','Tem um momento?'],['おやすみ を いただきたい の です が。','Gostaria de tirar folga.'],['でんしゃ が おくれて、１５ふん ほど ちこく します。','O trem atrasou, vou chegar uns 15 minutos atrasado.'],['ごめいわく を おかけ して もうしわけ ありません。','Desculpe pelo incômodo causado.']]
  });
  S('m3', 'sc3', 'Situação: no médico (consulta completa)', '🩺', {
    cando: ['Descrever sintomas com detalhes, histórico e entender o tratamento'],
    vocab: [['もんしんひょう','','questionário médico','📋'],['いつから','','desde quando','📅'],['ずきずき','','latejante','💥'],['ちくちく','','pontada','📍'],['じびょう','','doença crônica','📈'],['のんでいるくすり','','remédio que toma','💊'],['けんさ','','exame','🔬'],['しんだんしょ','','atestado médico','📄']],
    dialogue: [['医者[いしゃ]','どう されました か。','O que houve?'],['患者[かんじゃ]','みっか まえ から あたま が ずきずき いたい ん です。','Há três dias minha cabeça lateja de dor.'],['医者[いしゃ]','ほか に しょうじょう は あります か。','Tem outros sintomas?'],['患者[かんじゃ]','すこし はきけ も あります。','Também um pouco de enjoo.'],['医者[いしゃ]','いま のんで いる くすり は あります か。','Toma algum remédio atualmente?'],['患者[かんじゃ]','いいえ、ありません。','Não.'],['医者[いしゃ]','ねん の ため、けんさ を しましょう。','Por precaução, vamos fazer um exame.'],['患者[かんじゃ]','かいしゃ に だす しんだんしょ を いただけます か。','Pode me dar um atestado para a empresa?']],
    sentences: [['みっか まえ から ねつ が あります。','Estou com febre há três dias.'],['あたま が ずきずき します。','Minha cabeça lateja.'],['アレルギー は ありません。','Não tenho alergias.'],['しんだんしょ を いただけます か。','Pode me dar um atestado?']]
  });
  S('m4', 'sd1', 'Situação: reunião de negócios', '📊', {
    cando: ['Abrir, conduzir e encerrar uma reunião em japonês formal'],
    vocab: [['ぎだい','','pauta','📋'],['しんちょく','','andamento','📈'],['かだい','','desafio / pendência','🧩'],['たいおう','','providência','🛠️'],['きげん','','prazo','⏰'],['けってい','','decisão','✅'],['じかい','','próxima vez','🔜'],['ぎじろく','','ata','🗒️']],
    dialogue: [['司会[しかい]','それでは、じかん に なりました ので、はじめさせて いただきます。','Bem, como chegou a hora, vamos começar.'],['司会[しかい]','ほんじつ の ぎだい は ふたつ です。','A pauta de hoje tem dois itens.'],['田中[たなか]','まず、しんちょく を ごほうこく します。','Primeiro, vou relatar o andamento.'],['司会[しかい]','かだい に ついて は、だれ が たいおう します か。','Quem vai cuidar das pendências?'],['シルバ','わたし が たんとう いたします。らいしゅう まで に ごれんらく します。','Eu me encarrego. Entro em contato até a semana que vem.'],['司会[しかい]','では、きょう は これ で おわります。ぎじろく は あと で おおくり します。','Então, por hoje é isso. Envio a ata depois.']],
    sentences: [['はじめさせて いただきます。','Vamos começar (formal).'],['しんちょく を ごほうこく します。','Vou relatar o andamento.'],['わたし が たんとう いたします。','Eu me encarrego.'],['きょう は これ で おわります。','Por hoje encerramos.']]
  });
  S('m4', 'sd2', 'Situação: pedido de desculpas formal', '🙇', {
    cando: ['Pedir desculpas formalmente por um erro e propor solução'],
    vocab: [['もうしわけございません','','peço sinceras desculpas','🙇'],['ふてぎわ','','falha (no procedimento)','⚠️'],['ごめいわく','','incômodo','😣'],['さいはつぼうし','','prevenção de recorrência','🛡️'],['てっていする','','garantir rigorosamente','✔️'],['おわび','','desculpas formais','🙏'],['しょうさい','','detalhes','🔍'],['ただちに','','imediatamente','⚡']],
    dialogue: [['担当者[たんとうしゃ]','このたび は、わたくしども の ふてぎわ で、たいへん ごめいわく を おかけ いたしました。','Desta vez causamos um grande incômodo por uma falha nossa.'],['顧客[こきゃく]','どう して こんな こと に なった ん です か。','Como isso aconteceu?'],['担当者[たんとうしゃ]','かくにん ぶそく が げんいん でした。もうしわけ ございません。','A causa foi falta de verificação. Pedimos desculpas.'],['担当者[たんとうしゃ]','ただちに だいたいひん を おおくり いたします。こんご は チェック を てってい いたします。','Enviaremos imediatamente um substituto. Daqui em diante faremos a checagem com rigor.']],
    sentences: [['たいへん ごめいわく を おかけ いたしました。','Causamos um grande incômodo.'],['もうしわけ ございません。','Pedimos sinceras desculpas.'],['ただちに たいおう いたします。','Vamos providenciar imediatamente.'],['さいはつ ぼうし に つとめます。','Vamos nos esforçar para que não se repita.']],
    tip: 'Estrutura japonesa de desculpas: 1) reconhecer o incômodo, 2) explicar a causa sem se justificar, 3) solução imediata, 4) prevenção. Decore como roteiro.'
  });
})();
