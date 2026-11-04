// Módulo 5 — C1 / JLPT N1: domínio — nuance, cultura, literatura e imersão.
window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: 'm5', title: 'Avançado', level: 'C1 · N1', color: '#ffc800', icon: '🐉',
  desc: 'Gramática N1, provérbios, dialetos, literatura, discursos e um plano de imersão para a vida.',
  lessons: [
    {
      id: 'm5l1', title: 'Gramática N1 essencial', icon: '📜',
      cando: ['Reconhecer e usar estruturas N1 em textos e falas formais'],
      vocab: [
        ['かんどう','','emoção (comoção)','🥹'], ['ぜっけい','','paisagem deslumbrante','🏔️'], ['しんじる','','acreditar','🙏'], ['こうけん','','contribuição','🤲'], ['ぎせい','','sacrifício','💔'],
        ['きわまりない','','extremamente','🔺'], ['もって','','com (formal)','📜'], ['ならでは','','típico/exclusivo de','🌟'], ['しまつ','','fim (ruim) / situação','😩'], ['いかん','','dependendo de','⚖️']
      ],
      kanji: [['感動','カンドウ','—','emoção'],['貢献','コウケン','—','contribuição'],['極','キョク','きわ(める)','extremo'],['犠牲','ギセイ','—','sacrifício']],
      grammar: [
        { t: '〜ずにはいられない', d: '"Não consigo deixar de ~". する → せずには.', ex: [['あの えいが を 見[み]て、なかず に は いられなかった。','Vendo aquele filme, não consegui deixar de chorar.']] },
        { t: '〜ならでは（の）', d: '"Que só ~ tem / típico de".', ex: [['京都[きょうと] ならでは の けしき','uma paisagem que só Kyoto tem']] },
        { t: '〜をもって', d: '"Com / por meio de / a partir de" (formal, anúncios).', ex: [['本日[ほんじつ] を もって 閉店[へいてん] いたします。','Com o dia de hoje, encerramos as atividades da loja.']] },
        { t: '〜極[きわ]まりない／〜の極[きわ]み', d: '"Extremamente ~ / o auge de".', ex: [['かれ の たいど は 失礼[しつれい] 極[きわ]まりない。','A atitude dele é extremamente grosseira.']] },
        { t: '〜始末[しまつ]だ', d: '"Acabou chegando ao ponto de ~" (resultado ruim).', ex: [['あそんで ばかり いて、ついに は 留年[りゅうねん] する 始末[しまつ] だ。','De tanto se divertir, acabou repetindo o ano.']] },
        { t: '〜いかんによらず／〜いかんで', d: '"Independentemente de / dependendo de" (muito formal).', ex: [['けっか の いかん に よらず、れんらく します。','Independentemente do resultado, entraremos em contato.']] }
      ],
      sentences: [
        ['その ニュース を 聞[き]いて、よろこば ず に は いられなかった。','Ao ouvir a notícia, não pude deixar de ficar feliz.'], ['これ は 日本[にほん] ならでは の 文化[ぶんか] です。','Esta é uma cultura típica do Japão.'], ['本日[ほんじつ] を もって 受付[うけつけ] を しめきります。','Com o dia de hoje, encerramos as inscrições.'],
        ['かれ の うんてん は きけん 極[きわ]まりない。','A direção dele é perigosíssima.'], ['じゅんび いかん で、けっか は かわる。','O resultado muda dependendo da preparação.']
      ],
      quiz: [['"Não consegui deixar de rir":', ['わらわずにはいられなかった','わらうしまつだ'], 0], ['〜をもって é típico de…', ['conversa casual','anúncios formais'], 1]],
      tip: 'Para o N1, leia MUITO: romances, ensaios, editoriais. A gramática N1 aparece principalmente na escrita — e aprender pelo contexto é mais rápido do que por listas.',
      mission: 'Escreva um anúncio formal fictício (ex.: encerramento de uma loja) usando 〜をもって e 〜いかんによらず.'
    },
    {
      id: 'm5l2', title: 'Provérbios e 四字熟語', icon: '🎴',
      cando: ['Entender e usar provérbios e expressões de 4 kanji comuns'],
      vocab: [
        ['猿も木から落ちる','さるもきからおちる','até macaco cai da árvore (todos erram)','🐒'], ['七転び八起き','ななころびやおき','cair sete vezes, levantar oito','💪'], ['花より団子','はなよりだんご','bolinho antes das flores (prático > bonito)','🍡'], ['石の上にも三年','いしのうえにもさんねん','três anos em cima da pedra (persistência)','🪨'],
        ['一期一会','いちごいちえ','um encontro, uma oportunidade','🍵'], ['一石二鳥','いっせきにちょう','matar dois coelhos com uma cajadada','🐦'], ['十人十色','じゅうにんといろ','cada cabeça, uma sentença','🎨'], ['自業自得','じごうじとく','colher o que plantou','🌾'], ['以心伝心','いしんでんしん','comunicação sem palavras','💞'], ['試行錯誤','しこうさくご','tentativa e erro','🔬']
      ],
      grammar: [
        { t: 'Por que aprender', d: 'Provérbios (ことわざ) e 四字熟語 aparecem em discursos, jornais, conversas de adultos e no JLPT. Usá-los no momento certo mostra domínio cultural.', ex: [['日本語[にほんご] の べんきょう は 石[いし] の 上[うえ] にも 三年[さんねん] だ よ。','Estudar japonês exige persistência.']] },
        { t: 'Como usá-los em frases', d: 'Como substantivo (〜だ／〜の) ou citando (〜と言[い]うように).', ex: [['「猿[さる] も 木[き] から 落[お]ちる」と 言[い]う よう に、先生[せんせい] でも まちがえる。','Como diz o ditado, até professores erram.']] }
      ],
      sentences: [
        ['じてんしゃ 通勤[つうきん] は 運動[うんどう] にも なって、一石二鳥[いっせきにちょう] だ。','Ir de bicicleta ao trabalho também é exercício: dois coelhos numa cajadada.'], ['この 出会[であ]い を 一期一会[いちごいちえ] と して 大切[たいせつ] に したい。','Quero valorizar este encontro como único.'], ['しっぱい しても、七転[ななころ]び 八起[やお]き だ。','Mesmo que falhe, levante-se sempre.'],
        ['こたえ は 十人十色[じゅうにんといろ] です。','Cada um tem sua resposta.'], ['試行錯誤[しこうさくご] を くりかえして、やっと せいこう した。','Depois de muita tentativa e erro, finalmente deu certo.']
      ],
      quiz: [['Persistência:', ['花より団子','石の上にも三年','十人十色'], 1], ['Cada um tem sua opinião:', ['一石二鳥','十人十色','自業自得'], 1]],
      tip: 'Aprenda 1 provérbio por semana e use-o em pelo menos uma conversa ou mensagem. A expressão só fica sua quando você a usa num contexto real.',
      mission: 'Escolha 3 provérbios que combinam com sua vida e escreva uma situação real para cada.'
    },
    {
      id: 'm5l3', title: 'Dialetos: 関西弁 e variações', icon: '🗾',
      cando: ['Entender o dialeto de Kansai (Osaka) e reconhecer outros dialetos'],
      vocab: [
        ['あかん','','não pode / não dá (Kansai)','🙅'], ['ほんま','','sério / de verdade (Kansai)','😳'], ['めっちゃ','','muito (Kansai, já geral)','💯'], ['おおきに','','obrigado (Kansai)','🙏'], ['なんでやねん','','como assim?! (Kansai)','🤚'],
        ['〜へん','','negativo (Kansai: 〜ない)','🚫'], ['〜や','','é (Kansai: だ)','✔️'], ['しんどい','','cansativo (Kansai)','😮‍💨'], ['なんぼ','','quanto (Kansai)','💴'], ['ええ','','bom (Kansai: いい)','👍']
      ],
      grammar: [
        { t: 'Kansai-ben básico', d: 'だ → や | 〜ない → 〜へん (わからない → わからへん) | いい → ええ | 本当[ほんとう] → ほんま | だめ → あかん | ありがとう → おおきに | 〜から → 〜さかい (antigo) | Entonação diferente (mais "cantada").', ex: [['それ、ほんま？','Isso é verdade?'],['わからへん わ。','Não sei, não.'],['これ なんぼ？','Quanto é isto?']] },
        { t: 'Outros dialetos', d: '博多弁 (Fukuoka): 〜と？ 〜たい | 東北弁 (Tohoku): 〜べ | 沖縄方言: めんそーれ (bem-vindo). Você não precisa falar, mas entender ajuda muito em séries, comédia (お笑い) e viagens.', ex: [['なにしよーと？ (博多)','O que está fazendo? (Fukuoka)']] }
      ],
      sentences: [
        ['めっちゃ おいしい やん！','Que gostoso demais!'], ['そんな ん、あかん で。','Isso aí não pode.'], ['今日[きょう] は ほんま に しんどかった わ。','Hoje foi muito cansativo mesmo.'],
        ['おおきに、また 来[き]て な。','Obrigado, volte sempre.'], ['なんでやねん！','Como assim?!']
      ],
      quiz: [['わからへん em japonês padrão:', ['わかる','わからない','わかった'], 1], ['ほんま significa…', ['mentira','de verdade','muito'], 1]],
      tip: 'Assista a お笑い (comédia de manzai) — quase tudo é em Kansai-ben. Rir de uma piada em japonês é um marco real de nível avançado.',
      mission: 'Assista a um vídeo de manzai (link da aula) e anote 5 expressões em Kansai-ben com o equivalente padrão.'
    },
    {
      id: 'm5l4', title: 'Lendo literatura e textos autênticos', icon: '📚',
      cando: ['Ler textos literários e ensaios com estratégia', 'Montar um sistema de leitura extensiva (多読)'],
      vocab: [
        ['小説','しょうせつ','romance','📖'], ['作家','さっか','escritor','✍️'], ['ずいひつ','','ensaio','📝'], ['ひょうげん','','expressão','🎭'], ['ぶんたい','','estilo de escrita','🖋️'],
        ['いんしょう','','impressão','💭'], ['とうじょうじんぶつ','','personagem','🧑‍🎤'], ['ものがたり','','narrativa / história','📜'], ['たどく','','leitura extensiva','📚'], ['せいどく','','leitura intensiva','🔎']
      ],
      kanji: [['小説','ショウセツ','—','romance'],['作家','サッカ','—','escritor'],['表現','ヒョウゲン','—','expressão'],['物語','モノガタリ','—','narrativa']],
      grammar: [
        { t: 'Leitura extensiva × intensiva', d: '<b>多読</b>: ler muito, fácil, sem dicionário, pelo prazer (graded readers, light novels, mangá). <b>精読</b>: ler pouco, devagar, analisando gramática. Use os dois: 80% extensiva, 20% intensiva.', ex: [['毎日[まいにち] 30分[ぷん] たどく を して います。','Faço 30 minutos de leitura extensiva por dia.']] },
        { t: 'Marcas da linguagem literária', d: 'Narrador em forma simples/た, frases longas com 連用形, descrições com オノマトペ, e estruturas como 〜のであった, 〜ではあるまいか.', ex: [['国境[こっきょう] の 長[なが]い トンネル を 抜[ぬ]ける と 雪国[ゆきぐに] で あった。','Ao atravessar o longo túnel da fronteira, era o país das neves. (川端康成『雪国』)']] }
      ],
      reading: {
        title: '吾輩[わがはい]は猫[ねこ]である（夏目漱石[なつめそうせき]・冒頭[ぼうとう]）',
        text: '吾輩[わがはい] は 猫[ねこ] で ある。名前[なまえ] は まだ 無[な]い。どこ で 生[う]まれた か とんと 見当[けんとう] が つかぬ。何[なん] でも 薄暗[うすぐら]い じめじめ した 所[ところ] で ニャーニャー 泣[な]いて いた 事[こと] だけ は 記憶[きおく] して いる。',
        pt: 'Eu sou um gato. Nome, ainda não tenho. Não faço a menor ideia de onde nasci. Só me lembro de que estava miando num lugar escuro e úmido. (Natsume Sōseki, 1905 — domínio público)',
        q: [['Quem narra a história?', ['Um menino','Um gato','Um professor'], 1], ['O narrador já tem nome?', ['Sim','Ainda não'], 1], ['つかぬ é uma forma antiga de…', ['つかない','つける'], 0]]
      },
      sentences: [
        ['この 小説[しょうせつ] は ひょうげん が 美[うつく]しい。','Este romance tem expressões belas.'], ['村上春樹[むらかみはるき] の 作品[さくひん] を げんぶん で 読[よ]んで みたい。','Quero ler as obras de Haruki Murakami no original.'], ['とうじょうじんぶつ の きもち を 考[かんが]えながら 読[よ]む。','Ler pensando nos sentimentos dos personagens.'],
        ['青空文庫[あおぞらぶんこ] で 無料[むりょう] で 名作[めいさく] が 読[よ]める。','No Aozora Bunko dá para ler clássicos de graça.']
      ],
      tip: 'Use o Aozora Bunko (青空文庫, clássicos em domínio público e grátis) e graded readers do Tadoku. Comece com contos curtos de 芥川龍之介 e 宮沢賢治.',
      mission: 'Leia o conto 「蜘蛛の糸」 (Akutagawa) no Aozora Bunko e escreva um resumo de 5 frases em japonês.'
    },
    {
      id: 'm5l5', title: 'Apresentações e discursos', icon: '🎤',
      cando: ['Fazer uma apresentação estruturada', 'Dar um discurso curto (casamento, despedida, evento)'],
      vocab: [
        ['ほんじつ','','hoje (formal)','📅'], ['みなさま','','senhoras e senhores','👥'], ['ごせいちょう','','sua atenção','👂'], ['もくじ','','sumário','📑'], ['がいよう','','visão geral','🗺️'],
        ['ぐたいてき','','concreto / específico (な)','🎯'], ['しつぎおうとう','','perguntas e respostas','🙋'], ['まとめ','','resumo / conclusão','🏁'], ['かんぱい','','brinde','🥂'], ['ごあいさつ','','saudação / discurso','🙇']
      ],
      kanji: [['本日','ホンジツ','—','hoje (formal)'],['概要','ガイヨウ','—','visão geral'],['具体的','グタイテキ','—','concreto'],['乾杯','カンパイ','—','brinde']],
      grammar: [
        { t: 'Estrutura de apresentação', d: 'あいさつ → 本日[ほんじつ]は〜についてお話[はな]しします → まず／つぎに／さいごに → まとめますと → ご清聴[せいちょう]ありがとうございました → 質疑応答[しつぎおうとう].', ex: [['本日[ほんじつ] は 〜 に ついて お話[はな]し させて いただきます。','Hoje vou falar sobre ~.'],['ご清聴[せいちょう] ありがとう ございました。','Obrigado pela atenção.']] },
        { t: 'Discurso de evento (スピーチ)', d: 'Agradecimento → episódio pessoal → desejo para o futuro → brinde. Evite 忌み言葉 em casamentos (きれる, わかれる, もどる…).', ex: [['それでは、かんぱい の ごあいさつ を させて いただきます。','Então, permitam-me fazer o brinde.']] }
      ],
      sentences: [
        ['みなさま、本日[ほんじつ] は お集[あつ]まり いただき、ありがとう ございます。','Senhoras e senhores, obrigado por estarem aqui hoje.'], ['まず、プロジェクト の がいよう を ご説明[せつめい] します。','Primeiro, vou explicar a visão geral do projeto.'], ['こちら の グラフ を ご覧[らん] ください。','Vejam este gráfico, por favor.'],
        ['まとめます と、ポイント は 三[みっ]つ です。','Resumindo, são três pontos.'], ['何[なに] か ご質問[しつもん] は ございます でしょう か。','Alguma pergunta?'], ['ご清聴[せいちょう] ありがとう ございました。','Obrigado pela atenção.']
      ],
      quiz: [['Fim de apresentação:', ['ごせいちょうありがとうございました','いただきます'], 0], ['Em discurso de casamento evita-se…', ['palavras de separação (わかれる)','agradecimentos'], 0]],
      tip: 'Grave sua apresentação em vídeo e assista com legenda automática do YouTube em japonês: se a máquina entende o que você diz, sua pronúncia está clara.',
      mission: 'Prepare uma apresentação de 3 minutos sobre o Brasil (ou sua profissão) e grave em vídeo.'
    },
    {
      id: 'm5l6', title: 'Imersão total: seu plano para a fluência', icon: '🚀',
      cando: ['Montar um sistema de imersão diário', 'Manter e expandir o japonês para sempre'],
      vocab: [
        ['しゅうかんか','','criar hábito','🔁'], ['にゅうりょく','','input','📥'], ['しゅつりょく','','output','📤'], ['もくひょう','','meta','🎯'], ['しんちょく','','progresso','📈'],
        ['いじ','','manutenção','🛠️'], ['かんきょう','','ambiente','🏠'], ['じしん','','confiança','💪'], ['けいぞく','','continuidade','♾️'], ['けいぞくはちからなり','','a persistência é poder (ditado)','🐉']
      ],
      grammar: [
        { t: 'A fórmula do avançado', d: '<b>Input massivo</b> (≥ 1h/dia de áudio e leitura que você entende) + <b>SRS diário</b> (vocabulário vindo do que você consome) + <b>Output semanal</b> (conversas, escrita corrigida) + <b>Paciência</b>: N1 exige ~3.000–4.000 horas para falantes de português.', ex: [['継続[けいぞく] は 力[ちから] なり。','A persistência é poder.']] },
        { t: 'Rotina sugerida (1h30/dia)', d: '15 min SRS (aba Revisar) → 30 min input (podcast/série com legenda JP) → 20 min leitura (NHK, mangá, romance) → 15 min output (diário, shadowing) → 1x por semana: conversa com nativo (italki, HelloTalk, Tandem).', ex: [['毎日[まいにち] 少[すこ]し ずつ でも 続[つづ]ける こと が 大切[たいせつ] だ。','O importante é continuar, mesmo que um pouco por dia.']] },
        { t: 'Recursos gratuitos de imersão', d: 'NHK News Web Easy, NHK World Japan (curso "Easy Japanese"), Irodori e Marugoto (Fundação Japão), Tae Kim, Aozora Bunko, Nihongo con Teppei (podcast), Comprehensible Japanese (YouTube), Satori Reader (parcialmente grátis), Tadoku graded readers, JLPT sample questions.', ex: [['インプット と アウトプット の バランス','equilíbrio entre input e output']] }
      ],
      sentences: [
        ['毎日[まいにち] 一時間[いちじかん] 日本語[にほんご] の ポッドキャスト を 聞[き]いて います。','Ouço uma hora de podcast em japonês todo dia.'], ['わからない 言葉[ことば] は アプリ で ふくしゅう します。','Revejo no app as palavras que não sei.'], ['週[しゅう] に 一回[いっかい]、ネイティブ と 話[はな]す ように して います。','Procuro conversar com um nativo uma vez por semana.'],
        ['もくひょう は 二年後[にねんご] に N1 に ごうかく する こと です。','Minha meta é passar no N1 daqui a dois anos.'], ['けいぞく は ちから なり。','A persistência é poder.']
      ],
      quiz: [['Proporção recomendada de leitura extensiva:', ['20%','80%'], 1], ['継続は力なり significa…', ['A persistência é poder','Força é tudo'], 0]],
      tip: 'Mude seu ambiente: celular em japonês, playlist japonesa, YouTube com recomendações japonesas, notícias em japonês no café da manhã. Imersão é design de ambiente, não força de vontade.',
      mission: 'Monte sua rotina semanal de imersão (planilha ou papel), coloque no calendário e cumpra por 30 dias. Volte aqui para revisar sempre.'
    }
  ]
});
