// Biblioteca de vídeos: curso da Jenni (Hotmart), vídeos gratuitos do canal da Jenni,
// vídeos das aulas novas e coleções por tema (sons, escrita, estrutura, cultura, história, sociedade, imersão).
// Formato de vídeo: [idYouTube, canal, título, idioma]
(function () {
  const HM = 'https://hotmart.com/pt-BR/club/japonescomjenni/products/6012597';
  const JY = 'Japonês com Jenni';

  window.JENNI = {
    course: 'Jornada Japonês Express',
    url: HM,
    mods: {
      1: ['Módulos 1 e 2 — Hiragana', HM + '/track/RE4zKyojel'],
      3: ['Módulos 3 e 4 — Katakana', HM + '/track/QLO0VkvLeG'],
      5: ['Módulo 5 — Kanji', HM + '/track/DPeA5kjJeW'],
      6: ['Módulo 6 — Pronúncia', HM + '/track/mBOnYqKq7R'],
      7: ['Módulo 7 — Frase substantiva', HM + '/track/rRO99kMNOP'],
      8: ['Módulo 8 — Frase adjetiva', HM + '/track/wx7WpZ3QO2'],
      9: ['Módulo 9 — Verbo na forma de dicionário', HM + '/track/ZNOwojdKOm'],
      10: ['Módulo 10 — Verbo na forma MASU', HM + '/track/Xm7YpNaJe6'],
      11: ['Módulo 11 — Verbo na forma NAI', HM + '/track/r37d93ZMOL'],
      12: ['Módulo 12 — Verbo na forma TA', HM + '/track/9M7G2kgBew'],
      13: ['Módulo 13 — Verbo na forma TE', HM + '/track/2z7ra3nKej'],
      14: ['Módulo 14 — Partículas', HM + '/track/v94JMR00Og'],
      15: ['Bônus — Japonês para Viagem', HM + '/track/zK4k0V65eY']
    },
    // Aula do Michi → partes do curso da Jenni que tratam do mesmo assunto
    map: {
      m0f1: [[1, '1.1 Escrita japonesa'], [7, '7.2 Estrutura da frase']],
      m0l1: [[6, 'aulas 6.1 a 6.4 (sons e entonação)']],
      m0l2: [[1, 'aulas 1.2 a 1.5 (introdução e colunas A, K, S) e "Fontes de letras"']],
      m0l3: [[1, 'aulas 1.6 a 1.8 (colunas T, N, H)']],
      m0l4: [[1, 'aulas 1.9 a 1.12 (colunas M, Y, R, W e N) e "Aula extra: escrevendo hiragana"']],
      m0l5: [[1, 'Módulo 2 — Hiragana parte 2']],
      m0f2: [[6, '6.1 vogal prolongada · 6.2 ん · 6.3 っ · 6.4 acentuação e entonação']],
      m0l6: [[3, 'Módulo 3 — Katakana parte 1']],
      m0l7: [[3, 'Módulo 4 — Katakana parte 2']],
      m0l8: [[5, 'módulo inteiro']],
      m0f3: [[7, '7.2 Estrutura da frase: introdução'], [9, 'frases com verbo']],
      m0f4: [[14, 'módulo inteiro']],
      m0f5: [[7, '7.1 Linguagem formal e informal']],
      m1l1: [[15, 'cumprimentos e frases de viagem']],
      m1l2: [[7, 'aulas 7.3 a 7.6 e 7.11 (afirmativa, negativa, passado e pergunta)']],
      m1l4: [[7, '7.3 Frases afirmativas']],
      m1l5: [[15, 'restaurante e comida']],
      m1l6: [[15, 'compras']],
      m1l7: [[10, 'módulo inteiro']],
      m1l8: [[14, 'módulo inteiro']],
      m1l9: [[10, 'passado na forma ます'], [7, '7.5 e 7.6 Frases no passado']],
      m1l12: [[8, 'módulo inteiro'], [7, '7.13 Frases com adjetivos']],
      m1l13: [[8, 'passado dos adjetivos']],
      m1l16: [[15, 'direções e transporte']],
      m1l17: [[7, 'frase substantiva'], [8, 'frase adjetiva'], [9, 'frase verbal']],
      m2l1: [[13, 'módulo inteiro']],
      m2l2: [[13, 'forma て + いる']],
      m2l3: [[13, 'forma て + もいい / はいけない']],
      m2l4: [[9, 'forma de dicionário'], [11, 'forma ない'], [12, 'forma た'], [7, 'aulas 7.7 a 7.10 (frases informais)']],
      m2l5: [[11, 'módulo inteiro']],
      m2l6: [[12, 'módulo inteiro']],
      m2l14: [[15, 'trem e estação']],
      m2l15: [[15, 'konbini e restaurante']],
      sa1: [[15, 'restaurante']], sa2: [[15, 'estação']], sa3: [[15, 'compras']], sa4: [[15, 'hotel e viagem']]
    },
    // Vídeos gratuitos do canal da Jenni no YouTube, por aula
    yt: {
      m0f1: [['kymKFE_3bJM', 'Por que aprender japonês é mais do que aprender um idioma?'], ['p623NbiIetM', 'Mude sua mentalidade para aprender japonês']],
      m0l2: [['QjeHMfyWsUM', 'Como aprender hiragana de um jeito mais eficiente?']],
      m0f2: [['mQP7Fuw6dQA', "Como melhorar sua pronúncia de japonês? O 'tsu'zinho"], ['3f8gYdfouMU', 'Palavras parecidas mas com significados diferentes']],
      m0l8: [['oJrx5aIYCWE', 'A saga do kanji japonês'], ['ZgT7lUUjJlM', 'Aula de kanji: 女 onna e 母 haha']],
      m0f3: [['Ve4etrTKBdg', 'Japonês do Zero, aula 3: o que é です (desu)?'], ['DZx9ZjXKgQI', 'Japonês do Zero, aula 2: perguntas simples']],
      m0f4: [['axgXrOytjg8', 'A diferença entre as partículas は (wa) e が (ga)']],
      m0f5: [['lWggGtfJGrs', 'Como agradecer e se despedir em japonês'], ['QR7GDAdxM1U', '5 maneiras de pedir desculpa em japonês']],
      m1l1: [['_VPhsGAdsrs', 'Como cumprimentar japoneses'], ['lWggGtfJGrs', 'Como agradecer e se despedir em japonês']],
      m1l2: [['SgSmYqQI_PM', 'Japonês do Zero, aula 1: autoapresentação'], ['DZx9ZjXKgQI', 'Japonês do Zero, aula 2: perguntas simples']],
      m1l7: [['5biGOIogI58', 'Japonês × português: a conjugação no presente e no futuro'], ['-idyg26PV-c', 'Domine o vocabulário de rotina']],
      m1l9: [['d363bTtM1jQ', 'Como memorizar os dias da semana']],
      m1l10: [['wsdLAsfFZ94', '4 formas de dizer "pai"'], ['ZgT7lUUjJlM', 'Aula de kanji: 女 onna e 母 haha']],
      m1l12: [['Zu9Yg6oCqss', 'Japonês do Zero, aula 4: adjetivos (parte 1)']],
      m1l15: [['70pYiDoFl0Q', 'Como dizer "sim" e "não" em japonês']],
      m2l1: [['QR7GDAdxM1U', '5 maneiras de pedir desculpa em japonês']],
      m2l13: [['P_z4zzDb3rM', 'Diferença entre 元気 (genki) e 大丈夫 (daijoubu)']],
      m5l2: [['rQ0mnF4r-QQ', 'Expressão avançada: 羽目を外す (hame o hazusu)']],
      sa3: [['bmG7QrO3WY8', 'Palavras relacionadas a roupas']],
      cu6: [['0v0N--6PwJk', 'Cultura japonesa: o dia do Tanabata']],
      cu14: [['T5A61z64xUI', 'Estudar japonês com anime: bom ou ruim?']]
    },
    ytChannel: JY
  };

  // Vídeos das aulas de fundamentos (além dos da Jenni)
  window.EXTRA_VIDEOS = {
    m0f1: [['__Ukw5CwgIY','Ganbaree! - Japonês para Animes','Como funciona o sistema de escrita japonês?','pt'], ['iojGPLVdAjo','123 Japonês','Aprender japonês não é difícil: a essência do idioma explicada','pt'], ['V_d4ej_TgXg','Japonês Em Foco','Qual a diferença entre hiragana e katakana?','pt'], ['x9-e_3GHrzw','Langfocus','The Japanese Language','en']],
    m0f2: [['bKzFYDd4zAQ','Programa Japonês Online','Tsu pequeno (sokuon) no hiragana','pt'], ['7AACpDWlXqE','NihonGoal','How to pronounce Japanese long vowel sounds','en'], ['J_HLY0Rss-g','Kaname Naito','Japanese pronunciation: rhythm','en'], ['K8E-cU19PMs','Kaname Naito','Japanese pronunciation: pitch accent basics','en']],
    m0f3: [['iojGPLVdAjo','123 Japonês','Aprender japonês não é difícil: a essência do idioma explicada','pt'], ['U2q5GsB0swQ','Kaname Naito','Basic sentence structure in Japanese','en'], ['OHV5ADOS1Kg','Tetsu Sensei','How to understand 90% of Japanese sentences','en']],
    m0f4: [['X5tPdlmTplU','Babi san | Onigiri Nihongo','A chave para dominar as partículas','pt'], ['PIfBLtusxNQ','Programa Japonês Online','Partícula WA (は) na língua japonesa','pt'], ['MZ_YGspoWso','Marnihongo','Partícula を (wo): entendendo as partículas','pt']],
    m0f5: [['nJ53a_ZJN_o','Eu falo japonês!','Forma polida e informal de verbos e adjetivos','pt'], ['wTz5it4Izsg','That Japanese Man Yuta','What’s です desu ます masu? (polite, formal, keigo)','en']]
  };

  // Vídeos de apoio para aulas das trilhas que não têm vídeos próprios
  window.TRACK_VIDEOS = {
    kanji: [['oJrx5aIYCWE', JY, 'A saga do kanji japonês','pt'], ['M3h-I8FauOo','Oráculo Oriental','Pare de tentar decorar kanji! Aprenda como eles funcionam','pt'], ['i_cQitAxxgQ','Oráculo Oriental','Entenda 10 radicais de kanji em 4 minutos','pt']],
    vocab: [['-idyg26PV-c', JY, 'Domine o vocabulário de rotina','pt'], ['rjmKQ-fjnyQ','Nihongo-Learning','Comprehensible Japanese: let’s learn Japanese in the park (iniciante)','ja'], ['Jh2C7JlWGKU','Nihongo-Learning','Comprehensible Japanese: my morning routine','ja']],
    situ: [['IJEn-9nAFQE','Japanese super immersion','Conversa do dia a dia para iniciantes absolutos','ja'], ['k6DUWCMq-2Y','かなまとぺ Kanamatope','Real Japanese for convenience store: shadowing & role play','ja'], ['lXcXkOa5LAU','Japanese with Shun','Easy Japanese conversation podcast (N5)','ja']],
    story: [['Jh2C7JlWGKU','Nihongo-Learning','Comprehensible Japanese: my morning routine','ja'], ['cNDzCgsTeyg','Nihongo-Learning','Comprehensible Japanese: midnight konbini','ja'], ['8nTDWfEXoaM','けんさんおかえり Japanese','1 hora de escuta para iniciantes (N5)','ja']]
  };

  // Coleções da aba Vídeos
  window.LIBRARY = [
    { id: 'start', icon: '🧭', title: 'Comece por aqui', desc: 'Como o japonês funciona e como estudar sozinho do jeito certo.', v: [
      ['kymKFE_3bJM', JY, 'Por que aprender japonês é mais do que aprender um idioma?','pt'], ['p623NbiIetM', JY, 'Mude sua mentalidade para aprender japonês','pt'],
      ['lsybPGLiRxQ','123 Japonês','Aprender japonês do zero: guia para iniciantes','pt'], ['iojGPLVdAjo','123 Japonês','A essência do idioma explicada','pt'],
      ['GD1SWaxyzg0','Ganbaree! - Japonês para Animes','Como aprender japonês sozinho?','pt'], ['L3FtcGwK1sg','Eric Hiroyuki','Aula 1/5: como aprender japonês do zero','pt'], ['x9-e_3GHrzw','Langfocus','The Japanese Language','en']] },
    { id: 'jenni', icon: '👩‍🏫', title: 'Canal da Jenni (grátis)', desc: 'Aulas curtas da professora do seu curso, no YouTube.', v: [
      ['SgSmYqQI_PM', JY, 'Japonês do Zero, aula 1: autoapresentação','pt'], ['DZx9ZjXKgQI', JY, 'Japonês do Zero, aula 2: perguntas simples','pt'], ['Ve4etrTKBdg', JY, 'Japonês do Zero, aula 3: o que é です?','pt'], ['Zu9Yg6oCqss', JY, 'Japonês do Zero, aula 4: adjetivos (parte 1)','pt'],
      ['QjeHMfyWsUM', JY, 'Como aprender hiragana de um jeito mais eficiente?','pt'], ['mQP7Fuw6dQA', JY, "Pronúncia: o 'tsu'zinho",'pt'], ['axgXrOytjg8', JY, 'Partículas は e が','pt'], ['oJrx5aIYCWE', JY, 'A saga do kanji japonês','pt'],
      ['_VPhsGAdsrs', JY, 'Como cumprimentar japoneses','pt'], ['lWggGtfJGrs', JY, 'Como agradecer e se despedir','pt'], ['QR7GDAdxM1U', JY, '5 maneiras de pedir desculpa','pt'], ['70pYiDoFl0Q', JY, 'Como dizer "sim" e "não"','pt'],
      ['5biGOIogI58', JY, 'Japonês × português: presente e futuro','pt'], ['d363bTtM1jQ', JY, 'Como memorizar os dias da semana','pt'], ['-idyg26PV-c', JY, 'Vocabulário de rotina','pt'], ['wsdLAsfFZ94', JY, '4 formas de dizer "pai"','pt'],
      ['P_z4zzDb3rM', JY, '元気 × 大丈夫','pt'], ['3f8gYdfouMU', JY, 'Palavras parecidas com significados diferentes','pt'], ['ZgT7lUUjJlM', JY, 'Kanji: 女 e 母','pt'], ['l6QtnZXDzXg', JY, 'Kanji: 飲む','pt'],
      ['bmG7QrO3WY8', JY, 'Palavras de roupas','pt'], ['0v0N--6PwJk', JY, 'Cultura japonesa: Tanabata','pt'], ['T5A61z64xUI', JY, 'Estudar japonês com anime: bom ou ruim?','pt'], ['rQ0mnF4r-QQ', JY, 'Expressão avançada: 羽目を外す','pt']] },
    { id: 'sons', icon: '🗣️', title: 'Sons e pronúncia', desc: 'Vogais, ritmo (mora), っ, ん, vogais longas e o acento de altura.', v: [
      ['mQP7Fuw6dQA', JY, "Pronúncia: o 'tsu'zinho",'pt'], ['BlsmNNovnFQ','Eu Estudando','Como pronunciar o japonês: vogais','pt'], ['bKzFYDd4zAQ','Programa Japonês Online','Tsu pequeno (sokuon)','pt'],
      ['c9OArpr2A78','Speak Japanese Naturally','The very basics of Japanese pitch accent','en'], ['7AACpDWlXqE','NihonGoal','Long vowel sounds','en'], ['J_HLY0Rss-g','Kaname Naito','Pronunciation: rhythm','en'], ['K8E-cU19PMs','Kaname Naito','Pitch accent basics','en'], ['-CGVxpKES3k','Matt vs Japan','Pitch accent doesn’t matter???','en']] },
    { id: 'kana', icon: 'あ', title: 'Hiragana e katakana', desc: 'Leitura e escrita dos dois alfabetos, passo a passo.', v: [
      ['QjeHMfyWsUM', JY, 'Como aprender hiragana de um jeito mais eficiente?','pt'], ['uzPVDGIhnY4','Marnihongo','Hiragana: como ler e escrever','pt'], ['0C29JXyAyI4','Babi san | Onigiri Nihongo','Japonês do zero: hiragana passo a passo','pt'],
      ['VY3uLMLpIqc','Programa Japonês Online','Curso de leitura de hiragana, aula 1','pt'], ['gHwrbIeg2Q0','Marnihongo','Katakana: como ler e escrever','pt'], ['WtF8xKEKVM8','Babi san | Onigiri Nihongo','Japonês do zero: katakana passo a passo','pt'], ['V_d4ej_TgXg','Japonês Em Foco','Diferença entre hiragana e katakana','pt']] },
    { id: 'kanji', icon: '🈶', title: 'Kanji', desc: 'O que são, radicais, leituras on e kun e como memorizar.', v: [
      ['oJrx5aIYCWE', JY, 'A saga do kanji japonês','pt'], ['J_ToujQ6pvc','123 Japonês','Leituras ON e KUN: como diferenciar','pt'], ['M3h-I8FauOo','Oráculo Oriental','Pare de decorar kanji!','pt'],
      ['i_cQitAxxgQ','Oráculo Oriental','10 radicais de kanji em 4 minutos','pt'], ['EgSSYvf_15Y','Programa Japonês Online','Meu método para aprender kanji','pt'], ['TIxOGi26P0I','Kensei Sensei','Everything you need to know about kanji','en']] },
    { id: 'estrutura', icon: '🧱', title: 'Estrutura e partículas', desc: 'A ordem da frase, です, os 3 tipos de frase e as partículas.', v: [
      ['Ve4etrTKBdg', JY, 'O que é です (desu)?','pt'], ['axgXrOytjg8', JY, 'Partículas は e が','pt'], ['X5tPdlmTplU','Babi san | Onigiri Nihongo','A chave para dominar as partículas','pt'],
      ['PIfBLtusxNQ','Programa Japonês Online','Partícula は','pt'], ['MZ_YGspoWso','Marnihongo','Partícula を','pt'], ['nJ53a_ZJN_o','Eu falo japonês!','Forma polida e informal','pt'],
      ['U2q5GsB0swQ','Kaname Naito','Basic sentence structure','en'], ['YkFh76rNKUg','いろいろな日本語','The entirety of Japanese grammar in under 11 minutes','en']] },
    { id: 'historia', icon: '🏯', title: 'História do Japão', desc: 'Dos samurais à era Meiji, à guerra e ao milagre econômico.', v: [
      ['Mh5LY4Mz15o','bill wurtz','history of japan','en'], ['7YQiiTHuyNs','Impérios AD','A história do Japão','pt'], ['rmkhVu7HA6c','Canal Nostalgia','A história do Japão','pt'], ['1Cc01dRaMVg','123 Japonês','História da escrita japonesa, parte 1','pt'],
      ['vitR-EMP6dw','123 Japonês','Período Heian: arte, corte e literatura','pt'], ['peMqRTi6gT4','Tinocando TV','Samurais: os maiores guerreiros do Japão','pt'], ['RaDinD8LEfQ','De Leste a Oeste','Período Edo: samurais, yokais e arte','pt'],
      ['uncLQV4Y3_s','Nerdologia','Japão Meiji','pt'], ['o23-YvMmvaQ','Canal História e Tu','Como a Restauração Meiji transformou o Japão','pt'], ['le5CEXYI69s','Tinocando TV','Hiroshima e Nagasaki: a história completa','pt'],
      ['Z3qJQDu9L6M','Instinct Culture - Cultura Japonesa','Como o Japão se reconstruiu após a guerra','pt'], ['QFsI-yrEWVY','Economia Descomplicada','O milagre econômico japonês','pt']] },
    { id: 'costumes', icon: '⛩️', title: 'Religião, valores e costumes', desc: 'Xintoísmo e budismo, etiqueta, honne e tatemae, comida e festas.', v: [
      ['kXCPmUw40Sg','123 Japonês','Budismo e xintoísmo no Japão','pt'], ['PxhG6fKiMr0','Japão Nosso De Cada Dia','Como se comportar em um santuário','pt'], ['BNYxfie_apI','Tudo Sobre o Japão','Ojigi: a arte japonesa da reverência','pt'],
      ['Iwi4RLo62QM','Japonês Com Arthur','Honne e tatemae','pt'], ['L29BhgzsDfc','Lugares e Curiosidades','Comportamentos proibidos no Japão','pt'], ['roeo8PIzkEU','Kokoro Brasil','Os 10 erros mais graves no Japão','pt'],
      ['FFw3PCtqv4g','Japan House São Paulo','Hospitalidade japonesa: omotenashi','pt'], ['P3P_SdVwJzk','Guilherme Levorato','A tradicional culinária japonesa (washoku)','pt'], ['BIVbJPnCQRk','123 Japonês','Ano-Novo no Japão','pt'],
      ['0v0N--6PwJk', JY, 'O dia do Tanabata','pt'], ['l8UhpwSQWAY','Guia do Japa','As estações do ano no Japão','pt'], ['3WD-IvfHw0o','Japan Video Topics - Português','Sado: a arte da cerimônia do chá','pt'], ['lSXP4kBeIJI','Mirko','Japanese onsen etiquette explained','en']] },
    { id: 'sociedade', icon: '🏙️', title: 'Sociedade de hoje', desc: 'Trabalho, escola, envelhecimento, cidades, lixo, trens e desastres.', v: [
      ['bvAYmZPwdJg','CNN Brasil','Japão: Terra de Resistência, episódio 2: envelhecimento','pt'], ['6QENDkbq0UY','Curiosity','Por que um país perde sua população: Japão','pt'], ['Zr3ByQxYoI8','Euronews em Português','O Japão aposta em tecnologia contra o envelhecimento','pt'],
      ['Lrup1_-LM68','Erloc','O estranho iceberg do trabalho japonês','pt'], ['BTUAXaNNgS4','Rushi sensei','Quando o trabalho mata: a cultura do trabalho no Japão','pt'], ['nIPJrl8bEp0','Tudo Sobre o Japão','Como é a educação no Japão?','pt'],
      ['w8z-bfOek0g','Rota Asiática','Como é estudar numa escola do Japão','pt'], ['IafiFaV1tNs','Os Três Elementos','Konbini: como o Japão reinventou a loja de conveniência','pt'], ['S8rxR436vzA','Mundão de Eryry','Regras de lixo no Japão','pt'],
      ['uYpE8I0Wto0','Turma da Frente','Trens no Japão: por que nunca atrasam?','pt'], ['q2JynEyXLNE','Investigate Asia','Inside Japan’s super-ageing society','en'], ['-kX3ABxHSKE','Vagarious Travel','Why Japan doesn’t fear natural disasters','en']] },
    { id: 'brasil', icon: '🇧🇷', title: 'Japão e Brasil', desc: 'Imigração, nikkeis, dekasseguis, Liberdade e o jiu-jítsu.', v: [
      ['v-ZOR9xjgAA','Educa Web Radio','Do Kasato Maru aos dekasseguis','pt'], ['0cBdT50Tm8Y','Honda Brasil','Websérie 110 anos da imigração japonesa','pt'], ['dvsf0mnCFCA','Jornalismo Cultura Litoral e Vale','Kasato Maru e a chegada ao porto de Santos','pt'],
      ['6v7JbDjLqY8','Raízes Esquecidas','Dekassegui: por que milhares de nipo-brasileiros foram ao Japão','pt'], ['v9qRdzcIe2A','Jovem Pan News','Conheça a Liberdade, um pedacinho do Oriente em São Paulo','pt'], ['cWBysMuzgho','Histórias do Extremo Oriente','História do judô','pt']] },
    { id: 'artes', icon: '🎭', title: 'Artes, cultura pop e estética', desc: 'Mangá, anime, Ghibli, wabi-sabi, kintsugi, kabuki, nō e sumô.', v: [
      ['4FpIbGVNCNU','Animego','Osamu Tezuka, o deus do mangá','pt'], ['e5UGsVhYkC8','omeleteve','Studio Ghibli e Hayao Miyazaki','pt'], ['pjtwCKN1Jnk','Nerd All Stars','O que é anime? Origem e gêneros','pt'],
      ['cII6Pr3lJ5w','123 Japonês','Estética japonesa: wabi-sabi','pt'], ['Rm3u__4xGsM','Programa Japonês Online','Kintsugi: técnica, arte e filosofia','pt'], ['IPkRsbO76pE','123 Japonês','A história do kabuki','pt'],
      ['Y9jTd5r8Zug','Japan Video Topics - Português','Por trás das cenas do teatro nō','pt'], ['D0dohazU_3Y','Histórias do Extremo Oriente','A história do sumô','pt'], ['Fdcp7Jfpo-s','Histórias do Extremo Oriente','A origem das artes marciais no Japão','pt']] },
    { id: 'regioes', icon: '🗾', title: 'Geografia e regiões', desc: 'Do Fuji às metrópoles, Kyoto, os Ainu e Okinawa.', v: [
      ['K-_5mJ6MnDY','Thiago San','Do monte Fuji às metrópoles: a geografia do Japão','pt'], ['8RUETC8TpeY','Planeta Paraíso TV-BR','Kyoto: a cidade dos antigos imperadores','pt'],
      ['ejmBO1vyRr4','Histórias do Extremo Oriente','Os Ainu: cultura e história','pt'], ['rKUI-j3iIo0','Epimetheus','The history of Okinawa (Ryukyu Kingdom) in 8 minutes','en']] },
    { id: 'imersao', icon: '🎧', title: 'Imersão: ouvir japonês de verdade', desc: 'Vídeos todos em japonês fácil, para treinar o ouvido. Comece sem legenda e não se preocupe em entender tudo.', v: [
      ['rjmKQ-fjnyQ','Nihongo-Learning','Vamos aprender japonês no parque (iniciante)','ja'], ['Jh2C7JlWGKU','Nihongo-Learning','Minha rotina da manhã (iniciante)','ja'], ['cNDzCgsTeyg','Nihongo-Learning','Konbini à meia-noite','ja'],
      ['IJEn-9nAFQE','Japanese super immersion','Conversa do dia a dia para iniciantes','ja'], ['1h6nZVh_utc','INARI JAPANESE','1 minuto de escuta fácil: hobbies','ja'], ['Ami_8Iqqc4g','Tokyo Slow Japanese','Japonês devagar: 20 minutos (N5)','ja'],
      ['lXcXkOa5LAU','Japanese with Shun','Podcast de conversa fácil (N5)','ja'], ['8nTDWfEXoaM','けんさんおかえり Japanese','1 hora de escuta para iniciantes (N5)','ja'], ['ferxrdMI-Rs','Japanese Suki','30 minutos de shadowing','ja'],
      ['AfkgVPo2OSI','Japanese Listening Shadowing','150 frases básicas em japonês','en'], ['k6DUWCMq-2Y','かなまとぺ Kanamatope','Japonês real no konbini: shadowing e role-play','ja']] }
  ];
})();
