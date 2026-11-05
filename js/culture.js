// Trilha "Cultura e sociedade": história, religião, costumes, sociedade e artes do Japão,
// com texto explicativo, vocabulário, leitura em japonês, perguntas, vídeos e uma atividade.
window.EXTRA = window.EXTRA || [];
(function () {
  function C(m, id, title, icon, o) {
    window.EXTRA.push({ m, l: Object.assign({ id, title, icon, track: 'culture',
      cando: ['Entender um pedaço da história e da sociedade japonesa', 'Aprender as palavras que os japoneses usam para falar disso'],
      tip: 'Cultura e língua andam juntas: muitas expressões só fazem sentido quando você conhece o costume por trás. Ao assistir aos vídeos, anote 3 palavras japonesas que aparecerem.' }, o) });
  }

  C('m0', 'cu1', 'O Japão: geografia, povo e língua', '🗾', {
    intro: `<p>Antes de mergulhar na língua, conheça o lugar onde ela vive.</p>
<ul>
<li><b>Um arquipélago</b>: mais de 14 mil ilhas, mas quatro concentram quase tudo: <b>Hokkaido</b> (norte, frio e neve), <b>Honshu</b> (a maior, com Tóquio, Kyoto e Osaka), <b>Shikoku</b> e <b>Kyushu</b>. Mais ao sul ficam as ilhas de <b>Okinawa</b>.</li>
<li><b>Montanhas</b> cobrem cerca de 70% do território, por isso as cidades se espremem nas planícies do litoral. O ponto mais alto é o <b>monte Fuji</b> (3.776 m), um vulcão sagrado.</li>
<li><b>Gente</b>: cerca de 124 milhões de habitantes. A região de Tóquio, com uns 37 milhões, é a maior aglomeração urbana do planeta.</li>
<li><b>47 províncias</b> (都道府県): Tóquio (都), Hokkaido (道), Osaka e Kyoto (府) e 43 prefeituras (県). Cada uma tem pratos e produtos típicos de que se orgulha.</li>
<li><b>O nome</b>: 日本 (Nihon ou Nippon) significa "origem do sol". Daí "Terra do Sol Nascente" e a bandeira com o círculo vermelho, 日の丸.</li>
<li><b>Capital</b>: Kyoto foi a capital imperial por mais de mil anos (794–1868). Depois o imperador se mudou para Edo, rebatizada Tóquio, "capital do leste".</li>
</ul>
<h4>E a língua?</h4>
<p>O japonês tem cerca de 125 milhões de falantes, quase todos no Japão. Ele <b>não é parente do chinês</b>: pegou emprestados a escrita e muitas palavras, mas pertence a uma família própria (a família japônica, junto com as línguas de Okinawa). Por isso a gramática é completamente diferente.</p>
<p><b>Curiosidade brasileira:</b> o Brasil tem a maior comunidade de descendentes de japoneses fora do Japão, cerca de 2 milhões de pessoas.</p>`,
    vocab: [['日本','にほん','Japão','🗾'], ['東京','とうきょう','Tóquio','🗼'], ['島','しま','ilha','🏝️'], ['山','やま','montanha','⛰️'], ['海','うみ','mar','🌊'], ['富士山','ふじさん','monte Fuji','🗻'], ['くに','','país','🌏'], ['しゅと','','capital','🏛️']],
    reading: { title: 'にほん は どんな くに？',
      text: 'にほん は しま の くに です。おおきい しま が よっつ あります。ほっかいどう、ほんしゅう、しこく、きゅうしゅう です。にほん に は やま が たくさん あります。いちばん たかい やま は ふじさん です。しゅと は とうきょう です。とうきょう に は ひと が とても おおい です。',
      pt: 'O Japão é um país de ilhas. Há quatro ilhas grandes: Hokkaido, Honshu, Shikoku e Kyushu. No Japão há muitas montanhas. A montanha mais alta é o Fuji. A capital é Tóquio. Em Tóquio há muita gente.',
      q: [['Quantas ilhas grandes o texto cita?', ['2','4','6'], 1], ['Qual é a montanha mais alta?', ['Fuji','Hokkaido','Tóquio'], 0], ['O que o texto diz sobre Tóquio?', ['Tem poucas pessoas','Tem muitas pessoas','Não é a capital'], 1]] },
    sentences: [['にほん は しま の くに です。','O Japão é um país de ilhas.'], ['しゅと は とうきょう です。','A capital é Tóquio.'], ['ふじさん は たかい です。','O monte Fuji é alto.']],
    quiz: [['日本 (Nihon) significa…', ['terra das montanhas','origem do sol','grande ilha'], 1], ['Até 1868, a capital imperial ficava em…', ['Tóquio','Kyoto','Osaka'], 1], ['O japonês é da mesma família do chinês?', ['Sim','Não: pegou a escrita e palavras emprestadas, mas é de outra família'], 1]],
    mission: 'Abra um mapa do Japão e encontre as 4 ilhas principais, Tóquio, Kyoto, Osaka e Okinawa. Aponte e diga em voz alta: とうきょう は ここ です。',
    videos: [['K-_5mJ6MnDY','Thiago San','Do monte Fuji às metrópoles: a geografia fascinante do Japão','pt'], ['kymKFE_3bJM','Japonês com Jenni','Por que aprender japonês é mais do que aprender um idioma?','pt'], ['x9-e_3GHrzw','Langfocus','The Japanese Language','en']]
  });

  C('m1', 'cu2', 'História 1: das origens aos samurais', '🏯', {
    intro: `<h4>Linha do tempo</h4>
<ul>
<li><b>Jōmon</b> (c. 14.000 a.C.–300 a.C.): caçadores e coletores que fizeram algumas das cerâmicas mais antigas do mundo.</li>
<li><b>Yayoi</b> (c. 300 a.C.–300 d.C.): chegam do continente o cultivo de arroz e o metal. O arroz vira o centro da vida japonesa até hoje (ご飯 quer dizer "arroz" e também "refeição").</li>
<li><b>Kofun</b> (séc. III–VI): grandes túmulos em forma de fechadura e o primeiro Estado, Yamato.</li>
<li><b>Século VI</b>: o <b>budismo</b> e a escrita chinesa chegam pela Coreia. O príncipe Shōtoku escreve uma "constituição" cujo primeiro artigo valoriza a <b>harmonia</b> (和).</li>
<li><b>Nara</b> (710–794): a primeira capital fixa. O Grande Buda do templo Tōdai-ji é dessa época.</li>
<li><b>Heian</b> (794–1185): capital em Heian-kyō (Kyoto). Uma corte refinada cria os kana e obras como o <i>Conto de Genji</i>, de Murasaki Shikibu.</li>
<li><b>Kamakura</b> (1185–1333): os <b>samurais</b> tomam o poder. O imperador continua no trono, mas quem governa é o <b>xogum</b> (将軍), chefe militar. Em 1274 e 1281 os mongóis tentam invadir e são derrotados também por tufões, chamados de <b>kamikaze</b> ("vento divino").</li>
<li><b>Sengoku</b> (c. 1467–1590): o "período dos estados em guerra". Senhores feudais lutam entre si até a unificação por Oda Nobunaga, Toyotomi Hideyoshi e, por fim, <b>Tokugawa Ieyasu</b>, vencedor da batalha de Sekigahara (1600).</li>
</ul>
<h4>Quem eram os samurais</h4>
<p>Guerreiros a serviço de um senhor, com código de lealdade e honra (mais tarde chamado de <i>bushidō</i>). Usavam duas espadas: a longa (刀) e a curta. Muitos também eram poetas e calígrafos.</p>`,
    vocab: [['歴史','れきし','história','📜'], ['侍','さむらい','samurai','⚔️'], ['天皇','てんのう','imperador','👑'], ['将軍','しょうぐん','xogum','🎌'], ['城','しろ','castelo','🏯'], ['刀','かたな','espada (katana)','🗡️'], ['時代','じだい','era / período','⏳'], ['むかし','','antigamente','🕰️']],
    reading: { title: 'さむらい の じだい',
      text: 'むかし、にほん に は てんのう が いました。でも、ちから が あった の は さむらい でした。さむらい の リーダー は しょうぐん です。さむらい は かたな を つかいました。いま、さむらい は いません。でも、ふるい おしろ が たくさん あります。',
      pt: 'Antigamente, no Japão havia o imperador. Mas quem tinha o poder eram os samurais. O líder dos samurais é o xogum. Os samurais usavam espadas. Hoje não há mais samurais, mas há muitos castelos antigos.',
      q: [['Quem tinha o poder de verdade?', ['O imperador','Os samurais','Os monges'], 1], ['Quem era o líder dos samurais?', ['てんのう','しょうぐん','おしろ'], 1], ['O que ainda existe hoje?', ['Samurais','Castelos antigos','Xoguns'], 1]] },
    sentences: [['むかし、さむらい が いました。','Antigamente havia samurais.'], ['さむらい は かたな を つかいました。','Os samurais usavam espadas.'], ['ふるい おしろ が あります。','Há castelos antigos.']],
    quiz: [['O primeiro xogunato foi criado em…', ['Kamakura','Tóquio','Nara'], 0], ['Os "kamikaze" originais eram…', ['pilotos de avião','tufões que afundaram as frotas mongóis','espadas sagradas'], 1], ['Quem unificou de vez o Japão em 1600?', ['Oda Nobunaga','Tokugawa Ieyasu','Príncipe Shōtoku'], 1]],
    mission: 'Procure a foto do castelo de Himeji (姫路城), o castelo original mais famoso do Japão. Diga: これ は おしろ です。きれい です ね。',
    videos: [['Mh5LY4Mz15o','bill wurtz','history of japan','en'], ['7YQiiTHuyNs','Impérios AD','A História do Japão','pt'], ['peMqRTi6gT4','Tinocando TV','Samurais: os maiores guerreiros do Japão','pt']]
  });

  C('m1', 'cu3', 'Religião: xintoísmo e budismo', '⛩️', {
    intro: `<p>O Japão tem duas grandes tradições que convivem há 1.500 anos, e a maioria das pessoas participa das duas sem ver contradição.</p>
<h4>Xintoísmo (神道)</h4>
<p>A religião nativa: os <b>kami</b> (神) são espíritos presentes na natureza, em montanhas, árvores, rios e nos antepassados. O lugar de culto é o <b>santuário</b> (神社 jinja), sempre com um portal <b>torii</b> (鳥居) na entrada. Casamentos, bênçãos de bebês e festivais de bairro costumam ser xintoístas.</p>
<h4>Budismo (仏教)</h4>
<p>Chegou no século VI. O lugar de culto é o <b>templo</b> (お寺 otera), com estátuas de Buda e incenso. Funerais e homenagens aos mortos costumam ser budistas. Daí o ditado: "nasce xintoísta, casa cristão (no estilo) e morre budista".</p>
<h4>Como rezar num santuário</h4>
<ol><li>Faça uma reverência antes de passar pelo torii, andando pelos lados (o meio é o caminho dos kami).</li>
<li>Lave as mãos e a boca na fonte (手水舎).</li>
<li>Jogue uma moeda, toque o sino se houver, e faça <b>2 reverências, 2 palmas e 1 reverência</b> (二礼二拍手一礼).</li></ol>
<p>Nos templos budistas não se bate palmas: junte as mãos em silêncio.</p>
<h4>Coisas que você vai ver</h4>
<ul><li><b>おみくじ</b>: papel da sorte. 大吉 (daikichi) é a sorte grande; a má sorte você amarra no local para deixá-la lá.</li>
<li><b>お守り</b> (omamori): amuletos para estudos, saúde, trânsito, amor.</li>
<li><b>絵馬</b> (ema): plaquinhas de madeira onde se escrevem desejos.</li></ul>`,
    vocab: [['神社','じんじゃ','santuário xintoísta','⛩️'], ['お寺','おてら','templo budista','🛕'], ['神','かみ','divindade / kami','✨'], ['鳥居','とりい','portal torii','⛩️'], ['お守り','おまもり','amuleto','🧧'], ['おみくじ','','papel da sorte','📜'], ['お参り','おまいり','visita para rezar','🙏'], ['だいきち','','sorte grande','🍀']],
    reading: { title: 'じんじゃ と おてら',
      text: 'にほん に は じんじゃ と おてら が あります。じんじゃ に は とりい が あります。おしょうがつ に、たくさん の ひと が じんじゃ へ いきます。おまもり を かいます。おみくじ も ひきます。「だいきち」は いちばん いい です。',
      pt: 'No Japão há santuários e templos. No santuário há um torii. No Ano-Novo, muita gente vai ao santuário. Compram amuletos. Também tiram o papel da sorte. "Daikichi" é o melhor.',
      q: [['O que há no santuário?', ['とりい','おてら','ほとけ'], 0], ['Quando muita gente vai ao santuário?', ['No Ano-Novo','No verão','No aniversário'], 0], ['Qual é a melhor sorte?', ['だいきち','おまもり','じんじゃ'], 0]] },
    sentences: [['じんじゃ へ いきます。','Vou ao santuário.'], ['おまもり を かいます。','Compro um amuleto.'], ['だいきち です！','Sorte grande!']],
    quiz: [['Qual dos dois tem portal torii?', ['santuário (神社)','templo (お寺)'], 0], ['Ordem da reza no santuário:', ['2 reverências, 2 palmas, 1 reverência','3 palmas e silêncio','ajoelhar e cantar'], 0], ['O que é uma お守り?', ['comida de festa','amuleto de proteção','tipo de templo'], 1]],
    mission: 'Treine o gesto de reza do santuário (2 reverências, 2 palmas, 1 reverência) e faça um desejo em japonês: にほんご が じょうず に なりますように (que eu fique bom em japonês).',
    videos: [['kXCPmUw40Sg','123 Japonês','Budismo e xintoísmo no Japão','pt'], ['PxhG6fKiMr0','Japão Nosso De Cada Dia','Como se comportar em um santuário xintoísta','pt']]
  });

  C('m1', 'cu4', 'Etiqueta do dia a dia', '🙇', {
    intro: `<p>Os japoneses não esperam que um estrangeiro saiba tudo, mas ficam muito felizes quando ele conhece o básico. Estas são as regras que mais aparecem no dia a dia:</p>
<ul>
<li><b>Sapatos</b>: tire-os na entrada de casa (玄関 genkan), de alguns restaurantes, templos e provadores. Há chinelos próprios até para o banheiro, e eles não saem de lá!</li>
<li><b>Hashi</b>: nunca espete os palitos em pé no arroz nem passe comida de hashi para hashi. Os dois gestos lembram rituais de funeral.</li>
<li><b>Fazer barulho com o macarrão</b> é normal e até mostra que está gostoso. Já assoar o nariz à mesa é falta de educação.</li>
<li><b>Trem</b>: silêncio, nada de ligações (celular no 「マナーモード」), mochila na frente ou no bagageiro e assentos prioritários livres.</li>
<li><b>Filas</b>: há marcações no chão das plataformas. Na escada rolante, fica-se parado de um lado: à esquerda em Tóquio e à direita em Osaka.</li>
<li><b>Lixo</b>: há poucas lixeiras na rua. Leve o seu lixo para casa e separe por tipo.</li>
<li><b>Gorjeta</b>: não existe e pode até constranger. O bom atendimento já está incluído.</li>
<li><b>Dinheiro</b>: entregue numa bandejinha no caixa, não direto na mão.</li>
</ul>
<p><b>Por trás disso tudo</b> está a ideia de 迷惑 (meiwaku): evitar incomodar os outros. Você vai encontrar essa palavra muitas vezes.</p>`,
    vocab: [['くつ','','sapato','👞'], ['げんかん','','entrada da casa','🚪'], ['スリッパ','','chinelo','🩴'], ['はし','','hashi (palitos)','🥢'], ['ならびます','','fazer fila','🧍‍♂️'], ['しずか','','silencioso','🤫'], ['マナー','','boas maneiras','🎩'], ['しつれい','','falta de educação / com licença','🙇']],
    reading: { title: 'にほん の マナー',
      text: 'にほん の いえ に はいる とき、げんかん で くつ を ぬぎます。でんしゃ の なか で は しずか に します。でんわ は しません。みせ で は チップ は いりません。ラーメン を たべる とき、おと が でても だいじょうぶ です。',
      pt: 'Ao entrar numa casa japonesa, você tira os sapatos na entrada. Dentro do trem, fica-se em silêncio. Não se fala ao telefone. Nas lojas não precisa de gorjeta. Ao comer lámen, tudo bem fazer barulho.',
      q: [['Onde se tiram os sapatos?', ['げんかん','でんしゃ','みせ'], 0], ['O que não se faz no trem?', ['Ficar em silêncio','Falar ao telefone','Sentar'], 1], ['Precisa dar gorjeta?', ['Sim','Não'], 1]] },
    sentences: [['くつ を ぬぎます。','Tiro os sapatos.'], ['でんしゃ で は しずか に します。','No trem, fico em silêncio.'], ['チップ は いりません。','Não precisa de gorjeta.']],
    quiz: [['Espetar o hashi em pé no arroz lembra…', ['uma festa','um funeral','um casamento'], 1], ['Em Tóquio, na escada rolante, quem fica parado fica…', ['à esquerda','à direita','no meio'], 0], ['A ideia de 迷惑 (meiwaku) é…', ['evitar incomodar os outros','pedir desconto','fazer barulho'], 0]],
    mission: 'Por um dia, experimente uma regra japonesa em casa: tirar os sapatos na entrada ou deixar o celular no silencioso no transporte. Anote como foi.',
    videos: [['L29BhgzsDfc','Lugares e Curiosidades','Comportamentos proibidos no Japão: o que evitar','pt'], ['roeo8PIzkEU','Kokoro Brasil','Os 10 erros mais graves no Japão','pt'], ['BNYxfie_apI','Tudo Sobre o Japão','Ojigi: a arte japonesa da reverência','pt']]
  });

  C('m1', 'cu5', 'Washoku: a comida japonesa', '🍱', {
    intro: `<p>Em 2013 a culinária tradicional japonesa, o <b>washoku</b> (和食), virou Patrimônio Cultural Imaterial da UNESCO. Não por um prato específico, mas pelo jeito de comer.</p>
<ul>
<li><b>一汁三菜</b> (ichijū sansai): a refeição básica é arroz + uma sopa (geralmente missô) + três acompanhamentos (um principal e dois menores). Equilíbrio e variedade.</li>
<li><b>Estação</b>: ingredientes da época (旬 shun) e louças que combinam com a estação.</li>
<li><b>Umami</b>: o "quinto sabor" foi identificado em 1908 pelo químico japonês Kikunae Ikeda, estudando o caldo de alga kombu (出汁 dashi).</li>
</ul>
<h4>Curiosidades</h4>
<ul>
<li>O <b>sushi</b> começou como peixe conservado em arroz fermentado. O sushi de mão (nigiri) surgiu em Edo, no século XIX, como comida rápida de barraquinha.</li>
<li>O <b>tempurá</b> provavelmente veio dos portugueses no século XVI.</li>
<li>O <b>lámen</b> veio da China e virou paixão nacional, com estilos regionais (missô em Sapporo, tonkotsu em Fukuoka…).</li>
<li>Antes de comer diz-se <b>いただきます</b> ("recebo humildemente"), agradecendo às pessoas e à vida que virou alimento. Depois, <b>ごちそうさまでした</b>.</li>
</ul>`,
    vocab: [['ごはん','','arroz / refeição','🍚'], ['みそしる','','sopa de missô','🥣'], ['さかな','','peixe','🐟'], ['やさい','','legumes / verduras','🥬'], ['すし','','sushi','🍣'], ['だし','','caldo japonês','🍲'], ['いただきます','','(antes de comer)','🙏'], ['ごちそうさまでした','','(depois de comer)','😋']],
    reading: { title: 'にほん の しょくじ',
      text: 'にほん の しょくじ は ごはん と みそしる と おかず です。「いちじゅう さんさい」と いいます。たべる まえ に「いただきます」と いいます。たべた あと で「ごちそうさまでした」と いいます。すし は むかし、えど の ファストフード でした。',
      pt: 'A refeição japonesa é arroz, sopa de missô e acompanhamentos. Isso se chama "ichijū sansai". Antes de comer, diz-se "itadakimasu". Depois de comer, diz-se "gochisōsama deshita". Antigamente o sushi era o fast-food de Edo.',
      q: [['Uma refeição básica tem…', ['arroz, sopa e acompanhamentos','só sushi','pão e café'], 0], ['O que se diz antes de comer?', ['いただきます','ごちそうさまでした'], 0], ['Antigamente, o sushi era…', ['comida de festa','fast-food de Edo','comida de templo'], 1]] },
    sentences: [['いただきます！','(Vou comer!)'], ['ごちそうさまでした。','Obrigado pela refeição.'], ['すし が すき です。','Gosto de sushi.']],
    quiz: [['Quem identificou o umami, e quando?', ['Kikunae Ikeda, em 1908','Um chef francês, em 1950','Monges budistas, no século X'], 0], ['O tempurá provavelmente veio…', ['da China','dos portugueses','da Coreia'], 1], ['一汁三菜 quer dizer…', ['uma sopa e três pratos','um peixe e três arrozes','três sopas'], 0]],
    mission: 'Na sua próxima refeição, diga いただきます antes e ごちそうさまでした depois. Se puder, monte um prato no estilo 一汁三菜.',
    videos: [['ET5KQOae8XM','Unknown Japan','What is Washoku? Japan’s UNESCO food culture','en'], ['P3P_SdVwJzk','Guilherme Levorato','Mini documentário: a tradicional culinária japonesa (washoku)','pt']]
  });

  C('m1', 'cu6', 'O ano japonês: festas e estações', '🎏', {
    intro: `<p>O Japão vive intensamente as <b>quatro estações</b> (四季), e o calendário é marcado por festas que você vai ouvir citadas em todo anime, dorama e conversa.</p>
<ul>
<li><b>お正月</b> (1º–3 de janeiro): a festa mais importante. Família reunida, visita ao santuário (初詣), comida especial (おせち), dinheiro para as crianças (お年玉) e cartões de Ano-Novo (年賀状).</li>
<li><b>節分</b> (3 de fevereiro): jogam-se feijões gritando 「鬼は外、福は内」 ("fora demônios, dentro felicidade").</li>
<li><b>ひな祭り</b> (3 de março, meninas) e <b>こどもの日</b> (5 de maio), com bandeiras de carpa (こいのぼり).</li>
<li><b>花見</b> (fim de março–abril): piqueniques sob as cerejeiras. A TV mostra a "frente das cerejeiras" avançando pelo país.</li>
<li><b>七夕</b> (7 de julho): desejos escritos em tirinhas de papel penduradas no bambu.</li>
<li><b>お盆</b> (meados de agosto): acredita-se que os antepassados visitam a família. Há a dança 盆踊り e muitos voltam à cidade natal.</li>
<li><b>Verão</b>: 祭り (festivais de bairro) e 花火大会 (shows de fogos), com yukata e comidas de barraca.</li>
<li><b>Outono</b>: 紅葉, as folhas vermelhas. <b>Natal</b> é festa de casais, com frango frito e bolo de morango! E no <b>大晦日</b> (31/12) come-se soba e os templos tocam o sino 108 vezes.</li>
</ul>`,
    vocab: [['はる','','primavera','🌸'], ['なつ','','verão','🎆'], ['あき','','outono','🍁'], ['ふゆ','','inverno','⛄'], ['さくら','','cerejeira','🌸'], ['まつり','','festival','🏮'], ['はなび','','fogos de artifício','🎇'], ['おしょうがつ','','Ano-Novo','🎍']],
    reading: { title: 'にほん の きせつ',
      text: 'にほん に は きせつ が よっつ あります。はる に は さくら が さきます。みんな で はなみ を します。なつ に は まつり と はなび が あります。あき は もみじ が きれい です。ふゆ の おしょうがつ に は、かぞく で おせち を たべます。',
      pt: 'O Japão tem quatro estações. Na primavera, as cerejeiras florescem e todos fazem hanami. No verão há festivais e fogos. No outono, as folhas vermelhas são lindas. No Ano-Novo de inverno, a família come osechi.',
      q: [['O que acontece na primavera?', ['As cerejeiras florescem','Neva','Há fogos'], 0], ['O que há no verão?', ['もみじ','まつり と はなび','おせち'], 1], ['O que a família come no Ano-Novo?', ['おせち','すし','ラーメン'], 0]] },
    sentences: [['はる に は さくら が さきます。','Na primavera as cerejeiras florescem.'], ['なつ は まつり が あります。','No verão há festivais.'], ['ふゆ は さむい です。','O inverno é frio.']],
    quiz: [['Em que dia é o 七夕?', ['7 de julho','1º de janeiro','3 de março'], 0], ['No Natal japonês, é tradição comer…', ['peru','frango frito e bolo de morango','bacalhau'], 1], ['Quantas vezes o sino toca na virada do ano?', ['12','108','1.000'], 1]],
    mission: 'Qual é a sua estação preferida? Responda em japonês: わたし は (estação) が すき です。 Depois diga uma coisa que você faz nela.',
    videos: [['BIVbJPnCQRk','123 Japonês','Ano-Novo no Japão: tradições, comidas e costumes','pt'], ['l8UhpwSQWAY','Guia do Japa','Dicas essenciais das estações do ano no Japão','pt']]
  });

  C('m2', 'cu7', 'História 2: Edo, isolamento e Meiji', '🌊', {
    intro: `<h4>Período Edo (1603–1868): 250 anos de paz</h4>
<ul>
<li>O xogunato Tokugawa governa a partir de <b>Edo</b> (atual Tóquio), que no século XVIII já tinha cerca de 1 milhão de habitantes, uma das maiores cidades do mundo.</li>
<li><b>鎖国 (sakoku)</b>: o país quase se fecha. O cristianismo é proibido e o comércio com o Ocidente fica restrito aos holandeses, na ilhota de Dejima, em Nagasaki.</li>
<li>Uma sociedade rígida (samurais, camponeses, artesãos e comerciantes), mas uma cultura urbana vibrante: <b>kabuki</b>, gravuras <b>ukiyo-e</b> (a <i>Grande Onda</i>, de Hokusai), haicais de <b>Bashō</b> e as primeiras escolas para gente comum (寺子屋).</li>
</ul>
<h4>A chegada dos "navios negros"</h4>
<p>Em 1853, o comodoro americano Perry chega com navios a vapor (黒船) e força a abertura dos portos. O choque derruba o xogunato.</p>
<h4>Era Meiji (1868–1912): modernizar em uma geração</h4>
<ul>
<li>O imperador volta ao centro do poder e a capital vai para Tóquio.</li>
<li>Acabam os privilégios samurais. Vêm a primeira ferrovia (1872), o serviço militar obrigatório, a escola para todos e uma Constituição (1889).</li>
<li>O lema era 和魂洋才: "espírito japonês, técnica ocidental". Em poucas décadas, o Japão virou potência industrial e militar.</li>
</ul>
<p><b>Na língua:</b> foi na era Meiji que muitas palavras ocidentais ganharam traduções com kanji, como 社会 (sociedade), 経済 (economia) e 哲学 (filosofia). Depois, a China adotou várias delas!</p>`,
    vocab: [['江戸','えど','Edo (antiga Tóquio)','🏙️'], ['鎖国','さこく','isolamento do país','🔒'], ['黒船','くろふね','navios negros','🚢'], ['明治','めいじ','era Meiji','🎌'], ['浮世絵','うきよえ','gravura ukiyo-e','🌊'], ['平和','へいわ','paz','🕊️'], ['外国','がいこく','país estrangeiro','🌐'], ['始まる','はじまる','começar','▶️']],
    reading: { title: '江戸[えど]から 明治[めいじ]へ',
      text: '江戸[えど]時代[じだい]は 二百六十年[にひゃくろくじゅうねん]ぐらい 続[つづ]きました。その間[あいだ]、日本[にほん]は 外国[がいこく]と あまり 交流[こうりゅう]しませんでした。これを「鎖国[さこく]」と 言[い]います。1853年[ねん]、アメリカの 黒船[くろふね]が 来[き]ました。そして 1868年[ねん]に 明治[めいじ]時代[じだい]が 始[はじ]まって、日本[にほん]は 急[いそ]いで 近代化[きんだいか]しました。',
      pt: 'O período Edo durou cerca de 260 anos. Nesse tempo, o Japão quase não teve contato com outros países. Isso se chama "sakoku". Em 1853 chegaram os navios negros americanos. E em 1868 começou a era Meiji, e o Japão se modernizou às pressas.',
      q: [['Quanto tempo durou o período Edo?', ['Cerca de 100 anos','Cerca de 260 anos','Cerca de 500 anos'], 1], ['O que foi o 鎖国?', ['Uma guerra','O quase isolamento do país','Uma festa'], 1], ['O que aconteceu em 1868?', ['Começou a era Meiji','Chegaram os portugueses','Acabou a guerra'], 0]] },
    sentences: [['江戸[えど] 時代[じだい] は 長[なが]かった です。','O período Edo foi longo.'], ['黒船[くろふね] が 来[き]ました。','Os navios negros chegaram.'], ['明治[めいじ] 時代[じだい] が 始[はじ]まりました。','Começou a era Meiji.']],
    quiz: [['Durante o sakoku, que europeus podiam comerciar com o Japão?', ['Portugueses','Holandeses','Ingleses'], 1], ['Quem fez a gravura A Grande Onda?', ['Hokusai','Bashō','Perry'], 0], ['O lema 和魂洋才 significa…', ['espírito japonês, técnica ocidental','paz e harmonia','o Japão para os japoneses'], 0]],
    mission: 'Procure a Grande Onda de Kanagawa (神奈川沖浪裏) e descreva-a em japonês: なみ が おおきい です。ふじさん が ちいさい です。',
    videos: [['RaDinD8LEfQ','De Leste a Oeste','Período Edo: uma época de samurais, yokais e arte','pt'], ['uncLQV4Y3_s','Nerdologia','Japão Meiji','pt'], ['kvDmKvP21Q0','123 Japonês','Samurai X e a história do Japão: o que foi a Restauração Meiji?','pt']]
  });

  C('m2', 'cu8', 'Japão e Brasil: a imigração', '🇧🇷', {
    intro: `<p>A história do japonês no Brasil começa num porto paulista.</p>
<ul>
<li><b>18 de junho de 1908</b>: o navio <b>Kasato Maru</b> chega a Santos com cerca de 780 imigrantes, contratados para as fazendas de café. A data virou o Dia Nacional da Imigração Japonesa.</li>
<li>Os primeiros anos foram duríssimos: salários baixos, doenças e saudade. Muitos queriam juntar dinheiro e voltar, mas acabaram ficando, compraram terras e formaram colônias e cooperativas que transformaram a agricultura de São Paulo e do Paraná.</li>
<li>Durante a Segunda Guerra, o Brasil ficou do lado oposto ao Japão: escolas e jornais japoneses foram fechados e era proibido falar japonês em público.</li>
<li>Hoje há cerca de <b>2 milhões de nikkeis</b> (日系人, descendentes) no Brasil, a maior comunidade fora do Japão. O bairro da <b>Liberdade</b>, em São Paulo, é o símbolo dessa presença.</li>
<li><b>Dekassegui</b> (出稼ぎ, "sair para trabalhar"): a partir de 1990, uma lei japonesa facilitou o visto para descendentes, e o fluxo se inverteu. Em 2007 já eram mais de 300 mil brasileiros no Japão, principalmente em cidades industriais como Hamamatsu, Toyota e Oizumi.</li>
</ul>
<p><b>Gerações:</b> 一世 (issei, quem imigrou), 二世 (nisei, filhos), 三世 (sansei, netos), 四世 (yonsei, bisnetos).</p>`,
    vocab: [['移民','いみん','imigração / imigrante','🚢'], ['日系人','にっけいじん','descendente de japoneses','👨‍👩‍👧'], ['一世','いっせい','1ª geração (issei)','1️⃣'], ['二世','にせい','2ª geração (nisei)','2️⃣'], ['三世','さんせい','3ª geração (sansei)','3️⃣'], ['出稼ぎ','でかせぎ','trabalho longe de casa (dekassegui)','🏭'], ['農園','のうえん','fazenda','🌾'], ['船','ふね','navio','⛴️']],
    reading: { title: 'ブラジルの 日系人[にっけいじん]',
      text: '1908年[ねん]、笠戸丸[かさとまる]という 船[ふね]で 日本人[にほんじん]が ブラジルに 来[き]ました。みんな コーヒー農園[のうえん]で 働[はたら]きました。仕事[しごと]は とても 大変[たいへん]でした。今[いま]、ブラジルには 日系人[にっけいじん]が 約[やく]200万人[まんにん] います。日本[にほん]の 外[そと]で いちばん 多[おお]いです。',
      pt: 'Em 1908, japoneses vieram para o Brasil num navio chamado Kasato Maru. Todos trabalharam em fazendas de café. O trabalho era muito duro. Hoje há cerca de 2 milhões de descendentes de japoneses no Brasil, o maior número fora do Japão.',
      q: [['Em que ano chegou o Kasato Maru?', ['1868','1908','1945'], 1], ['Onde trabalharam os imigrantes?', ['Em fábricas','Em fazendas de café','Em navios'], 1], ['Quantos nikkeis há no Brasil?', ['Cerca de 200 mil','Cerca de 2 milhões','Cerca de 20 milhões'], 1]] },
    sentences: [['ブラジル に 日系人[にっけいじん] が たくさん います。','Há muitos nikkeis no Brasil.'], ['コーヒー 農園[のうえん] で 働[はたら]きました。','Trabalharam em fazendas de café.'], ['私[わたし] の おばあさん は 二世[にせい] です。','Minha avó é nisei.']],
    quiz: [['O Dia da Imigração Japonesa é…', ['18 de junho','7 de setembro','1º de janeiro'], 0], ['出稼ぎ (dekassegui) quer dizer…', ['sair de casa para trabalhar','festa de boas-vindas','escola japonesa'], 0], ['Um 三世 (sansei) é…', ['o imigrante','o filho do imigrante','o neto do imigrante'], 2]],
    mission: 'Você conhece algum nikkei ou alguém que foi dekassegui? Pergunte sobre a história da família. Se não, procure fotos do Museu Histórico da Imigração Japonesa, na Liberdade.',
    videos: [['v-ZOR9xjgAA','Educa Web Radio','Do Kasato Maru aos dekasseguis: a história da imigração japonesa no Brasil','pt'], ['0cBdT50Tm8Y','Honda Brasil','Websérie 110 anos da imigração japonesa','pt'], ['v9qRdzcIe2A','Jovem Pan News','Conheça a Liberdade, um pedacinho do Oriente em São Paulo','pt'], ['6v7JbDjLqY8','Raízes Esquecidas','Dekassegui: por que milhares de nipo-brasileiros foram ao Japão','pt']]
  });

  C('m2', 'cu9', 'Escola e juventude', '🎒', {
    intro: `<ul>
<li>O ano letivo começa em <b>abril</b>, junto com as cerejeiras, com cerimônias de entrada (入学式).</li>
<li>Sistema 6-3-3-4: primário, ginásio, colegial e faculdade. As crianças vão sozinhas a pé para a escola desde os 6 anos, com a mochila de couro <b>ランドセル</b>.</li>
<li><b>Uniforme</b> (制服) do ginásio em diante, e às vezes até sapatos diferentes para dentro da escola.</li>
<li><b>Os alunos limpam a escola</b> (掃除): não há faxineiros nas salas. A ideia é aprender responsabilidade e cuidado com o espaço comum.</li>
<li><b>給食</b> (merenda): todos comem o mesmo cardápio na sala, e os próprios alunos servem os colegas.</li>
<li><b>部活</b> (clubes): beisebol, música, artes, kendo… Ocupam as tardes e até as férias, e criam a hierarquia de 先輩 (veterano) e 後輩 (calouro).</li>
<li><b>Vestibular</b> (受験): muito competitivo, com cursinhos (塾 juku) à noite.</li>
<li><b>Maioridade</b>: desde 2022 é aos 18 anos, mas muitas cidades mantêm a festa 成人式 aos 20, com quimonos.</li>
</ul>`,
    vocab: [['学校','がっこう','escola','🏫'], ['生徒','せいと','aluno','🧑‍🎓'], ['制服','せいふく','uniforme','👔'], ['給食','きゅうしょく','merenda escolar','🍱'], ['掃除','そうじ','limpeza','🧹'], ['部活','ぶかつ','clube escolar','⚾'], ['試験','しけん','prova','📝'], ['先輩','せんぱい','veterano','🧑‍🏫']],
    reading: { title: '日本[にほん]の 学校[がっこう]',
      text: '日本[にほん]の 学校[がっこう]は 四月[しがつ]に 始[はじ]まります。生徒[せいと]は 制服[せいふく]を 着[き]ます。昼[ひる]ごはんは 給食[きゅうしょく]で、みんなで 同[おな]じ ものを 食[た]べます。授業[じゅぎょう]の 後[あと]、生徒[せいと]が 自分[じぶん]たちで 教室[きょうしつ]を 掃除[そうじ]します。放課後[ほうかご]は 部活[ぶかつ]を する 人[ひと]が 多[おお]いです。',
      pt: 'A escola japonesa começa em abril. Os alunos usam uniforme. O almoço é a merenda, e todos comem a mesma coisa. Depois da aula, os próprios alunos limpam a sala. Depois do horário, muitos fazem atividades de clube.',
      q: [['Quando começa o ano escolar?', ['Em janeiro','Em abril','Em setembro'], 1], ['Quem limpa a sala?', ['Faxineiros','Os próprios alunos','Os professores'], 1], ['O que muitos fazem depois da aula?', ['部活','給食','試験'], 0]] },
    sentences: [['学校[がっこう] は 四月[しがつ] に 始[はじ]まります。','A escola começa em abril.'], ['生徒[せいと] が 教室[きょうしつ] を 掃除[そうじ] します。','Os alunos limpam a sala.'], ['部活[ぶかつ] は サッカー です。','Meu clube é futebol.']],
    quiz: [['O que é ランドセル?', ['A mochila escolar','O uniforme','A merenda'], 0], ['Para que servem os 塾 (juku)?', ['Cursinho/reforço, à noite','Esporte','Merenda'], 0], ['先輩 e 後輩 indicam…', ['veterano e calouro','professor e diretor','pai e filho'], 0]],
    mission: 'Compare: escreva 3 diferenças entre a sua escola e a escola japonesa. Tente uma frase em japonês: ブラジル の 学校[がっこう] は 二月[にがつ] に 始[はじ]まります。',
    videos: [['nIPJrl8bEp0','Tudo Sobre o Japão','Como é a educação no Japão? Curiosidades sobre a escola japonesa','pt'], ['w8z-bfOek0g','Rota Asiática','Como é estudar em uma escola do Japão','pt']]
  });

  C('m2', 'cu10', 'Trabalho e empresa', '💼', {
    intro: `<ul>
<li><b>Contratação em massa</b>: as empresas contratam os recém-formados todos juntos, que começam em 1º de abril. A "caça ao emprego" (就活) tem até terno padrão, a リクルートスーツ preta.</li>
<li><b>Emprego vitalício e antiguidade</b> (年功序列): durante décadas, o normal foi passar a vida inteira numa empresa, com salário subindo com a idade. Isso está mudando: hoje trocar de emprego é bem mais comum.</li>
<li><b>Hierarquia</b>: 上司 (chefe), 部下 (subordinado), 先輩 e 後輩. Ela aparece até na posição das cadeiras na sala de reunião e no elevador.</li>
<li><b>Decisão por consenso</b>: antes da reunião, conversa-se com cada pessoa (根回し nemawashi). A reunião só oficializa o que já foi combinado.</li>
<li><b>Horas extras</b> (残業) e o termo trágico <b>過労死</b> (karōshi, morte por excesso de trabalho). Desde 2019 há um limite legal de horas extras.</li>
<li><b>飲み会</b>: sair para beber com os colegas faz parte da integração (e do desabafo).</li>
<li><b>名刺</b> (cartão de visita): entregue e receba com as duas mãos, leia e não guarde no bolso de trás!</li>
</ul>`,
    vocab: [['会社','かいしゃ','empresa','🏢'], ['会社員','かいしゃいん','funcionário de empresa','👔'], ['上司','じょうし','chefe','🧑‍💼'], ['同僚','どうりょう','colega de trabalho','👥'], ['残業','ざんぎょう','hora extra','🌙'], ['名刺','めいし','cartão de visita','📇'], ['飲み会','のみかい','happy hour com colegas','🍻'], ['休み','やすみ','folga / férias','🏖️']],
    reading: { title: '日本[にほん]の 会社員[かいしゃいん]',
      text: '日本[にほん]の 会社員[かいしゃいん]は よく 残業[ざんぎょう]を します。仕事[しごと]の 後[あと]、上司[じょうし]や 同僚[どうりょう]と 飲[の]み会[かい]に 行[い]く ことも あります。でも 最近[さいきん]は、働[はたら]き方[かた]が 変[か]わって きました。家[いえ]で 仕事[しごと]を する 人[ひと]も 増[ふ]えました。',
      pt: 'Os funcionários japoneses fazem muita hora extra. Depois do trabalho, às vezes vão a happy hours com o chefe e os colegas. Mas ultimamente o jeito de trabalhar vem mudando. Aumentou também o número de pessoas que trabalham de casa.',
      q: [['O que os funcionários fazem com frequência?', ['残業','休み','部活'], 0], ['Com quem vão ao 飲み会?', ['Com a família','Com o chefe e os colegas','Com os alunos'], 1], ['O que aumentou ultimamente?', ['Trabalho em casa','Horas extras','Contratações'], 0]] },
    sentences: [['会社[かいしゃ] で 働[はたら]いて います。','Trabalho numa empresa.'], ['今日[きょう] は 残業[ざんぎょう] です。','Hoje tenho hora extra.'], ['名刺[めいし] を どうぞ。','Aqui está meu cartão.']],
    quiz: [['O que é 根回し (nemawashi)?', ['Conversar com todos antes da reunião para chegar a um consenso','Um tipo de cartão','Uma festa da empresa'], 0], ['Como se entrega um 名刺?', ['Com uma mão, rápido','Com as duas mãos','Jogando na mesa'], 1], ['Os recém-formados costumam começar a trabalhar…', ['em 1º de abril','no Natal','em agosto'], 0]],
    mission: 'Treine a troca de cartões: com as duas mãos, diga はじめまして。(seu nome) です。よろしく おねがいします。 e faça uma leve reverência.',
    videos: [['Lrup1_-LM68','Erloc','O estranho iceberg do trabalho japonês','pt'], ['BTUAXaNNgS4','Rushi sensei','Quando o trabalho mata: a cultura do trabalho no Japão','pt']]
  });

  C('m3', 'cu11', 'História 3: guerra, reconstrução e milagre econômico', '🕊️', {
    intro: `<ul>
<li><b>Militarismo</b>: nos anos 1930, militares dominam o governo. O Japão invade a Manchúria (1931) e a China (1937).</li>
<li><b>Segunda Guerra</b>: em dezembro de 1941, o ataque a Pearl Harbor leva os EUA à guerra no Pacífico. Em agosto de 1945, as bombas atômicas destroem <b>Hiroshima</b> (dia 6) e <b>Nagasaki</b> (dia 9). Em 15 de agosto, o imperador anuncia a rendição pelo rádio. Foi a primeira vez que o povo ouviu sua voz.</li>
<li><b>Ocupação americana</b> (1945–1952): nova Constituição em 1947. O <b>Artigo 9</b> renuncia à guerra, e o país mantém só as Forças de Autodefesa.</li>
<li><b>Milagre econômico</b> (anos 1950–80): crescimento acelerado, com indústria, tecnologia e exportação (Sony, Toyota, Honda). Em 1964, Tóquio sedia as Olimpíadas e inaugura o <b>Shinkansen</b>, o trem-bala. O Japão se torna a segunda maior economia do mundo.</li>
<li><b>Bolha e "décadas perdidas"</b>: a bolha imobiliária estoura no começo dos anos 90 e vêm anos de estagnação.</li>
</ul>
<p><b>Memória:</b> a menina Sadako Sasaki, vítima da radiação, dobrou centenas de tsurus (鶴) de papel desejando se curar. Desde então, o tsuru é símbolo da paz no Parque Memorial de Hiroshima.</p>`,
    vocab: [['戦争','せんそう','guerra','💥'], ['平和','へいわ','paz','🕊️'], ['原爆','げんばく','bomba atômica','☢️'], ['憲法','けんぽう','Constituição','📘'], ['復興','ふっこう','reconstrução','🏗️'], ['経済','けいざい','economia','📈'], ['新幹線','しんかんせん','trem-bala','🚄'], ['鶴','つる','tsuru (grou)','🕊️']],
    reading: { title: '戦後[せんご]の 日本[にほん]',
      text: '1945年[ねん]8月[がつ]、広島[ひろしま]と 長崎[ながさき]に 原爆[げんばく]が 落[お]とされ、戦争[せんそう]が 終[お]わった。戦後[せんご]の 日本[にほん]は 平和[へいわ]憲法[けんぽう]を 作[つく]り、経済[けいざい]の 復興[ふっこう]に 力[ちから]を 入[い]れた。1964年[ねん]には 東京[とうきょう]オリンピックが 開[ひら]かれ、新幹線[しんかんせん]も 開通[かいつう]した。わずか 二十年[にじゅうねん]で、日本[にほん]は 世界[せかい]有数[ゆうすう]の 経済[けいざい]大国[たいこく]に なったのである。',
      pt: 'Em agosto de 1945, bombas atômicas foram lançadas sobre Hiroshima e Nagasaki, e a guerra terminou. O Japão do pós-guerra criou uma Constituição pacifista e se dedicou à reconstrução econômica. Em 1964 houve as Olimpíadas de Tóquio e o Shinkansen foi inaugurado. Em apenas vinte anos, o Japão se tornou uma das maiores potências econômicas do mundo.',
      q: [['O que aconteceu em 1964?', ['Fim da guerra','Olimpíadas de Tóquio e Shinkansen','Nova Constituição'], 1], ['Em que o Japão concentrou esforços no pós-guerra?', ['No exército','Na reconstrução econômica','Na agricultura'], 1], ['Em quanto tempo virou potência econômica?', ['5 anos','20 anos','50 anos'], 1]] },
    sentences: [['戦争[せんそう] が 終[お]わった。','A guerra acabou.'], ['平和[へいわ] が 一番[いちばん] 大切[たいせつ] だ。','A paz é o mais importante.'], ['新幹線[しんかんせん] は 1964年[ねん] に 開通[かいつう] した。','O Shinkansen foi inaugurado em 1964.']],
    quiz: [['O Artigo 9 da Constituição…', ['renuncia à guerra','cria o Shinkansen','define o imperador como deus'], 0], ['Qual se tornou o símbolo da paz em Hiroshima?', ['O tsuru de papel','A cerejeira','O monte Fuji'], 0], ['As "décadas perdidas" vieram depois…', ['da Restauração Meiji','do estouro da bolha econômica, nos anos 90','das Olimpíadas'], 1]],
    mission: 'Aprenda a dobrar um tsuru de origami (procure um tutorial em vídeo). Enquanto dobra, repita: 平和[へいわ] (paz).',
    videos: [['QFsI-yrEWVY','Economia Descomplicada','O milagre econômico japonês','pt'], ['Z3qJQDu9L6M','Instinct Culture - Cultura Japonesa','Como o Japão se reconstruiu após a Segunda Guerra Mundial?','pt'], ['le5CEXYI69s','Tinocando TV','Hiroshima e Nagasaki: conheça a história completa','pt']]
  });

  C('m3', 'cu12', 'O Japão de hoje: sociedade em transformação', '🏙️', {
    intro: `<ul>
<li><b>少子高齢化</b> (poucos nascimentos + envelhecimento): cerca de 29% da população tem 65 anos ou mais, a maior proporção do mundo. Nascem cerca de 700 mil bebês por ano, o menor número da história.</li>
<li><b>População encolhendo</b>: depois do pico de quase 128 milhões, por volta de 2008, o país perde centenas de milhares de habitantes por ano. No interior há vilas quase vazias e milhões de casas abandonadas (空き家).</li>
<li><b>Estrangeiros</b>: o número de residentes estrangeiros bateu recorde, passando de 3 milhões (chineses, vietnamitas, coreanos, filipinos, brasileiros…). O país abre vistos para trabalhadores em setores com falta de gente.</li>
<li><b>Tecnologia</b>: robôs em casas de repouso, lojas sem funcionários, e ao mesmo tempo fax, carimbos (はんこ) e dinheiro vivo ainda muito usados.</li>
<li><b>Gênero e família</b>: mais mulheres trabalhando, mas o país ainda aparece mal colocado nos rankings de igualdade. Casa-se mais tarde, e quase 4 em cada 10 casas têm uma pessoa só.</li>
<li><b>Fenômenos sociais</b>: ひきこもり (jovens isolados em casa) e 孤独死 (morte solitária de idosos) viraram temas de debate nacional.</li>
</ul>`,
    vocab: [['少子化','しょうしか','queda da natalidade','👶'], ['高齢化','こうれいか','envelhecimento da população','👴'], ['人口','じんこう','população','👥'], ['外国人','がいこくじん','estrangeiro','🌍'], ['空き家','あきや','casa abandonada','🏚️'], ['一人暮らし','ひとりぐらし','morar sozinho','🛏️'], ['社会','しゃかい','sociedade','🏙️'], ['問題','もんだい','problema','❗']],
    reading: { title: '少子[しょうし]高齢化[こうれいか]',
      text: '日本[にほん]では 少子[しょうし]高齢化[こうれいか]が 進[すす]んでいる。六十五歳[ろくじゅうごさい]以上[いじょう]の 人[ひと]は 人口[じんこう]の 約[やく]三割[さんわり]に なった。一方[いっぽう]で、生[う]まれる 子[こ]どもは 毎年[まいとし] 減[へ]っている。そのため、地方[ちほう]では 空[あ]き家[や]が 増[ふ]え、働[はたら]く 人[ひと]が 足[た]りない。外国人[がいこくじん]の 労働者[ろうどうしゃ]を 受[う]け入[い]れる 動[うご]きも 広[ひろ]がっている。',
      pt: 'No Japão, a queda da natalidade e o envelhecimento avançam. Pessoas com 65 anos ou mais já são cerca de 30% da população. Por outro lado, o número de crianças nascidas diminui a cada ano. Por isso, no interior aumentam as casas abandonadas e faltam trabalhadores. Também cresce a tendência de receber trabalhadores estrangeiros.',
      q: [['Que parte da população tem 65 anos ou mais?', ['Cerca de 10%','Cerca de 30%','Cerca de 50%'], 1], ['O que acontece no interior?', ['Aumentam as casas vazias','Nascem mais crianças','Sobram trabalhadores'], 0], ['Que movimento está crescendo?', ['Receber trabalhadores estrangeiros','Fechar fábricas','Proibir estrangeiros'], 0]] },
    sentences: [['人口[じんこう] が 減[へ]って いる。','A população está diminuindo.'], ['一人暮[ひとりぐ]らし を して います。','Moro sozinho.'], ['これ は 大[おお]きな 社会[しゃかい] 問題[もんだい] です。','Este é um grande problema social.']],
    quiz: [['少子高齢化 quer dizer…', ['poucos nascimentos e envelhecimento','muitos jovens e poucos idosos','crescimento urbano'], 0], ['空き家 é…', ['uma casa abandonada','um apartamento novo','um hotel'], 0], ['ひきこもり se refere a…', ['jovens que se isolam em casa','idosos que trabalham','estudantes de intercâmbio'], 0]],
    mission: 'Compare com o Brasil: o país também está envelhecendo? Escreva 2 frases em japonês usando 人口 e 社会.',
    videos: [['bvAYmZPwdJg','CNN Brasil','Japão: Terra de Resistência, episódio 2: envelhecimento','pt'], ['Zr3ByQxYoI8','Euronews em Português','Face ao envelhecimento da população, o Japão aposta em tecnologias inovadoras','pt'], ['q2JynEyXLNE','Investigate Asia','Inside Japan’s super-ageing society','en']]
  });

  C('m3', 'cu13', 'Valores: harmonia, "ler o ar", honne e tatemae', '🫖', {
    intro: `<p>Para entender por que os japoneses falam (e calam) como falam, conheça estes conceitos:</p>
<ul>
<li><b>和 (wa)</b>, harmonia: preservar a paz do grupo vem antes de impor a opinião individual. Está no primeiro artigo da "constituição" do príncipe Shōtoku, do ano 604.</li>
<li><b>空気を読む</b>, "ler o ar": perceber o clima e o que os outros sentem sem que digam. Quem não percebe é chamado de KY (空気が読めない).</li>
<li><b>本音と建前</b>: honne é o que se sente de verdade; tatemae é a posição que se mostra em público. Não é visto como mentira, e sim como uma forma de evitar conflito.</li>
<li><b>内と外</b> (uchi/soto): dentro e fora do grupo. Muda a linguagem, os presentes e o grau de intimidade.</li>
<li><b>迷惑</b> (meiwaku): não incomodar os outros. <b>遠慮</b> (enryo): conter-se por consideração, por exemplo recusando a primeira oferta.</li>
<li><b>頑張る</b> (ganbaru): esforçar-se ao máximo, e <b>我慢</b> (gaman): suportar com paciência.</li>
<li>Ditado: <b>出る杭は打たれる</b>, "o prego que se destaca leva martelada".</li>
</ul>
<p><b>Na língua:</b> é por isso que o japonês tem tantas formas indiretas, como ちょっと…, 〜かもしれません e 考えておきます ("vou pensar", que muitas vezes quer dizer não).</p>`,
    vocab: [['和','わ','harmonia','☯️'], ['空気','くうき','ar / clima do ambiente','🌬️'], ['本音','ほんね','sentimento verdadeiro','💭'], ['建前','たてまえ','posição oficial / fachada','🎭'], ['迷惑','めいわく','incômodo (aos outros)','😣'], ['遠慮','えんりょ','contenção por cortesia','🤲'], ['頑張る','がんばる','esforçar-se','💪'], ['我慢','がまん','aguentar / ter paciência','😤']],
    reading: { title: '空気[くうき]を 読[よ]む',
      text: '日本[にほん]では「空気[くうき]を 読[よ]む」ことが 大切[たいせつ]だと 言[い]われる。はっきり 言[い]わなくても、相手[あいて]の 気持[きも]ちを 察[さっ]する ことが 求[もと]められるのだ。また、人前[ひとまえ]で 見[み]せる 意見[いけん]を「建前[たてまえ]」、本当[ほんとう]の 気持[きも]ちを「本音[ほんね]」と 言[い]う。これは うそ ではなく、集団[しゅうだん]の 和[わ]を 守[まも]るための 知恵[ちえ]だと 考[かんが]える 人[ひと]も 多[おお]い。',
      pt: 'Diz-se que no Japão é importante "ler o ar". Espera-se que você perceba os sentimentos do outro mesmo sem que ele diga claramente. Além disso, a opinião mostrada em público chama-se "tatemae", e o sentimento verdadeiro, "honne". Muitos pensam que isso não é mentira, e sim uma sabedoria para proteger a harmonia do grupo.',
      q: [['O que significa "ler o ar"?', ['Perceber os sentimentos sem que sejam ditos','Prever o tempo','Ler em voz alta'], 0], ['Como se chama o sentimento verdadeiro?', ['建前','本音','和'], 1], ['Segundo o texto, para que serve o tatemae?', ['Para mentir','Para proteger a harmonia do grupo','Para ganhar dinheiro'], 1]] },
    sentences: [['空気[くうき] を 読[よ]んで ください。','Leia o ambiente, por favor.'], ['ご迷惑[めいわく] を おかけしました。','Desculpe pelo incômodo.'], ['遠慮[えんりょ] しないで ください。','Não faça cerimônia.']],
    quiz: [['出る杭は打たれる significa…', ['quem se destaca é reprimido','quem trabalha muito vence','pregos são perigosos'], 0], ['Quando um japonês diz 考えておきます, muitas vezes quer dizer…', ['sim, com certeza','não, de forma educada','não entendi'], 1], ['KY (空気が読めない) é alguém que…', ['não percebe o clima do ambiente','é muito educado','fala muitas línguas'], 0]],
    mission: 'Observe uma conversa (na vida real ou num dorama) e procure um momento de 建前. O que a pessoa disse e o que provavelmente sentia?',
    videos: [['Iwi4RLo62QM','Japonês Com Arthur','Cultura japonesa: honne e tatemae','pt'], ['FFw3PCtqv4g','Japan House São Paulo','Hospitalidade japonesa: vivenciando o omotenashi','pt']]
  });

  C('m3', 'cu14', 'Cultura pop: mangá, anime e games', '🎮', {
    intro: `<ul>
<li><b>Mangá</b>: a palavra ficou famosa com os esboços de Hokusai (século XIX), mas o mangá moderno nasceu com <b>Osamu Tezuka</b>, o "deus do mangá", autor de <i>Astro Boy</i> (鉄腕アトム, 1952) e criador do estilo de olhos grandes.</li>
<li><b>Anime</b>: <i>Astro Boy</i> virou a primeira série semanal de TV em 1963. O <b>Studio Ghibli</b> (1985), de Hayao Miyazaki, ganhou o Oscar de animação com <i>A Viagem de Chihiro</i>.</li>
<li><b>Games</b>: a Nintendo foi fundada em 1889 fabricando cartas de baralho <b>花札</b> (hanafuda)! Depois vieram Mario (1985), Zelda, Pokémon (1996), a franquia de mídia mais lucrativa do mundo, e PlayStation, Final Fantasy, Street Fighter…</li>
<li><b>No Brasil</b>: nos anos 1990, <i>Cavaleiros do Zodíaco</i>, <i>Dragon Ball</i> e outros animes na TV aberta formaram uma geração de fãs, e muitos começaram a estudar japonês por causa deles.</li>
<li><b>Indústria</b>: o mangá é lido por todas as idades, com revistas semanais grossas como a <i>Shōnen Jump</i>. Os dubladores (声優) são celebridades.</li>
</ul>
<p><b>Para estudar:</b> anime ajuda no ouvido, mas cuidado: personagens falam de um jeito exagerado e casual. Use para input e copie o jeito de falar das aulas e dos vídeos de japonês real.</p>`,
    vocab: [['漫画','まんが','mangá','📚'], ['アニメ','','anime','📺'], ['ゲーム','','videogame','🎮'], ['声優','せいゆう','dublador(a)','🎙️'], ['作者','さくしゃ','autor(a)','✍️'], ['人気','にんき','popularidade','⭐'], ['世界中','せかいじゅう','no mundo todo','🌍'], ['キャラクター','','personagem','🦸']],
    reading: { title: '漫画[まんが]と アニメ',
      text: '日本[にほん]の 漫画[まんが]と アニメは 今[いま]や 世界中[せかいじゅう]で 人気[にんき]だ。「漫画[まんが]の 神様[かみさま]」と 呼[よ]ばれる 手塚[てづか]治虫[おさむ]は、1950年代[ねんだい]に『鉄腕[てつわん]アトム』を 描[か]いた。任天堂[にんてんどう]は もともと 花札[はなふだ]という カードを 作[つく]る 会社[かいしゃ]だった。ブラジルでも、90年代[ねんだい]に『聖闘士星矢[セイントセイヤ]』などの アニメが 大[だい]ヒットした。',
      pt: 'Hoje o mangá e o anime japoneses são populares no mundo todo. Osamu Tezuka, chamado de "deus do mangá", desenhou Astro Boy nos anos 1950. A Nintendo era originalmente uma empresa que fazia cartas chamadas hanafuda. No Brasil também, nos anos 90, animes como Cavaleiros do Zodíaco fizeram enorme sucesso.',
      q: [['Quem é o "deus do mangá"?', ['Hayao Miyazaki','Osamu Tezuka','Hokusai'], 1], ['O que a Nintendo fazia no começo?', ['Cartas hanafuda','Televisores','Carros'], 0], ['Que anime fez sucesso no Brasil nos anos 90?', ['聖闘士星矢','鉄腕アトム','花札'], 0]] },
    sentences: [['この 漫画[まんが] は 人気[にんき] が ある。','Este mangá é popular.'], ['好[す]きな アニメ は 何[なん] です か。','Qual é seu anime favorito?'], ['声優[せいゆう] に なりたい です。','Quero ser dublador.']],
    quiz: [['A Viagem de Chihiro é de qual estúdio?', ['Toei','Studio Ghibli','Nintendo'], 1], ['Pokémon foi lançado em…', ['1985','1996','2010'], 1], ['Por que é bom cuidar ao imitar a fala de anime?', ['É exagerada e muito casual','É em chinês','É sempre formal demais'], 0]],
    mission: 'Assista a 5 minutos de um anime de que você gosta com legenda em japonês (ou sem legenda) e anote 3 palavras que você reconhecer.',
    videos: [['4FpIbGVNCNU','Animego','Osamu Tezuka, o deus do mangá: biografia completa','pt'], ['e5UGsVhYkC8','omeleteve','Studio Ghibli e Hayao Miyazaki: a história de uma lenda','pt'], ['pjtwCKN1Jnk','Nerd All Stars','O que é anime? Origem, gêneros e classificações','pt']]
  });

  C('m4', 'cu15', 'Estética japonesa: wabi-sabi, chá e jardins', '🍵', {
    intro: `<ul>
<li><b>侘び寂び (wabi-sabi)</b>: beleza no simples, no imperfeito e no que envelhece, como uma tigela rústica, musgo numa pedra ou madeira gasta.</li>
<li><b>もののあはれ (mono no aware)</b>: a emoção suave diante do que é passageiro. É por isso que as cerejeiras, que duram uma semana, emocionam tanto.</li>
<li><b>間 (ma)</b>: o valor do espaço vazio e da pausa, na arquitetura, na música, na conversa e até nas reverências.</li>
<li><b>茶道 (sadō)</b>, a cerimônia do chá: organizada no século XVI pelo mestre <b>Sen no Rikyū</b>. Cada gesto é pensado para criar um encontro único, 一期一会 (ichigo ichie, "uma vez, um encontro").</li>
<li><b>Jardins</b>: o jardim seco (枯山水) do templo Ryōan-ji, em Kyoto, usa só pedras e areia para sugerir ilhas e água.</li>
<li><b>金継ぎ (kintsugi)</b>: consertar cerâmica quebrada com laca e ouro. A rachadura vira parte da história da peça.</li>
<li><b>生け花 (ikebana)</b>: arranjos florais que valorizam linhas, assimetria e espaço vazio.</li>
</ul>`,
    vocab: [['茶道','さどう','cerimônia do chá','🍵'], ['庭','にわ','jardim','🪨'], ['生け花','いけばな','ikebana','💐'], ['侘び寂び','わびさび','wabi-sabi','🍂'], ['金継ぎ','きんつぎ','kintsugi','🏺'], ['季節','きせつ','estação do ano','🗓️'], ['美しい','うつくしい','belo','✨'], ['一期一会','いちごいちえ','cada encontro é único','🤝']],
    reading: { title: '侘[わ]び寂[さ]びと 金継[きんつ]ぎ',
      text: '侘[わ]び寂[さ]びとは、簡素[かんそ]で 不完全[ふかんぜん]な ものの 中[なか]に 美[うつく]しさを 見出[みいだ]す 感覚[かんかく]である。たとえば、古[ふる]い 茶碗[ちゃわん]の 小[ちい]さな ゆがみや、苔[こけ]むした 石[いし]に 心[こころ]を 動[うご]かされる。金継[きんつ]ぎは、割[わ]れた 器[うつわ]を 漆[うるし]と 金[きん]で 直[なお]す 技法[ぎほう]だ。傷[きず]を 隠[かく]すのではなく、むしろ 器[うつわ]の 歴史[れきし]として 見[み]せるのである。',
      pt: 'Wabi-sabi é a sensibilidade de encontrar beleza no simples e no imperfeito. Por exemplo, emocionar-se com a pequena deformação de uma tigela antiga ou com uma pedra coberta de musgo. Kintsugi é a técnica de consertar louças quebradas com laca e ouro. Em vez de esconder a rachadura, ela é mostrada como parte da história da peça.',
      q: [['Wabi-sabi encontra beleza em…', ['coisas simples e imperfeitas','coisas novas e brilhantes','coisas caras'], 0], ['Com o que o kintsugi conserta as peças?', ['Cola e tinta','Laca e ouro','Fita'], 1], ['O que o kintsugi faz com a rachadura?', ['Esconde','Mostra como parte da história','Joga fora'], 1]] },
    sentences: [['一期一会[いちごいちえ] を 大切[たいせつ] に する。','Valorizar cada encontro como único.'], ['この 庭[にわ] は 美[うつく]しい。','Este jardim é belo.'], ['割[わ]れた 器[うつわ] を 金[きん] で 直[なお]す。','Consertar a louça quebrada com ouro.']],
    quiz: [['Quem organizou a cerimônia do chá no século XVI?', ['Sen no Rikyū','Hokusai','Tokugawa Ieyasu'], 0], ['間 (ma) valoriza…', ['o espaço vazio e a pausa','a cor vermelha','a velocidade'], 0], ['一期一会 significa…', ['cada encontro acontece uma vez só','um chá por dia','uma estação por ano'], 0]],
    mission: 'Encontre algo "wabi-sabi" na sua casa (um objeto velho, gasto e bonito). Fotografe e descreva em japonês com ふるい e うつくしい.',
    videos: [['cII6Pr3lJ5w','123 Japonês','Estética japonesa: wabi-sabi','pt'], ['3WD-IvfHw0o','Japan Video Topics - Português','Sado: a arte da cerimônia do chá','pt'], ['Rm3u__4xGsM','Programa Japonês Online','Kintsugi: mais que uma técnica, uma arte e filosofia japonesa','pt']]
  });

  C('m4', 'cu16', 'Natureza, desastres e resiliência', '🌋', {
    intro: `<ul>
<li>O Japão fica no <b>Anel de Fogo do Pacífico</b>, sobre o encontro de quatro placas tectônicas. Cerca de 20% dos terremotos fortes do mundo acontecem ali, e há mais de 100 vulcões ativos.</li>
<li><b>1923</b>: o Grande Terremoto de Kantō destrói Tóquio e Yokohama. O dia <b>1º de setembro</b> virou o Dia da Prevenção de Desastres, com simulados no país inteiro.</li>
<li><b>1995</b>: terremoto de Kobe. <b>11 de março de 2011</b>: terremoto de magnitude 9,0, tsunami no nordeste (東北) e o acidente nuclear de Fukushima.</li>
<li><b>Preparação</b>: prédios antissísmicos, alerta de terremoto que toca nos celulares segundos antes do tremor (緊急地震速報), kits de emergência em casa, rotas de evacuação sinalizadas e treinamento desde a pré-escola.</li>
<li>Antigas <b>pedras de tsunami</b> no litoral avisam: "não construa casas abaixo deste ponto".</li>
<li>Há também os <b>台風</b> (tufões), todo verão e outono.</li>
</ul>
<p>A convivência com uma natureza bela e perigosa ajuda a explicar valores como a paciência (我慢), a solidariedade e a ideia budista de impermanência.</p>`,
    vocab: [['地震','じしん','terremoto','🫨'], ['津波','つなみ','tsunami','🌊'], ['台風','たいふう','tufão','🌀'], ['火山','かざん','vulcão','🌋'], ['避難','ひなん','evacuação / refúgio','🏃'], ['防災','ぼうさい','prevenção de desastres','🧰'], ['自然','しぜん','natureza','🌿'], ['準備','じゅんび','preparação','🎒']],
    reading: { title: '地震[じしん]の 国[くに]',
      text: '日本[にほん]は 世界[せかい]で 最[もっと]も 地震[じしん]の 多[おお]い 国[くに]の 一[ひと]つである。2011年[ねん]の 東日本[ひがしにほん]大震災[だいしんさい]では、巨大[きょだい]な 津波[つなみ]が 東北[とうほく]地方[ちほう]を 襲[おそ]った。こうした 経験[けいけん]から、日本[にほん]では 防災[ぼうさい]教育[きょういく]が 徹底[てってい]されており、学校[がっこう]や 職場[しょくば]では 定期的[ていきてき]に 避難[ひなん]訓練[くんれん]が 行[おこな]われている。',
      pt: 'O Japão é um dos países com mais terremotos do mundo. No Grande Terremoto do Leste do Japão, em 2011, um tsunami gigantesco atingiu a região de Tōhoku. Por causa dessas experiências, o ensino de prevenção de desastres é levado muito a sério, e escolas e empresas fazem simulados de evacuação regularmente.',
      q: [['Que região o tsunami de 2011 atingiu?', ['Kyushu','Tōhoku','Okinawa'], 1], ['O que é levado muito a sério no Japão?', ['O ensino de prevenção de desastres','O turismo','A agricultura'], 0], ['O que escolas e empresas fazem regularmente?', ['Simulados de evacuação','Festas','Provas'], 0]] },
    sentences: [['地震[じしん] だ！ 机[つくえ] の 下[した] に 入[はい]って！','Terremoto! Entre debaixo da mesa!'], ['避難[ひなん] 場所[ばしょ] は どこ です か。','Onde é o local de evacuação?'], ['防災[ぼうさい] グッズ を 準備[じゅんび] して おく。','Deixar o kit de emergência preparado.']],
    quiz: [['O Dia da Prevenção de Desastres é em…', ['1º de setembro','11 de março','1º de janeiro'], 0], ['緊急地震速報 é…', ['o alerta antecipado de terremoto','um tipo de tufão','um feriado'], 0], ['O que dizem as antigas pedras de tsunami?', ['Não construa abaixo deste ponto','Aqui há um templo','Bem-vindo à cidade'], 0]],
    mission: 'Monte mentalmente (ou de verdade) um kit de emergência e diga os itens em japonês: みず、ライト、ラジオ、たべもの、くすり.',
    videos: [['Gzyu94VR9lQ','Capital Financeiro','O problema geográfico do Japão, o país dos terremotos','pt'], ['-kX3ABxHSKE','Vagarious Travel','Unseen Japan: why Japan doesn’t fear natural disasters','en']]
  });

  C('m5', 'cu17', 'Artes tradicionais: kabuki, sumô e budō', '🎭', {
    intro: `<ul>
<li><b>能 (nō)</b>: teatro do século XIV, aperfeiçoado por Zeami, com máscaras, movimentos lentos e temas espirituais. É Patrimônio da UNESCO.</li>
<li><b>歌舞伎 (kabuki)</b>: criado por volta de 1603 por uma <b>mulher</b>, Izumo no Okuni. Pouco depois as mulheres foram proibidas de atuar, e até hoje os papéis femininos são feitos por homens (女形 onnagata). Tem maquiagem forte, cenários giratórios e o público grita o nome dos atores.</li>
<li><b>文楽 (bunraku)</b>: teatro de bonecos grandes, cada um manipulado por três pessoas.</li>
<li><b>相撲 (sumō)</b>: esporte nacional com raízes xintoístas. Os lutadores (力士) jogam sal para purificar o ringue, há seis grandes torneios por ano, e o posto máximo é o 横綱 (yokozuna).</li>
<li><b>武道 (budō)</b>, "caminho marcial": 柔道 judô (criado por Jigorō Kanō em 1882), 剣道 kendô, 合気道 aikidô e 空手 caratê, que veio de Okinawa.</li>
<li><b>Ligação com o Brasil</b>: o judoca <b>Mitsuyo Maeda</b>, o "Conde Koma", ensinou em Belém do Pará no início do século XX. Seus alunos, a família Gracie, desenvolveram o <b>jiu-jítsu brasileiro</b>.</li>
</ul>
<p><b>Na língua:</b> 道 (dō/michi, "caminho") aparece em 柔道, 剣道, 茶道 e 書道. A arte é vista como um caminho de formação pessoal, e não só como técnica. Esse é também o nome deste app!</p>`,
    vocab: [['歌舞伎','かぶき','kabuki','🎭'], ['能','のう','teatro nō','👺'], ['相撲','すもう','sumô','🤼'], ['力士','りきし','lutador de sumô','🏋️'], ['柔道','じゅうどう','judô','🥋'], ['空手','からて','caratê','🥋'], ['剣道','けんどう','kendô','🗡️'], ['道','みち','caminho','🛤️']],
    reading: { title: '柔道[じゅうどう]と ブラジル',
      text: '柔道[じゅうどう]は 1882年[ねん]、嘉納[かのう]治五郎[じごろう]によって 創始[そうし]された。「柔[じゅう]よく 剛[ごう]を 制[せい]す」という 考[かんが]え方[かた]の 通[とお]り、力[ちから]の 強[つよ]さより 技[わざ]と 心[こころ]を 重[おも]んじる。二十世紀[にじっせいき]の 初[はじ]め、柔道家[じゅうどうか]の 前田[まえだ]光世[みつよ]は ブラジルに 渡[わた]り、ベレンで グレイシー家[け]に 技[わざ]を 教[おし]えた。これが のちの ブラジリアン柔術[じゅうじゅつ]の 起源[きげん]とされている。',
      pt: 'O judô foi criado em 1882 por Jigorō Kanō. Seguindo a ideia de que "o suave vence o rígido", ele valoriza a técnica e o espírito mais do que a força. No início do século XX, o judoca Mitsuyo Maeda foi para o Brasil e ensinou suas técnicas à família Gracie, em Belém. Considera-se que essa é a origem do jiu-jítsu brasileiro.',
      q: [['Quem criou o judô?', ['Mitsuyo Maeda','Jigorō Kanō','Izumo no Okuni'], 1], ['O que o judô valoriza mais que a força?', ['Técnica e espírito','Velocidade','Dinheiro'], 0], ['Em que cidade Maeda ensinou os Gracie?', ['São Paulo','Belém','Rio de Janeiro'], 1]] },
    sentences: [['相撲[すもう] を 見[み]に 行[い]きたい。','Quero ir assistir ao sumô.'], ['柔道[じゅうどう] を 習[なら]って いる。','Estou aprendendo judô.'], ['歌舞伎[かぶき] は 四百年[よんひゃくねん] 以上[いじょう] の 歴史[れきし] が ある。','O kabuki tem mais de 400 anos de história.']],
    quiz: [['Quem criou o kabuki?', ['Uma mulher, Izumo no Okuni','Um samurai','Um monge budista'], 0], ['Por que os lutadores de sumô jogam sal?', ['Para purificar o ringue','Para escorregar menos','Para dar sorte no dinheiro'], 0], ['O caratê veio de…', ['Okinawa','Hokkaido','Kyoto'], 0]],
    mission: 'Assista a um trecho de luta de sumô ou de kabuki no YouTube. Anote os gritos e expressões que ouvir, como はっけよい e のこった!',
    videos: [['D0dohazU_3Y','Histórias do Extremo Oriente','A história do sumô: tradição, ritual e competição','pt'], ['l0EgFxMfaKU','123 Japonês','Sumô: o esporte nacional do Japão!','pt'], ['IPkRsbO76pE','123 Japonês','A história do kabuki: o teatro tradicional japonês','pt'], ['cWBysMuzgho','Histórias do Extremo Oriente','História do judô: da defesa pessoal ao esporte olímpico','pt']]
  });

  C('m5', 'cu18', 'Um Japão diverso: Ainu, Okinawa e regiões', '🧭', {
    intro: `<p>A imagem de um Japão "homogêneo" esconde muita diversidade.</p>
<ul>
<li><b>Ainu</b> (アイヌ): povo indígena de Hokkaido, com língua, religião e arte próprias. Sofreram assimilação forçada desde a era Meiji. Só em 2019 uma lei os reconheceu oficialmente como povo indígena. A língua ainu está criticamente ameaçada.</li>
<li><b>Okinawa / Ryūkyū</b>: foi um reino independente, o Reino de Ryūkyū, com comércio pela Ásia, até ser anexado em 1879. Tem línguas próprias (como o uchināguchi), música com o sanshin e uma culinária famosa pela longevidade. Foi palco de uma batalha terrível em 1945 e ainda concentra a maior parte das bases militares americanas no Japão.</li>
<li><b>Dialetos</b>: do 関西弁 de Osaka (おおきに, あかん, めっちゃ) ao difícil 津軽弁 do norte. Até a forma de dizer "obrigado" muda.</li>
<li><b>Orgulho regional</b>: cada província tem 名物 (especialidades), 駅弁 (marmitas de estação), mascotes e uma rivalidade bem-humorada, como Kantō × Kansai.</li>
<li><b>Comunidades</b>: coreanos residentes (在日), chineses, filipinos e a comunidade brasileira em cidades como Hamamatsu e Oizumi, com escolas, igrejas e supermercados brasileiros.</li>
</ul>`,
    vocab: [['方言','ほうげん','dialeto','🗣️'], ['地方','ちほう','região / interior','🗺️'], ['名物','めいぶつ','especialidade local','🍡'], ['文化','ぶんか','cultura','🎎'], ['言語','げんご','língua / idioma','🔤'], ['民族','みんぞく','povo / etnia','👥'], ['多様性','たようせい','diversidade','🌈'], ['伝統','でんとう','tradição','🏮']],
    reading: { title: '多様[たよう]な 日本[にほん]',
      text: '日本[にほん]は 単一[たんいつ]民族[みんぞく]の 国[くに]だと 言[い]われることがあるが、実際[じっさい]には そうではない。北海道[ほっかいどう]には 先住[せんじゅう]民族[みんぞく]である アイヌの 人々[ひとびと]が 暮[く]らしており、独自[どくじ]の 言語[げんご]と 文化[ぶんか]を 持[も]っている。また、沖縄[おきなわ]は かつて 琉球[りゅうきゅう]王国[おうこく]という 独立[どくりつ]した 国[くに]であった。こうした 多様性[たようせい]を 知[し]ることは、日本[にほん]を 深[ふか]く 理解[りかい]する ための 第一歩[だいいっぽ]と 言[い]えよう。',
      pt: 'Às vezes se diz que o Japão é um país de uma etnia só, mas na realidade não é assim. Em Hokkaido vivem os Ainu, um povo indígena com língua e cultura próprias. Além disso, Okinawa já foi um país independente chamado Reino de Ryūkyū. Conhecer essa diversidade pode ser considerado o primeiro passo para entender o Japão a fundo.',
      q: [['Onde vivem os Ainu?', ['Okinawa','Hokkaido','Kyoto'], 1], ['O que Okinawa já foi?', ['Um reino independente','Uma colônia portuguesa','Uma ilha desabitada'], 0], ['Segundo o texto, conhecer essa diversidade é…', ['o primeiro passo para entender o Japão a fundo','desnecessário','proibido'], 0]] },
    sentences: [['大阪[おおさか] の 方言[ほうげん] は おもしろい。','O dialeto de Osaka é divertido.'], ['この 町[まち] の 名物[めいぶつ] は 何[なん] です か。','Qual é a especialidade desta cidade?'], ['アイヌ 文化[ぶんか] を 学[まな]びたい。','Quero aprender sobre a cultura ainu.']],
    quiz: [['Em que ano os Ainu foram reconhecidos oficialmente como povo indígena?', ['1868','1945','2019'], 2], ['O Reino de Ryūkyū ficava em…', ['Okinawa','Hokkaido','Kyushu'], 0], ['名物 é…', ['especialidade local','museu','festival'], 0]],
    mission: 'Escolha uma província japonesa, descubra o 名物 dela e apresente em japonês: (província) の 名物[めいぶつ] は (prato) です。',
    videos: [['ejmBO1vyRr4','Histórias do Extremo Oriente','Os Ainu: cultura e história dos povos indígenas japoneses','pt'], ['8RUETC8TpeY','Planeta Paraíso TV-BR','Kyoto: a cidade dos antigos imperadores','pt'], ['rKUI-j3iIo0','Epimetheus','The history of Okinawa (Ryukyu Kingdom) explained in 8 minutes','en']]
  });
})();

