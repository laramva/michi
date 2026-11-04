// Módulo 4 — B2 / JLPT N2: fluência — argumentar, entender o japonês nativo e o mundo profissional.
window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: 'm4', title: 'Intermediário avançado', level: 'B2 · N2', color: '#ff4b4b', icon: '🏯',
  desc: 'Gramática N2, escrita formal, fala nativa, onomatopeias, debate e japonês de negócios.',
  lessons: [
    {
      id: 'm4l1', title: 'Contraste e concessão', icon: '⚔️',
      cando: ['Expressar contraste com precisão: apesar de, embora, mesmo assim'],
      vocab: [
        ['どりょく','','esforço','💦'], ['けっか','','resultado','📊'], ['ちゅうい','','aviso / atenção','⚠️'], ['やくそく','','promessa','🤙'], ['しっぱい','','fracasso','❌'],
        ['せいこう','','sucesso','🏆'], ['りかい','','compreensão','💡'], ['ねだん','','preço','🏷️'], ['ひんしつ','','qualidade','💎'], ['あきらめる','','desistir','🏳️']
      ],
      kanji: [['努力','ドリョク','—','esforço'],['結果','ケッカ','—','resultado'],['失敗','シッパイ','—','fracasso'],['成功','セイコウ','—','sucesso']],
      grammar: [
        { t: '〜にもかかわらず', d: '"Apesar de" (formal, surpresa).', ex: [['雨[あめ] に も かかわらず、たくさん の 人[ひと] が あつまった。','Apesar da chuva, muita gente se reuniu.']] },
        { t: '〜ものの', d: '"Embora ~ (o resultado esperado não veio)". Escrito/formal.', ex: [['日本語[にほんご] を 5年[ねん] べんきょう した ものの、まだ 自信[じしん] が ない。','Embora tenha estudado japonês 5 anos, ainda não tenho confiança.']] },
        { t: '〜くせに', d: '"Mesmo sendo… (crítica, irritação)". Coloquial e negativo — cuidado ao usar.', ex: [['知[し]って いる くせに、おしえて くれない。','Mesmo sabendo, não me conta.']] },
        { t: '〜のに', d: '"Apesar de" com frustração/surpresa. Muito comum na fala.', ex: [['いっしょうけんめい べんきょう した のに、しけん に おちた。','Estudei com todo empenho e mesmo assim reprovei.']] },
        { t: '〜としても／〜たところで', d: '"Mesmo que" hipotético. たところで = "mesmo que faça, não adianta".', ex: [['いま から いそいだ ところで、まにあわない よ。','Mesmo que corra agora, não vai dar tempo.']] }
      ],
      sentences: [
        ['ちゅうい した に も かかわらず、かれ は また おくれた。','Apesar de eu ter avisado, ele se atrasou de novo.'], ['ねだん は 高[たか]い ものの、ひんしつ は いい。','Embora o preço seja alto, a qualidade é boa.'], ['子[こ]ども の くせに、なまいき だ。','É uma criança, mas é atrevida.'],
        ['やくそく した のに、来[こ]なかった。','Prometeu e não veio.'], ['いま あやまった ところで、ゆるして もらえない だろう。','Mesmo que peça desculpas agora, provavelmente não vão perdoar.']
      ],
      dialogue: [['A','あれだけ どりょく した のに、けっか が 出[で]なくて…','Me esforcei tanto e não veio resultado…'],['B','でも、しっぱい した ものの、学[まな]んだ こと は 多[おお]い でしょう？','Mas, embora tenha falhado, você aprendeu muito, não?'],['A','たしか に。あきらめる の は まだ 早[はや]い ね。','Verdade. Ainda é cedo para desistir.']],
      quiz: [['Mais coloquial e crítico:', ['にもかかわらず','くせに','ものの'], 1], ['"Mesmo que corra, não adianta":', ['いそいだところで','いそいだものの'], 0]],
      tip: 'No N2, a dificuldade não é entender o sentido, é a NUANCE e o registro. Para cada estrutura, anote: formal ou falada? positiva ou negativa? Monte uma tabela.',
      mission: 'Escreva um parágrafo sobre um objetivo que você ainda não atingiu usando のに, ものの e にもかかわらず.'
    },
    {
      id: 'm4l2', title: 'Causa e razão formais', icon: '⛓️',
      cando: ['Explicar causas com tom positivo, negativo ou neutro'],
      vocab: [
        ['おかげ','','graças a','🙏'], ['せい','','culpa de','👉'], ['じこ','','acidente','💥'], ['おくれる','','atrasar','⏰'], ['えいきょう','','influência / impacto','🌊'],
        ['げんいん','','causa','🔍'], ['ささえる','','apoiar','🤝'], ['ちえん','','atraso (transporte)','🚦'], ['ぶか','','subordinado','🧑‍💼'], ['せきにん','','responsabilidade','⚖️']
      ],
      kanji: [['原因','ゲンイン','—','causa'],['影響','エイキョウ','—','influência'],['責任','セキニン','—','responsabilidade'],['事故','ジコ','—','acidente']],
      grammar: [
        { t: '〜おかげで × 〜せいで', d: 'おかげで: causa POSITIVA ("graças a"). せいで: causa NEGATIVA ("por culpa de").', ex: [['先生[せんせい] の おかげ で、ごうかく できました。','Graças ao professor, passei.'],['じこ の せい で、ちこく しました。','Por causa do acidente, me atrasei.']] },
        { t: '〜ため（に）— causa formal', d: 'Neutro, comum em avisos e notícias.', ex: [['じこ の ため、電車[でんしゃ] が おくれて おります。','Devido a um acidente, os trens estão atrasados.']] },
        { t: '〜以上[いじょう]（は）／〜からには', d: '"Já que ~ (então deve)". Expressa determinação/obrigação.', ex: [['やる と 決[き]めた 以上[いじょう]、さいご まで がんばる。','Já que decidi fazer, vou até o fim.']] },
        { t: '〜ことから／〜だけに', d: 'ことから = "pelo fato de" (origem/razão de um nome ou conclusão). だけに = "justamente por ser ~".', ex: [['この 山[やま] は ふじさん に にて いる ことから、「〜ふじ」と よばれて いる。','Por ser parecida com o Fuji, esta montanha é chamada de "~fuji".'],['きたい して いた だけに、ざんねん だ。','Justamente porque eu estava esperançoso, é uma pena.']] }
      ],
      sentences: [
        ['みなさん の おかげ で、プロジェクト が せいこう しました。','Graças a todos, o projeto foi um sucesso.'], ['ねぼう した せい で、バス に のりおくれた。','Por ter dormido demais, perdi o ônibus.'], ['たいふう の ため、イベント は 中止[ちゅうし] です。','Devido ao tufão, o evento está cancelado.'],
        ['リーダー に なった 以上[いじょう]、せきにん を もたなければ ならない。','Já que virei líder, preciso assumir responsabilidade.'], ['がんばった だけに、ごうかく できて うれしい。','Justamente por ter me esforçado, estou feliz de ter passado.']
      ],
      dialogue: [['A','きのう の プレゼン、せいこう した ね。','A apresentação de ontem foi um sucesso.'],['B','うん、チーム の みんな が ささえて くれた おかげ だ よ。','Sim, graças ao apoio de todo o time.'],['A','前回[ぜんかい] は システム の トラブル の せい で たいへん だった もん ね。','Da última vez foi complicado por causa do problema no sistema, né.']],
      quiz: [['Causa positiva:', ['せいで','おかげで'], 1], ['Em avisos oficiais de trem, usa-se…', ['〜のせいで','〜のため'], 1]],
      tip: 'Ouça os anúncios das estações japonesas (há vídeos com áudio real). Eles são cheios de 〜のため, 〜ております e são um ótimo treino de keigo + causa.',
      mission: 'Agradeça por escrito a 3 pessoas que te ajudaram na vida usando 〜のおかげで.'
    },
    {
      id: 'm4l3', title: 'Pontos de vista e relações', icon: '🔭',
      cando: ['Falar "para mim", "como", "a respeito de", "em relação a" com precisão'],
      vocab: [
        ['かんきょう','','meio ambiente','🌱'], ['もんだい','','problema / questão','❓'], ['たいど','','atitude','🙅'], ['しつもん','','pergunta','🙋'], ['かち','','valor','💎'],
        ['しゃかい','','sociedade','🏙️'], ['しょうひしゃ','','consumidor','🛒'], ['たちば','','posição / ponto de vista','🧍'], ['かんしん','','interesse','👀'], ['たいさく','','medida (contra algo)','🛡️']
      ],
      kanji: [['環境','カンキョウ','—','meio ambiente'],['問題','モンダイ','—','problema'],['社会','シャカイ','—','sociedade'],['関','カン','せき','relação, barreira'],['対','タイ','—','contra, par']],
      grammar: [
        { t: '〜にとって', d: '"Para (alguém), do ponto de vista de". Com avaliações.', ex: [['私[わたし] に とって、かぞく が いちばん 大切[たいせつ] です。','Para mim, a família é o mais importante.']] },
        { t: '〜として', d: '"Como / na qualidade de".', ex: [['エンジニア として 働[はたら]いて います。','Trabalho como engenheiro.']] },
        { t: '〜に関[かん]して／〜について', d: '"A respeito de". に関して é mais formal.', ex: [['この けん に 関[かん]して、しつもん が あります。','Tenho uma pergunta a respeito deste assunto.']] },
        { t: '〜に対[たい]して', d: '"Em relação a / contra / para com" (direção de ação ou atitude) e também contraste.', ex: [['かれ は だれ に 対[たい]して も やさしい。','Ele é gentil com todos.'],['兄[あに] が 外向的[がいこうてき] なの に 対[たい]して、弟[おとうと] は おとなしい。','Enquanto o irmão mais velho é extrovertido, o mais novo é quieto.']] },
        { t: '〜によって', d: '"Dependendo de / por meio de / por (agente)".', ex: [['人[ひと] に よって かんがえかた が ちがう。','O modo de pensar varia de pessoa para pessoa.']] }
      ],
      sentences: [
        ['がいこくじん に とって、けいご は むずかしい。','Para estrangeiros, o keigo é difícil.'], ['つうやく として イベント に さんか しました。','Participei do evento como intérprete.'], ['かんきょう もんだい に 関[かん]して、いけん を のべて ください。','Dê sua opinião a respeito das questões ambientais.'],
        ['しょうひしゃ の しつもん に 対[たい]して、ていねい に こたえる。','Responder com cortesia às perguntas dos consumidores.'], ['国[くに] に よって ぶんか が ちがいます。','A cultura varia de país para país.']
      ],
      dialogue: [['A','リモートワーク は 会社[かいしゃ] に とって メリット が ある と 思[おも]います か。','Você acha que o trabalho remoto tem vantagens para a empresa?'],['B','しょくしゅ に よって ちがう と 思[おも]います。エンジニア として は、しゅうちゅう できる ので たすかります。','Acho que depende da função. Como engenheiro, ajuda porque consigo me concentrar.']],
      quiz: [['"Como (na função de) professor":', ['せんせいとして','せんせいにとって'], 0], ['"Depende da pessoa":', ['ひとにたいして','ひとによって'], 1]],
      tip: 'Leia artigos de opinião curtos (コラム) e marque cada expressão de ponto de vista. Depois escreva sua própria coluna de 200 caracteres.',
      mission: 'Escreva 200 caracteres (文字) sobre "何が あなたに とって 一番 大切ですか" usando 3 estruturas da aula.'
    },
    {
      id: 'm4l4', title: 'Japonês escrito formal (である体)', icon: '🖋️',
      cando: ['Ler e escrever em estilo formal escrito (artigos, relatórios, redações)'],
      vocab: [
        ['である','','é (escrito formal)','🖋️'], ['ろんぶん','','artigo acadêmico','📑'], ['けつろん','','conclusão','🏁'], ['かてい','','hipótese / processo','🧪'], ['ようやく','','resumo / finalmente','📝'],
        ['すなわち','','ou seja','🟰'], ['したがって','','portanto','➡️'], ['しかしながら','','no entanto','↩️'], ['いっぽう','','por outro lado','🔀'], ['ものとする','','fica estabelecido que','📜']
      ],
      kanji: [['論文','ロンブン','—','artigo'],['結論','ケツロン','—','conclusão'],['従','ジュウ','したが(う)','seguir'],['一方','イッポウ','—','por outro lado']],
      grammar: [
        { t: 'である体: o estilo dos textos', d: 'です → である (ou だ). Verbos na forma simples. Sem ね/よ. Usado em jornais, livros, teses, redações do JLPT.', ex: [['日本[にほん] は 島国[しまぐに] で ある。','O Japão é um país insular.'],['この 問題[もんだい] は 深刻[しんこく] で ある と いえる。','Pode-se dizer que este problema é grave.']] },
        { t: 'Forma て vira ます-stem (連用中止)', d: 'Na escrita, liga orações com o stem: 〜て → 〜(stem)、 / 〜くて → 〜く、', ex: [['東京[とうきょう] は 人口[じんこう] が 多[おお]く、物価[ぶっか] も 高[たか]い。','Tóquio tem população grande e custo de vida alto.']] },
        { t: 'Conectivos de texto', d: 'まず (primeiro) → つぎに → さらに (além disso) → しかし／しかしながら → いっぽう → したがって／そのため → 以上[いじょう]のことから (pelo exposto).', ex: [['以上[いじょう] の こと から、〜 と 考[かんが]えられる。','Pelo exposto, pode-se considerar que ~.']] }
      ],
      sentences: [
        ['少子化[しょうしか] は 日本[にほん] の 大[おお]きな 課題[かだい] で ある。','A queda da natalidade é um grande desafio do Japão.'], ['しかしながら、解決策[かいけつさく] は 簡単[かんたん] で は ない。','No entanto, a solução não é simples.'], ['したがって、新[あたら]しい 政策[せいさく] が 必要[ひつよう] で ある。','Portanto, uma nova política é necessária.'],
        ['都市[とし] は 便利[べんり] で あり、いっぽう で 自然[しぜん] が 少[すく]ない。','A cidade é conveniente; por outro lado, tem pouca natureza.'], ['本[ほん] 論文[ろんぶん] の 目的[もくてき] は 〜 を 明[あき]らか に する こと で ある。','O objetivo deste artigo é esclarecer ~.']
      ],
      quiz: [['Estilo escrito de です:', ['だよ','である','でございます'], 1], ['Conectivo "portanto":', ['いっぽう','したがって','しかし'], 1]],
      tip: 'Copie à mão (写経) um parágrafo do 天声人語 (coluna do Asahi) ou de um artigo da Wikipédia japonesa por dia. Copiar texto bem escrito ensina estrutura e kanji ao mesmo tempo.',
      mission: 'Escreva uma redação de 400 caracteres em である体 sobre "SNSのメリットとデメリット".'
    },
    {
      id: 'm4l5', title: 'Fala nativa: contrações e あいづち', icon: '💬',
      cando: ['Entender a fala rápida real (contrações, omissões)', 'Usar あいづち para soar natural em conversas'],
      vocab: [
        ['あいづち','','reações de escuta','🗨️'], ['へえ','','nossa! / é mesmo?','😮'], ['なるほど','','entendi / faz sentido','💡'], ['たしかに','','é verdade','✔️'], ['うそ','','mentira! (surpresa)','😲'],
        ['まじで','','sério?','😳'], ['っていうか','','aliás / quer dizer','🔄'], ['やっぱり','','como eu imaginava','🎯'], ['なんか','','tipo / meio que','🤷'], ['〜じゃん','','não é? (casual)','👉']
      ],
      grammar: [
        { t: 'Contrações comuns', d: '〜ている → 〜てる | 〜ておく → 〜とく | 〜てしまう → 〜ちゃう | 〜なければ → 〜なきゃ | 〜ては → 〜ちゃ | 〜という → 〜って | 〜のだ → 〜んだ | それは → そりゃ | 〜ら行 → ん (わからない → わかんない).', ex: [['何[なに] してる の？','O que está fazendo?'],['わかんない。','Não sei.'],['やっとく ね。','Deixo feito, tá?']] },
        { t: 'あいづち: ouvir ativamente', d: 'Japoneses reagem a cada frase: うん／ええ／はい, へえ, そう なんだ, なるほど, たしかに, そうそう. Ficar calado parece desinteresse!', ex: [['A：きのう 富士山[ふじさん] に のぼった ん だ。 B：へえ！ すごい！','A: Ontem subi o Fuji. B: Nossa! Incrível!']] },
        { t: 'Omissões', d: 'Partículas は, を, が e sujeitos somem na fala: ごはん 食[た]べた？ (ごはんを). Frases incompletas são normais: ちょっと…, もしよかったら…', ex: [['これ、おいしい よ。','Isto aqui é gostoso.'],['もし よかったら…','Se não se importar…']] }
      ],
      sentences: [
        ['なに 言[い]ってん の？','O que você está dizendo?'], ['もう 行[い]かなきゃ。','Já tenho que ir.'], ['そりゃ そう だ よ。','Claro que sim, né.'],
        ['やっぱり ラーメン が いちばん じゃん。','No fim das contas, lámen é o melhor, né.'], ['っていうか、きょう 休[やす]み じゃん！','Aliás, hoje é folga!'], ['なんか ちょっと つかれちゃった。','Tô meio cansado.']
      ],
      dialogue: [['A','ねえ、きいて。きのう 道[みち] で 芸能人[げいのうじん] 見[み]ちゃった！','Ei, escuta. Ontem vi uma celebridade na rua!'],['B','うそ！ まじで？ だれ？','Mentira! Sério? Quem?'],['A','なんか、ドラマ に 出[で]てる 人[ひと]。名前[なまえ] わかんない けど。','Tipo, alguém que aparece em dorama. Não sei o nome.'],['B','なに それ〜！ 写真[しゃしん] とっとけば よかった のに。','Que isso! Devia ter tirado foto.']],
      quiz: [['わかんない vem de…', ['わからない','わかった'], 0], ['とっとけば vem de…', ['とっておけば','とってしまえば'], 0]],
      tip: 'Shadowing com conteúdo nativo: escolha 1 minuto de um vlog ou podcast casual, transcreva, depois repita junto 10 vezes. É o treino que mais melhora a fluência e a escuta.',
      mission: 'Faça shadowing de 1 minuto de um podcast japonês casual (ex.: Nihongo con Teppei) por 5 dias seguidos.'
    },
    {
      id: 'm4l6', title: 'Onomatopeias (擬音語・擬態語)', icon: '💥',
      cando: ['Entender e usar as onomatopeias mais comuns da vida real'],
      vocab: [
        ['ペラペラ','','fluente (falar)','🗣️'], ['ドキドキ','','coração acelerado','💓'], ['ワクワク','','empolgado','🤩'], ['イライラ','','irritado','😤'], ['ニコニコ','','sorridente','😊'],
        ['ゴロゴロ','','à toa / rolando / trovão','🛋️'], ['ザーザー','','chuva forte','🌧️'], ['キラキラ','','brilhando','✨'], ['ぺこぺこ','','faminto','🍽️'], ['ふわふわ','','fofinho','☁️'], ['ぐっすり','','(dormir) profundamente','😴'], ['ぴったり','','perfeitamente / justo','👌']
      ],
      grammar: [
        { t: 'Por que são essenciais', d: 'O japonês tem milhares de onomatopeias e elas aparecem em conversas, mangás, propagandas e até em consultas médicas (ズキズキ = dor latejante, ムカムカ = enjoo).', ex: [['頭[あたま] が ズキズキ する。','Minha cabeça lateja.'],['むね が ムカムカ する。','Estou enjoado.']] },
        { t: 'Usos gramaticais', d: 'Com する (ドキドキする), como advérbio com と (ニコニコと笑[わら]う) ou com だ/の (ペコペコだ, ふわふわの パン).', ex: [['おなか が ぺこぺこ です。','Estou morrendo de fome.'],['ふわふわ の パンケーキ','panqueca fofinha']] }
      ],
      sentences: [
        ['かのじょ は 日本語[にほんご] が ペラペラ です。','Ela fala japonês fluentemente.'], ['めんせつ の 前[まえ] は ドキドキ します。','Fico nervoso antes da entrevista.'], ['あした の りょこう、ワクワク する！','Estou empolgado com a viagem de amanhã!'],
        ['しゅうまつ は 家[いえ] で ゴロゴロ して いた。','No fim de semana fiquei à toa em casa.'], ['雨[あめ] が ザーザー 降[ふ]って いる。','Está chovendo forte.'], ['きのう は ぐっすり ねむれた。','Ontem dormi profundamente.']
      ],
      dialogue: [['A','あした、はじめて の デート なんだ。','Amanhã é meu primeiro encontro.'],['B','へえ！ ドキドキ する ね。','Nossa! Que frio na barriga.'],['A','うん、ワクワク して ねむれない かも。','Sim, estou tão empolgado que talvez nem durma.']],
      quiz: [['Estar com muita fome:', ['ゴロゴロ','ぺこぺこ','キラキラ'], 1], ['Falar fluentemente:', ['ペラペラ','イライラ','ふわふわ'], 0]],
      tip: 'Mangá é o melhor livro-texto de onomatopeias: leia 1 capítulo de um mangá do dia a dia (ex.: よつばと!) e anote os efeitos sonoros.',
      mission: 'Descreva como você se sente hoje com 3 onomatopeias diferentes.'
    },
    {
      id: 'm4l7', title: 'Debate e opinião elaborada', icon: '🎙️',
      cando: ['Argumentar, concordar parcialmente e discordar com educação'],
      vocab: [
        ['さんせい','','a favor','👍'], ['はんたい','','contra','👎'], ['りゆう','','razão / motivo','🧠'], ['いっぱんてき','','geral (な)','🌐'], ['ぎろん','','debate / discussão','🗣️'],
        ['しゅちょう','','argumento / posição','📣'], ['れい','','exemplo','📌'], ['かならずしも','','não necessariamente','🚧'], ['たしかに〜が','','é verdade que…, mas','⚖️'], ['ていあん','','proposta','💡']
      ],
      kanji: [['賛成','サンセイ','—','a favor'],['反対','ハンタイ','—','contra'],['理由','リユウ','—','razão'],['議論','ギロン','—','debate']],
      grammar: [
        { t: '〜べきだ／〜べきではない', d: '"Deve-se / não se deve" (opinião forte, moral). する → す(る)べき.', ex: [['こども に もっと 自由[じゆう] を あたえる べき だ。','Deveríamos dar mais liberdade às crianças.']] },
        { t: '〜わけではない／〜とは限[かぎ]らない', d: 'Negação parcial: "não é que… / nem sempre".', ex: [['お金[かね] が あれば しあわせ だ とは 限[かぎ]らない。','Ter dinheiro não significa necessariamente ser feliz.']] },
        { t: 'Discordar sem confronto', d: 'たしかに〜ですが… (é verdade que…, mas) | おっしゃる こと は わかりますが… | 〜という 考[かんが]え方[かた] も ある と 思[おも]います.', ex: [['たしか に 便利[べんり] です が、問題[もんだい] も ある と 思[おも]います。','É verdade que é prático, mas acho que também há problemas.']] },
        { t: 'Estruturar o argumento', d: '私[わたし]は〜に賛成[さんせい]です。理由[りゆう]は二[ふた]つあります。一[ひと]つ目[め]は… 二[ふた]つ目[め]は… 以上[いじょう]の理由[りゆう]から…', ex: [['理由[りゆう] は 二[ふた]つ あります。','Há duas razões.']] }
      ],
      sentences: [
        ['私[わたし] は この ていあん に さんせい です。','Sou a favor desta proposta.'], ['かならずしも そう とは 限[かぎ]りません。','Não é necessariamente assim.'], ['たしか に 一理[いちり] あります が、べつ の 見方[みかた] も できます。','Tem razão em parte, mas também dá para ver de outro modo.'],
        ['だれ でも 意見[いけん] を 言[い]う べき だ と 思[おも]います。','Acho que todos devem dizer sua opinião.'], ['きらい な わけ では ありません が、にがて です。','Não é que eu odeie, mas não é meu forte.']
      ],
      dialogue: [['A','小学校[しょうがっこう] から えいご を 教[おし]える べき だ と 思[おも]います。','Acho que se deveria ensinar inglês desde o primário.'],['B','たしか に はやい ほう が いい と いう 意見[いけん] も あります が、母語[ぼご] を しっかり 学[まな]ぶ ほう が 先[さき] だ と いう 考[かんが]え方[かた] も あります よ ね。','É verdade que há a opinião de que quanto antes melhor, mas também existe a visão de que aprender bem a língua materna vem primeiro, né.'],['A','なるほど。かならずしも はやければ いい とは 限[かぎ]らない です ね。','Entendi. Nem sempre mais cedo é melhor.']],
      quiz: [['"Nem sempre é assim":', ['そうとはかぎらない','そうするべきだ'], 0], ['Forma educada de discordar começa com…', ['ちがいます！','たしかに〜ですが'], 1]],
      tip: 'Pratique com o método "1 tema, 1 minuto": sorteie um tema e fale 60 segundos com estrutura (posição → 2 razões → conclusão). Grave e ouça.',
      mission: 'Grave 1 minuto defendendo uma opinião sobre "在宅勤務 (trabalho remoto)" usando a estrutura de 2 razões.'
    },
    {
      id: 'm4l8', title: 'Japonês de negócios: telefone e reuniões', icon: '📞',
      cando: ['Atender e fazer ligações de trabalho', 'Participar de reuniões e pedir algo formalmente'],
      vocab: [
        ['おでんわ','','telefonema (resp.)','📞'], ['しょうしょう','','um momento','⏳'], ['おりかえし','','retorno (da ligação)','↩️'], ['でんごん','','recado','📝'], ['うちあわせ','','reunião (de alinhamento)','🗂️'],
        ['しりょう','','material / documento','📄'], ['けんとう','','análise / consideração','🔍'], ['ぎじろく','','ata','🗒️'], ['のうき','','prazo de entrega','📦'], ['みつもり','','orçamento','💰']
      ],
      kanji: [['資料','シリョウ','—','material'],['検討','ケントウ','—','consideração'],['打','ダ','う(つ)','bater'],['合','ゴウ','あ(う)','combinar']],
      grammar: [
        { t: 'Telefone: frases-padrão', d: 'Atender: はい、ABC会社[がいしゃ] で ございます。 | Pedir para esperar: しょうしょう おまち ください。 | Ausência: あいにく 〇〇 は せき を はずして おります。 | Recado: おでんごん を うけたまわりましょうか。 | Retorno: おりかえし おでんわ さしあげます。', ex: [['おせわ に なって おります。','(saudação de negócios)'],['おりかえし おでんわ いたします。','Retornarei a ligação.']] },
        { t: 'Pedidos muito educados', d: '〜て いただけませんでしょうか | 〜て いただけると たすかります | おそれいりますが〜 (sinto incomodar, mas…).', ex: [['おそれいります が、しりょう を おくって いただけませんでしょう か。','Sinto incomodar, mas poderia me enviar o material?']] },
        { t: 'Recusar em negócios', d: 'Nunca "não" direto: 検討[けんとう]させていただきます (vamos analisar — frequentemente = não), いたしかねます (não podemos).', ex: [['社内[しゃない] で 検討[けんとう] させて いただきます。','Vamos analisar internamente.']] }
      ],
      sentences: [
        ['はい、ABC会社[がいしゃ] で ございます。','Pois não, empresa ABC.'], ['しつれい です が、どちら さま でしょう か。','Desculpe, quem fala?'], ['あいにく 田中[たなか] は かいぎ中[ちゅう] で ございます。','Infelizmente, Tanaka está em reunião.'],
        ['おでんごん を おねがい できます か。','Posso deixar um recado?'], ['みつもり を おくって いただけると たすかります。','Agradeceria se pudesse enviar o orçamento.'], ['では、のうき は らいしゅう の 金曜日[きんようび] と いう こと で よろしい でしょう か。','Então, podemos considerar o prazo como sexta da semana que vem?']
      ],
      dialogue: [['A','はい、ABC会社[がいしゃ] で ございます。','Pois não, empresa ABC.'],['B','おせわ に なって おります。XYZ の シルバ と もうします。えいぎょうぶ の 田中[たなか]さま は いらっしゃいます か。','Bom dia. Aqui é Silva, da XYZ. O sr. Tanaka, do comercial, está?'],['A','もうしわけ ございません。田中[たなか] は ただいま 外出[がいしゅつ] して おります。おりかえし おでんわ させましょう か。','Sinto muito. Tanaka está fora no momento. Peço para ele retornar?'],['B','はい、おねがい いたします。','Sim, por favor.']],
      quiz: [['"Retornarei a ligação":', ['おりかえしおでんわいたします','でんごんをおねがいします'], 0], ['検討させていただきます muitas vezes significa…', ['Sim, com certeza','Vamos pensar (provável não)'], 1]],
      tip: 'Crie um "roteiro de ligação" em um cartão e treine com role-play (ou com um parceiro de idioma). Ligações são difíceis porque não há linguagem corporal — só treino resolve.',
      mission: 'Faça um role-play de ligação de negócios completo (atender, pedir para falar com alguém, deixar recado), gravando os dois lados.'
    }
  ]
});
