// Módulo 3 — B1 / JLPT N3: independência — trabalho, keigo, nuances e leitura real.
window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: 'm3', title: 'Intermediário', level: 'B1 · N3', color: '#ce82ff', icon: '⛩️',
  desc: 'Passiva, causativa, keigo, nuances de suposição, trabalho e leitura de notícias.',
  lessons: [
    {
      id: 'm3l1', title: 'Voz passiva', icon: '🔄',
      cando: ['Dizer o que foi feito a você ou a algo', 'Entender a "passiva do incômodo"'],
      vocab: [
        ['しかる','','repreender','😠'], ['ほめる','','elogiar','👏'], ['ぬすむ','','roubar','🦹'], ['さいふ','','carteira','👛'], ['ふむ','','pisar','🦶'],
        ['たてる','','construir','🏗️'], ['はつめいする','','inventar','💡'], ['ひらく','','realizar (evento) / abrir','🎪'], ['世界中','せかいじゅう','mundo inteiro','🌍'], ['ゆしゅつする','','exportar','🚢']
      ],
      kanji: [['世界','セカイ','—','mundo'],['盗','トウ','ぬす(む)','roubar'],['建','ケン','た(てる)','construir'],['開','カイ','ひら(く)','abrir']],
      grammar: [
        { t: 'Formação: 〜れる／〜られる', d: 'Grupo 1: coluna "a" + れる (しかる→しかられる, よむ→よまれる, いう→いわれる). Grupo 2: られる (ほめる→ほめられる). する→される, くる→こられる.', ex: [['先生[せんせい] に ほめられました。','Fui elogiado pelo professor.'],['母[はは] に しかられた。','Levei bronca da minha mãe.']] },
        { t: 'Passiva do incômodo (迷惑の受身)', d: 'Típica do japonês: algo acontece e AFETA você negativamente. Até verbos intransitivos entram.', ex: [['電車[でんしゃ] で さいふ を ぬすまれました。','Roubaram minha carteira no trem.'],['雨[あめ] に 降[ふ]られて、ぬれて しまった。','Peguei chuva e fiquei encharcado.']] },
        { t: 'Passiva impessoal (fatos, notícias)', d: 'Muito comum em textos formais.', ex: [['この お寺[てら] は 700年前[ねんまえ] に たてられました。','Este templo foi construído há 700 anos.'],['日本[にほん] の アニメ は 世界中[せかいじゅう] で 見[み]られて います。','Os animes japoneses são vistos no mundo inteiro.']] }
      ],
      sentences: [
        ['電車[でんしゃ] で 足[あし] を ふまれました。','Pisaram no meu pé no trem.'], ['ぶちょう に しごと を たのまれました。','O chefe me pediu um trabalho.'], ['この 本[ほん] は 多[おお]く の 人[ひと] に 読[よ]まれて います。','Este livro é lido por muitas pessoas.'],
        ['オリンピック は 2021年[ねん] に とうきょう で ひらかれました。','As Olimpíadas foram realizadas em Tóquio em 2021.'], ['こども に なかれて、ねられなかった。','O bebê chorou e eu não consegui dormir.']
      ],
      dialogue: [['A','げんき ない ね。どう した の？','Você está desanimado. O que houve?'],['B','きのう、ぶちょう に みんな の 前[まえ] で しかられた ん だ。','Ontem levei bronca do chefe na frente de todo mundo.'],['A','それ は つらい ね…','Que duro…'],['B','しかも、かえり に 雨[あめ] に 降[ふ]られて…','E ainda peguei chuva na volta…']],
      quiz: [['Passiva de いう:', ['いわれる','いられる','いえる'], 0], ['雨に降られた transmite…', ['algo neutro','um incômodo para quem fala'], 1]],
      tip: 'Leia manchetes: a passiva é onipresente em notícias (〜と見られる, 〜が開かれた). Leia 3 manchetes da NHK por dia e sublinhe as passivas.',
      mission: 'Conte um "dia de azar" (real ou inventado) com 4 frases na passiva do incômodo.'
    },
    {
      id: 'm3l2', title: 'Causativa e causativa-passiva', icon: '🎬',
      cando: ['Dizer que fez/deixou alguém fazer algo', 'Reclamar de ser obrigado a fazer algo', 'Pedir permissão humilde (〜させてください)'],
      vocab: [
        ['させる','','fazer fazer / deixar','👉'], ['ならう','','aprender (com alguém)','🧑‍🎓'], ['そうじ','','limpeza','🧹'], ['ざんぎょう','','hora extra','🌙'], ['まつ','','esperar','⏳'],
        ['やすませる','','deixar descansar','🛋️'], ['わらわせる','','fazer rir','😂'], ['なかせる','','fazer chorar','😭'], ['しんぱいさせる','','preocupar (alguém)','😟'], ['発表','はっぴょう','apresentação','🎤']
      ],
      kanji: [['習','シュウ','なら(う)','aprender'],['発表','ハッピョウ','—','apresentação'],['残業','ザンギョウ','—','hora extra']],
      grammar: [
        { t: 'Causativa: 〜せる／〜させる', d: 'Grupo 1: coluna "a" + せる (いく→いかせる, よむ→よませる). Grupo 2: させる (たべる→たべさせる). する→させる, くる→こさせる. Significa OBRIGAR ou DEIXAR, conforme o contexto.', ex: [['母[はは] は 子[こ]ども に やさい を 食[た]べさせました。','A mãe fez a criança comer verduras.'],['父[ちち] は 私[わたし] を 留学[りゅうがく] させて くれました。','Meu pai me deixou estudar no exterior.']] },
        { t: '〜させて ください／いただけませんか', d: 'Forma humilde e muito útil de pedir permissão para VOCÊ fazer algo.', ex: [['きょう は 早[はや]く 帰[かえ]らせて ください。','Deixe-me ir embora cedo hoje, por favor.'],['私[わたし] に 発表[はっぴょう] させて いただけません か。','Poderia me deixar fazer a apresentação?']] },
        { t: 'Causativa-passiva: ser obrigado', d: '〜させられる (Grupo 1 pode encurtar: いかせられる→いかされる). "Fui obrigado a ~".', ex: [['子[こ]ども の とき、ピアノ を ならわされました。','Quando criança, fui obrigado a fazer aula de piano.'],['きのう、2時間[じかん] も 待[ま]たされました。','Ontem me fizeram esperar 2 horas.']] }
      ],
      sentences: [
        ['しんぱい させて、ごめんなさい。','Desculpe por te preocupar.'], ['ちょっと 考[かんが]えさせて ください。','Deixe-me pensar um pouco.'], ['かれ は いつも みんな を わらわせます。','Ele sempre faz todo mundo rir.'],
        ['毎日[まいにち] ざんぎょう させられて います。','Sou obrigado a fazer hora extra todo dia.'], ['その しごと、私[わたし] に やらせて ください。','Deixe esse trabalho comigo.']
      ],
      dialogue: [['部下[ぶか]','ぶちょう、あした の 発表[はっぴょう]、私[わたし] に やらせて いただけません か。','Chefe, poderia me deixar fazer a apresentação de amanhã?'],['部長[ぶちょう]','いい よ。がんばって。','Pode. Boa sorte.'],['部下[ぶか]','ありがとうございます！','Muito obrigado!']],
      quiz: [['"Deixe-me pensar":', ['かんがえさせてください','かんがえられてください'], 0], ['させられる expressa…', ['permitir','ser obrigado a'], 1]],
      tip: 'Compare as 4 vozes do mesmo verbo numa tabela: 食べる / 食べられる / 食べさせる / 食べさせられる. Ver o padrão inteiro evita confusão.',
      mission: 'Escreva 3 coisas que seus pais te fizeram fazer quando criança (causativa-passiva) e 2 que te deixaram fazer (〜させてくれた).'
    },
    {
      id: 'm3l3', title: 'Keigo 1: linguagem respeitosa (尊敬語)', icon: '🎩',
      cando: ['Falar com respeito sobre ações de clientes, chefes e desconhecidos'],
      vocab: [
        ['いらっしゃる','','ir / vir / estar (resp.)','🎩'], ['おっしゃる','','dizer (resp.)','💬'], ['めしあがる','','comer / beber (resp.)','🍽️'], ['ごらんになる','','ver (resp.)','👀'], ['なさる','','fazer (resp.)','🛠️'],
        ['ごぞんじ','','saber (resp.)','💡'], ['おきゃくさま','','cliente (resp.)','👔'], ['しゃちょう','','presidente da empresa','🏢'], ['おかけください','','sente-se, por favor','🪑'], ['おまちください','','aguarde, por favor','⏳']
      ],
      kanji: [['社長','シャチョウ','—','presidente'],['客','キャク','—','cliente, visita'],['様','ヨウ','さま','Sr./Sra. (resp.)']],
      grammar: [
        { t: 'O que é keigo', d: '<b>丁寧語</b> (です/ます) — educado. <b>尊敬語</b> — eleva a ação de OUTRA pessoa. <b>謙譲語</b> — rebaixa a SUA ação (próxima aula). Regra: nunca use 尊敬語 para si mesmo.', ex: [['しゃちょう は いま いらっしゃいます か。','O presidente está?']] },
        { t: 'Verbos especiais', d: 'いく/くる/いる → いらっしゃる | いう → おっしゃる | たべる/のむ → めしあがる | みる → ごらんになる | する → なさる | しっている → ごぞんじだ.', ex: [['何[なに] を めしあがります か。','O que o senhor vai comer?'],['先生[せんせい] が そう おっしゃいました。','O professor disse isso.']] },
        { t: 'Regra geral: お＋ます-stem＋になる', d: 'Para os demais verbos: まつ → おまちになる, かえる → おかえりになる. Pedido: お＋stem＋ください (おまちください). Também funciona a passiva: よまれる.', ex: [['しゃちょう は もう おかえりに なりました。','O presidente já foi embora.'],['こちら で しょうしょう おまち ください。','Aguarde aqui um momento, por favor.']] }
      ],
      sentences: [
        ['どちら に お住[す]まい です か。','Onde o(a) senhor(a) mora?'], ['この 本[ほん] を ごらんに なりました か。','O senhor já viu este livro?'], ['どうぞ、おかけ ください。','Sente-se, por favor.'],
        ['何[なに] を めしあがります か。','O que vai querer comer?'], ['田中[たなか]さま、いらっしゃいます か。','O sr. Tanaka está?'], ['この ニュース を ごぞんじ です か。','O senhor está sabendo desta notícia?']
      ],
      dialogue: [['受付[うけつけ]','いらっしゃいませ。おなまえ を うかがっても よろしい でしょうか。','Bem-vindo. Posso saber seu nome?'],['客[きゃく]','ABC会社[がいしゃ] の シルバ です。','Sou Silva, da empresa ABC.'],['受付[うけつけ]','シルバさま です ね。どうぞ、こちら に おかけ ください。しょうしょう おまち ください。','Sr. Silva. Por favor, sente-se aqui. Aguarde um momento.']],
      quiz: [['Respeitoso de いう:', ['もうす','おっしゃる','いらっしゃる'], 1], ['Pode usar 尊敬語 sobre si mesmo?', ['Sim','Nunca'], 1]],
      tip: 'Keigo se aprende com "scripts" prontos, não com regras. Assista a vídeos de atendimento em lojas/hotéis japoneses e copie frases inteiras.',
      mission: 'Reescreva 5 frases do seu dia a dia (perguntas a um cliente ou chefe) usando 尊敬語.'
    },
    {
      id: 'm3l4', title: 'Keigo 2: linguagem humilde e e-mails', icon: '📧',
      cando: ['Falar de si de forma humilde no trabalho', 'Escrever um e-mail formal simples'],
      vocab: [
        ['まいる','','ir / vir (humilde)','🙇'], ['もうす','','dizer / chamar-se (humilde)','💬'], ['いたす','','fazer (humilde)','🛠️'], ['いただく','','receber / comer (humilde)','🤲'], ['うかがう','','visitar / perguntar (humilde)','🚪'],
        ['はいけんする','','ver (humilde)','👀'], ['ぞんじる','','saber (humilde)','💡'], ['おる','','estar (humilde)','🧍'], ['おせわになっております','','(abertura de e-mail)','📧'], ['よろしくおねがいいたします','','(fechamento formal)','🙏']
      ],
      kanji: [['申','シン','もう(す)','dizer (hum.)'],['参','サン','まい(る)','ir (hum.)'],['伺','シ','うかが(う)','visitar (hum.)'],['致','チ','いた(す)','fazer (hum.)']],
      grammar: [
        { t: '謙譲語: rebaixar a própria ação', d: 'いく/くる → まいる | いう → もうす | する → いたす | もらう/たべる → いただく | きく/たずねる → うかがう | みる → はいけんする | いる → おる | しっている → ぞんじております.', ex: [['シルバ と もうします。','Chamo-me Silva.'],['あした 10時[じ] に まいります。','Irei amanhã às 10.']] },
        { t: 'お／ご＋stem＋する', d: 'Para ações que você faz PELO outro: もつ → おもちします, あんないする → ごあんないします.', ex: [['おにもつ を おもち します。','Eu levo sua bagagem.'],['かいぎしつ に ごあんない します。','Vou acompanhá-lo à sala de reunião.']] },
        { t: 'Estrutura de e-mail de trabalho', d: 'Destinatário (会社名 + 名前 + 様) → おせわになっております。→ 〇〇の△△です。→ assunto → よろしくおねがいいたします。', ex: [['いつも おせわ に なって おります。','Agradeço sempre pela atenção.'],['ごかくにん の ほど、よろしく おねがい いたします。','Peço que verifique, por favor.']] }
      ],
      sentences: [
        ['はじめまして、シルバ と もうします。','Muito prazer, chamo-me Silva.'], ['しりょう を はいけん しました。','Vi os documentos.'], ['あした おたく に うかがいます。','Irei à sua casa amanhã.'],
        ['ぶちょう は いま せき を はずして おります。','O gerente não está na mesa no momento.'], ['のちほど、おでんわ いたします。','Ligo mais tarde.'], ['よろしく おねがい いたします。','Conto com sua colaboração.']
      ],
      dialogue: [['A','もしもし、ABC会社[がいしゃ] の シルバ と もうします。田中[たなか]さま は いらっしゃいます か。','Alô, aqui é Silva, da empresa ABC. O sr. Tanaka está?'],['B','もうしわけ ございません。田中[たなか] は ただいま 外出[がいしゅつ] して おります。','Sinto muito. Tanaka está fora no momento.'],['A','そう です か。では、また のちほど おでんわ いたします。','Entendo. Então, ligo mais tarde.']],
      quiz: [['"Chamo-me Silva" (humilde):', ['シルバとおっしゃいます','シルバともうします'], 1], ['Falando do SEU chefe para um cliente, usa-se…', ['尊敬語 (いらっしゃる)','謙譲語 (おる)'], 1]],
      tip: 'Atenção: falando com alguém de FORA da empresa, até seu chefe é "do seu grupo" — use humilde e sem さん (田中は おりません). Essa regra de dentro/fora (内・外) é a chave do keigo.',
      mission: 'Escreva um e-mail formal curto pedindo para remarcar uma reunião, usando a estrutura da aula.'
    },
    {
      id: 'm3l5', title: 'Parece que…: そう・よう・らしい・みたい', icon: '🔍',
      cando: ['Expressar aparência, suposição e boatos com nuances corretas'],
      vocab: [
        ['おいしそう','','parece gostoso','🤤'], ['ふりそう','','parece que vai chover/cair','🌥️'], ['うわさ','','boato','🗣️'], ['てんきよほう','','previsão do tempo','📡'], ['けっこん','','casamento','💒'],
        ['やめる','','sair (do emprego)','🚪'], ['まるで','','como se fosse','🎭'], ['ゆめ','','sonho','💭'], ['かぜ','','resfriado','🤧'], ['どうやら','','pelo jeito','🧐']
      ],
      kanji: [['様','ヨウ','さま','aparência, modo'],['予報','ヨホウ','—','previsão'],['夢','ム','ゆめ','sonho']],
      grammar: [
        { t: '〜そう（だ）— aparência (o que você vê)', d: 'Stem do verbo / adj. sem い + そう. Baseado no que se vê. いい → よさそう, ない → なさそう.', ex: [['この ケーキ、おいしそう！','Este bolo parece gostoso!'],['雨[あめ] が ふりそう です。','Parece que vai chover.']] },
        { t: 'Forma simples + そうだ — "dizem que"', d: 'Informação de terceiros (boato, notícia).', ex: [['てんきよほう に よる と、あした は 雨[あめ] だ そう です。','Segundo a previsão, dizem que amanhã chove.']] },
        { t: '〜ようだ／〜みたいだ — dedução por indícios', d: 'Conclusão sua a partir de evidências. みたい é a versão falada. Também "como se": まるで ゆめ の よう.', ex: [['だれ も いない よう です。','Parece que não há ninguém.'],['かぜ を ひいた みたい。','Acho que peguei resfriado.'],['まるで ゆめ みたい！','Parece um sonho!']] },
        { t: '〜らしい — ouvi dizer / típico de', d: 'Informação indireta (mais distante que よう). Também "típico de": 男[おとこ]らしい.', ex: [['田中[たなか]さん、会社[かいしゃ] を やめる らしい よ。','Parece que o Tanaka vai sair da empresa.']] }
      ],
      sentences: [
        ['たのしそう です ね。','Parece divertido, né.'], ['あの 二人[ふたり] は つきあって いる みたい だ。','Parece que aqueles dois estão namorando.'], ['ニュース に よる と、じしん が あった そう です。','Segundo o noticiário, houve um terremoto.'],
        ['かれ は 何[なに] も 知[し]らない よう です。','Parece que ele não sabe de nada.'], ['きょう は ひま そう だ ね。','Hoje você parece estar livre.']
      ],
      dialogue: [['A','ねえ、きいた？ 山田[やまだ]さん、らいげつ けっこん する らしい よ。','Ei, soube? Parece que a Yamada vai casar mês que vem.'],['B','えっ、ほんとう？ さいきん うれしそう だった の は その せい か。','Sério? Então é por isso que ela parecia feliz ultimamente.'],['A','あいて は 同[おな]じ 会社[かいしゃ] の 人[ひと] みたい。','Parece que é alguém da mesma empresa.']],
      quiz: [['Vendo um bolo: "parece gostoso"', ['おいしいそう','おいしそう','おいしいらしい'], 1], ['"Dizem que amanhã chove":', ['あめがふりそう','あめだそうです'], 1]],
      tip: 'Não decore definições: colecione 5 frases-modelo de cada (そう, よう, らしい, みたい) das legendas de séries e compare os contextos.',
      mission: 'Observe 3 fotos no Instagram/notícias e descreva cada uma com そう, みたい ou らしい.'
    },
    {
      id: 'm3l6', title: 'Propósito: ために e ように', icon: '🎯',
      cando: ['Explicar objetivos e propósitos', 'Falar de mudanças de hábito (〜ようになる／〜ようにする)'],
      vocab: [
        ['ためる','','juntar (dinheiro)','🐷'], ['けんこう','','saúde','💚'], ['うんどう','','exercício físico','🏃'], ['ごうかく','','aprovação (em exame)','🏆'], ['しけん','','prova / exame','📝'],
        ['まにあう','','chegar a tempo','⏰'], ['きこえる','','ser audível','👂'], ['みえる','','ser visível','👁️'], ['気をつける','きをつける','tomar cuidado','⚠️'], ['しゅうかん','','hábito','🔁']
      ],
      kanji: [['健康','ケンコウ','—','saúde'],['運動','ウンドウ','—','exercício'],['試験','シケン','—','exame'],['合格','ゴウカク','—','aprovação']],
      grammar: [
        { t: '〜ために — propósito (ação controlável)', d: 'Verbo de VONTADE (forma de dicionário) ou substantivo + の ために. Sujeitos iguais.', ex: [['日本[にほん] に 行[い]く ために、お金[かね] を ためて います。','Estou juntando dinheiro para ir ao Japão.'],['けんこう の ために、毎日[まいにち] うんどう します。','Faço exercício todo dia pela saúde.']] },
        { t: '〜ように — para que (estado/potencial/negativo)', d: 'Com potencial, verbos não-volitivos (みえる, きこえる) ou negativo.', ex: [['うしろ の 人[ひと] も きこえる ように、大[おお]きい 声[こえ] で 話[はな]して ください。','Fale alto para que quem está atrás também ouça.'],['わすれない ように、メモ します。','Anoto para não esquecer.']] },
        { t: '〜ように なる／〜ように する', d: 'なる = passar a (conseguir) fazer; する = esforçar-se para fazer como hábito.', ex: [['日本語[にほんご] の ニュース が わかる ように なりました。','Passei a entender notícias em japonês.'],['毎日[まいにち] やさい を 食[た]べる ように して います。','Procuro comer verduras todo dia.']] }
      ],
      sentences: [
        ['N3 に ごうかく する ために、毎日[まいにち] べんきょう して います。','Estudo todos os dias para passar no N3.'], ['かぜ を ひかない ように 気[き]を つけて ください。','Tome cuidado para não pegar resfriado.'], ['かんじ が 読[よ]める ように なりました。','Passei a conseguir ler kanji.'],
        ['まいばん 11時[じ] まで に ねる ように して います。','Procuro dormir até as 11 toda noite.'], ['かぞく の ために 働[はたら]いて います。','Trabalho pela minha família.']
      ],
      dialogue: [['A','さいきん、日本語[にほんご] が すごく じょうず に なった ね。','Seu japonês melhorou muito ultimamente.'],['B','ありがとう。毎日[まいにち] 日本語[にほんご] で にっき を 書[か]く ように して いる ん だ。','Obrigado. Tenho procurado escrever um diário em japonês todo dia.'],['A','えらい！ 何[なに] の ために そんな に がんばって る の？','Que dedicação! Por que está se esforçando tanto?'],['B','日本[にほん] で 働[はたら]く ため だ よ。','Para trabalhar no Japão.']],
      quiz: [['"Anoto para não esquecer":', ['わすれないためにメモする','わすれないようにメモする'], 1], ['"Passei a conseguir ler":', ['よめるようになった','よめるようにした'], 0]],
      tip: 'Defina "implementation intentions": "Depois de [hábito existente], vou [estudar japonês]". Ex.: 朝ごはんを 食べたあと、アプリで 復習する ように しています.',
      mission: 'Escreva 3 hábitos que você vai criar para o japonês usando 〜ようにします.'
    },
    {
      id: 'm3l7', title: 'Nuances: はず・わけ・ところ・ばかり', icon: '🧭',
      cando: ['Expressar expectativa, conclusão lógica, momento exato e "acabou de"'],
      vocab: [
        ['はず','','deve (expectativa)','🤞'], ['わけ','','razão / conclusão','🧩'], ['ところ','','momento / ponto','⏱️'], ['ばかり','','só / acabou de','🆕'], ['とどく','','chegar (entrega)','📦'],
        ['にもつ','','encomenda / bagagem','📦'], ['しゅっぱつ','','partida','🛫'], ['なるほど','','entendi / faz sentido','💡'], ['どうりで','','não é à toa','🙌'], ['文句','もんく','reclamação','😤']
      ],
      kanji: [['出発','シュッパツ','—','partida'],['荷物','ニモツ','—','bagagem'],['届','—','とど(く)','chegar (entrega)']],
      grammar: [
        { t: '〜はずだ — "deve ser / era para ~"', d: 'Expectativa baseada em fatos. はずがない = não tem como.', ex: [['にもつ は きょう とどく はず です。','A encomenda deve chegar hoje.'],['かれ が うそ を つく はず が ない。','Não tem como ele mentir.']] },
        { t: '〜わけだ／わけではない／わけがない', d: 'わけだ = conclusão lógica ("por isso"); わけではない = "não é que…" (negação parcial); わけがない = impossível.', ex: [['10年[ねん] も 日本[にほん] に 住[す]んで いた の か。日本語[にほんご] が じょうず な わけ だ。','Morou 10 anos no Japão? Por isso fala tão bem.'],['きらい な わけ では ない けど…','Não é que eu não goste, mas…']] },
        { t: 'Momento: 〜る／〜ている／〜たところ', d: 'る ところ = prestes a; ている ところ = no meio de; た ところ = acabei de.', ex: [['いま 出[で]かける ところ です。','Estou prestes a sair.'],['いま 食[た]べて いる ところ。','Estou bem no meio da refeição.'],['いま 着[つ]いた ところ です。','Acabei de chegar.']] },
        { t: '〜たばかり／〜ばかり', d: 'た ばかり = acabou de (sensação subjetiva, pode ser dias). Substantivo/て + ばかり = "só faz isso".', ex: [['日本[にほん] に 来[き]た ばかり です。','Acabei de chegar ao Japão (faz pouco).'],['かれ は ゲーム ばかり して いる。','Ele só fica jogando.']] }
      ],
      sentences: [
        ['かいぎ は 3時[じ] に おわる はず です。','A reunião deve terminar às 3.'], ['どうりで さむい わけ だ。雪[ゆき] が ふって いる。','Não é à toa que está frio: está nevando.'], ['いま 家[いえ] を 出[で]た ところ です。','Acabei de sair de casa.'],
        ['この スマホ は かった ばかり なのに、こわれた。','Acabei de comprar este celular e já quebrou.'], ['お金[かね] が ほしい わけ では ありません。','Não é que eu queira dinheiro.']
      ],
      dialogue: [['A','あれ？ 山田[やまだ]さん、まだ 来[こ]ない ね。','Ué, a Yamada ainda não chegou.'],['B','おかしい な。10時[じ] に 着[つ]く はず なんだ けど。','Estranho. Era para ela chegar às 10.'],['A','あ、いま メッセージ が 来[き]た。「いま 駅[えき] に 着[つ]いた ところ」だって。','Ah, chegou mensagem agora: "Acabei de chegar na estação".'],['B','なるほど、電車[でんしゃ] が おくれた わけ か。','Entendi, então o trem atrasou.']],
      quiz: [['"Acabei de chegar (agora mesmo)":', ['ついたところ','つくところ','ついているところ'], 0], ['わけではない significa…', ['impossível','não é que…','por isso'], 1]],
      tip: 'Essas nuances aparecem MUITO em diálogos de dramas. Assista com legendas em japonês e crie cartões SRS com as frases reais onde aparecem (sentence mining).',
      mission: 'Faça sentence mining: pegue 5 frases com はず/わけ/ところ de um vídeo ou série e adicione à sua revisão.'
    },
    {
      id: 'm3l8', title: 'Transitivos × intransitivos e 〜てある／おく／しまう', icon: '🚪',
      cando: ['Usar pares como あける／あく', 'Falar de preparação (〜ておく), estados (〜てある) e arrependimento (〜てしまう)'],
      vocab: [
        ['あける','','abrir (algo)','🚪'], ['あく','','abrir-se','🔓'], ['しめる','','fechar (algo)','🔒'], ['しまる','','fechar-se','🚪'], ['つける','','ligar (algo)','💡'],
        ['つく','','ligar-se / acender','🔆'], ['こわす','','quebrar (algo)','🔨'], ['こわれる','','quebrar-se','💔'], ['おとす','','deixar cair','⬇️'], ['おちる','','cair','🍂'], ['じゅんび','','preparação','🧰'], ['なくす','','perder (algo)','❓']
      ],
      kanji: [['開','カイ','あ(ける)・あ(く)','abrir'],['閉','ヘイ','し(める)・し(まる)','fechar'],['落','ラク','お(ちる)・お(とす)','cair'],['準備','ジュンビ','—','preparação']],
      grammar: [
        { t: 'Transitivo (を) × intransitivo (が)', d: 'Transitivo: alguém faz algo com um objeto (ドア を あける). Intransitivo: a coisa acontece sozinha (ドア が あく). Japonês prefere o intransitivo para não culpar ninguém: さら が われました (o prato quebrou).', ex: [['まど を あけて ください。','Abra a janela, por favor.'],['まど が あいて います。','A janela está aberta.']] },
        { t: '〜てある — estado resultante intencional', d: 'Com transitivo: alguém deixou assim de propósito.', ex: [['かべ に カレンダー が はって あります。','Há um calendário pregado na parede (alguém pregou).']] },
        { t: '〜ておく — fazer com antecedência / deixar', d: 'Na fala: 〜とく.', ex: [['パーティー の 前[まえ] に ビール を かって おきます。','Vou comprar cerveja antes da festa (para deixar pronto).'],['まど は あけて おいて ください。','Deixe a janela aberta, por favor.']] },
        { t: '〜てしまう — completar / arrependimento', d: 'Na fala: 〜ちゃう／〜じゃう.', ex: [['さいふ を なくして しまいました。','Acabei perdendo a carteira.'],['ケーキ、ぜんぶ 食[た]べちゃった！','Comi o bolo inteiro!']] }
      ],
      sentences: [
        ['電気[でんき] が ついて います。','A luz está acesa.'], ['へや の かぎ を しめて おいて ね。','Deixe o quarto trancado, tá?'], ['テーブル の 上[うえ] に メモ が おいて あります。','Tem um bilhete deixado sobre a mesa.'],
        ['スマホ を おとして、がめん が われて しまった。','Deixei o celular cair e a tela rachou.'], ['りょこう の 前[まえ] に ホテル を よやく して おきました。','Reservei o hotel antes da viagem.']
      ],
      dialogue: [['A','あれ、ドア が あいて る よ。','Ué, a porta está aberta.'],['B','あ、ごめん。さっき あけて、しめる の を わすれちゃった。','Ah, desculpa. Abri agora há pouco e esqueci de fechar.'],['A','あした は 早[はや]い から、もう 準備[じゅんび] して おいた ほう が いい よ。','Amanhã é cedo, é melhor já deixar tudo preparado.']],
      quiz: [['"A porta se abriu" (sozinha):', ['ドアをあけた','ドアがあいた'], 1], ['"Acabei comendo tudo" (casual):', ['たべちゃった','たべておいた'], 0]],
      tip: 'Estude pares transitivo/intransitivo sempre juntos em um único cartão (あける／あく). Padrões de terminação ajudam: -eru transitivo × -aru intransitivo (しめる/しまる).',
      mission: 'Ande pela casa e descreva o estado das coisas: 3 frases com 〜ている (intransitivo) e 3 com 〜てある.'
    },
    {
      id: 'm3l9', title: 'Trabalho no Japão: entrevista e escritório', icon: '💼',
      cando: ['Apresentar-se numa entrevista de emprego', 'Usar as frases-chave do escritório japonês'],
      vocab: [
        ['めんせつ','','entrevista','🤝'], ['りれきしょ','','currículo','📄'], ['けいけん','','experiência','📈'], ['しぼうどうき','','motivo da candidatura','🎯'], ['ちょうしょ','','ponto forte','💪'],
        ['たんしょ','','ponto fraco','🩹'], ['おつかれさまです','','(saudação no trabalho)','🙇'], ['おさきにしつれいします','','(saindo antes dos colegas)','🚪'], ['ほうれんそう','','reportar-contatar-consultar','🥬'], ['じょうし','','superior','👔'], ['どうりょう','','colega','🧑‍💼']
      ],
      kanji: [['面接','メンセツ','—','entrevista'],['経験','ケイケン','—','experiência'],['上司','ジョウシ','—','superior'],['同僚','ドウリョウ','—','colega']],
      grammar: [
        { t: 'Frases de entrevista', d: 'Estrutura típica: apresentação → experiência → motivo → ponto forte. Use です/ます + humilde.', ex: [['本日[ほんじつ] は よろしく おねがい いたします。','Agradeço pela oportunidade hoje.'],['ぜんしょく では エンジニア として 5年間[ねんかん] 働[はたら]いて おりました。','No emprego anterior, trabalhei 5 anos como engenheiro.']] },
        { t: 'Cultura do escritório', d: 'おつかれさまです: cumprimento universal entre colegas. おさきに しつれいします: ao sair antes. ほうれんそう (報告・連絡・相談): reportar, comunicar e consultar sempre.', ex: [['おつかれさま です。','Bom trabalho / Olá (entre colegas).'],['おさき に しつれい します。','Com licença, vou indo.']] }
      ],
      sentences: [
        ['きしゃ を しぼう した りゆう は、グローバル な かんきょう で 働[はたら]きたい から です。','O motivo de me candidatar à sua empresa é que quero trabalhar num ambiente global.'], ['私[わたし] の ちょうしょ は ねばりづよい ところ です。','Meu ponto forte é ser perseverante.'], ['おさき に しつれい します。','Com licença, vou indo (antes de vocês).'],
        ['ちょっと ごそうだん したい こと が ある の です が…','Tem uma coisa que eu gostaria de consultar…'], ['しょうちいたしました。','Entendido (formal).'], ['おつかれさま でした。','Obrigado pelo trabalho de hoje.']
      ],
      dialogue: [['面接官[めんせつかん]','では、じこしょうかい を おねがい します。','Então, apresente-se, por favor.'],['候補者[こうほしゃ]','はい。シルバ と もうします。ブラジル の 大学[だいがく] で じょうほう工学[こうがく] を べんきょう しました。','Sim. Chamo-me Silva. Estudei engenharia da computação numa universidade no Brasil.'],['面接官[めんせつかん]','どうして 日本[にほん] で 働[はたら]きたい の です か。','Por que quer trabalhar no Japão?'],['候補者[こうほしゃ]','日本[にほん] の ものづくり の せいしん に きょうみ が あり、自分[じぶん] の ぎじゅつ を いかしたい と 思[おも]った から です。','Porque me interesso pelo espírito de produção japonês e quero aplicar minhas habilidades.']],
      quiz: [['Saindo do escritório antes dos colegas:', ['おつかれさまでした','おさきにしつれいします'], 1], ['ほうれんそう no trabalho significa…', ['espinafre','reportar, comunicar, consultar'], 1]],
      tip: 'Escreva e grave suas respostas para as 5 perguntas clássicas de entrevista. Repetir em voz alta até soar natural é o que faz você não travar no dia.',
      mission: 'Escreva sua apresentação de entrevista (5–6 frases) e grave em vídeo, como se fosse para uma empresa japonesa.'
    },
    {
      id: 'm3l10', title: 'Lendo notícias de verdade', icon: '📰',
      cando: ['Ler notícias fáceis (NHK News Web Easy)', 'Usar estratégias de leitura: skimming, dicionário e sentence mining'],
      vocab: [
        ['ニュース','','notícia','📰'], ['けいざい','','economia','💹'], ['せいじ','','política','🏛️'], ['じしん','','terremoto','🌋'], ['たいふう','','tufão','🌀'],
        ['せいふ','','governo','🏢'], ['はっぴょうする','','anunciar','📢'], ['ちょうさ','','pesquisa','📊'], ['ふえる','','aumentar','📈'], ['へる','','diminuir','📉'], ['〜によると','','segundo ~','📎']
      ],
      kanji: [['政府','セイフ','—','governo'],['経済','ケイザイ','—','economia'],['地震','ジシン','—','terremoto'],['増','ゾウ','ふ(える)','aumentar'],['減','ゲン','へ(る)','diminuir']],
      grammar: [
        { t: 'Estrutura de uma notícia', d: '1º parágrafo = resumo (quem, o quê, quando). Depois detalhes e falas (〜と話[はな]しています). Leia o título e o 1º parágrafo primeiro.', ex: [['せいふ は 〜と はっぴょう しました。','O governo anunciou que ~.']] },
        { t: 'Expressões típicas', d: '〜によると (segundo), 〜と見[み]られている (acredita-se que), 〜ことがわかりました (descobriu-se que), 〜ということです (é o que foi informado).', ex: [['ちょうさ に よる と、がいこくじん の かんこうきゃく が ふえて います。','Segundo a pesquisa, os turistas estrangeiros estão aumentando.'],['けが を した 人[ひと] は いない と いう こと です。','Informaram que não há feridos.']] }
      ],
      reading: {
        title: 'ブラジルの 日本語学習者[にほんごがくしゅうしゃ]が ふえています',
        text: '国際交流基金[こくさいこうりゅうききん]の ちょうさ に よる と、ブラジル で 日本語[にほんご] を べんきょう する 人[ひと] が ふえて います。とくに、アニメ や まんが が すき な わかい 人[ひと] が おおい ということ です。サンパウロ の 日本語学校[にほんごがっこう] の 先生[せんせい] は「インターネット で 日本[にほん] の ドラマ を 見[み]て、べんきょう を はじめた 学生[がくせい] が たくさん います」と 話[はな]して います。',
        pt: 'Segundo uma pesquisa da Fundação Japão, está aumentando o número de pessoas que estudam japonês no Brasil. Informaram que há especialmente muitos jovens que gostam de anime e mangá. Um professor de uma escola de japonês de São Paulo disse: "Há muitos alunos que começaram a estudar vendo dramas japoneses na internet."',
        q: [['Segundo o texto, quem são muitos dos novos estudantes?', ['Idosos aposentados','Jovens que gostam de anime e mangá','Empresários'], 1], ['Como muitos alunos começaram a estudar?', ['Vendo dramas na internet','Em viagens ao Japão','Pela TV aberta'], 0]]
      },
      sentences: [
        ['きのう、大[おお]きな じしん が ありました。','Ontem houve um grande terremoto.'], ['たいふう が ちかづいて います。','Um tufão está se aproximando.'], ['せいふ は あたらしい ほうりつ を はっぴょう しました。','O governo anunciou uma nova lei.'],
        ['ちょうさ に よる と、こども の かず が へって います。','Segundo a pesquisa, o número de crianças está diminuindo.'], ['けが を した 人[ひと] は いません でした。','Não houve feridos.']
      ],
      tip: 'Técnica de leitura em 3 passadas: 1) leia tudo sem dicionário e tente captar a ideia; 2) procure só as palavras-chave; 3) leia em voz alta (shadowing de leitura). Faça 1 notícia do NHK Easy por dia.',
      mission: 'Leia uma notícia do NHK News Web Easy (www3.nhk.or.jp/news/easy) e resuma em 3 frases em japonês.'
    }
  ]
});
