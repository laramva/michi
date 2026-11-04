// Módulo 1 — A1 / JLPT N5: sobreviver no dia a dia.
window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: 'm1', title: 'Iniciante', level: 'A1 · N5', color: '#58cc02', icon: '🌸',
  desc: 'Apresentar-se, comprar, comer, falar da rotina, da família e da cidade.',
  lessons: [
    {
      id: 'm1l1', title: 'Saudações e cortesia', icon: '🙇',
      cando: ['Cumprimentar em qualquer hora do dia', 'Agradecer, pedir desculpas e chamar alguém'],
      vocab: [
        ['おはようございます','','bom dia (formal)','🌅'], ['こんにちは','','olá / boa tarde','🌞'], ['こんばんは','','boa noite (chegando)','🌙'],
        ['おやすみなさい','','boa noite (dormir)','😴'], ['ありがとうございます','','muito obrigado(a)','🙏'], ['すみません','','com licença / desculpe','🙇'],
        ['ごめんなさい','','me desculpe','😣'], ['さようなら','','adeus / tchau','👋'], ['いただきます','','(antes de comer)','🍚'],
        ['ごちそうさまでした','','(depois de comer)','😋'], ['はい','','sim','✅'], ['いいえ','','não','❌']
      ],
      grammar: [
        { t: 'Formal × casual', d: 'Muitas saudações têm uma forma curta para amigos: おはよう (casual) × おはようございます (formal). ありがとう × ありがとうございます. Com desconhecidos, chefes e professores, use sempre a forma longa.', ex: [['おはよう！','Bom dia! (amigos)'],['おはようございます。','Bom dia. (formal)']] },
        { t: 'すみません: a palavra mágica', d: 'Serve para chamar o garçom, pedir licença, desculpar-se por incômodo e até agradecer quando alguém teve trabalho por você.', ex: [['すみません、メニュー を ください。','Com licença, o cardápio, por favor.']] }
      ],
      sentences: [
        ['おはようございます。','Bom dia.'], ['ありがとうございます。','Muito obrigado.'], ['すみません。','Com licença.'],
        ['では、また あした。','Então, até amanhã.'], ['おやすみなさい。','Boa noite (vou dormir).']
      ],
      dialogue: [['田中[たなか]','おはようございます。','Bom dia.'],['マリア','おはようございます、田中[たなか]さん。','Bom dia, sr. Tanaka.'],['田中[たなか]','いい てんき です ね。','Que tempo bom, né.'],['マリア','そう です ね。','É mesmo.']],
      quiz: [['Você vai dormir. O que diz?', ['こんばんは','おやすみなさい','こんにちは'], 1], ['Para chamar o garçom, diga…', ['すみません','さようなら','いただきます'], 0]],
      tip: 'Shadowing: toque o áudio de cada saudação e repita junto, ao mesmo tempo, 5 vezes. Imite até a reverência!',
      mission: 'Diga いただきます e ごちそうさまでした em todas as refeições de hoje.'
    },
    {
      id: 'm1l2', title: 'Apresentação pessoal', icon: '🙋',
      cando: ['Dizer nome, nacionalidade, profissão e cidade', 'Fazer a apresentação completa (じこしょうかい)'],
      vocab: [
        ['私','わたし','eu','🙋'], ['名前','なまえ','nome','📛'], ['ブラジル人','ブラジルじん','brasileiro(a)','🇧🇷'], ['日本人','にほんじん','japonês(a)','🇯🇵'],
        ['学生','がくせい','estudante','🎓'], ['会社員','かいしゃいん','funcionário de empresa','💼'], ['先生','せんせい','professor(a)','👩‍🏫'], ['医者','いしゃ','médico(a)','🩺'],
        ['エンジニア','','engenheiro(a)','👷'], ['どうぞよろしく','','prazer (em conhecer)','🤝'], ['はじめまして','','muito prazer (1º encontro)','✨'], ['〜さん','','Sr./Sra. (após o nome)','🏷️']
      ],
      kanji: [['私','シ','わたし','eu, privado'],['人','ジン・ニン','ひと','pessoa'],['学','ガク','まな(ぶ)','estudar'],['生','セイ','い(きる)','vida, nascer'],['先','セン','さき','antes, à frente'],['名','メイ','な','nome']],
      grammar: [
        { t: 'A は B です — "A é B"', d: 'は (lê-se <b>wa</b>) marca o tópico; です fecha a frase de forma educada. Negativo: じゃ ありません (ou では ありません).', ex: [['私[わたし] は 学生[がくせい] です。','Eu sou estudante.'],['私[わたし] は 先生[せんせい] じゃ ありません。','Eu não sou professor.']] },
        { t: 'Pergunta com か', d: 'Basta colocar か no fim. Não precisa mudar a ordem.', ex: [['ブラジル人[じん] です か。','Você é brasileiro?'],['はい、そう です。','Sim, sou.']] },
        { t: 'も — "também"', d: 'Substitui は: 私[わたし] も = eu também.', ex: [['私[わたし] も 学生[がくせい] です。','Eu também sou estudante.']] },
        { t: '〜さん nunca para si mesmo', d: 'Use さん depois do nome de outras pessoas, nunca do seu. Em japonês, normalmente não se usa "você" (あなた) — chame pelo nome + さん.', ex: [['田中[たなか]さん は 会社員[かいしゃいん] です か。','O sr. Tanaka é funcionário de empresa?']] }
      ],
      sentences: [
        ['はじめまして。','Muito prazer.'], ['私[わたし] は マリア です。','Eu sou a Maria.'], ['ブラジル から 来[き]ました。','Vim do Brasil.'],
        ['私[わたし] は エンジニア です。','Eu sou engenheiro(a).'], ['どうぞ よろしく おねがいします。','Prazer em conhecê-lo(a).'], ['お名前[なまえ] は？','Qual é o seu nome?']
      ],
      dialogue: [['ケン','はじめまして。ケン です。','Muito prazer. Sou o Ken.'],['マリア','はじめまして。マリア です。ブラジル から 来[き]ました。','Muito prazer. Sou a Maria. Vim do Brasil.'],['ケン','学生[がくせい] です か。','Você é estudante?'],['マリア','いいえ、エンジニア です。どうぞ よろしく。','Não, sou engenheira. Prazer.'],['ケン','こちら こそ、よろしく。','O prazer é meu.']],
      quiz: [['Como dizer "Eu não sou médico"?', ['私は医者です','私は医者じゃありません','医者ですか'], 1], ['は como partícula lê-se…', ['ha','wa','ba'], 1]],
      tip: 'Escreva SUA apresentação (nome, cidade, trabalho, hobby) e decore-a palavra por palavra. É o texto que você mais vai usar na vida real.',
      mission: 'Grave um vídeo de 20 segundos fazendo sua じこしょうかい. Reassista daqui a um mês para ver a evolução.'
    },
    {
      id: 'm1l3', title: 'Números, idade e telefone', icon: '🔢',
      cando: ['Contar de 0 a 100', 'Dizer idade e número de telefone'],
      vocab: [
        ['ゼロ','','zero','0️⃣'], ['いち','','1','1️⃣'], ['に','','2','2️⃣'], ['さん','','3','3️⃣'], ['よん','','4 (também し)','4️⃣'], ['ご','','5','5️⃣'],
        ['ろく','','6','6️⃣'], ['なな','','7 (também しち)','7️⃣'], ['はち','','8','8️⃣'], ['きゅう','','9 (também く)','9️⃣'], ['じゅう','','10','🔟'], ['ひゃく','','100','💯'],
        ['〜さい','','~ anos (idade)','🎂'], ['でんわばんごう','','número de telefone','☎️'], ['なんさい','','quantos anos?','❓']
      ],
      kanji: [['四','シ','よ(ん)','quatro'],['五','ゴ','いつ(つ)','cinco'],['六','ロク','む(っつ)','seis'],['七','シチ','なな','sete'],['八','ハチ','や(っつ)','oito'],['九','キュウ・ク','ここの(つ)','nove'],['十','ジュウ','とお','dez'],['百','ヒャク','—','cem']],
      grammar: [
        { t: 'Lógica dos números', d: 'É matemática pura: 11 = じゅういち (10+1), 20 = にじゅう (2×10), 35 = さんじゅうご. Prefira よん e なな — し (4) lembra "morte" e é evitado.', ex: [['じゅうに','12'],['よんじゅうなな','47'],['きゅうじゅうきゅう','99']] },
        { t: 'Idade: 〜さい', d: 'Exceções: 1 = いっさい, 8 = はっさい, 10 = じゅっさい, 20 = はたち.', ex: [['なんさい です か。','Quantos anos você tem?'],['にじゅうはっさい です。','Tenho 28 anos.']] },
        { t: 'Telefone: の para o hífen', d: 'O hífen do número lê-se の.', ex: [['ゼロきゅうゼロ の いちにさんよん','090-1234']] }
      ],
      sentences: [
        ['なんさい です か。','Quantos anos você tem?'], ['にじゅうご さい です。','Tenho 25 anos.'], ['でんわばんごう は なんばん です か。','Qual é o seu telefone?'],
        ['ひゃく えん です。','São 100 ienes.'], ['さんじゅう ページ を ひらいて ください。','Abra na página 30.']
      ],
      dialogue: [['A','でんわばんごう は なんばん です か。','Qual é o seu telefone?'],['B','ゼロきゅうゼロ の ななはちろく の よんさんにいち です。','090-786-4321.'],['A','ありがとうございます。','Obrigado.']],
      quiz: [['Como se diz 48?', ['しじゅうはち','よんじゅうはち','はちじゅうよん'], 1], ['Como se diz "20 anos"?', ['にじゅっさい','はたち','にさい'], 1]],
      tip: 'Treine números no dia a dia: leia placas de carro, preços e horários em japonês mentalmente. 5 minutos por dia e eles ficam automáticos.',
      mission: 'Diga seu número de telefone e sua idade em japonês sem olhar. Depois conte de 1 a 100 de 5 em 5.'
    },
    {
      id: 'm1l4', title: 'Isto, isso, aquilo', icon: '👉',
      cando: ['Apontar e perguntar o que é algo', 'Dizer de quem é um objeto'],
      vocab: [
        ['これ','','isto (perto de mim)','👇'], ['それ','','isso (perto de você)','👉'], ['あれ','','aquilo (longe)','🔭'], ['どれ','','qual?','❓'],
        ['本','ほん','livro','📕'], ['かばん','','bolsa','👜'], ['かさ','','guarda-chuva','☂️'], ['とけい','','relógio','⌚'],
        ['くつ','','sapato','👟'], ['かぎ','','chave','🔑'], ['なん','','o quê?','🤔'], ['だれ','','quem?','🕵️']
      ],
      kanji: [['本','ホン','もと','livro, origem'],['何','カ','なに・なん','o quê']],
      grammar: [
        { t: 'これ・それ・あれ・どれ', d: 'É o sistema こ・そ・あ・ど: こ = perto de quem fala, そ = perto de quem ouve, あ = longe dos dois, ど = pergunta. Antes de substantivo: この本[ほん] (este livro), その・あの・どの.', ex: [['これ は 本[ほん] です。','Isto é um livro.'],['この かさ は いくら です か。','Quanto custa este guarda-chuva?']] },
        { t: 'の — posse e ligação', d: 'A の B = B de A. 私[わたし] の かばん = minha bolsa. だれ の = de quem.', ex: [['それ は だれ の かぎ です か。','De quem é essa chave?'],['私[わたし] の です。','É minha.']] }
      ],
      sentences: [
        ['これ は なん です か。','O que é isto?'], ['それ は 私[わたし] の かさ です。','Isso é o meu guarda-chuva.'], ['あれ は だれ の くつ です か。','De quem são aqueles sapatos?'],
        ['この とけい は 日本[にほん] の です。','Este relógio é do Japão.'], ['どれ が マリアさん の かばん です か。','Qual é a bolsa da Maria?']
      ],
      dialogue: [['A','すみません、これ は なん です か。','Com licença, o que é isto?'],['B','それ は おはし です。','Isso é hashi.'],['A','あれ も おはし です か。','Aquilo também é hashi?'],['B','いいえ、あれ は スプーン です。','Não, aquilo é uma colher.']],
      quiz: [['Algo está perto de quem OUVE. Use…', ['これ','それ','あれ'], 1], ['"Meu livro" é…', ['本の私','私の本','私は本'], 1]],
      tip: 'Rotule objetos da sua casa com post-its em japonês (かぎ, とけい, くつ). Ver a palavra 20 vezes por dia é SRS gratuito.',
      mission: 'Aponte para 5 objetos da sua casa e pergunte/responda: "これは なんですか。" — "それは ___ です。"'
    },
    {
      id: 'm1l5', title: 'Comida e bebida', icon: '🍱',
      cando: ['Pedir comida e bebida', 'Dizer do que gosta e não gosta'],
      vocab: [
        ['ごはん','','arroz / refeição','🍚'], ['パン','','pão','🍞'], ['肉','にく','carne','🥩'], ['魚','さかな','peixe','🐟'], ['やさい','','legumes/verduras','🥦'],
        ['くだもの','','fruta','🍎'], ['水','みず','água','💧'], ['お茶','おちゃ','chá','🍵'], ['コーヒー','','café','☕'], ['ビール','','cerveja','🍺'],
        ['たまご','','ovo','🥚'], ['すき','','gostar','❤️'], ['きらい','','não gostar','👎'], ['おいしい','','gostoso','😋'], ['たべます','','comer','🍽️'], ['のみます','','beber','🥤']
      ],
      kanji: [['食','ショク','た(べる)','comer'],['飲','イン','の(む)','beber'],['肉','ニク','—','carne'],['魚','ギョ','さかな','peixe'],['水','スイ','みず','água'],['茶','チャ','—','chá']],
      grammar: [
        { t: '〜を ください — "me dê ~, por favor"', d: 'A forma mais útil para pedir algo em lojas e restaurantes. を marca o objeto.', ex: [['お水[みず] を ください。','Água, por favor.'],['これ を ふたつ ください。','Dois destes, por favor.']] },
        { t: '〜が すき／きらい です', d: 'Gostar usa が (não を!). だいすき = adoro; あまり すき じゃ ない = não gosto muito.', ex: [['私[わたし] は すし が だいすき です。','Eu adoro sushi.'],['なっとう は あまり すき じゃ ありません。','Não gosto muito de natto.']] },
        { t: 'Contadores genéricos: ひとつ, ふたつ…', d: 'ひとつ・ふたつ・みっつ・よっつ・いつつ — servem para contar quase qualquer coisa ao pedir.', ex: [['おにぎり を みっつ ください。','Três onigiri, por favor.']] }
      ],
      sentences: [
        ['コーヒー を ください。','Um café, por favor.'], ['私[わたし] は 魚[さかな] が すき です。','Eu gosto de peixe.'], ['肉[にく] は きらい です。','Não gosto de carne.'],
        ['この ラーメン は おいしい です。','Este lámen é gostoso.'], ['お茶[ちゃ] を のみます。','Vou beber chá.'], ['やさい を たべます か。','Você come verduras?']
      ],
      dialogue: [['店員[てんいん]','いらっしゃいませ。ごちゅうもん は？','Bem-vindo. Seu pedido?'],['客[きゃく]','カレー を ひとつ と お水[みず] を ください。','Um curry e uma água, por favor.'],['店員[てんいん]','かしこまりました。','Pois não.'],['客[きゃく]','あ、すみません、コーヒー も ください。','Ah, com licença, um café também.']],
      quiz: [['"Gosto de sushi" usa qual partícula?', ['を','が','に'], 1], ['いらっしゃいませ significa…', ['Obrigado','Bem-vindo (loja)','Tchau'], 1]],
      tip: 'Cozinhe ou coma "em japonês": nomeie mentalmente cada alimento no prato. Associar palavra + gosto + cheiro cria memórias fortíssimas.',
      mission: 'Num restaurante japonês (ou em casa, de brincadeira), peça algo usando "___を ください" e diga "ごちそうさまでした" no final.'
    },
    {
      id: 'm1l6', title: 'Compras e preços', icon: '🛍️',
      cando: ['Perguntar preços e entender a resposta', 'Usar números grandes e o iene'],
      vocab: [
        ['いくら','','quanto custa?','💴'], ['円','えん','iene','💴'], ['千','せん','mil','🔢'], ['万','まん','dez mil','💰'],
        ['たかい','','caro / alto','📈'], ['やすい','','barato','📉'], ['店','みせ','loja','🏪'], ['ふく','','roupa','👕'],
        ['カード','','cartão','💳'], ['げんきん','','dinheiro vivo','💵'], ['ふくろ','','sacola','🛍️'], ['レシート','','nota fiscal','🧾']
      ],
      kanji: [['円','エン','まる(い)','iene, círculo'],['千','セン','ち','mil'],['万','マン・バン','—','dez mil'],['店','テン','みせ','loja'],['高','コウ','たか(い)','alto, caro'],['安','アン','やす(い)','barato, seguro']],
      grammar: [
        { t: 'Números grandes: 万 = 10.000', d: 'O japonês agrupa de 4 em 4 dígitos. 10.000 = いちまん, 100.000 = じゅうまん, 1.000.000 = ひゃくまん. Sons especiais: 300 = さんびゃく, 600 = ろっぴゃく, 800 = はっぴゃく, 3000 = さんぜん, 8000 = はっせん.', ex: [['さんびゃく えん','300 ienes'],['いちまん ごせん えん','15.000 ienes']] },
        { t: 'それ を ください／〜で おねがいします', d: 'Para escolher e pagar. カード で = com cartão.', ex: [['カード で おねがいします。','Com cartão, por favor.'],['ふくろ は いりません。','Não preciso de sacola.']] }
      ],
      sentences: [
        ['これ は いくら です か。','Quanto custa isto?'], ['せん ごひゃく えん です。','São 1.500 ienes.'], ['ちょっと たかい です ね。','É um pouco caro, né.'],
        ['カード で おねがいします。','Com cartão, por favor.'], ['ふくろ は いりません。','Não preciso de sacola.'], ['この 店[みせ] は やすい です。','Esta loja é barata.']
      ],
      dialogue: [['客[きゃく]','すみません、この ふく は いくら です か。','Com licença, quanto custa esta roupa?'],['店員[てんいん]','さんぜん はっぴゃく えん です。','3.800 ienes.'],['客[きゃく]','じゃ、これ を ください。カード で おねがいします。','Então vou levar. Com cartão, por favor.'],['店員[てんいん]','ふくろ は ご利用[りよう] です か。','Vai querer sacola?'],['客[きゃく]','いいえ、だいじょうぶ です。','Não, tudo bem.']],
      quiz: [['Quanto é にまんさんぜん えん?', ['2.300','23.000','230.000'], 1], ['Como se diz 800?', ['はちひゃく','はっぴゃく','はちびゃく'], 1]],
      tip: 'Converta preços reais: abra um site de loja japonesa e leia os preços em voz alta. Números grandes só ficam fluentes com muita repetição.',
      mission: 'Escolha 5 produtos num site japonês (Amazon.co.jp, Uniqlo JP) e pergunte/responda o preço em voz alta.'
    },
    {
      id: 'm1l7', title: 'Horas e rotina (forma ます)', icon: '⏰',
      cando: ['Dizer as horas', 'Descrever a rotina com verbos na forma ます'],
      vocab: [
        ['〜時','〜じ','~ horas','🕐'], ['〜分','〜ふん','~ minutos','⏱️'], ['半','はん','meia (30 min)','🕧'], ['今','いま','agora','📍'],
        ['おきます','','acordar','⏰'], ['ねます','','dormir','🛏️'], ['はたらきます','','trabalhar','💼'], ['べんきょうします','','estudar','📚'],
        ['いきます','','ir','🚶'], ['かえります','','voltar (para casa)','🏠'], ['あさ','','manhã','🌅'], ['よる','','noite','🌃'], ['まいにち','','todo dia','📅']
      ],
      kanji: [['時','ジ','とき','hora, tempo'],['分','フン・ブン','わ(かる)','minuto, dividir'],['半','ハン','なか(ば)','metade'],['今','コン','いま','agora'],['行','コウ','い(く)','ir'],['帰','キ','かえ(る)','voltar']],
      grammar: [
        { t: 'Horas: 〜時〜分', d: 'Exceções: 4時 = よじ, 7時 = しちじ, 9時 = くじ. Minutos: いっぷん, にふん, さんぷん, よんぷん, ごふん, ろっぷん, ななふん, はっぷん, きゅうふん, じゅっぷん.', ex: [['いま なんじ です か。','Que horas são?'],['しちじ はん です。','São sete e meia.']] },
        { t: 'Forma ます: verbos educados', d: 'Presente/futuro: 〜ます. Negativo: 〜ません. O japonês não diferencia presente de futuro: たべます = como / vou comer.', ex: [['まいにち べんきょうします。','Estudo todo dia.'],['あした は はたらきません。','Amanhã não trabalho.']] },
        { t: '〜に (hora exata) e 〜から〜まで', d: 'に marca a hora em que algo acontece. から = de/desde, まで = até.', ex: [['ろくじ に おきます。','Acordo às 6.'],['くじ から ごじ まで はたらきます。','Trabalho das 9 às 5.']] }
      ],
      sentences: [
        ['いま なんじ です か。','Que horas são?'], ['まいあさ ろくじ に おきます。','Acordo às 6 todas as manhãs.'], ['くじ から ごじ まで はたらきます。','Trabalho das 9 às 5.'],
        ['よる じゅういちじ に ねます。','Durmo às 11 da noite.'], ['まいにち 日本語[にほんご] を べんきょうします。','Estudo japonês todos os dias.']
      ],
      dialogue: [['A','まいあさ なんじ に おきます か。','A que horas você acorda toda manhã?'],['B','ろくじ はん に おきます。','Às seis e meia.'],['A','はやい です ね！','Que cedo!'],['B','しちじ に うち を でます から。','É que saio de casa às sete.']],
      quiz: [['Como se diz "4 horas"?', ['よんじ','よじ','しじ'], 1], ['"Não estudo" é…', ['べんきょうします','べんきょうしません','べんきょうでした'], 1]],
      tip: 'Narre sua rotina em japonês enquanto faz as coisas: "いま、おきます…はをみがきます…". Falar sozinho é o treino de fala mais subestimado que existe.',
      mission: 'Escreva sua rotina de um dia útil com 6 frases usando 〜時に〜ます. Leia em voz alta.'
    },
    {
      id: 'm1l8', title: 'Partículas に・で・へ・を', icon: '📍',
      cando: ['Dizer para onde vai, onde faz algo e com o quê', 'Montar frases completas com as partículas básicas'],
      vocab: [
        ['学校','がっこう','escola','🏫'], ['会社','かいしゃ','empresa','🏢'], ['うち','','casa (lar)','🏠'], ['えき','','estação','🚉'], ['スーパー','','supermercado','🛒'],
        ['としょかん','','biblioteca','📚'], ['でんしゃ','','trem','🚃'], ['バス','','ônibus','🚌'], ['じてんしゃ','','bicicleta','🚲'], ['あるいて','','a pé','🚶'],
        ['かいます','','comprar','🛍️'], ['みます','','ver/assistir','👀'], ['よみます','','ler','📖'], ['ともだち','','amigo(a)','🧑‍🤝‍🧑']
      ],
      kanji: [['学校','ガッコウ','—','escola'],['会','カイ','あ(う)','encontrar'],['社','シャ','やしろ','empresa, santuário'],['見','ケン','み(る)','ver'],['買','バイ','か(う)','comprar'],['読','ドク','よ(む)','ler']],
      grammar: [
        { t: 'に／へ — destino', d: 'Com verbos de movimento (いく, くる, かえる). へ (lê-se <b>e</b>) enfatiza a direção; に o ponto de chegada. Na prática, ambos funcionam.', ex: [['がっこう に いきます。','Vou à escola.'],['うち へ かえります。','Volto para casa.']] },
        { t: 'で — local da ação e meio', d: 'Onde algo ACONTECE, ou o MEIO/instrumento: でんしゃ で (de trem), はし で (com hashi).', ex: [['としょかん で べんきょうします。','Estudo na biblioteca.'],['バス で 会社[かいしゃ] に いきます。','Vou à empresa de ônibus.']] },
        { t: 'を — objeto direto', d: 'O que recebe a ação: comer O QUÊ, ver O QUÊ. Lê-se <b>o</b>.', ex: [['えいが を みます。','Assisto a um filme.']] },
        { t: 'と — com (alguém)', d: 'ともだち と = com um amigo.', ex: [['ともだち と スーパー で かいもの を します。','Faço compras no supermercado com um amigo.']] }
      ],
      sentences: [
        ['でんしゃ で 会社[かいしゃ] に いきます。','Vou à empresa de trem.'], ['スーパー で やさい を かいます。','Compro verduras no supermercado.'], ['うち で えいが を みます。','Assisto a um filme em casa.'],
        ['ともだち と としょかん に いきます。','Vou à biblioteca com um amigo.'], ['あるいて えき へ いきます。','Vou à estação a pé.'], ['はし で ごはん を たべます。','Como arroz com hashi.']
      ],
      dialogue: [['A','あした どこ に いきます か。','Aonde você vai amanhã?'],['B','ともだち と しぶや に いきます。','Vou a Shibuya com um amigo.'],['A','なに で いきます か。','Vai de quê?'],['B','でんしゃ で いきます。しぶや で かいもの を します。','Vou de trem. Vou fazer compras em Shibuya.']],
      quiz: [['"Estudo NA biblioteca" usa…', ['に','で','を'], 1], ['"Vou DE ônibus" usa…', ['バスに','バスで','バスを'], 1]],
      tip: 'Partículas se aprendem com frases inteiras, não com regras. Crie frases sobre a SUA vida usando cada partícula e coloque-as no SRS.',
      mission: 'Escreva 5 frases sobre aonde você vai esta semana, com quem e como (ex.: 月曜日に バスで 会社に いきます).'
    },
    {
      id: 'm1l9', title: 'Dias, datas e o passado', icon: '📅',
      cando: ['Falar dos dias da semana e datas', 'Contar o que fez (ました／ませんでした)'],
      vocab: [
        ['月曜日','げつようび','segunda-feira','🌙'], ['火曜日','かようび','terça-feira','🔥'], ['水曜日','すいようび','quarta-feira','💧'], ['木曜日','もくようび','quinta-feira','🌳'],
        ['金曜日','きんようび','sexta-feira','💰'], ['土曜日','どようび','sábado','🪨'], ['日曜日','にちようび','domingo','☀️'], ['きょう','','hoje','📍'],
        ['きのう','','ontem','⏪'], ['あした','','amanhã','⏩'], ['しゅうまつ','','fim de semana','🎉'], ['せんしゅう','','semana passada','🗓️'], ['らいしゅう','','semana que vem','🗓️']
      ],
      kanji: [['月','ゲツ・ガツ','つき','lua, mês'],['火','カ','ひ','fogo'],['水','スイ','みず','água'],['木','モク','き','árvore'],['金','キン','かね','ouro, dinheiro'],['土','ド','つち','terra'],['日','ニチ','ひ','sol, dia'],['曜','ヨウ','—','dia da semana']],
      grammar: [
        { t: 'Passado: 〜ました／〜ませんでした', d: 'たべます → たべました (comi) → たべませんでした (não comi). Para です: でした (era/foi).', ex: [['きのう えいが を みました。','Ontem assisti a um filme.'],['あさごはん を たべませんでした。','Não tomei café da manhã.']] },
        { t: 'Palavras de tempo relativas não levam に', d: 'きょう, きのう, あした, まいにち: sem に. Dias da semana e horas: com に (opcional para dias).', ex: [['にちようび に テニス を しました。','Joguei tênis no domingo.'],['きのう はたらきました。','Trabalhei ontem.']] },
        { t: 'Datas', d: 'Mês = número + がつ (しがつ, しちがつ, くがつ). Dias 1–10 são especiais: ついたち, ふつか, みっか, よっか, いつか, むいか, なのか, ようか, ここのか, とおか.', ex: [['たんじょうび は しがつ ようか です。','Meu aniversário é 8 de abril.']] }
      ],
      sentences: [
        ['きょう は 金曜日[きんようび] です。','Hoje é sexta-feira.'], ['きのう なに を しました か。','O que você fez ontem?'], ['しゅうまつ に ともだち と あいました。','Encontrei um amigo no fim de semana.'],
        ['せんしゅう 日本語[にほんご] の テスト が ありました。','Semana passada teve prova de japonês.'], ['あさ コーヒー を のみませんでした。','De manhã não tomei café.']
      ],
      dialogue: [['A','しゅうまつ は なに を しました か。','O que você fez no fim de semana?'],['B','土曜日[どようび] は かいもの を しました。日曜日[にちようび] は うち で やすみました。','No sábado fiz compras. No domingo descansei em casa.'],['A','いい です ね。','Que bom.'],['B','Aさん は？','E você?'],['A','私[わたし] は はたらきました…','Eu trabalhei…']],
      quiz: [['"Não bebi" é…', ['のみません','のみませんでした','のみました'], 1], ['Dia 3 do mês é…', ['さんにち','みっか','みつか'], 1]],
      tip: 'Diário de 3 frases: toda noite escreva o que fez hoje com 〜ました. É o exercício nº 1 para passar de "entender" a "produzir".',
      mission: 'Comece hoje um diário em japonês (caderno ou notas do celular): 3 frases por dia sobre o seu dia.'
    },
    {
      id: 'm1l10', title: 'Família e pessoas', icon: '👨‍👩‍👧',
      cando: ['Falar da própria família e perguntar da família dos outros', 'Contar pessoas'],
      vocab: [
        ['かぞく','','família','👨‍👩‍👧'], ['ちち','','meu pai','👨'], ['はは','','minha mãe','👩'], ['おとうさん','','pai (de outro)','👨'],
        ['おかあさん','','mãe (de outro)','👩'], ['あに','','meu irmão mais velho','👦'], ['あね','','minha irmã mais velha','👧'], ['おとうと','','irmão mais novo','🧒'],
        ['いもうと','','irmã mais nova','👧'], ['つま','','minha esposa','👰'], ['おっと','','meu marido','🤵'], ['こども','','criança / filho(s)','🧒'], ['ひとり','','1 pessoa','1️⃣'], ['ふたり','','2 pessoas','2️⃣']
      ],
      kanji: [['父','フ','ちち','pai'],['母','ボ','はは','mãe'],['子','シ','こ','criança'],['兄','キョウ','あに','irmão mais velho'],['姉','シ','あね','irmã mais velha'],['家','カ','いえ','casa, família']],
      grammar: [
        { t: 'Minha família × família dos outros', d: 'Para a SUA família, use palavras humildes (ちち, はは). Para a dos outros, palavras respeitosas (おとうさん, おかあさん). Em casa, você chama seu pai de おとうさん.', ex: [['ちち は 会社員[かいしゃいん] です。','Meu pai é funcionário de empresa.'],['おとうさん は お元気[げんき] です か。','Seu pai está bem?']] },
        { t: 'Contar pessoas: 〜人[にん]', d: 'ひとり, ふたり, depois さんにん, よにん, ごにん… なんにん = quantas pessoas.', ex: [['なんにん かぞく です か。','Quantas pessoas tem sua família?'],['よにん かぞく です。','Somos quatro.']] },
        { t: '〜が います — ter (pessoas)', d: 'Para pessoas e animais, use います.', ex: [['あに が ふたり います。','Tenho dois irmãos mais velhos.']] }
      ],
      sentences: [
        ['ごにん かぞく です。','Minha família tem cinco pessoas.'], ['はは は 先生[せんせい] です。','Minha mãe é professora.'], ['いもうと が ひとり います。','Tenho uma irmã mais nova.'],
        ['おにいさん は なんさい です か。','Quantos anos tem seu irmão mais velho?'], ['こども が ふたり います。','Tenho dois filhos.']
      ],
      dialogue: [['A','なんにん かぞく です か。','Quantas pessoas tem sua família?'],['B','よにん です。ちち と はは と いもうと です。','Quatro. Meu pai, minha mãe e minha irmã mais nova.'],['A','いもうとさん は なんさい です か。','Quantos anos tem sua irmã?'],['B','じゅうはっさい です。大学生[だいがくせい] です。','18. É universitária.']],
      quiz: [['Falando do pai de um colega, use…', ['ちち','おとうさん','あに'], 1], ['3 pessoas é…', ['みっつ','さんにん','さんり'], 1]],
      tip: 'Use fotos reais: pegue uma foto da sua família e descreva cada pessoa em japonês. Conteúdo pessoal é lembrado até 3x melhor.',
      mission: 'Mostre uma foto (real ou mental) da sua família e apresente cada pessoa em japonês, em voz alta.'
    },
    {
      id: 'm1l11', title: 'Casa, lugares e existência', icon: '🏠',
      cando: ['Dizer o que há e onde está', 'Descrever sua casa e posições (em cima, embaixo…)'],
      vocab: [
        ['へや','','quarto / cômodo','🚪'], ['つくえ','','mesa (de estudo)','🪑'], ['いす','','cadeira','🪑'], ['ベッド','','cama','🛏️'], ['れいぞうこ','','geladeira','🧊'],
        ['うえ','','em cima','⬆️'], ['した','','embaixo','⬇️'], ['なか','','dentro','📦'], ['そと','','fora','🌳'], ['よこ','','ao lado','↔️'], ['まえ','','na frente','⏫'], ['うしろ','','atrás','⏬'],
        ['あります','','haver/ter (coisas)','📦'], ['います','','haver/estar (seres vivos)','🐈']
      ],
      kanji: [['上','ジョウ','うえ','em cima'],['下','カ','した','embaixo'],['中','チュウ','なか','dentro, meio'],['外','ガイ','そと','fora'],['前','ゼン','まえ','frente, antes'],['後','ゴ','うし(ろ)・あと','atrás, depois']],
      grammar: [
        { t: 'あります × います', d: 'あります para coisas e plantas; います para pessoas e animais. Negativo: ありません／いません.', ex: [['へや に テレビ が あります。','Há uma TV no quarto.'],['こうえん に いぬ が います。','Há um cachorro no parque.']] },
        { t: 'Lugar に Coisa が あります', d: 'Para dizer O QUE existe em um lugar. Para dizer ONDE algo está: Coisa は Lugar に あります.', ex: [['つくえ の うえ に 本[ほん] が あります。','Há um livro em cima da mesa.'],['ねこ は ベッド の した に います。','O gato está embaixo da cama.']] }
      ],
      sentences: [
        ['れいぞうこ に ビール が あります。','Tem cerveja na geladeira.'], ['ねこ は いす の うえ に います。','O gato está em cima da cadeira.'], ['えき の まえ に コンビニ が あります。','Tem uma loja de conveniência em frente à estação.'],
        ['トイレ は どこ です か。','Onde é o banheiro?'], ['かばん の なか に なに が あります か。','O que tem dentro da bolsa?']
      ],
      dialogue: [['A','すみません、ぎんこう は どこ に あります か。','Com licença, onde fica o banco?'],['B','あの ビル の となり に あります。','Fica ao lado daquele prédio.'],['A','ちかく に ATM も あります か。','Tem caixa eletrônico perto também?'],['B','ええ、コンビニ の なか に あります よ。','Sim, tem dentro da loja de conveniência.']],
      quiz: [['"Há um cachorro" é…', ['いぬがあります','いぬがいます'], 1], ['"Embaixo da mesa" é…', ['つくえのうえ','つくえのした','つくえのなか'], 1]],
      tip: 'Técnica do Palácio da Memória: imagine sua casa e "coloque" palavras novas em cada cômodo. Depois descreva mentalmente o percurso em japonês.',
      mission: 'Descreva seu quarto com 5 frases usando 〜に〜があります／います.'
    },
    {
      id: 'm1l12', title: 'Adjetivos い e な', icon: '🎨',
      cando: ['Descrever pessoas, lugares e coisas', 'Usar adjetivos no afirmativo e negativo'],
      vocab: [
        ['おおきい','','grande','🐘'], ['ちいさい','','pequeno','🐭'], ['あたらしい','','novo','✨'], ['ふるい','','velho (coisa)','🏚️'], ['あつい','','quente (clima)','🔥'],
        ['さむい','','frio (clima)','🥶'], ['むずかしい','','difícil','😵'], ['やさしい','','fácil / gentil','😊'], ['いい','','bom','👍'], ['きれい','','bonito / limpo (な)','💐'],
        ['しずか','','silencioso (な)','🤫'], ['にぎやか','','animado (な)','🎊'], ['げんき','','saudável/animado (な)','💪'], ['ゆうめい','','famoso (な)','🌟'], ['べんり','','prático (な)','🔧']
      ],
      kanji: [['大','ダイ','おお(きい)','grande'],['小','ショウ','ちい(さい)','pequeno'],['新','シン','あたら(しい)','novo'],['古','コ','ふる(い)','velho'],['好','コウ','す(き)','gostar']],
      grammar: [
        { t: 'Adjetivos い', d: 'Terminam em い. Negativo: troque い por くない (+ です). Exceção: いい → よくない.', ex: [['この へや は おおきい です。','Este quarto é grande.'],['きょう は さむくない です。','Hoje não está frio.']] },
        { t: 'Adjetivos な', d: 'Antes de substantivo levam な: しずかな まち. No fim da frase: しずか です. Negativo: じゃ ありません. Atenção: きれい e ゆうめい são な, apesar do い!', ex: [['きれいな はな です ね。','Que flor bonita.'],['この まち は にぎやか じゃ ありません。','Esta cidade não é animada.']] },
        { t: 'とても／あまり', d: 'とても = muito. あまり + negativo = não muito.', ex: [['日本語[にほんご] は とても おもしろい です。','O japonês é muito interessante.'],['あまり むずかしくない です。','Não é muito difícil.']] }
      ],
      sentences: [
        ['とうきょう は おおきい まち です。','Tóquio é uma cidade grande.'], ['この テスト は むずかしくない です。','Esta prova não é difícil.'], ['きょうと は しずかな まち です。','Kyoto é uma cidade tranquila.'],
        ['あの レストラン は ゆうめい です。','Aquele restaurante é famoso.'], ['きょう は とても あつい です ね。','Hoje está muito quente, né.'], ['この スマホ は べんり です。','Este smartphone é prático.']
      ],
      dialogue: [['A','あたらしい アパート は どう です か。','Como é o apartamento novo?'],['B','ひろくて、きれい です。でも、えき から とおい です。','É espaçoso e bonito. Mas é longe da estação.'],['A','まわり は しずか です か。','Os arredores são tranquilos?'],['B','ええ、とても しずか です。','Sim, muito tranquilos.']],
      quiz: [['Negativo de おおきい:', ['おおきくない','おおきじゃない','おおきいない'], 0], ['きれい é adjetivo…', ['い','な'], 1]],
      tip: 'Aprenda adjetivos em pares de opostos (おおきい↔ちいさい). O cérebro guarda contrastes melhor do que listas.',
      mission: 'Descreva 3 lugares que você conhece (sua cidade, sua casa, seu trabalho) com 2 adjetivos cada.'
    },
    {
      id: 'm1l13', title: 'Passado dos adjetivos e comparações', icon: '⚖️',
      cando: ['Contar como foi algo (viagem, comida, dia)', 'Comparar duas coisas e dizer qual é a melhor'],
      vocab: [
        ['たのしい','','divertido','🥳'], ['つまらない','','chato','😑'], ['たかい','','caro / alto','📈'], ['はやい','','rápido / cedo','⚡'], ['おそい','','lento / tarde','🐢'],
        ['ひろい','','espaçoso','🏟️'], ['せまい','','apertado','📦'], ['りょこう','','viagem','🧳'], ['てんき','','tempo (clima)','⛅'], ['いちばん','','o mais / número 1','🥇'],
        ['より','','do que','⚖️'], ['ほう','','lado (na comparação)','👉'], ['どちら','','qual (de dois)','🤔']
      ],
      kanji: [['楽','ガク・ラク','たの(しい)','divertido'],['早','ソウ','はや(い)','cedo'],['天','テン','あま','céu'],['気','キ','—','espírito, energia']],
      grammar: [
        { t: 'Passado dos adjetivos', d: 'い: い → かった (たのしかった). Negativo passado: くなかった. な: でした / じゃ ありませんでした. いい → よかった.', ex: [['りょこう は たのしかった です。','A viagem foi divertida.'],['てんき は よくなかった です。','O tempo não estava bom.'],['ホテル は きれい でした。','O hotel era limpo.']] },
        { t: 'A は B より 〜', d: '"A é mais ~ do que B".', ex: [['とうきょう は おおさか より おおきい です。','Tóquio é maior que Osaka.']] },
        { t: 'A と B と どちら が 〜か／〜の ほう が', d: 'Perguntar e responder qual dos dois.', ex: [['コーヒー と お茶[ちゃ] と どちら が すき です か。','Do que você gosta mais, café ou chá?'],['コーヒー の ほう が すき です。','Gosto mais de café.']] },
        { t: '〜の 中[なか] で 〜が いちばん', d: 'Superlativo.', ex: [['くだもの の 中[なか] で なに が いちばん すき です か。','Qual fruta você mais gosta?'],['いちご が いちばん すき です。','Gosto mais de morango.']] }
      ],
      sentences: [
        ['きのう の パーティー は たのしかった です。','A festa de ontem foi divertida.'], ['えいが は つまらなかった です。','O filme foi chato.'], ['しんかんせん は バス より はやい です。','O trem-bala é mais rápido que o ônibus.'],
        ['にほん の 中[なか] で きょうと が いちばん すき です。','No Japão, gosto mais de Kyoto.'], ['なつ と ふゆ と どちら が すき です か。','Do que gosta mais, verão ou inverno?']
      ],
      dialogue: [['A','りょこう は どう でした か。','Como foi a viagem?'],['B','とても たのしかった です！ でも、ちょっと さむかった です。','Foi muito divertida! Mas estava um pouco frio.'],['A','ほっかいどう と おきなわ と どちら が よかった です か。','O que foi melhor, Hokkaido ou Okinawa?'],['B','おきなわ の ほう が よかった です。うみ が いちばん きれい でした。','Okinawa foi melhor. O mar era o mais bonito.']],
      quiz: [['Passado de いい:', ['いかった','よかった','いいでした'], 1], ['"Mais rápido que o ônibus":', ['バスよりはやい','バスのほうがはやい','バスがいちばんはやい'], 0]],
      tip: 'Pratique "falar com você mesmo" comparando coisas do dia: "きょうは きのうより さむい". Frases sobre sua realidade grudam.',
      mission: 'Conte para alguém (ou grave) como foi seu último fim de semana usando 3 adjetivos no passado.'
    },
    {
      id: 'm1l14', title: 'Hobbies e desejos (〜たい)', icon: '🎮',
      cando: ['Falar dos seus hobbies', 'Dizer o que quer fazer e o que quer ter'],
      vocab: [
        ['しゅみ','','hobby','🎯'], ['おんがく','','música','🎵'], ['えいが','','filme','🎬'], ['りょうり','','culinária','🍳'], ['スポーツ','','esporte','⚽'],
        ['ゲーム','','videogame','🎮'], ['まんが','','mangá','📚'], ['アニメ','','anime','📺'], ['うた','','canção','🎤'], ['きく','','ouvir','🎧'],
        ['あそぶ','','brincar / sair','🎡'], ['ほしい','','querer (coisa)','🎁'], ['じょうず','','habilidoso (な)','🏅'], ['へた','','ruim em (な)','🙈']
      ],
      kanji: [['音','オン','おと','som'],['楽','ガク','たの(しい)','música, diversão'],['聞','ブン','き(く)','ouvir, perguntar'],['話','ワ','はな(す)','falar']],
      grammar: [
        { t: 'Verbo-ます → 〜たい (querer fazer)', d: 'Tire ます e coloque たい: たべます → たべたい. Conjuga como adjetivo い: たべたくない (não quero comer), たべたかった (queria comer).', ex: [['日本[にほん] に いきたい です。','Quero ir ao Japão.'],['きょう は なに も したくない です。','Hoje não quero fazer nada.']] },
        { t: 'Substantivo が ほしい (querer ter)', d: 'Para coisas.', ex: [['あたらしい スマホ が ほしい です。','Quero um smartphone novo.']] },
        { t: '〜が じょうず／へた／とくい', d: 'Habilidade. Por modéstia, nunca diga que VOCÊ é じょうず; use とくい (ponto forte).', ex: [['マリアさん は うた が じょうず です ね。','A Maria canta bem, né.'],['いいえ、まだまだ です。','Não, ainda tenho muito o que aprender.']] }
      ],
      sentences: [
        ['しゅみ は なん です か。','Qual é o seu hobby?'], ['しゅみ は アニメ を みる こと です。','Meu hobby é assistir anime.'], ['いつか 日本[にほん] で はたらきたい です。','Algum dia quero trabalhar no Japão.'],
        ['あたらしい ゲーム が ほしい です。','Quero um jogo novo.'], ['日本語[にほんご] が じょうず です ね！','Seu japonês é bom!'], ['いいえ、まだまだ です。','Não, ainda falta muito.']
      ],
      dialogue: [['A','しゅみ は なん です か。','Qual é o seu hobby?'],['B','りょうり です。にほん の りょうり を つくりたい です。','Cozinhar. Quero fazer comida japonesa.'],['A','いい です ね！ なに を つくりたい です か。','Legal! O que quer fazer?'],['B','ラーメン を つくりたい です。','Quero fazer lámen.']],
      quiz: [['"Quero ver" é…', ['みたい','みほしい','みます'], 0], ['Elogiado por seu japonês, a resposta humilde é…', ['はい、じょうずです','いいえ、まだまだです'], 1]],
      tip: 'Estude através dos seus hobbies: se gosta de anime, assista com legenda em japonês; se gosta de games, mude o idioma do jogo. Motivação é combustível de longo prazo.',
      mission: 'Mude o idioma de UM app ou jogo que você usa todo dia para japonês por uma semana.'
    },
    {
      id: 'm1l15', title: 'Convites e combinações', icon: '💌',
      cando: ['Convidar alguém, aceitar e recusar com educação', 'Combinar dia, hora e lugar'],
      vocab: [
        ['いっしょに','','juntos','🤝'], ['ひま','','tempo livre (な)','🆓'], ['いそがしい','','ocupado','🏃'], ['やくそく','','compromisso / promessa','🤙'], ['こんど','','da próxima vez','🔜'],
        ['ざんねん','','que pena (な)','😢'], ['ちょっと…','','(recusa educada)','🙊'], ['あいます','','encontrar (alguém)','👫'], ['まちます','','esperar','⏳'], ['どう','','que tal?','🤷'],
        ['ぜひ','','com certeza','💯'], ['こうえん','','parque','🌳'], ['カラオケ','','karaokê','🎤']
      ],
      kanji: [['会','カイ','あ(う)','encontrar'],['待','タイ','ま(つ)','esperar'],['週','シュウ','—','semana'],['末','マツ','すえ','fim']],
      grammar: [
        { t: '〜ませんか — convite', d: '"Não quer…?" É a forma mais educada de convidar.', ex: [['いっしょに えいが を みませんか。','Não quer ver um filme comigo?']] },
        { t: '〜ましょう／〜ましょうか', d: 'ましょう = "vamos!" (aceitar/sugerir); ましょうか = "vamos…? / quer que eu…?"', ex: [['ええ、みましょう！','Sim, vamos ver!'],['なんじ に あいましょうか。','A que horas nos encontramos?']] },
        { t: 'Recusar sem dizer "não"', d: 'Japoneses raramente dizem いいえ diretamente. Use: ちょっと…, ざんねん です が…, また こんど.', ex: [['土曜日[どようび] は ちょっと…','Sábado fica um pouco…'],['ざんねん です が、また こんど。','Que pena, fica para a próxima.']] }
      ],
      sentences: [
        ['いっしょに カラオケ に いきませんか。','Não quer ir ao karaokê comigo?'], ['いい です ね。いきましょう！','Boa! Vamos!'], ['どこ で あいましょうか。','Onde nos encontramos?'],
        ['えき の まえ で まって います。','Te espero em frente à estação.'], ['すみません、きょう は ちょっと…','Desculpe, hoje fica difícil…'], ['また こんど さそって ください。','Me convide da próxima vez.']
      ],
      dialogue: [['A','しゅうまつ、ひま です か。','Está livre no fim de semana?'],['B','土曜日[どようび] は ひま です よ。','Sábado estou livre.'],['A','じゃ、いっしょに こうえん で ピクニック を しませんか。','Então, não quer fazer um piquenique no parque comigo?'],['B','いい です ね！ なんじ に あいましょうか。','Boa! A que horas nos encontramos?'],['A','じゅういちじ に えき で あいましょう。','Vamos nos encontrar às 11 na estação.']],
      quiz: [['Forma mais educada de convidar:', ['いきます','いきませんか','いきたい'], 1], ['ちょっと… num convite significa…', ['Sim, um pouco','Recusa educada'], 1]],
      tip: 'Role-play: faça os dois papéis do diálogo em voz alta, depois troque palavras (lugar, hora, atividade). Variação é o que torna a fala espontânea.',
      mission: 'Convide alguém (em japonês, num app de intercâmbio como HelloTalk/Tandem, ou um amigo que estuda) para algo usando 〜ませんか.'
    },
    {
      id: 'm1l16', title: 'Na cidade: direções e pedidos', icon: '🗺️',
      cando: ['Pedir e dar direções simples', 'Fazer pedidos com 〜てください'],
      vocab: [
        ['みぎ','','direita','➡️'], ['ひだり','','esquerda','⬅️'], ['まっすぐ','','em frente','⬆️'], ['かど','','esquina','↪️'], ['しんごう','','semáforo','🚦'],
        ['ちかく','','perto','📍'], ['とおい','','longe','🛤️'], ['びょういん','','hospital','🏥'], ['ぎんこう','','banco','🏦'], ['ゆうびんきょく','','correio','🏤'],
        ['まがって','','vire (forma て)','↩️'], ['いって','','vá (forma て)','🚶'], ['ちず','','mapa','🗺️']
      ],
      kanji: [['右','ウ','みぎ','direita'],['左','サ','ひだり','esquerda'],['駅','エキ','—','estação'],['道','ドウ','みち','caminho'],['近','キン','ちか(い)','perto'],['遠','エン','とお(い)','longe']],
      grammar: [
        { t: 'どこ ですか／〜は どこに ありますか', d: 'Perguntar onde fica.', ex: [['すみません、えき は どこ です か。','Com licença, onde é a estação?']] },
        { t: '〜てください (introdução)', d: 'Pedido educado: "faça ~, por favor". A forma て será estudada a fundo no Módulo 2; aqui, decore as mais úteis.', ex: [['つぎ の かど を みぎ に まがって ください。','Vire à direita na próxima esquina.'],['もう いちど いって ください。','Diga mais uma vez, por favor.'],['ゆっくり はなして ください。','Fale devagar, por favor.']] }
      ],
      sentences: [
        ['すみません、えき は どこ です か。','Com licença, onde é a estação?'], ['まっすぐ いって ください。','Siga em frente.'], ['しんごう を ひだり に まがって ください。','Vire à esquerda no semáforo.'],
        ['ここ から とおい です か。','É longe daqui?'], ['ゆっくり はなして ください。','Fale devagar, por favor.'], ['ちず を かいて ください。','Desenhe um mapa, por favor.']
      ],
      dialogue: [['A','すみません、ゆうびんきょく は どこ です か。','Com licença, onde fica o correio?'],['B','この みち を まっすぐ いって、ふたつめ の かど を みぎ に まがって ください。','Siga esta rua e vire à direita na segunda esquina.'],['A','とおい です か。','É longe?'],['B','いいえ、あるいて ごふん ぐらい です。','Não, uns 5 minutos a pé.'],['A','ありがとうございました！','Muito obrigado!']],
      quiz: [['"Vire à direita" é…', ['みぎにまがってください','ひだりにまがってください','まっすぐいってください'], 0], ['"Fale devagar, por favor":', ['ゆっくりはなしてください','もういちどいってください'], 0]],
      tip: 'Use o Google Maps em japonês e "navegue" mentalmente por uma rua de Tóquio no Street View, narrando as direções.',
      mission: 'No Street View, escolha a estação de Shinjuku e descreva em japonês o caminho até algum prédio próximo.'
    },
    {
      id: 'm1l17', title: 'Revisão: os 3 tipos de frase', icon: '🧱',
      cando: ['Identificar frases substantivas, adjetivas e verbais', 'Montar afirmativo, negativo, passado e pergunta de cada tipo'],
      intro: `<p>Toda frase japonesa termina em um de três "motores". Se você domina os três, consegue montar quase qualquer frase do nível básico:</p>
<ol>
<li><b>Frase substantiva</b>: termina em substantivo + です. <i>学生[がくせい]です</i></li>
<li><b>Frase adjetiva</b>: termina em adjetivo (い ou な). <i>たかいです／しずかです</i></li>
<li><b>Frase verbal</b>: termina em verbo. <i>たべます</i></li>
</ol>
<p>O verbo (ou です) <b>sempre vem no fim</b>. O que muda é como cada motor conjuga:</p>
<table style="width:100%;border-collapse:collapse;font-size:14px" class="jp">
<tr><th></th><th>Substantiva</th><th>Adjetiva い</th><th>Adjetiva な</th><th>Verbal</th></tr>
<tr><td>Afirm.</td><td>学生です</td><td>たかいです</td><td>しずかです</td><td>たべます</td></tr>
<tr><td>Neg.</td><td>学生じゃありません</td><td>たかくないです</td><td>しずかじゃありません</td><td>たべません</td></tr>
<tr><td>Passado</td><td>学生でした</td><td>たかかったです</td><td>しずかでした</td><td>たべました</td></tr>
<tr><td>Pass. neg.</td><td>学生じゃありませんでした</td><td>たかくなかったです</td><td>しずかじゃありませんでした</td><td>たべませんでした</td></tr>
</table>`,
      vocab: [
        ['学生','がくせい','estudante','🎓'], ['たかい','','caro / alto','📈'], ['しずか','','silencioso (な)','🤫'], ['たべます','','comer','🍽️'],
        ['先生','せんせい','professor(a)','👩‍🏫'], ['おもしろい','','interessante','🤣'], ['べんり','','prático (な)','🔧'], ['いきます','','ir','🚶']
      ],
      grammar: [
        { t: 'Frase substantiva', d: 'A は B です. O "motor" é です.', ex: [['田中[たなか]さん は 先生[せんせい] でした。','O Tanaka era professor.']] },
        { t: 'Frase adjetiva', d: 'O adjetivo carrega o tempo verbal. Nos い-adjetivos, です é só educação; quem conjuga é o adjetivo.', ex: [['えいが は おもしろかった です。','O filme foi interessante.'],['この まち は べんり じゃ ありません。','Esta cidade não é prática.']] },
        { t: 'Frase verbal', d: 'Partículas (は, を, に, で…) organizam a frase, e o verbo fecha.', ex: [['きのう ともだち と レストラン で すし を たべました。','Ontem comi sushi num restaurante com um amigo.']] }
      ],
      sentences: [
        ['私[わたし] は 学生[がくせい] じゃ ありません。','Eu não sou estudante.'], ['この 本[ほん] は おもしろく なかった です。','Este livro não era interessante.'], ['としょかん は しずか でした。','A biblioteca estava silenciosa.'],
        ['あした は 会社[かいしゃ] に いきません。','Amanhã não vou à empresa.'], ['その レストラン は たかい です か。','Esse restaurante é caro?']
      ],
      quiz: [['Passado negativo de たかい:', ['たかくなかったです','たかいじゃありませんでした','たかかったじゃない'], 0], ['しずか é…', ['adjetivo い','adjetivo な','verbo'], 1], ['Em japonês, o verbo fica…', ['no começo','no fim','no meio'], 1]],
      tip: 'Monte você mesmo a tabela 4×4 num papel, de memória, uma vez por semana. Quando conseguir sem erro, o básico da gramática está dominado.',
      mission: 'Escreva 4 frases sobre você, uma de cada tipo (substantiva, adjetiva い, adjetiva な, verbal), cada uma em afirmativo, negativo e passado.'
    }
  ]
});
