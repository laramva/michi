// Módulo 2 — A2 / JLPT N4: conversar sobre a vida, opinar e resolver situações.
window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: 'm2', title: 'Básico', level: 'A2 · N4', color: '#1cb0f6', icon: '🎋',
  desc: 'Forma て, fala casual, condicionais, dar e receber, saúde, viagem e situações reais.',
  lessons: [
    {
      id: 'm2l1', title: 'A forma て', icon: '🔗',
      cando: ['Conjugar qualquer verbo na forma て', 'Ligar ações em sequência'],
      vocab: [
        ['書く','かく','escrever','✍️'], ['聞く','きく','ouvir / perguntar','👂'], ['泳ぐ','およぐ','nadar','🏊'], ['話す','はなす','falar','🗣️'], ['待つ','まつ','esperar','⏳'],
        ['死ぬ','しぬ','morrer','💀'], ['遊ぶ','あそぶ','brincar / sair','🎡'], ['飲む','のむ','beber','🥤'], ['帰る','かえる','voltar','🏠'], ['会う','あう','encontrar','👫'],
        ['食べる','たべる','comer','🍽️'], ['見る','みる','ver','👀'], ['する','','fazer','🛠️'], ['来る','くる','vir','🫴']
      ],
      kanji: [['書','ショ','か(く)','escrever'],['泳','エイ','およ(ぐ)','nadar'],['待','タイ','ま(つ)','esperar'],['遊','ユウ','あそ(ぶ)','brincar'],['来','ライ','く(る)','vir']],
      grammar: [
        { t: 'Os 3 grupos de verbos', d: '<b>Grupo 2 (ru-verbos)</b>: terminam em -iru/-eru e só tiram る: たべる→たべて, みる→みて.<br><b>Irregulares</b>: する→して, くる→きて.<br><b>Grupo 1 (u-verbos)</b>: o resto, conforme a última sílaba (veja abaixo).', ex: [['たべる → たべて','comer'],['する → して','fazer'],['くる → きて','vir']] },
        { t: 'Grupo 1: a "musiquinha" da forma て', d: 'う・つ・る → <b>って</b> (あう→あって, まつ→まって, かえる→かえって)<br>む・ぶ・ぬ → <b>んで</b> (のむ→のんで, あそぶ→あそんで)<br>く → <b>いて</b> (かく→かいて) | ぐ → <b>いで</b> (およぐ→およいで)<br>す → <b>して</b> (はなす→はなして)<br>Exceção: いく → <b>いって</b>.', ex: [['のむ → のんで','beber'],['かく → かいて','escrever'],['いく → いって','ir (exceção)']] },
        { t: 'Sequência: 〜て、〜て、〜ます', d: 'A forma て liga ações em ordem: "fiz X, depois Y".', ex: [['あさ おきて、シャワー を あびて、会社[かいしゃ] に いきます。','De manhã acordo, tomo banho e vou à empresa.']] },
        { t: '〜てから — depois de', d: 'Enfatiza que uma ação vem depois da outra.', ex: [['しゅくだい を してから、あそびます。','Depois de fazer a lição, vou brincar.']] }
      ],
      sentences: [
        ['ちょっと 待[ま]って ください。','Espere um pouco, por favor.'], ['ここ に 名前[なまえ] を 書[か]いて ください。','Escreva seu nome aqui, por favor.'], ['うち に 帰[かえ]って、ごはん を 食[た]べました。','Voltei para casa e jantei.'],
        ['ともだち に 会[あ]って、カフェ で 話[はな]しました。','Encontrei um amigo e conversamos no café.'], ['日本語[にほんご] で 話[はな]して ください。','Fale em japonês, por favor.']
      ],
      dialogue: [['A','きのう は 何[なに] を しました か。','O que você fez ontem?'],['B','ともだち と 会[あ]って、えいが を 見[み]て、ラーメン を 食[た]べました。','Encontrei um amigo, vimos um filme e comemos lámen.'],['A','たのしそう です ね！','Parece divertido!']],
      quiz: [['Forma て de のむ:', ['のって','のんで','のみて'], 1], ['Forma て de いく:', ['いいて','いって','いきて'], 1], ['Forma て de はなす:', ['はなって','はなして','はなんで'], 1]],
      tip: 'Decore a forma て com música: procure "te form song" no YouTube (link nos vídeos da aula) e cante até ficar automático. Depois, conjugue 20 verbos aleatórios por dia por uma semana.',
      mission: 'Escreva sua manhã de hoje em UMA frase longa usando 4 verbos na forma て.'
    },
    {
      id: 'm2l2', title: '〜ています: ação em andamento e estado', icon: '⏯️',
      cando: ['Dizer o que está fazendo agora', 'Falar de estados: casado, morando, trabalhando em…'],
      vocab: [
        ['住む','すむ','morar','🏘️'], ['結婚する','けっこんする','casar','💍'], ['知る','しる','saber / conhecer','💡'], ['持つ','もつ','segurar / ter','✋'], ['着る','きる','vestir (parte de cima)','👕'],
        ['はく','','calçar / vestir (parte de baixo)','👖'], ['かける','','pôr (óculos)','👓'], ['降る','ふる','cair (chuva, neve)','🌧️'], ['雨','あめ','chuva','☔'], ['働く','はたらく','trabalhar','💼'],
        ['ふとる','','engordar','🍔'], ['やせる','','emagrecer','🥗']
      ],
      kanji: [['住','ジュウ','す(む)','morar'],['知','チ','し(る)','saber'],['持','ジ','も(つ)','segurar'],['着','チャク','き(る)','vestir, chegar'],['雨','ウ','あめ','chuva'],['働','ドウ','はたら(く)','trabalhar']],
      grammar: [
        { t: 'Ação em andamento', d: 'Forma て + います = "estar fazendo". Na fala, vira 〜てる: 何[なに] してる？', ex: [['いま、べんきょう して います。','Agora estou estudando.'],['雨[あめ] が 降[ふ]って います。','Está chovendo.']] },
        { t: 'Estado resultante', d: 'Com verbos de mudança, indica o estado ATUAL: けっこん して います = sou casado (não "estou casando"); 住[す]んで います = moro.', ex: [['とうきょう に 住[す]んで います。','Moro em Tóquio.'],['あね は けっこん して います。','Minha irmã é casada.']] },
        { t: '知[し]って います × 知[し]りません', d: 'Atenção: "não sei" é 知[し]りません (não 知[し]って いません).', ex: [['あの 人[ひと] を 知[し]って います か。','Você conhece aquela pessoa?'],['いいえ、知[し]りません。','Não, não conheço.']] }
      ],
      sentences: [
        ['いま 何[なに] を して います か。','O que você está fazendo agora?'], ['ごはん を 食[た]べて います。','Estou comendo.'], ['ブラジル に 住[す]んで います。','Moro no Brasil.'],
        ['かのじょ は めがね を かけて います。','Ela está de óculos.'], ['IT の 会社[かいしゃ] で 働[はたら]いて います。','Trabalho numa empresa de TI.'], ['その こと は 知[し]りません でした。','Eu não sabia disso.']
      ],
      dialogue: [['A','もしもし、いま 何[なに] して る？','Alô, o que você está fazendo?'],['B','いま、えき で ともだち を 待[ま]って る よ。','Estou esperando um amigo na estação.'],['A','そう か。雨[あめ]、降[ふ]って る？','Ah é. Está chovendo?'],['B','うん、すごく 降[ふ]って る。','Sim, chovendo muito.']],
      quiz: [['"Sou casado" é…', ['けっこんします','けっこんしています','けっこんしました'], 1], ['"Não sei" é…', ['しっていません','しりません'], 1]],
      tip: 'Observação ativa: olhe pela janela ou num café e descreva as pessoas em japonês: "あの人は コーヒーを のんでいます". Treino de fala em qualquer lugar.',
      mission: 'Descreva 5 pessoas ao seu redor (ou numa foto) com 〜ています: o que fazem e o que vestem.'
    },
    {
      id: 'm2l3', title: 'Permissão e proibição', icon: '🚫',
      cando: ['Pedir permissão', 'Entender regras e proibições (placas, avisos)'],
      vocab: [
        ['写真','しゃしん','foto','📸'], ['撮る','とる','tirar (foto)','🤳'], ['たばこ','','cigarro','🚬'], ['すう','','fumar / inalar','💨'], ['入る','はいる','entrar','🚪'],
        ['使う','つかう','usar','🔧'], ['座る','すわる','sentar','🪑'], ['ここ','','aqui','📍'], ['きんえん','','proibido fumar','🚭'], ['かまいません','','não tem problema','👌'],
        ['だめ','','não pode (な)','🙅'], ['くつ','','sapato','👟'], ['ぬぐ','','tirar (roupa/sapato)','🦶']
      ],
      kanji: [['写','シャ','うつ(す)','copiar'],['真','シン','ま','verdade'],['入','ニュウ','はい(る)','entrar'],['使','シ','つか(う)','usar'],['禁','キン','—','proibido']],
      grammar: [
        { t: '〜ても いい です（か）', d: 'Permissão: "pode ~?". Resposta: ええ、どうぞ／いい です よ.', ex: [['写真[しゃしん] を 撮[と]っても いい です か。','Posso tirar foto?'],['ええ、どうぞ。','Sim, fique à vontade.']] },
        { t: '〜ては いけません', d: 'Proibição forte (regras). Na fala: 〜ちゃ だめ.', ex: [['ここ で たばこ を すっては いけません。','Não se pode fumar aqui.']] },
        { t: '〜なくても いい です', d: '"Não precisa ~" — veremos a forma ない na aula 4. Exemplo: くつ を ぬがなくても いい です (não precisa tirar os sapatos).', ex: [['くつ を ぬがなくても いい です よ。','Não precisa tirar os sapatos.']] }
      ],
      sentences: [
        ['ここ に 座[すわ]っても いい です か。','Posso me sentar aqui?'], ['この ペン を 使[つか]っても いい です か。','Posso usar esta caneta?'], ['びじゅつかん で 写真[しゃしん] を 撮[と]っては いけません。','Não pode tirar foto no museu.'],
        ['くつ を ぬいで 入[はい]って ください。','Tire os sapatos e entre, por favor.'], ['ここ に 入[はい]っては いけません。','Não pode entrar aqui.']
      ],
      dialogue: [['客[きゃく]','すみません、ここ で 写真[しゃしん] を 撮[と]っても いい です か。','Com licença, posso tirar foto aqui?'],['係員[かかりいん]','もうしわけ ありません。ここ で は ちょっと…','Desculpe. Aqui não é possível…'],['客[きゃく]','そう です か。そと は いい です か。','Ah é? E lá fora pode?'],['係員[かかりいん]','はい、そと は だいじょうぶ です。','Sim, lá fora tudo bem.']],
      quiz: [['"Posso entrar?"', ['はいってもいいですか','はいってはいけません'], 0], ['Ao entrar numa casa japonesa, você deve…', ['manter os sapatos','tirar os sapatos'], 1]],
      tip: 'Placas são leitura real: pesquise imagens de "禁止 看板" (placas de proibição) e tente ler. Você vai reconhecer 禁煙, 立入禁止, 撮影禁止.',
      mission: 'Faça 3 pedidos de permissão em japonês hoje (mesmo que mentalmente) antes de usar algo de alguém.'
    },
    {
      id: 'm2l4', title: 'Forma simples e fala casual', icon: '😎',
      cando: ['Conjugar a forma de dicionário, ない e た', 'Conversar casualmente com amigos'],
      vocab: [
        ['うん','','sim (casual)','👍'], ['ううん','','não (casual)','👎'], ['すごい','','incrível','🤩'], ['やばい','','caramba (bom ou ruim)','😱'], ['まじ','','sério?','😳'],
        ['だいじょうぶ','','tudo bem','👌'], ['ね','','né (confirmação)','🤝'], ['よ','','(informação nova, ênfase)','❗'], ['ある','','haver (casual)','📦'], ['ない','','não haver','🚫'],
        ['いる','','estar (casual)','🧍'], ['分かる','わかる','entender','💡']
      ],
      kanji: [['分','ブン','わ(かる)','entender, dividir'],['言','ゲン','い(う)','dizer'],['思','シ','おも(う)','pensar']],
      grammar: [
        { t: 'Forma ない (negativo casual)', d: 'Grupo 1: troque o último som para a coluna "a" + ない (かく→かかない, のむ→のまない; う→わ: かう→かわない). Grupo 2: tire る + ない (たべない). する→しない, くる→こない, ある→ない.', ex: [['きょう は いかない。','Hoje não vou.'],['にく は 食[た]べない。','Não como carne.']] },
        { t: 'Forma た (passado casual)', d: 'Igual à forma て, trocando て por た: のんで→のんだ, たべて→たべた, いって→いった.', ex: [['きのう 何[なに] した？','O que você fez ontem?'],['ずっと ゲーム して た。','Fiquei jogando o tempo todo.']] },
        { t: 'Casual com substantivos e な-adj: だ', d: 'です → だ (ou nada, muito comum). じゃない = não é. だった = era.', ex: [['あした は やすみ だ。','Amanhã é folga.'],['しずか じゃない。','Não é tranquilo.']] },
        { t: 'Quando usar', d: 'Casual com amigos, família e pessoas mais novas. Formal (です/ます) com desconhecidos, no trabalho e com mais velhos. Na dúvida, formal.', ex: [['行[い]く？ — うん、行[い]く！','Vai? — Sim, vou!']] }
      ],
      sentences: [
        ['あした、ひま？','Amanhã você está livre?'], ['うん、ひま だ よ。','Sim, estou livre.'], ['その えいが、もう 見[み]た？','Já viu esse filme?'],
        ['ううん、まだ 見[み]て ない。','Não, ainda não vi.'], ['日本語[にほんご]、分[わ]かる？','Você entende japonês?'], ['すこし 分[わ]かる。','Entendo um pouco.']
      ],
      dialogue: [['ユキ','ねえ、しゅうまつ 何[なに] する？','Ei, o que vai fazer no fim de semana?'],['ケン','とくに 何[なに] も ない。なんで？','Nada em especial. Por quê?'],['ユキ','あたらしい カフェ、行[い]かない？','Não quer ir no café novo?'],['ケン','いい ね！ 行[い]こう！','Boa! Vamos!']],
      quiz: [['Forma ない de かう:', ['かあない','かわない','かない'], 1], ['Forma た de よむ:', ['よんだ','よった','よみた'], 0], ['Casual de ありません:', ['あらない','ない'], 1]],
      tip: 'Assista a um vlog japonês casual (ex.: canais de "日常 vlog") com legendas em japonês. Note como as frases terminam: よ, ね, じゃん, の. Isso é o japonês real.',
      mission: 'Mande uma mensagem casual em japonês num app de intercâmbio (HelloTalk/Tandem) para alguém da sua idade.'
    },
    {
      id: 'm2l5', title: 'Obrigação e pedidos negativos', icon: '📋',
      cando: ['Dizer o que precisa fazer', 'Pedir para alguém não fazer algo'],
      vocab: [
        ['くすり','','remédio','💊'], ['しゅくだい','','lição de casa','📓'], ['レポート','','relatório','📄'], ['しめきり','','prazo','⏰'], ['出す','だす','entregar / pôr para fora','📤'],
        ['わすれる','','esquecer','🤦'], ['しんぱい','','preocupação','😟'], ['むり','','impossível / forçado (な)','🙅'], ['休む','やすむ','descansar / faltar','😴'], ['はらう','','pagar','💳'], ['早く','はやく','cedo / rápido','⚡']
      ],
      kanji: [['出','シュツ','で(る)・だ(す)','sair, entregar'],['休','キュウ','やす(む)','descansar'],['早','ソウ','はや(い)','cedo'],['薬','ヤク','くすり','remédio']],
      grammar: [
        { t: '〜なければ なりません／〜なきゃ', d: '"Preciso ~". Forma ない sem い + ければ なりません. Na fala: 〜なきゃ／〜ないと.', ex: [['あした までに レポート を 出[だ]さなければ なりません。','Preciso entregar o relatório até amanhã.'],['もう 帰[かえ]らなきゃ。','Já tenho que ir embora.']] },
        { t: '〜ないで ください', d: '"Por favor, não ~".', ex: [['しんぱい しないで ください。','Não se preocupe.'],['ここ に 車[くるま] を とめないで ください。','Não estacione aqui, por favor.']] },
        { t: '〜なくても いい です', d: '"Não precisa ~".', ex: [['あした は 来[こ]なくても いい です。','Amanhã não precisa vir.']] }
      ],
      sentences: [
        ['まいにち くすり を 飲[の]まなければ なりません。','Preciso tomar remédio todo dia.'], ['わすれないで ください。','Não esqueça, por favor.'], ['むり しないで ね。','Não se esforce demais, tá?'],
        ['もう 寝[ね]なきゃ。','Já tenho que dormir.'], ['いそがなくても いい です よ。','Não precisa ter pressa.']
      ],
      dialogue: [['A','ごめん、きょう の のみかい、行[い]けない。','Desculpa, não posso ir no happy hour hoje.'],['B','どうして？','Por quê?'],['A','あした までに レポート を 出[だ]さなきゃ いけない ん だ。','Tenho que entregar um relatório até amanhã.'],['B','たいへん だ ね。むり しないで ね。','Que puxado. Não se esforce demais.']],
      quiz: [['"Preciso estudar" (formal):', ['べんきょうしなければなりません','べんきょうしないでください'], 0], ['"Não se preocupe":', ['しんぱいしなきゃ','しんぱいしないでください'], 1]],
      tip: 'Faça sua lista de tarefas do dia em japonês usando 〜なきゃ. É prático, pessoal e repetitivo — perfeito para fixar.',
      mission: 'Escreva sua lista de tarefas de amanhã em japonês (5 itens com 〜なきゃ).'
    },
    {
      id: 'm2l6', title: 'Experiências e listas de ações', icon: '🗻',
      cando: ['Contar experiências de vida', 'Listar atividades (〜たり〜たり)'],
      vocab: [
        ['のぼる','','subir / escalar','🧗'], ['富士山','ふじさん','Monte Fuji','🗻'], ['きもの','','quimono','👘'], ['おんせん','','fonte termal','♨️'], ['なっとう','','natto','🫘'],
        ['いちど','','uma vez','1️⃣'], ['なんども','','várias vezes','🔁'], ['ぜんぜん','','nem um pouco (+neg.)','🚫'], ['外国','がいこく','exterior','🌍'], ['そうじ','','limpeza','🧹'], ['せんたく','','lavar roupa','🧺']
      ],
      kanji: [['外','ガイ','そと','fora'],['国','コク','くに','país'],['度','ド','たび','vez, grau'],['山','サン','やま','montanha']],
      grammar: [
        { t: '〜たことが あります', d: 'Forma た + ことが あります = "já fiz ~ (alguma vez na vida)". Negativo: ありません.', ex: [['富士山[ふじさん] に のぼった こと が あります。','Já subi o Monte Fuji.'],['なっとう を 食[た]べた こと が ありません。','Nunca comi natto.']] },
        { t: '〜たり〜たり します', d: 'Listar ações de forma não exaustiva: "faço coisas como X e Y".', ex: [['しゅうまつ は そうじ を したり、せんたく を したり します。','No fim de semana faço coisas como limpar e lavar roupa.']] }
      ],
      sentences: [
        ['日本[にほん] に 行[い]った こと が あります か。','Você já foi ao Japão?'], ['いいえ、いちど も ありません。','Não, nunca.'], ['おんせん に 入[はい]った こと が あります。','Já entrei numa fonte termal.'],
        ['やすみ の 日[ひ] は 本[ほん] を 読[よ]んだり、えいが を 見[み]たり します。','Nos dias de folga leio livros, vejo filmes…'], ['きもの を きた こと が ありますか。','Já vestiu quimono?']
      ],
      dialogue: [['A','日本[にほん] の りょうり で、何[なに] を 食[た]べた こと が あります か。','Que comidas japonesas você já comeu?'],['B','すし や ラーメン は 食[た]べた こと が あります。','Já comi sushi e lámen.'],['A','なっとう は？','E natto?'],['B','いちど 食[た]べた こと が あります が、ちょっと…','Já comi uma vez, mas… não muito.']],
      quiz: [['"Nunca fui" é…', ['いったことがありません','いきませんでした'], 0], ['〜たり〜たり indica…', ['uma única ação','uma lista de exemplos de ações'], 1]],
      tip: 'Prepare "histórias de bolso": 3 experiências marcantes suas contadas em japonês. Em conversas reais, você vai usá-las muito.',
      mission: 'Escreva 5 coisas que você já fez e 5 que nunca fez, usando 〜たことがあります.'
    },
    {
      id: 'm2l7', title: 'Opinar e citar', icon: '💭',
      cando: ['Dar sua opinião com 〜と思います', 'Repassar o que alguém disse'],
      vocab: [
        ['思う','おもう','pensar / achar','💭'], ['言う','いう','dizer','💬'], ['いけん','','opinião','🗨️'], ['たぶん','','provavelmente','🤔'], ['きっと','','com certeza','✅'],
        ['ニュース','','notícia','📰'], ['ぶっか','','custo de vida','💹'], ['あがる','','subir','📈'], ['さがる','','descer','📉'], ['そう','','assim / desse jeito','👆'], ['かいぎ','','reunião','👥']
      ],
      kanji: [['思','シ','おも(う)','pensar'],['言','ゲン','い(う)','dizer'],['会議','カイギ','—','reunião'],['意見','イケン','—','opinião']],
      grammar: [
        { t: 'Forma simples + と 思[おも]います', d: 'Opinião ou suposição. Com substantivo/な-adj: だ と 思[おも]います.', ex: [['あした は 雨[あめ] が 降[ふ]る と 思[おも]います。','Acho que amanhã vai chover.'],['この えいが は おもしろい と 思[おも]います。','Acho este filme interessante.'],['かれ は 学生[がくせい] だ と 思[おも]います。','Acho que ele é estudante.']] },
        { t: '〜と 言[い]いました', d: 'Citação: direta 「…」と 言[い]いました ou indireta com forma simples.', ex: [['田中[たなか]さん は「あした 休[やす]みます」と 言[い]いました。','O Tanaka disse: "Amanhã vou faltar."'],['先生[せんせい] は しゅくだい が ない と 言[い]いました。','O professor disse que não tem lição.']] },
        { t: '〜について どう 思[おも]いますか', d: 'Pedir opinião sobre algo.', ex: [['日本[にほん] の アニメ について どう 思[おも]います か。','O que você acha dos animes japoneses?']] }
      ],
      sentences: [
        ['日本語[にほんご] は むずかしい けど、おもしろい と 思[おも]います。','Acho o japonês difícil, mas interessante.'], ['たぶん かれ は 来[こ]ない と 思[おも]う。','Acho que ele provavelmente não vem.'], ['先生[せんせい] は テスト は かんたん だ と 言[い]いました。','O professor disse que a prova é fácil.'],
        ['それ について どう 思[おも]います か。','O que você acha disso?'], ['私[わたし] も そう 思[おも]います。','Eu também acho.']
      ],
      dialogue: [['A','リモートワーク について どう 思[おも]います か。','O que você acha do trabalho remoto?'],['B','べんり だ と 思[おも]います。でも、ちょっと さびしい です ね。','Acho prático. Mas é um pouco solitário.'],['A','そう です ね。ぶちょう も 週[しゅう] に 一回[いっかい] は 会社[かいしゃ] に 来[き]て ほしい と 言[い]って いました。','É verdade. O chefe também disse que quer que a gente venha uma vez por semana.']],
      quiz: [['"Acho que é estudante":', ['がくせいとおもいます','がくせいだとおもいます'], 1], ['"Eu também acho":', ['わたしもそうおもいます','わたしはおもいません'], 0]],
      tip: 'Treino de opinião em 30 segundos: escolha uma notícia do dia e dê sua opinião em voz alta com 〜と思います + motivo (〜から).',
      mission: 'Grave um áudio de 30 segundos dando sua opinião sobre um filme ou série recente.'
    },
    {
      id: 'm2l8', title: 'Frases que descrevem substantivos', icon: '🧩',
      cando: ['Descrever coisas e pessoas com orações ("o livro que comprei ontem")'],
      vocab: [
        ['かう','','comprar','🛍️'], ['つくる','','fazer / fabricar','🛠️'], ['かぶる','','pôr (chapéu)','🧢'], ['ぼうし','','chapéu / boné','🧢'], ['ケーキ','','bolo','🍰'],
        ['プレゼント','','presente','🎁'], ['もらう','','receber','🤲'], ['人','ひと','pessoa','🧍'], ['ところ','','lugar','📍'], ['とき','','quando / hora','🕰️'], ['もの','','coisa','📦']
      ],
      kanji: [['作','サク','つく(る)','fazer'],['物','ブツ','もの','coisa'],['所','ショ','ところ','lugar'],['時','ジ','とき','tempo']],
      grammar: [
        { t: 'Oração + substantivo', d: 'Em japonês, a descrição vem ANTES do substantivo, na forma simples. "O livro que comprei ontem" = きのう かった 本[ほん].', ex: [['きのう かった 本[ほん]','o livro que comprei ontem'],['はは が 作[つく]った ケーキ','o bolo que minha mãe fez']] },
        { t: 'Sujeito dentro da oração: が (ou の)', d: 'Dentro da oração, o sujeito usa が, nunca は.', ex: [['私[わたし] が 住[す]んで いる まち は しずか です。','A cidade onde eu moro é tranquila.']] },
        { t: '〜とき — quando', d: 'Forma simples + とき.', ex: [['日本[にほん] に 行[い]った とき、すし を 食[た]べました。','Quando fui ao Japão, comi sushi.'],['ひま な とき、何[なに] を します か。','O que você faz quando está livre?']] }
      ],
      sentences: [
        ['あの ぼうし を かぶって いる 人[ひと] は だれ です か。','Quem é aquela pessoa de boné?'], ['ともだち に もらった プレゼント です。','É um presente que ganhei de um amigo.'], ['これ は 私[わたし] が 作[つく]った ケーキ です。','Este é o bolo que eu fiz.'],
        ['日本語[にほんご] を 話[はな]せる 人[ひと] を さがして います。','Estou procurando alguém que fale japonês.'], ['こども の とき、サッカー が すき でした。','Quando criança, eu gostava de futebol.']
      ],
      dialogue: [['A','それ、いい とけい です ね。','Que relógio legal.'],['B','ありがとう。たんじょうび に 父[ちち] が くれた とけい です。','Obrigado. É o relógio que meu pai me deu de aniversário.'],['A','いつも つけて いる ん です か。','Você sempre usa?'],['B','ええ、大切[たいせつ] な もの です から。','Sim, porque é algo importante.']],
      quiz: [['"O bolo que eu fiz":', ['わたしがつくったケーキ','ケーキをわたしがつくった','わたしはつくったケーキ'], 0], ['Dentro da oração, o sujeito usa…', ['は','が'], 1]],
      tip: 'Leia a frase japonesa de trás para frente para traduzir orações relativas: きのう かった 本 → livro ← comprei ← ontem.',
      mission: 'Descreva 5 objetos da sua casa com uma oração (ex.: ブラジルで かった かばん).'
    },
    {
      id: 'm2l9', title: 'Forma potencial: conseguir fazer', icon: '💪',
      cando: ['Dizer o que consegue ou não consegue fazer', 'Falar de habilidades e possibilidades'],
      vocab: [
        ['話せる','はなせる','conseguir falar','🗣️'], ['読める','よめる','conseguir ler','📖'], ['食べられる','たべられる','conseguir comer','🍽️'], ['できる','','conseguir fazer / poder','✅'],
        ['うんてん','','direção (dirigir)','🚗'], ['ピアノ','','piano','🎹'], ['ひく','','tocar (instrumento de cordas/teclas)','🎶'], ['かんじ','','kanji','🈶'], ['ぜんぶ','','tudo','💯'], ['すこし','','um pouco','🤏'], ['まだ','','ainda (não)','⏳']
      ],
      kanji: [['漢字','カンジ','—','kanji'],['運転','ウンテン','—','dirigir'],['全部','ゼンブ','—','tudo']],
      grammar: [
        { t: 'Como formar o potencial', d: 'Grupo 1: última sílaba → coluna "e" + る: はなす→はなせる, よむ→よめる, いく→いける. Grupo 2: る → られる: たべる→たべられる (na fala, たべれる). する → できる, くる → こられる.', ex: [['日本語[にほんご] が 話[はな]せます。','Consigo falar japonês.'],['からい もの が 食[た]べられません。','Não consigo comer comida apimentada.']] },
        { t: 'Partícula: を vira が', d: 'Com o potencial, o objeto normalmente vira が.', ex: [['かんじ が 読[よ]めます か。','Você consegue ler kanji?']] },
        { t: 'Substantivo + が できる', d: 'Para habilidades com substantivos.', ex: [['うんてん が できます。','Sei dirigir.'],['ピアノ が ひけます。','Sei tocar piano.']] }
      ],
      sentences: [
        ['日本語[にほんご] が すこし 話[はな]せます。','Consigo falar um pouco de japonês.'], ['かんじ は まだ ぜんぶ 読[よ]めません。','Ainda não consigo ler todos os kanji.'], ['ここ で Wi-Fi が 使[つか]えます か。','Dá para usar Wi-Fi aqui?'],
        ['うんてん が できます か。','Você sabe dirigir?'], ['あした は 来[こ]られません。','Amanhã não posso vir.'], ['なっとう が 食[た]べられる よう に なりました。','Passei a conseguir comer natto.']
      ],
      dialogue: [['A','Bさん、日本語[にほんご] の しんぶん が 読[よ]めます か。','B, você consegue ler jornal em japonês?'],['B','いいえ、まだ 読[よ]めません。でも、NHK の やさしい ニュース は 読[よ]めます。','Não, ainda não. Mas consigo ler as notícias fáceis da NHK.'],['A','すごい ですね！','Incrível!']],
      quiz: [['Potencial de いく:', ['いかれる','いける','いきれる'], 1], ['Potencial de する:', ['しれる','できる','される'], 1]],
      tip: 'Faça a lista "Eu já consigo…" (〜られる) e atualize todo mês. Ver progresso concreto é o maior antídoto contra desistir.',
      mission: 'Escreva 5 coisas que você JÁ consegue fazer em japonês e 5 que quer conseguir até o fim do ano.'
    },
    {
      id: 'm2l10', title: 'Dar e receber', icon: '🎁',
      cando: ['Falar de presentes e favores (あげる・もらう・くれる)', 'Agradecer favores com 〜てくれて'],
      vocab: [
        ['あげる','','dar (eu → outro)','🫴'], ['くれる','','dar (outro → mim)','🎁'], ['もらう','','receber','🤲'], ['花','はな','flor','💐'], ['チョコレート','','chocolate','🍫'],
        ['おしえる','','ensinar','👩‍🏫'], ['てつだう','','ajudar','🙌'], ['かす','','emprestar','📤'], ['かりる','','pegar emprestado','📥'], ['おみやげ','','lembrancinha de viagem','🧁']
      ],
      kanji: [['花','カ','はな','flor'],['教','キョウ','おし(える)','ensinar'],['貸','タイ','か(す)','emprestar'],['借','シャク','か(りる)','pegar emprestado']],
      grammar: [
        { t: 'あげる × くれる × もらう', d: '<b>あげる</b>: eu (ou alguém) dou para outra pessoa — para FORA do meu grupo.<br><b>くれる</b>: alguém me dá — para DENTRO (a mim ou à minha família).<br><b>もらう</b>: receber DE alguém (に／から).', ex: [['私[わたし] は ともだち に 花[はな] を あげました。','Dei flores para um amigo.'],['ともだち が 私[わたし] に 花[はな] を くれました。','Um amigo me deu flores.'],['私[わたし] は ともだち に 花[はな] を もらいました。','Recebi flores de um amigo.']] },
        { t: 'Com favores: 〜てあげる／〜てくれる／〜てもらう', d: 'A mesma lógica com ações. 〜てくれて ありがとう = obrigado por ~.', ex: [['先生[せんせい] が 日本語[にほんご] を おしえて くれました。','O professor me ensinou japonês.'],['てつだって くれて ありがとう！','Obrigado por me ajudar!'],['ともだち に 駅[えき] まで おくって もらいました。','Um amigo me levou até a estação.']] }
      ],
      sentences: [
        ['母[はは] の 日[ひ] に 花[はな] を あげました。','Dei flores no Dia das Mães.'], ['かれし が チョコレート を くれました。','Meu namorado me deu chocolate.'], ['ともだち に おみやげ を もらいました。','Ganhei uma lembrancinha de um amigo.'],
        ['ペン を かして くれません か。','Pode me emprestar uma caneta?'], ['てつだって くれて、ありがとう。','Obrigado por me ajudar.'], ['日本人[にほんじん] の ともだち に 日本語[にほんご] を おしえて もらって います。','Um amigo japonês está me ensinando japonês.']
      ],
      dialogue: [['A','その かばん、かわいい ね。','Que bolsa fofa.'],['B','ありがとう。たんじょうび に あね が くれた の。','Obrigada. Minha irmã me deu no aniversário.'],['A','いい な。私[わたし] は 何[なに] も もらわなかった…','Que inveja. Eu não ganhei nada…'],['B','じゃ、こんど 何[なに] か あげる よ！','Então da próxima vez eu te dou alguma coisa!']],
      quiz: [['Alguém deu algo PARA MIM:', ['あげました','くれました'], 1], ['"Obrigado por me ajudar":', ['てつだってくれてありがとう','てつだってあげてありがとう'], 0]],
      tip: 'Desenhe setas: eu → outro (あげる), outro → eu (くれる). Revise com frases da sua vida: quem te deu o quê no último aniversário?',
      mission: 'Agradeça hoje a alguém por um favor usando "〜てくれて ありがとう" (em japonês ou mentalmente e depois em português).'
    },
    {
      id: 'm2l11', title: 'Condicionais: たら・ば・と', icon: '🔀',
      cando: ['Falar de hipóteses, condições e consequências naturais'],
      vocab: [
        ['もし','','se (hipótese)','❓'], ['たからくじ','','loteria','🎰'], ['あたる','','acertar / ganhar','🎯'], ['おかね','','dinheiro','💰'], ['春','はる','primavera','🌸'],
        ['さく','','florescer','🌼'], ['おす','','apertar','👆'], ['ボタン','','botão','🔘'], ['安い','やすい','barato','🏷️'], ['時間','じかん','tempo','⏳'], ['つく','','chegar / acender','💡']
      ],
      kanji: [['春','シュン','はる','primavera'],['夏','カ','なつ','verão'],['秋','シュウ','あき','outono'],['冬','トウ','ふゆ','inverno'],['間','カン','あいだ','intervalo']],
      grammar: [
        { t: '〜たら — "se/quando" (o mais versátil)', d: 'Forma た + ら. Serve para quase tudo, inclusive "quando (isso acontecer)". Na dúvida, use たら.', ex: [['もし たからくじ が あたったら、日本[にほん] に 住[す]みたい。','Se eu ganhasse na loteria, queria morar no Japão.'],['うち に 着[つ]いたら、れんらく して ね。','Quando chegar em casa, me avise.']] },
        { t: '〜ば — condição', d: 'Grupo 1: coluna "e" + ば (いけば). Grupo 2: れば (たべれば). い-adj: ければ (やすければ). Foco na condição necessária.', ex: [['時間[じかん] が あれば、行[い]きます。','Se tiver tempo, eu vou.'],['安[やす]ければ、かいます。','Se for barato, compro.']] },
        { t: '〜と — consequência natural/automática', d: 'Sempre que A, B acontece. Usado para direções, máquinas, natureza.', ex: [['春[はる] に なる と、さくら が さきます。','Quando chega a primavera, as cerejeiras florescem.'],['この ボタン を おす と、きっぷ が 出[で]ます。','Apertando este botão, sai o bilhete.']] },
        { t: '〜なら — "se for assim / em relação a"', d: 'Usado para reagir ao que o outro disse.', ex: [['日本[にほん] に 行[い]く なら、きょうと が いい よ。','Se você vai ao Japão, Kyoto é uma boa.']] }
      ],
      sentences: [
        ['雨[あめ] が 降[ふ]ったら、うち に います。','Se chover, fico em casa.'], ['時間[じかん] が あれば、てつだいます。','Se tiver tempo, eu ajudo.'], ['みぎ に まがる と、駅[えき] が あります。','Virando à direita, tem a estação.'],
        ['おかね が あったら、何[なに] を したい です か。','Se tivesse dinheiro, o que gostaria de fazer?'], ['ラーメン なら、あの 店[みせ] が いちばん です。','Se é lámen, aquela loja é a melhor.']
      ],
      dialogue: [['A','もし 一億円[いちおくえん] あったら、どう する？','Se você tivesse 100 milhões de ienes, o que faria?'],['B','せかい りょこう を する！ Aさん は？','Daria a volta ao mundo! E você?'],['A','私[わたし] なら、いえ を かう かな。','Eu acho que compraria uma casa.']],
      quiz: [['Para "apertando o botão, sai…" use…', ['たら','と','なら'], 1], ['ば de ある:', ['あれば','あるば','あったば'], 0]],
      tip: 'Se só puder lembrar de um, use たら: funciona em 90% dos casos. Refine os outros com input (vídeos, leitura) ao longo do tempo.',
      mission: 'Responda por escrito: "もし 日本に すんだら、何を したいですか" com 5 frases.'
    },
    {
      id: 'm2l12', title: 'Planos e intenções', icon: '🎯',
      cando: ['Falar de planos e intenções futuras', 'Sugerir de forma casual (〜よう)'],
      vocab: [
        ['つもり','','intenção','🎯'], ['よてい','','plano / agenda','🗓️'], ['らいねん','','ano que vem','📆'], ['しょうらい','','futuro','🔮'], ['りゅうがく','','estudar no exterior','🎓'],
        ['てんしょく','','mudar de emprego','🔄'], ['ひっこす','','mudar de casa','📦'], ['やめる','','parar / largar','🛑'], ['はじめる','','começar','🚀'], ['ゆめ','','sonho','💭']
      ],
      kanji: [['予定','ヨテイ','—','plano'],['来年','ライネン','—','ano que vem'],['始','シ','はじ(める)','começar'],['夢','ム','ゆめ','sonho']],
      grammar: [
        { t: 'Forma volitiva: 〜よう／〜おう', d: '"Vamos ~!" (casual de ましょう). Grupo 1: coluna "o" + う (いく→いこう, のむ→のもう). Grupo 2: よう (たべよう). する→しよう, くる→こよう.', ex: [['いっしょに 行[い]こう！','Vamos juntos!'],['そろそろ 帰[かえ]ろう か。','Vamos embora?']] },
        { t: '〜ようと 思[おも]って います', d: 'Intenção que você está pensando em realizar.', ex: [['らいねん、日本[にほん] に りゅうがく しよう と 思[おも]って います。','Estou pensando em estudar no Japão ano que vem.']] },
        { t: 'Forma simples + つもり です', d: 'Intenção firme.', ex: [['たばこ を やめる つもり です。','Pretendo parar de fumar.']] },
        { t: '〜予定[よてい] です', d: 'Algo já agendado/definido.', ex: [['らいしゅう 大阪[おおさか] に 行[い]く 予定[よてい] です。','Semana que vem tenho programado ir a Osaka.']] }
      ],
      sentences: [
        ['しょうらい、日本[にほん] で 働[はたら]く つもり です。','No futuro, pretendo trabalhar no Japão.'], ['らいげつ ひっこす 予定[よてい] です。','Tenho mudança marcada para o mês que vem.'], ['あたらしい しゅみ を はじめよう と 思[おも]って います。','Estou pensando em começar um hobby novo.'],
        ['ちょっと 休[やす]もう か。','Vamos descansar um pouco?'], ['私[わたし] の ゆめ は 日本語[にほんご] の 通訳[つうやく] に なる こと です。','Meu sonho é ser intérprete de japonês.']
      ],
      dialogue: [['A','なつやすみ の 予定[よてい] は？','Quais são seus planos para as férias de verão?'],['B','日本[にほん] に 行[い]く つもり です。おまつり を 見[み]よう と 思[おも]って います。','Pretendo ir ao Japão. Estou pensando em ver os festivais.'],['A','いい です ね！ どこ の おまつり？','Que legal! Festival de onde?'],['B','京都[きょうと] の ぎおんまつり です。','O Gion Matsuri, de Kyoto.']],
      quiz: [['Volitiva de のむ:', ['のもう','のみよう','のまよう'], 0], ['Algo já agendado:', ['つもり','よてい','ようとおもう'], 1]],
      tip: 'Defina sua meta de japonês em japonês: "いちねんごに N3 に ごうかく する つもりです". Escreva e cole perto da sua mesa.',
      mission: 'Escreva seus planos para os próximos 12 meses (5 frases) usando つもり, 予定 e 〜ようと思っています.'
    },
    {
      id: 'm2l13', title: 'Saúde e ida ao médico', icon: '🏥',
      cando: ['Explicar sintomas', 'Entender conselhos médicos (〜ほうがいい)'],
      vocab: [
        ['頭','あたま','cabeça','🧠'], ['おなか','','barriga','🫃'], ['のど','','garganta','🗣️'], ['はいしゃ','','dentista','🦷'], ['ねつ','','febre','🤒'],
        ['かぜ','','resfriado','🤧'], ['せき','','tosse','😷'], ['いたい','','dói / dolorido','🤕'], ['ぐあい','','condição (de saúde)','🌡️'], ['びょうき','','doença','🦠'], ['けが','','machucado','🩹'], ['ほけんしょう','','cartão do seguro saúde','💳']
      ],
      kanji: [['頭','トウ','あたま','cabeça'],['病','ビョウ','やまい','doença'],['院','イン','—','instituição'],['医','イ','—','medicina'],['痛','ツウ','いた(い)','dor']],
      grammar: [
        { t: '〜んです — explicar a situação', d: 'Forma simples + んです dá um tom de explicação/justificativa. Muito usado para relatar problemas. Pergunta: どうしたんですか (o que houve?).', ex: [['どう した ん です か。','O que houve?'],['頭[あたま] が いたい ん です。','É que estou com dor de cabeça.']] },
        { t: '〜た ほう が いい／〜ない ほう が いい', d: 'Conselho: "é melhor ~ / é melhor não ~".', ex: [['病院[びょういん] に 行[い]った ほう が いい です よ。','É melhor você ir ao hospital.'],['きょう は おふろ に 入[はい]らない ほう が いい です。','Hoje é melhor não tomar banho de banheira.']] }
      ],
      sentences: [
        ['きのう から ねつ が ある ん です。','Estou com febre desde ontem.'], ['のど が いたい です。','Estou com dor de garganta.'], ['くすり を 飲[の]んで、ゆっくり 休[やす]んだ ほう が いい です。','É melhor tomar remédio e descansar bem.'],
        ['ほけんしょう を 持[も]って います か。','Você tem o cartão do seguro?'], ['おだいじに。','Melhoras.'], ['アレルギー が あります。','Tenho alergia.']
      ],
      dialogue: [['医者[いしゃ]','きょう は どう しました か。','O que houve hoje?'],['かんじゃ','おととい から せき が ひどくて、ねつ も ある ん です。','Desde anteontem estou com muita tosse e também febre.'],['医者[いしゃ]','そう です か。かぜ です ね。くすり を 出[だ]します。','Entendo. É um resfriado. Vou receitar um remédio.'],['かんじゃ','しごと に 行[い]っても いい です か。','Posso ir trabalhar?'],['医者[いしゃ]','二日[ふつか] ぐらい は 休[やす]んだ ほう が いい です よ。おだいじに。','É melhor descansar uns dois dias. Melhoras.']],
      quiz: [['"É melhor ir ao hospital":', ['びょういんにいったほうがいい','びょういんにいかないほうがいい'], 0], ['Ao se despedir de alguém doente:', ['おだいじに','おつかれさま'], 0]],
      tip: 'Monte um "kit de emergência" de frases (alergias, tipo sanguíneo, remédios) e guarde no celular. Japonês de sobrevivência é japonês que você revisa com prazer.',
      mission: 'Escreva no celular 5 frases de emergência médica que você usaria no Japão (alergias, remédios que toma…).'
    },
    {
      id: 'm2l14', title: 'Viagem e transporte', icon: '🚄',
      cando: ['Comprar passagens, pegar trem e perguntar sobre baldeações', 'Reservar hotel'],
      vocab: [
        ['しんかんせん','','trem-bala','🚄'], ['きっぷ','','bilhete','🎫'], ['かいさつ','','catraca','🚧'], ['のりかえ','','baldeação','🔁'], ['〜ばんせん','','plataforma nº ~','🔢'],
        ['のる','','embarcar','🚃'], ['おりる','','descer (do veículo)','⬇️'], ['かかる','','levar (tempo/dinheiro)','⏱️'], ['よやく','','reserva','📝'], ['チェックイン','','check-in','🛎️'], ['かたみち','','só ida','➡️'], ['おうふく','','ida e volta','🔄']
      ],
      kanji: [['乗','ジョウ','の(る)','embarcar'],['降','コウ','お(りる)','descer'],['新幹線','シンカンセン','—','trem-bala'],['予約','ヨヤク','—','reserva']],
      grammar: [
        { t: '〜まで いくら／どのぐらい かかりますか', d: 'Perguntar preço e tempo de viagem.', ex: [['京都[きょうと] まで どのぐらい かかります か。','Quanto tempo leva até Kyoto?'],['にじかん ぐらい かかります。','Leva umas duas horas.']] },
        { t: '〜に のる／〜を おりる', d: 'Embarcar EM (に); descer DE (を).', ex: [['山手線[やまのてせん] に のって、しぶや で おりて ください。','Pegue a linha Yamanote e desça em Shibuya.']] },
        { t: '〜で のりかえる', d: 'Fazer baldeação em…', ex: [['しんじゅく で のりかえて ください。','Faça baldeação em Shinjuku.']] }
      ],
      sentences: [
        ['京都[きょうと] まで おうふく で 一枚[いちまい] ください。','Uma passagem de ida e volta para Kyoto, por favor.'], ['この でんしゃ は しぶや に とまります か。','Este trem para em Shibuya?'], ['なんばんせん から 出[で]ます か。','De qual plataforma sai?'],
        ['どこ で のりかえ ます か。','Onde faço baldeação?'], ['よやく した シルバ です。','Sou o Silva, fiz uma reserva.'], ['チェックイン は なんじ から です か。','A partir de que horas é o check-in?']
      ],
      dialogue: [['客[きゃく]','すみません、大阪[おおさか] まで しんかんせん で いくら です か。','Com licença, quanto custa o trem-bala até Osaka?'],['駅員[えきいん]','していせき で いちまん よんせん えん ぐらい です。','Uns 14.000 ienes em assento reservado.'],['客[きゃく]','どのぐらい かかります か。','Quanto tempo leva?'],['駅員[えきいん]','のぞみ で にじかん はん ぐらい です。','Umas duas horas e meia no Nozomi.'],['客[きゃく]','じゃ、かたみち 一枚[いちまい] おねがいします。','Então, uma só de ida, por favor.']],
      quiz: [['"Descer do trem":', ['でんしゃにおりる','でんしゃをおりる'], 1], ['のりかえ significa…', ['reserva','baldeação','catraca'], 1]],
      tip: 'Simulação de viagem: planeje no Google Maps (em japonês) um roteiro Tóquio → Kyoto e leia em voz alta cada instrução de transporte.',
      mission: 'Planeje uma viagem fictícia de 3 dias no Japão e escreva o roteiro de transporte em japonês.'
    },
    {
      id: 'm2l15', title: 'Konbini e restaurante (japonês real)', icon: '🏪',
      cando: ['Entender o que atendentes falam (keigo de loja)', 'Resolver tudo numa loja ou restaurante sem travar'],
      vocab: [
        ['いらっしゃいませ','','bem-vindo (loja)','🙇'], ['おべんとう','','marmita','🍱'], ['あたためる','','esquentar','♨️'], ['おはし','','hashi','🥢'], ['ポイントカード','','cartão de pontos','💳'],
        ['おかいけい','','conta / pagamento','🧾'], ['べつべつ','','separado','➗'], ['いっしょ','','junto','➕'], ['てんないで','','para comer aqui','🍽️'], ['おもちかえり','','para viagem','🥡'], ['しょうしょう','','um momento (formal)','⏳']
      ],
      kanji: [['店内','テンナイ','—','dentro da loja'],['会計','カイケイ','—','conta'],['弁当','ベントウ','—','marmita']],
      grammar: [
        { t: 'Frases que o atendente vai dizer', d: 'Você não precisa falar keigo, mas precisa ENTENDER: <br>おべんとう、あたためますか (Esquento a marmita?)<br>ポイントカード は おもちですか (Tem cartão de pontos?)<br>おはし は おつけしますか (Coloco hashi?)<br>てんないで おめしあがりですか (Vai comer aqui?)<br>しょうしょう おまちください (Aguarde um momento).', ex: [['あたためますか。','Esquento?'],['ポイントカード は お持[も]ち です か。','Tem cartão de pontos?']] },
        { t: 'Respostas curtas e naturais', d: 'はい、おねがいします (sim, por favor) / いいえ、だいじょうぶです (não, tudo bem) / けっこうです (não, obrigado).', ex: [['いいえ、だいじょうぶ です。','Não, tudo bem.'],['はい、おねがいします。','Sim, por favor.']] },
        { t: 'No restaurante', d: 'なんめいさま ですか (Quantas pessoas?) → ふたり です. おきまりですか (Já decidiram?). おかいけい おねがいします (A conta, por favor).', ex: [['なんめいさま です か。','Quantas pessoas?'],['おかいけい、おねがいします。','A conta, por favor.']] }
      ],
      sentences: [
        ['あたためて ください。','Esquente, por favor.'], ['ふくろ は だいじょうぶ です。','Não preciso de sacola.'], ['てんないで おねがいします。','Para comer aqui, por favor.'],
        ['おもちかえり で。','Para viagem.'], ['おかいけい は べつべつ で おねがいします。','A conta separada, por favor.'], ['これ、ひとつ おねがいします。','Um destes, por favor.']
      ],
      dialogue: [['店員[てんいん]','いらっしゃいませ。おべんとう、あたためますか。','Bem-vindo. Esquento a marmita?'],['客[きゃく]','はい、おねがいします。','Sim, por favor.'],['店員[てんいん]','おはし は おつけしますか。','Coloco hashi?'],['客[きゃく]','はい、ひとつ ください。','Sim, um por favor.'],['店員[てんいん]','ポイントカード は おもち ですか。','Tem cartão de pontos?'],['客[きゃく]','いいえ、だいじょうぶ です。','Não, tudo bem.'],['店員[てんいん]','ごひゃく よんじゅう えん に なります。','Fica 540 ienes.']],
      quiz: [['あたためますか significa…', ['Quer sacola?','Esquento?','Para viagem?'], 1], ['"Para viagem" é…', ['てんないで','おもちかえりで'], 1]],
      tip: 'Assista a vídeos POV de "konbini em Japão" e pause antes de cada fala do atendente, respondendo em voz alta. Simulação = confiança no dia real.',
      mission: 'Assista a um vídeo de compra em konbini (link da aula) e responda em voz alta a todas as perguntas do atendente.'
    }
  ]
});