// Cápsulas culturais: uma curiosidade (com pergunta e atividade) no fim de cada aula principal.
window.CULTURE = {
  m0f1: { t: 'Por que três escritas?', ic: '📜', txt: 'Os kanji chegaram da China por volta do século V, mas a gramática japonesa não cabia neles. Monges e escribas passaram a usar kanji só pelo som, e esses kanji, simplificados, viraram os kana: de 安 veio あ, de 加 veio カ.', q: ['Os kana surgiram a partir de…', ['letras do alfabeto latino','kanji simplificados','desenhos de animais'], 1], act: 'Procure na internet "安 → あ" e veja a evolução da letra. Tente desenhar as duas.' },
  m0l1: { t: 'Japão e Brasil: família distante', ic: '🇧🇷', txt: 'O japonês é falado por cerca de 125 milhões de pessoas, quase todas no Japão. Mas o Brasil tem a maior comunidade de descendentes de japoneses fora do Japão: cerca de 2 milhões de nikkeis, desde a chegada do navio Kasato Maru em 1908.', q: ['Qual país tem a maior comunidade nikkei fora do Japão?', ['Estados Unidos','Brasil','China'], 1], act: 'Procure lugares com nomes japoneses perto de você (restaurantes, bairros, sobrenomes). O Japão está mais perto do que parece.' },
  m0l2: { t: 'Hiragana: a escrita das damas da corte', ic: '👘', txt: 'No período Heian (794–1185), os homens escreviam em chinês clássico e as mulheres da corte escreviam em hiragana, então chamado 女手, "mão de mulher". Foi em hiragana que Murasaki Shikibu escreveu o Conto de Genji, considerado um dos primeiros romances do mundo.', q: ['Como o hiragana era chamado na corte Heian?', ['女手, "mão de mulher"','escrita dos samurais','letra dos monges'], 0], act: 'Escreva あいうえお bem devagar, com traços suaves e curvos, como uma caligrafia de corte.' },
  m0l3: { t: 'O poema いろは', ic: '🎋', txt: 'O poema いろはにほへと usa cada kana exatamente uma vez e fala da impermanência da vida, um tema budista. Por séculos ele foi a "ordem alfabética" do Japão. Ainda hoje aparece em listas, em assentos de teatro e na expressão いろは, "o bê-á-bá".', q: ['O que torna o poema いろは especial?', ['Usa cada kana uma única vez','É o hino nacional','É a primeira canção de ninar'], 0], act: 'Leia em voz alta: いろはにほへと ちりぬるを (as cores perfumadas acabam caindo).' },
  m0l4: { t: 'しりとり e a letra proibida', ic: '🎲', txt: 'Shiritori é o jogo de palavras mais popular do Japão: cada palavra começa com o último kana da anterior (りんご → ごりら → らっぱ…). Quem diz uma palavra terminada em ん perde, porque nenhuma palavra japonesa começa com ん!', q: ['No shiritori, você perde quando…', ['diz uma palavra terminada em ん','repete uma vogal','fala muito rápido'], 0], act: 'Jogue shiritori sozinho com as palavras que já conhece. Até onde você chega?' },
  m0l5: { t: 'O som "pesado" do dakuten', ic: '🔊', txt: 'Em japonês, o dakuten muitas vezes dá ideia de algo maior ou mais pesado: ころころ é uma coisa pequena rolando; ごろごろ é algo grande e pesado rolando (ou o barulho do trovão). きらきら brilha bonito; ぎらぎら brilha forte demais.', q: ['ごろごろ sugere algo…', ['pequeno e leve','grande e pesado'], 1], act: 'Diga ころころ e depois ごろごろ, mudando a voz para algo leve e depois pesado.' },
  m0f2: { t: 'Haicai: poesia que conta moras', ic: '🐸', txt: 'O haicai tem 5-7-5 moras, e não sílabas. O mais famoso é de Matsuo Bashō (1686): 古池や 蛙飛び込む 水の音 (ふるいけや かわずとびこむ みずのおと), "Velho tanque / uma rã salta / barulho da água".', q: ['O haicai conta…', ['palavras','moras','rimas'], 1], act: 'Conte as moras de ふるいけや (5) batendo palmas. Depois tente criar um verso seu de 5 moras.' },
  m0l6: { t: 'Katakana: nascido das anotações dos monges', ic: '🖋️', txt: 'O katakana surgiu de pedacinhos de kanji que os monges budistas rabiscavam ao lado dos textos chineses para lembrar a pronúncia. Hoje ele escreve palavras estrangeiras e até inventa inglês que não existe em inglês, como サラリーマン (assalariado) e マイペース (no seu ritmo).', q: ['Quem criou o katakana?', ['Monges anotando textos budistas','Comerciantes portugueses','Crianças na escola'], 0], act: 'Descubra o que significa a palavra japonesa ノートパソコン (dica: note + personal computer).' },
  m0l7: { t: 'Herança portuguesa', ic: '⛵', txt: 'Em 1543, portugueses chegaram à ilha de Tanegashima, os primeiros europeus no Japão. Trouxeram armas de fogo, o cristianismo e palavras que existem até hoje: パン (pão), カステラ (pão de ló de "Castela"), ボタン (botão), カルタ (carta) e provavelmente テンプラ (tempurá).', q: ['Em que ano os portugueses chegaram ao Japão?', ['1500','1543','1808'], 1], act: 'Procure "biombos Nanban" na internet: pinturas japonesas que retratam os portugueses do século XVI.' },
  m0l8: { t: 'O kanji do ano', ic: '🖌️', txt: 'Existem dezenas de milhares de kanji, mas o governo define 2.136 de uso comum (常用漢字). Todo dezembro, o país vota no "kanji do ano" (今年の漢字), e um monge o pinta gigante no templo Kiyomizu-dera, em Kyoto. Já foram escolhidos 金 (ouro), 災 (desastre) e 戦 (guerra).', q: ['Quantos kanji de uso comum o governo define?', ['500','2.136','50.000'], 1], act: 'Se você escolhesse um kanji para o seu ano, qual seria entre os que já aprendeu?' },
  m0f3: { t: 'Uma língua de alto contexto', ic: '🌫️', txt: 'O japonês omite o sujeito, o objeto e às vezes o verbo, porque espera que o ouvinte complete pelo contexto. Isso combina com a ideia social de 空気を読む, "ler o ar": entender o que não foi dito. Muitas vezes, quanto menos se diz, mais educado soa.', q: ['空気を読む significa…', ['respirar fundo','perceber o que não foi dito','ler em voz alta'], 1], act: 'Repare numa conversa em português quantas vezes você poderia omitir o "eu" sem perder o sentido.' },
  m0f4: { t: 'Por que は soa "wa"?', ic: '🕰️', txt: 'Há mil anos, は era pronunciado "pa", depois "fa" e, no meio das palavras, virou "wa". A escrita das partículas は, へ e を ficou congelada na forma antiga, enquanto a pronúncia mudou. É como o "h" de "homem", que escrevemos e não falamos.', q: ['Por que は (partícula) se lê "wa"?', ['Por um erro de impressão','Porque a escrita guardou a forma antiga e a pronúncia mudou','Porque vem do inglês'], 1], act: 'Leia em voz alta: わたしは がっこうへ ほんを もっていきます (watashi WA gakkou E hon O…).' },
  m0f5: { t: 'Uchi e soto', ic: '🏠', txt: 'うち significa "casa", mas também "nós, o grupo de dentro". そと é "fora". Ao falar com um cliente, até o presidente da sua empresa é "de dentro", e por isso você fala dele sem honoríficos: "o Tanaka disse", e não "o sr. Tanaka disse".', q: ['Ao falar com um cliente sobre o seu chefe, você…', ['usa さん e keigo para o chefe','fala do chefe com humildade, sem さん'], 1], act: 'Quem é うち (de dentro) e quem é そと (de fora) na sua vida? Faça duas listas.' },
  m1l1: { t: 'Ojigi: a arte da reverência', ic: '🙇', txt: 'Existem níveis de reverência: 会釈 (eshaku, 15°) para cumprimentar no dia a dia, 敬礼 (keirei, 30°) para clientes e chefes, e 最敬礼 (saikeirei, 45°) para desculpas sérias e agradecimentos profundos. Aperto de mão é raro, mas japoneses que lidam com estrangeiros se adaptam.', q: ['Qual reverência é usada para pedir desculpas sérias?', ['15°','30°','45°'], 2], act: 'Treine as três reverências na frente do espelho, dizendo おはようございます, よろしくおねがいします e もうしわけありません.' },
  m1l2: { t: 'Sobrenome primeiro e o cartão de visita', ic: '📇', txt: 'Em japonês o sobrenome vem antes: 山田太郎 = Yamada (sobrenome) Tarō (nome). Desde 2020, o governo pede que nomes japoneses em inglês sigam essa mesma ordem. No trabalho, a apresentação vem com o 名刺: entregue e receba com as duas mãos, com uma pequena reverência.', q: ['Em 山田太郎, o sobrenome é…', ['山田 (Yamada)','太郎 (Tarō)'], 0], act: 'Escreva seu nome no estilo japonês: sobrenome primeiro, em katakana.' },
  m1l3: { t: 'Números da sorte e do azar', ic: '🍀', txt: 'O 4 pode ser lido し, como 死 (morte), e o 9 pode ser lido く, como 苦 (sofrimento). Por isso alguns hospitais e hotéis pulam o quarto 4 e evitam o 9. Já o 8 (八) é de sorte: o desenho se abre para baixo, como um futuro que se alarga (末広がり).', q: ['Por que o 4 é evitado?', ['É difícil de escrever','Pode ser lido し, como "morte"','É um número par'], 1], act: 'Conte de 1 a 10 em japonês e repare: quando se diz よん em vez de し, e きゅう em vez de く?' },
  m1l4: { t: 'Gestos japoneses', ic: '👃', txt: 'Para dizer "eu", o japonês aponta para o próprio nariz, não para o peito. Para chamar alguém, a mão vai com a palma para baixo, como o gato da sorte 招き猫. Cruzar os braços em X (バツ) significa "não" ou "proibido", e um círculo com os braços (マル), "certo".', q: ['Para dizer "eu", um japonês aponta para…', ['o peito','o nariz','a testa'], 1], act: 'Responda a 3 perguntas em casa só com マル e バツ, usando os braços.' },
  m1l5: { t: 'Washoku, patrimônio da humanidade', ic: '🍱', txt: 'Em 2013, a culinária tradicional japonesa virou Patrimônio Cultural Imaterial da UNESCO. Não por um prato, mas pelo jeito de comer: ingredientes da estação, equilíbrio (arroz, sopa e três acompanhamentos) e o respeito expresso em いただきます.', q: ['O que a UNESCO reconheceu em 2013?', ['O sushi','A culinária tradicional japonesa (washoku)','O lámen'], 1], act: 'Diga いただきます e ごちそうさまでした nas suas refeições de hoje.' },
  m1l6: { t: 'Sem gorjeta, com bandejinha', ic: '💴', txt: 'No Japão não se dá gorjeta: o bom serviço já está incluído e deixar dinheiro pode até fazer o funcionário correr atrás de você para devolver! No caixa, o dinheiro vai numa bandejinha (カルトン), e o troco volta com nota e moedas separadas.', q: ['Dar gorjeta no Japão é…', ['obrigatório','desnecessário e pode constranger','de 10%'], 1], act: 'Simule uma compra: いくら ですか → 1000えん です → はい、どうぞ (colocando o dinheiro numa bandeja imaginária).' },
  m1l7: { t: 'Pontualidade extrema', ic: '⏱️', txt: 'O atraso médio do Shinkansen é de menos de um minuto. Em 2017, uma empresa ferroviária pediu desculpas publicamente porque um trem saiu 20 segundos ANTES do horário. Chegar 5 a 10 minutos antes é o normal; no horário exato já é quase atrasado.', q: ['Por que uma ferrovia pediu desculpas em 2017?', ['Atrasou 2 horas','Saiu 20 segundos adiantado','Quebrou'], 1], act: 'Diga sua rotina com horários: ７じ に おきます。８じ に でかけます。' },
  m1l8: { t: 'Endereços sem nome de rua', ic: '🗺️', txt: 'A maioria das ruas japonesas não tem nome! O endereço é feito por quarteirões: bairro, 丁目 (setor), 番 (quarteirão) e 号 (prédio). Por isso o 交番, o posto policial de bairro, é muito procurado por quem está perdido.', q: ['Como funcionam os endereços japoneses?', ['Por nome da rua e número','Por quarteirões numerados'], 1], act: 'Pergunte o caminho em voz alta: すみません、えき は どこ ですか。' },
  m1l9: { t: 'O calendário das eras', ic: '📅', txt: 'Além do calendário ocidental, o Japão conta os anos pela era imperial: 令和 (Reiwa) começou em 2019, então 2026 é 令和8年. Os dias da semana vêm dos astros e elementos: 日 sol, 月 lua, 火 fogo, 水 água, 木 madeira, 金 metal, 土 terra.', q: ['Qual é a era atual?', ['平成 (Heisei)','令和 (Reiwa)','昭和 (Shōwa)'], 1], act: 'Descubra em que ano Reiwa você nasceu (ou se foi em 平成 ou 昭和). Ex.: 1989 = 平成元年.' },
  m1l10: { t: 'Minha mãe × sua mãe', ic: '👪', txt: 'Para a própria família, usam-se palavras humildes (母 haha, "minha mãe"). Para a família dos outros, palavras respeitosas (お母さん okaasan, "sua mãe"). Mas em casa, falando com a própria mãe, você a chama de お母さん. Contexto é tudo.', q: ['Para falar da SUA mãe com um colega, você diz…', ['母 (haha)','お母さん (okaasan)'], 0], act: 'Apresente sua família para alguém de fora usando as formas humildes: ちち、はは、あに…' },
  m1l11: { t: 'Genkan e tatami', ic: '🏠', txt: 'No 玄関 (entrada), os sapatos ficam no nível mais baixo e você sobe para dentro de casa de meias ou chinelos. O tamanho dos cômodos se mede em tatamis (畳 jō): um quarto de "6 tatames" tem uns 10 m². Até nos anúncios de apartamento se usa essa medida!', q: ['Um quarto de 6 畳 tem mais ou menos…', ['10 m²','60 m²','6 m²'], 0], act: 'Calcule: quantos tatamis cabem no seu quarto? (1 tatame ≈ 1,6 m²)' },
  m1l12: { t: 'Kawaii: muito além de fofo', ic: '🧸', txt: 'A cultura kawaii está em todo lugar: placas de obra com bichinhos, mascotes (ゆるキャラ) para cada cidade, polícia e até presídio. A Hello Kitty (1974) é embaixadora do turismo. "Kawaii" é um elogio a qualquer coisa adorável, não só a pessoas.', q: ['ゆるキャラ são…', ['mascotes de cidades e instituições','tipos de doce','bonecas antigas'], 0], act: 'Procure "Kumamon", o mascote de Kumamoto, e descreva-o com 3 adjetivos い ou な.' },
  m1l13: { t: 'O Japão em superlativos', ic: '🗻', txt: 'O monte Fuji (3.776 m) é o mais alto do país; o lago Biwa, o maior; o rio Shinano, o mais longo. A região de Tóquio tem uns 37 milhões de pessoas, a maior aglomeração urbana do mundo, e mesmo assim é uma das mais seguras.', q: ['Qual é a montanha mais alta do Japão?', ['Monte Fuji','Monte Aso','Monte Takao'], 0], act: 'Compare duas cidades em japonês: とうきょう は リオ より おおきい です。' },
  m1l14: { t: 'Karaokê, invenção japonesa', ic: '🎤', txt: 'O karaokê nasceu no Japão nos anos 1970: カラ (vazio) + オケ (orquestra) = "orquestra vazia". Hoje há prédios inteiros de cabines privadas, e cantar com colegas de trabalho é comum. Outros hobbies populares: mangá, pachinko, jardinagem, trilhas e fotografia.', q: ['カラオケ significa…', ['música alta','orquestra vazia','cantar junto'], 1], act: 'Escolha uma música japonesa fácil e cante o refrão acompanhando a letra em kana.' },
  m1l15: { t: 'A arte de recusar sem dizer não', ic: '🙅', txt: 'Dizer いいえ diretamente a um convite soa duro. Os japoneses preferem frases inacabadas: 「土曜日はちょっと…」 ("Sábado é um pouco…"). A outra pessoa entende o "não" e ninguém fica constrangido.', q: ['「ちょっと…」 em resposta a um convite normalmente quer dizer…', ['sim, um pouco','não, de forma educada'], 1], act: 'Recuse 3 convites imaginários com ちょっと… e um motivo: あしたは ちょっと… しごとが あります。' },
  m1l16: { t: 'Kōban e a carteira devolvida', ic: '👮', txt: 'O 交番 é um pequeno posto policial em cada bairro, onde os policiais dão informações e recebem achados e perdidos. Em Tóquio, todo ano, bilhões de ienes em dinheiro perdido são entregues à polícia, e a maior parte volta aos donos.', q: ['O que é um 交番?', ['Um posto policial de bairro','Um banco','Uma estação de trem'], 0], act: 'Pratique: すみません、さいふ を なくしました (perdi minha carteira).' },
  m1l17: { t: 'Uma língua (quase) isolada', ic: '🧩', txt: 'O japonês não tem parentesco comprovado com o chinês nem com o coreano. Ele forma a pequena família japônica, junto com as línguas de Okinawa. A gramática lembra mais o coreano e o turco (verbo no fim, partículas) do que o chinês.', q: ['O japonês pertence à família…', ['sino-tibetana, como o chinês','japônica, com as línguas de Okinawa','indo-europeia'], 1], act: 'Escreva uma frase de cada tipo (substantiva, adjetiva e verbal) sobre a cultura japonesa.' },
  m2l1: { t: 'すみません, a palavra-coringa', ic: '🙏', txt: 'すみません serve para pedir licença, chamar o garçom, pedir desculpas e até agradecer quando alguém teve trabalho por você. A ideia é "a situação não está resolvida": você reconhece que causou um incômodo.', q: ['すみません pode significar…', ['só "desculpe"','desculpe, com licença e até obrigado'], 1], act: 'Use すみません em 3 situações diferentes hoje (mesmo em pensamento): chamar, desculpar e agradecer.' },
  m2l2: { t: 'Karōshi e a reforma do trabalho', ic: '🕗', txt: 'O Japão criou a palavra 過労死 (karōshi), "morte por excesso de trabalho". Depois de casos que chocaram o país, uma lei de 2019 passou a limitar as horas extras. Trabalho remoto e semanas de 4 dias começam a aparecer.', q: ['過労死 significa…', ['folga remunerada','morte por excesso de trabalho','promoção'], 1], act: 'Descreva o que você está fazendo agora com 〜ています: いま にほんご を べんきょうしています。' },
  m2l3: { t: 'Por que não há lixeiras nas ruas?', ic: '🗑️', txt: 'Depois do ataque com gás sarin no metrô de Tóquio, em 1995, muitas lixeiras públicas foram retiradas. Os japoneses se acostumaram a levar o lixo para casa e separá-lo em vários tipos, com dias certos de coleta. E as ruas continuam limpíssimas.', q: ['O que muitos japoneses fazem com o lixo na rua?', ['Jogam no chão','Levam para casa','Queimam'], 1], act: 'Diga 3 regras de etiqueta com 〜てはいけません: でんしゃ で でんわ を しては いけません。' },
  m2l4: { t: 'Senpai e kōhai', ic: '🧑‍🤝‍🧑', txt: 'Na escola e no trabalho, quem entrou antes é 先輩 (senpai) e quem entrou depois é 後輩 (kōhai). O kōhai fala com o senpai de forma educada, e o senpai cuida do kōhai. A forma casual que você aprendeu hoje é para iguais e para os mais próximos.', q: ['Um 後輩 fala com o 先輩…', ['de forma casual','de forma educada'], 1], act: 'Escreva uma mensagem casual para um amigo (forma simples) e a mesma mensagem para um professor (です・ます).' },
  m2l5: { t: 'Gaman: aguentar firme', ic: '🪨', txt: '我慢 (gaman) é suportar o difícil com paciência e dignidade. Depois do terremoto de 2011, o mundo se impressionou com as filas organizadas para pegar água e comida. A palavra-irmã 頑張る (ganbaru) é "esforçar-se ao máximo", e がんばって é o "força!" de todo dia.', q: ['我慢 significa…', ['desistir','suportar com paciência','reclamar'], 1], act: 'Escreva uma obrigação sua com 〜なければなりません e termine dizendo がんばります！' },
  m2l6: { t: 'Experiências que todo japonês já teve', ic: '🎐', txt: 'Quase todo japonês já foi ao santuário no Ano-Novo (初詣), fez piquenique sob as cerejeiras (花見), participou da gincana escolar (運動会) e foi a um festival de verão de yukata. São experiências compartilhadas que viram assunto de conversa.', q: ['初詣 é…', ['a primeira visita do ano ao santuário','a primeira neve','o primeiro dia de aula'], 0], act: 'Pergunte a você mesmo com 〜たことがありますか: にほん に いった こと が ありますか。' },
  m2l7: { t: 'Honne e tatemae', ic: '🎭', txt: '本音 (honne) é o que se pensa de verdade; 建前 (tatemae) é o que se diz em público para manter a harmonia. Por isso o japonês adora suavizar opiniões com 〜と思います ("eu acho") e evita afirmações duras.', q: ['建前 é…', ['a opinião verdadeira','a posição mostrada em público'], 1], act: 'Dê 3 opiniões usando 〜と思います sobre a comida japonesa.' },
  m2l8: { t: 'Monozukuri e kaizen', ic: '🔧', txt: 'ものづくり (monozukuri) é o orgulho de "fazer coisas" com perfeição artesanal. 改善 (kaizen) é a melhoria contínua em pequenos passos, filosofia que a Toyota espalhou pelo mundo. Pense nisso para o seu estudo: 1% melhor por dia.', q: ['改善 (kaizen) significa…', ['melhoria contínua em pequenos passos','fabricação em massa','férias'], 0], act: 'Descreva um objeto japonês que você tem usando uma oração relativa: ブラジル で かった にほん の ペン。' },
  m2l9: { t: 'Alunos que limpam a escola', ic: '🧹', txt: 'Nas escolas japonesas não há faxineiros nas salas: os próprios alunos limpam salas, corredores e banheiros todos os dias (お掃除). Eles também servem a merenda (給食) aos colegas. A ideia é aprender responsabilidade e respeito pelo espaço comum.', q: ['Quem limpa as salas nas escolas japonesas?', ['Faxineiros','Os próprios alunos','Os pais'], 1], act: 'Diga 3 coisas que você consegue fazer em japonês com a forma potencial: ひらがな が よめます。' },
  m2l10: { t: 'Omiyage e presentes de volta', ic: '🎁', txt: 'Quem viaja traz お土産 (omiyage) para os colegas: doces da região, embalados um por um. Quem recebe um presente costuma retribuir com お返し (okaeshi), muitas vezes com metade do valor. No Dia dos Namorados as mulheres dão chocolate, e em 14 de março (White Day) os homens retribuem.', q: ['O que é お返し?', ['O presente de retribuição','Um tipo de doce','Uma viagem'], 0], act: 'Pense num presente que você recebeu e diga: (pessoa) に (coisa) を もらいました。' },
  m2l11: { t: 'Um país preparado para terremotos', ic: '🫨', txt: 'O Japão sente cerca de 1.500 terremotos por ano. Se tremer, a regra é: proteja a cabeça, entre debaixo da mesa e só saia quando parar. No 1º de setembro, Dia da Prevenção de Desastres, há simulados no país inteiro.', q: ['O que fazer primeiro num terremoto?', ['Correr para a rua','Proteger a cabeça e entrar debaixo da mesa','Usar o elevador'], 1], act: 'Crie frases com 〜たら: じしん が きたら、つくえ の した に はいります。' },
  m2l12: { t: 'Golden Week', ic: '🗓️', txt: 'Entre o fim de abril e o começo de maio, vários feriados seguidos formam a ゴールデンウィーク. É quando o país inteiro viaja: trens e aeroportos lotam. Como muitos japoneses tiram poucas férias por conta própria, esses feriados são preciosos.', q: ['Quando é a Golden Week?', ['Fim de abril e começo de maio','Dezembro','Agosto'], 0], act: 'Conte seus planos para o próximo feriado com つもり: (lugar) に いく つもり です。' },
  m2l13: { t: 'Máscaras e longevidade', ic: '😷', txt: 'Muito antes da pandemia, os japoneses já usavam máscara quando gripados, por consideração aos outros, ou na época do pólen. O país tem uma das maiores expectativas de vida do mundo (cerca de 84 anos) e um sistema público de saúde que cobre todos.', q: ['Por que muitos usavam máscara antes da pandemia?', ['Moda apenas','Para não passar gripe e por causa do pólen','Exigência da lei'], 1], act: 'Descreva um sintoma: あたま が いたい です。ねつ が あります。' },
  m2l14: { t: 'Shinkansen: o trem-bala', ic: '🚄', txt: 'O primeiro Shinkansen foi inaugurado em 1964, poucos dias antes das Olimpíadas de Tóquio. Em quase 60 anos não houve nenhuma morte de passageiro por colisão ou descarrilamento. Nas estações finais, equipes limpam o trem inteiro em cerca de 7 minutos.', q: ['Em que ano o Shinkansen foi inaugurado?', ['1945','1964','2000'], 1], act: 'Planeje uma viagem Tóquio → Kyoto e diga: しんかんせん で きょうと へ いきます。' },
  m2l15: { t: 'Konbini: muito mais que uma loja', ic: '🏪', txt: 'São mais de 55 mil lojas de conveniência (コンビニ) no Japão, abertas 24 horas. Nelas você paga contas, compra ingressos, envia encomendas, saca dinheiro, imprime documentos e come bem. A romancista Sayaka Murata escreveu um best-seller sobre trabalhar numa delas: Querida Konbini.', q: ['O que NÃO se costuma fazer num konbini?', ['Pagar contas','Enviar encomendas','Renovar o passaporte'], 2], act: 'Faça o role-play do caixa: おべんとう、あたためますか → はい、おねがいします。' },
  m3l1: { t: 'A passiva do "sofrimento"', ic: '🌧️', txt: 'O japonês tem uma passiva especial para mostrar que algo te afetou negativamente: 雨に降られた, literalmente "fui chovido", ou seja, a chuva me pegou. Ela mostra uma visão de mundo em que os eventos "acontecem com" a pessoa.', q: ['雨に降られた expressa…', ['que choveu e isso me atrapalhou','que eu fiz chover','que gosto de chuva'], 0], act: 'Crie uma frase de passiva de incômodo: でんしゃ で あし を ふまれました (pisaram no meu pé).' },
  m3l2: { t: 'Juku e o "inferno dos exames"', ic: '📚', txt: 'Muitos estudantes japoneses frequentam o 塾 (juku), um cursinho noturno, para os exames de admissão do colegial e da faculdade. A pressão é tão grande que a temporada de provas ganhou o apelido de 受験地獄, "inferno dos exames".', q: ['O que é um 塾?', ['Um cursinho de reforço','Um templo','Uma escola de artes marciais'], 0], act: 'Escreva com a causativa: お母さん は こども に べんきょう させます。' },
  m3l3: { t: 'Omotenashi', ic: '🛎️', txt: 'おもてなし é a hospitalidade japonesa: antecipar o que o cliente precisa antes que ele peça. Funcionárias de loja de departamento se curvam na abertura, equipes de limpeza do Shinkansen fazem reverência ao trem, e o keigo é a forma linguística desse cuidado.', q: ['おもてなし é…', ['a hospitalidade que antecipa as necessidades','um tipo de comida','uma festa'], 0], act: 'Ouça uma loja japonesa no YouTube e conte quantas vezes aparece いらっしゃいませ.' },
  m3l4: { t: 'Cartas que começam pelo clima', ic: '✉️', txt: 'Cartas formais japonesas abrem com uma saudação da estação (時候の挨拶), como 「桜の花が咲く季節となりました」, "chegou a estação das cerejeiras". Nos e-mails de trabalho, a abertura padrão é お世話になっております, "obrigado pelo apoio de sempre".', q: ['Como começa um e-mail de trabalho típico?', ['お世話になっております','やあ！','おやすみなさい'], 0], act: 'Escreva a abertura de um e-mail formal com お世話になっております e seu nome.' },
  m3l5: { t: 'A língua da suavidade', ic: '☁️', txt: 'Os japoneses evitam afirmações categóricas. Até a previsão do tempo usa でしょう ("provavelmente"), e opiniões vêm com 〜みたい, 〜らしい e かもしれない. Soar certo demais pode parecer arrogante.', q: ['Por que tantas expressões de incerteza?', ['Porque os japoneses nunca sabem nada','Para soar mais suave e menos arrogante'], 1], act: 'Descreva o tempo de amanhã como um meteorologista japonês: あした は あめ でしょう。' },
  m3l6: { t: 'Ikigai: a razão de viver', ic: '🌅', txt: '生き甲斐 (ikigai) é aquilo que faz você levantar de manhã. É um conceito muito associado a Okinawa, onde há muitos centenários. Lá, ter um propósito, uma comunidade próxima (模合) e comer até 80% da fome (腹八分目) são vistos como segredos da longevidade.', q: ['腹八分目 é…', ['comer até 80% da fome','comer 8 vezes ao dia','jejuar'], 0], act: 'Qual é o seu ikigai? Escreva com ために: にほんご を まなぶ のは ___ ためです。' },
  m3l7: { t: 'Mono no aware', ic: '🌸', txt: 'もののあはれ é a emoção suave diante do que é passageiro. As cerejeiras florescem por uma semana e caem, e é justamente isso que as torna tão comoventes. Essa sensibilidade aparece na literatura clássica, no haicai e até nos animes.', q: ['Por que as cerejeiras comovem tanto?', ['Porque são caras','Porque duram pouco'], 1], act: 'Descreva algo passageiro de que você gosta (pôr do sol, chuva…) em uma frase em japonês.' },
  m3l8: { t: 'Kintsugi: consertar com ouro', ic: '🏺', txt: 'Quando uma tigela quebra (割れる), o japonês pode consertá-la (直す) com laca e pó de ouro: é o 金継ぎ (kintsugi). A cicatriz dourada não é escondida, ela passa a fazer parte da beleza e da história do objeto.', q: ['No kintsugi, a rachadura é…', ['escondida','destacada com ouro'], 1], act: 'Use um par transitivo/intransitivo: コップ が われました × コップ を わりました. Qual mostra culpa?' },
  m3l9: { t: 'Shūkatsu: a caça ao emprego', ic: '👔', txt: 'No 就活, os universitários do penúltimo ano saem de terno preto idêntico (リクルートスーツ) para dezenas de entrevistas. As empresas contratam turmas inteiras de recém-formados, que começam juntas em 1º de abril.', q: ['Quando os recém-formados costumam começar a trabalhar?', ['1º de abril','1º de janeiro','No dia que quiserem'], 0], act: 'Treine a frase de entrevista: よろしく お願[ねが]い いたします, com reverência de 30°.' },
  m3l10: { t: 'Imprensa japonesa', ic: '📰', txt: 'O Yomiuri Shimbun já foi o jornal de maior tiragem do mundo, e os japoneses estão entre os povos que mais leem jornal impresso. A NHK é a emissora pública, financiada por uma taxa paga pelos lares, e o site NHK News Web Easy publica notícias em japonês simples.', q: ['Qual site publica notícias em japonês fácil?', ['NHK News Web Easy','Yomiuri Sports','Jump'], 0], act: 'Abra o NHK News Web Easy e leia só o título de 3 notícias.' },
  m4l1: { t: '和魂洋才', ic: '⚙️', txt: 'Na era Meiji, o lema era 和魂洋才, "espírito japonês, técnica ocidental": adotar trem, fábricas e Constituição sem abrir mão da identidade. Esse equilíbrio entre importar e adaptar continua sendo uma marca do Japão.', q: ['和魂洋才 significa…', ['espírito japonês, técnica ocidental','paz e guerra','tradição acima de tudo'], 0], act: 'Escreva uma frase de concessão sobre o Japão: 伝統的[でんとうてき]な 国[くに] にもかかわらず、技術[ぎじゅつ] が 進[すす]んでいる。' },
  m4l2: { t: 'Bolha e décadas perdidas', ic: '📉', txt: 'No fim dos anos 1980, dizia-se que o terreno do Palácio Imperial valia mais que toda a Califórnia. A bolha estourou no começo dos anos 90, e vieram as "décadas perdidas" de estagnação, que mudaram o emprego, o consumo e o humor do país.', q: ['As "décadas perdidas" vieram depois…', ['da Segunda Guerra','do estouro da bolha econômica','da era Meiji'], 1], act: 'Escreva com おかげで e せいで: 円安[えんやす] の おかげで 観光客[かんこうきゃく] が 増[ふ]えた。' },
  m4l3: { t: 'Japão e Brasil: 1908', ic: '⚓', txt: 'Em 18 de junho de 1908, o Kasato Maru chegou a Santos com cerca de 780 imigrantes. Para o Brasil, foi o começo de uma comunidade que hoje soma cerca de 2 milhões de pessoas; para o Japão, uma das maiores ondas de emigração da sua história.', q: ['Quando o Kasato Maru chegou a Santos?', ['18 de junho de 1908','7 de setembro de 1822','15 de agosto de 1945'], 0], act: 'Escreva 2 frases com にとって: 日系人[にっけいじん] にとって、1908年[ねん] は 特別[とくべつ] な 年[とし] だ。' },
  m4l4: { t: 'Genji e o Livro do Travesseiro', ic: '📖', txt: 'Por volta do ano 1000, duas mulheres da corte escreveram clássicos: Murasaki Shikibu, o Conto de Genji, e Sei Shōnagon, o Livro do Travesseiro (枕草子), com listas e observações espirituosas, como "coisas que fazem o coração bater mais rápido".', q: ['Quem escreveu o 枕草子?', ['Sei Shōnagon','Murasaki Shikibu','Natsume Sōseki'], 0], act: 'Escreva uma lista à moda de Sei Shōnagon, em である体: 「美[うつく]しいもの」, com 3 itens.' },
  m4l5: { t: 'Aizuchi e o valor do silêncio', ic: '🤫', txt: 'Durante uma conversa, os japoneses dão sinais constantes de escuta, os あいづち: うん, へえ, そうなんだ. Ficar calado ao telefone pode parecer que a ligação caiu. Por outro lado, um silêncio (間) depois de uma pergunta difícil é normal, e não constrangedor.', q: ['O que são あいづち?', ['Sinais de que você está ouvindo','Palavrões','Cumprimentos de Ano-Novo'], 0], act: 'Assista a uma entrevista japonesa e conte quantos あいづち aparecem em 1 minuto.' },
  m4l6: { t: 'Onomatopeias no mangá', ic: '💥', txt: 'O mangá é cheio de efeitos sonoros desenhados: ドキドキ (coração batendo), ゴゴゴゴ (tensão ameaçadora, famoso em JoJo) e シーン (silêncio, que tem até "som"!). Osamu Tezuka, o "deus do mangá", ajudou a criar essa linguagem visual.', q: ['Qual onomatopeia representa o silêncio?', ['シーン','ドキドキ','ワンワン'], 0], act: 'Escolha uma página de mangá e encontre 3 onomatopeias. O que elas representam?' },
  m4l7: { t: 'O país mais velho do mundo', ic: '👵', txt: 'Cerca de 29% dos japoneses têm 65 anos ou mais, a maior proporção do planeta. Há vilas quase vazias, escolas fechando e robôs ajudando em casas de repouso. A imigração de trabalhadores estrangeiros é um dos grandes debates nacionais.', q: ['Que parte da população tem 65 anos ou mais?', ['Cerca de 10%','Cerca de 29%','Cerca de 50%'], 1], act: 'Dê sua opinião elaborada: 外国人[がいこくじん] 労働者[ろうどうしゃ] を 増[ふ]やす べきだ と 思[おも]う。なぜなら…' },
  m4l8: { t: 'Nemawashi e ringi', ic: '🌱', txt: '根回し (nemawashi) vem da jardinagem: preparar as raízes antes de transplantar uma árvore. No trabalho, é conversar com cada pessoa antes da reunião. Depois, o 稟議 (ringi) circula o documento para todos carimbarem. Decisões são lentas, mas a execução é rápida.', q: ['De onde vem a palavra 根回し?', ['Da jardinagem: preparar as raízes','Do esporte','Da culinária'], 0], act: 'Simule uma ligação: お電話[でんわ] ありがとうございます。(empresa) の (nome) で ございます。' },
  m5l1: { t: 'JLPT: a prova de proficiência', ic: '🏅', txt: 'O JLPT (日本語能力試験) existe desde 1984 e tem 5 níveis, do N5 (básico) ao N1 (avançado). Mais de um milhão de pessoas fazem a prova por ano, em dezenas de países, inclusive no Brasil, em julho e dezembro. O N1 é exigido por muitas empresas e universidades.', q: ['Qual é o nível mais avançado do JLPT?', ['N5','N1','N10'], 1], act: 'Veja as datas do JLPT no Brasil e decida em qual nível você quer fazer a prova (e quando).' },
  m5l2: { t: 'Daruma: cair sete, levantar oito', ic: '🔴', txt: '七転び八起き: "cair sete vezes, levantar oito". O boneco Daruma, que sempre volta a ficar em pé, simboliza isso. Ele vem sem olhos: você pinta um olho ao fazer um desejo e o outro quando o realiza.', q: ['Quando se pinta o segundo olho do Daruma?', ['Ao comprá-lo','Quando o desejo se realiza','No Ano-Novo'], 1], act: 'Faça um desejo para o seu japonês e "pinte" um olho num Daruma desenhado num papel.' },
  m5l3: { t: 'Osaka: a capital do riso', ic: '😂', txt: 'Osaka é famosa pelo 漫才 (manzai), a comédia em dupla com o 「ボケ」 (o que fala besteira) e o 「ツッコミ」 (o que corrige, muitas vezes com um tapa no ombro). O 関西弁 é visto como a língua do humor. Já as línguas de Okinawa estão ameaçadas de extinção, segundo a UNESCO.', q: ['No manzai, quem corrige a besteira é o…', ['ボケ','ツッコミ'], 1], act: 'Assista a um trecho de manzai e tente identificar quem é a ボケ e quem é a ツッコミ.' },
  m5l4: { t: 'Sōseki na nota de mil ienes', ic: '💴', txt: 'Natsume Sōseki, autor de Eu Sou um Gato e Kokoro, estampou a nota de 1.000 ienes de 1984 a 2004. O Japão tem dois Nobel de Literatura: Yasunari Kawabata (1968) e Kenzaburō Ōe (1994). E Haruki Murakami é lido no mundo inteiro.', q: ['Qual escritor estampou a nota de 1.000 ienes?', ['Natsume Sōseki','Haruki Murakami','Bashō'], 0], act: 'Leia a primeira linha de 吾輩は猫である no Aozora Bunko: 「吾輩は猫である。名前はまだ無い。」' },
  m5l5: { t: 'Chōrei e rádio taissô', ic: '📻', txt: 'Muitas empresas e escolas começam o dia com o 朝礼 (reunião matinal) e a ラジオ体操, uma ginástica transmitida pelo rádio desde 1928. Saber falar em público de forma estruturada e humilde é uma habilidade valorizada.', q: ['Desde quando existe a ラジオ体操?', ['1928','1990','2010'], 0], act: 'Faça um discurso de 30 segundos começando com 「本日[ほんじつ]は お集[あつ]まりいただき、ありがとうございます。」' },
  m5l6: { t: 'Kaizen pessoal: 1% por dia', ic: '📈', txt: 'A filosofia 改善 (kaizen) aplicada ao estudo: melhorar um pouco todo dia. Quem estuda 30 minutos por dia chega a cerca de 180 horas por ano, o bastante para avançar um nível do JLPT a cada ano ou ano e meio. A constância vence o talento.', q: ['O que é kaizen aplicado ao estudo?', ['Estudar muito num só dia','Melhorar um pouco todo dia'], 1], act: 'Monte seu plano de imersão: 1 podcast, 1 série e 1 leitura em japonês para a próxima semana.' }
};
