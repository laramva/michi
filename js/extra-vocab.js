// Trilha de Vocabulário temático: 30 aulas, ~360 palavras do dia a dia com frases de uso real.
window.EXTRA = window.EXTRA || [];
(function () {
  function V(m, id, title, icon, vocab, sentences, tip, mission) {
    window.EXTRA.push({ m, l: {
      id, title, icon, track: 'vocab', vocab, sentences,
      cando: [`Usar ${vocab.length} palavras sobre "${title.replace(/^Vocabulário: /, '')}" em frases reais`],
      tip: tip || 'Aprenda palavras em grupos temáticos e use cada uma numa frase sobre a SUA vida. Diga em voz alta enquanto vê o objeto real, se puder.',
      mission: mission || `Ao longo do dia, toda vez que vir algo deste tema, diga o nome em japonês (mentalmente ou em voz alta).`
    } });
  }
  // ---------- A1 ----------
  V('m1', 'va1', 'Vocabulário: a sala de aula', '🏫', [
    ['えんぴつ','','lápis','✏️'],['ペン','','caneta','🖊️'],['けしゴム','','borracha','🧽'],['ノート','','caderno','📓'],['じしょ','','dicionário','📖'],['つくえ','','mesa (carteira)','🪑'],
    ['きょうしつ','','sala de aula','🏫'],['しゅくだい','','lição de casa','📝'],['しつもん','','pergunta','🙋'],['こたえ','','resposta','✅'],['テスト','','prova','📋'],['かみ','','papel','📄']
  ], [['えんぴつ を かして ください。','Me empresta um lápis, por favor.'],['しつもん が あります。','Tenho uma pergunta.'],['しゅくだい を わすれました。','Esqueci a lição de casa.'],['この ことば は 日本語[にほんご] で なん です か。','Como se diz esta palavra em japonês?']],
  'A frase mais útil para aprender: 「〜は 日本語で なんですか」. Use-a com tudo o que você não sabe dizer.');
  V('m1', 'va2', 'Vocabulário: corpo humano', '🧍', [
    ['あたま','','cabeça','🧠'],['かお','','rosto','😊'],['め','','olho','👁️'],['みみ','','orelha','👂'],['はな','','nariz','👃'],['くち','','boca','👄'],
    ['は','','dente','🦷'],['て','','mão','✋'],['あし','','perna / pé','🦵'],['おなか','','barriga','🫃'],['せなか','','costas','🔙'],['かみ','','cabelo','💇']
  ], [['あたま が いたい です。','Estou com dor de cabeça.'],['め が あおい です ね。','Seus olhos são azuis, né.'],['て を あらって ください。','Lave as mãos, por favor.'],['あし が ながい です。','Tem pernas longas.']],
  'Jogo do "toque": toque em cada parte do corpo dizendo o nome em japonês. Movimento + palavra = memória mais forte (TPR).');
  V('m1', 'va3', 'Vocabulário: roupas', '👕', [
    ['ふく','','roupa','👗'],['シャツ','','camisa','👕'],['ズボン','','calça','👖'],['スカート','','saia','👗'],['くつ','','sapato','👞'],['くつした','','meia','🧦'],
    ['ぼうし','','chapéu / boné','🧢'],['コート','','casaco','🧥'],['めがね','','óculos','👓'],['とけい','','relógio','⌚'],['きる','','vestir (em cima)','👕'],['はく','','vestir (embaixo) / calçar','👖']
  ], [['あたらしい くつ を かいました。','Comprei sapatos novos.'],['きょう は コート を きます。','Hoje vou vestir casaco.'],['この シャツ は いくら です か。','Quanto custa esta camisa?'],['ちょっと きて みても いい です か。','Posso experimentar?']]);
  V('m1', 'va4', 'Vocabulário: cores e formas', '🎨', [
    ['あか','','vermelho','🟥'],['あお','','azul','🟦'],['きいろ','','amarelo','🟨'],['みどり','','verde','🟩'],['しろ','','branco','⬜'],['くろ','','preto','⬛'],
    ['ちゃいろ','','marrom','🟫'],['ピンク','','rosa','🩷'],['むらさき','','roxo','🟪'],['まる','','círculo','⭕'],['しかく','','quadrado','🔲'],['さんかく','','triângulo','🔺']
  ], [['あかい くるま が すき です。','Gosto de carros vermelhos.'],['そら は あおい です。','O céu é azul.'],['しろい ねこ が います。','Tem um gato branco.'],['なにいろ が すき です か。','Qual cor você prefere?']],
  'Atenção: só あか, あお, きいろ, しろ, くろ, ちゃいろ viram adjetivo com い (あかい). As outras usam の: みどりの かばん.');
  V('m1', 'va5', 'Vocabulário: animais', '🐾', [
    ['いぬ','','cachorro','🐕'],['ねこ','','gato','🐈'],['とり','','pássaro','🐦'],['さかな','','peixe','🐟'],['うま','','cavalo','🐎'],['うし','','vaca','🐄'],
    ['ぶた','','porco','🐖'],['うさぎ','','coelho','🐇'],['さる','','macaco','🐒'],['くま','','urso','🐻'],['ぞう','','elefante','🐘'],['ペット','','animal de estimação','🐾']
  ], [['いぬ を かって います。','Tenho um cachorro.'],['ねこ が すき です か、いぬ が すき です か。','Você gosta de gatos ou de cachorros?'],['どうぶつえん に ぞう が います。','Tem elefante no zoológico.'],['ペット は いません。','Não tenho animal de estimação.']]);
  V('m1', 'va6', 'Vocabulário: casa', '🏠', [
    ['いえ','','casa','🏠'],['へや','','quarto / cômodo','🚪'],['だいどころ','','cozinha','🍳'],['おふろ','','banheira / banho','🛁'],['トイレ','','banheiro (vaso)','🚽'],['げんかん','','entrada da casa','👞'],
    ['まど','','janela','🪟'],['ドア','','porta','🚪'],['かいだん','','escada','🪜'],['にわ','','jardim','🌳'],['テレビ','','TV','📺'],['ソファ','','sofá','🛋️']
  ], [['げんかん で くつ を ぬぎます。','Tira-se o sapato na entrada.'],['まど を あけて ください。','Abra a janela, por favor.'],['トイレ を かして ください。','Posso usar o banheiro?'],['だいどころ で りょうり を します。','Cozinho na cozinha.']]);
  V('m1', 'va7', 'Vocabulário: tempo e clima', '⛅', [
    ['てんき','','tempo (clima)','⛅'],['はれ','','tempo bom','☀️'],['くもり','','nublado','☁️'],['あめ','','chuva','🌧️'],['ゆき','','neve','❄️'],['かぜ','','vento','💨'],
    ['あつい','','quente','🥵'],['さむい','','frio','🥶'],['あたたかい','','morno / agradável','🌤️'],['すずしい','','fresco','🍃'],['たいふう','','tufão','🌀'],['きおん','','temperatura','🌡️']
  ], [['きょう は いい てんき です ね。','Hoje o tempo está bom, né.'],['あした は あめ が ふる そう です。','Dizem que amanhã vai chover.'],['きょう は すずしい です ね。','Hoje está fresquinho, né.'],['かさ を もって いった ほう が いい です よ。','É melhor levar guarda-chuva.']],
  'Falar do tempo é o "small talk" número 1 no Japão. Comece conversas com 「いい天気ですね」 ou 「暑いですね」.');
  V('m1', 'va8', 'Vocabulário: transporte', '🚃', [
    ['でんしゃ','','trem','🚃'],['ちかてつ','','metrô','🚇'],['バス','','ônibus','🚌'],['タクシー','','táxi','🚕'],['くるま','','carro','🚗'],['じてんしゃ','','bicicleta','🚲'],
    ['ひこうき','','avião','✈️'],['ふね','','navio','🚢'],['えき','','estação','🚉'],['くうこう','','aeroporto','🛫'],['バスてい','','ponto de ônibus','🚏'],['きっぷ','','bilhete','🎫']
  ], [['ちかてつ で いきます。','Vou de metrô.'],['くうこう まで どのぐらい かかります か。','Quanto tempo leva até o aeroporto?'],['バスてい は どこ です か。','Onde é o ponto de ônibus?'],['タクシー を よんで ください。','Chame um táxi, por favor.']]);
  V('m1', 'va9', 'Vocabulário: lugares da cidade', '🏙️', [
    ['ぎんこう','','banco','🏦'],['ゆうびんきょく','','correio','🏤'],['びょういん','','hospital','🏥'],['やっきょく','','farmácia','💊'],['コンビニ','','loja de conveniência','🏪'],['スーパー','','supermercado','🛒'],
    ['レストラン','','restaurante','🍽️'],['こうえん','','parque','🌳'],['としょかん','','biblioteca','📚'],['ホテル','','hotel','🏨'],['こうばん','','posto policial','👮'],['じんじゃ','','santuário','⛩️']
  ], [['ちかく に コンビニ が あります か。','Tem uma loja de conveniência perto?'],['やっきょく は なんじ まで です か。','Até que horas abre a farmácia?'],['こうばん で みち を ききました。','Perguntei o caminho no posto policial.'],['こうえん を さんぽ します。','Passeio pelo parque.']]);
  V('m1', 'va10', 'Vocabulário: comida japonesa', '🍣', [
    ['すし','','sushi','🍣'],['ラーメン','','lámen','🍜'],['うどん','','udon','🍲'],['そば','','soba','🥢'],['てんぷら','','tempurá','🍤'],['やきとり','','espetinho de frango','🍢'],
    ['おにぎり','','bolinho de arroz','🍙'],['みそしる','','sopa de missô','🥣'],['とうふ','','tofu','⬜'],['なっとう','','natto','🫘'],['べんとう','','marmita','🍱'],['だんご','','dango (doce)','🍡']
  ], [['ラーメン を ひとつ ください。','Um lámen, por favor.'],['なっとう を たべた こと が あります か。','Você já comeu natto?'],['おにぎり は コンビニ で かえます。','Dá para comprar onigiri na loja de conveniência.'],['みそしる が だいすき です。','Adoro sopa de missô.']]);
  V('m1', 'va11', 'Vocabulário: verbos essenciais 1', '🏃', [
    ['たべる','','comer','🍽️'],['のむ','','beber','🥤'],['みる','','ver','👀'],['きく','','ouvir / perguntar','👂'],['よむ','','ler','📖'],['かく','','escrever','✍️'],
    ['はなす','','falar','🗣️'],['いく','','ir','🚶'],['くる','','vir','🫴'],['かえる','','voltar','🏠'],['ねる','','dormir','🛏️'],['おきる','','acordar','⏰']
  ], [['まいばん 本[ほん] を よみます。','Leio livros toda noite.'],['おんがく を きく の が すき です。','Gosto de ouvir música.'],['しちじ に おきます。','Acordo às sete.'],['うち に かえって、ねます。','Volto para casa e durmo.']],
  'Os 12 verbos desta aula aparecem em mais da metade das frases do dia a dia. Conjugue cada um nas formas ます／ません／ました em voz alta.');
  V('m1', 'va12', 'Vocabulário: verbos essenciais 2', '🛠️', [
    ['かう','','comprar','🛍️'],['うる','','vender','🏷️'],['あう','','encontrar','👫'],['まつ','','esperar','⏳'],['つくる','','fazer / fabricar','🛠️'],['つかう','','usar','🔧'],
    ['あける','','abrir','🔓'],['しめる','','fechar','🔒'],['あそぶ','','brincar / sair','🎡'],['およぐ','','nadar','🏊'],['はしる','','correr','🏃'],['わかる','','entender','💡']
  ], [['えき で ともだち を まって います。','Estou esperando um amigo na estação.'],['ばんごはん を つくります。','Vou fazer o jantar.'],['すみません、わかりません。','Desculpe, não entendi.'],['しゅうまつ に うみ で およぎました。','Nadei no mar no fim de semana.']]);
  // ---------- A2 ----------
  V('m2', 'vb1', 'Vocabulário: sentimentos', '💗', [
    ['うれしい','','feliz (por algo)','😄'],['かなしい','','triste','😢'],['たのしい','','divertido','🥳'],['さびしい','','solitário','🥺'],['こわい','','assustador / com medo','😨'],['はずかしい','','envergonhado','😳'],
    ['おこる','','ficar bravo','😠'],['びっくりする','','levar susto','😲'],['しんぱい','','preocupação','😟'],['あんしん','','alívio','😌'],['つかれる','','cansar','😩'],['たいくつ','','tédio','😑']
  ], [['プレゼント を もらって、うれしかった です。','Fiquei feliz em ganhar o presente.'],['ひとり で さびしい です。','Sozinho, me sinto solitário.'],['その ニュース を きいて、びっくり しました。','Levei um susto ao ouvir a notícia.'],['しんぱい しないで ください。','Não se preocupe.']],
  'Mantenha um "diário de emoções" com uma frase por dia: 「今日は〜て、うれしかった」. Conectar palavras a emoções reais grava muito mais fundo.');
  V('m2', 'vb2', 'Vocabulário: profissões', '👩‍⚕️', [
    ['いしゃ','','médico','🩺'],['かんごし','','enfermeiro(a)','👩‍⚕️'],['けいさつかん','','policial','👮'],['べんごし','','advogado(a)','⚖️'],['エンジニア','','engenheiro(a)','👷'],['きょうし','','professor(a) (profissão)','👩‍🏫'],
    ['てんいん','','atendente','🧑‍💼'],['シェフ','','chef','👨‍🍳'],['うんてんしゅ','','motorista','🚗'],['デザイナー','','designer','🎨'],['かしゅ','','cantor(a)','🎤'],['しゅふ','','dona de casa','🏠']
  ], [['おしごと は なん です か。','Qual é a sua profissão?'],['あに は べんごし を して います。','Meu irmão trabalha como advogado.'],['しょうらい かんごし に なりたい です。','No futuro, quero ser enfermeira.'],['ちち は タクシー の うんてんしゅ です。','Meu pai é taxista.']]);
  V('m2', 'vb3', 'Vocabulário: escritório e computador', '💻', [
    ['パソコン','','computador','💻'],['メール','','e-mail','📧'],['かいぎ','','reunião','👥'],['しりょう','','documento / material','📄'],['プリンター','','impressora','🖨️'],['ファイル','','arquivo','📁'],
    ['パスワード','','senha','🔑'],['ダウンロード','','download','⬇️'],['ほぞん','','salvar','💾'],['そうしん','','envio','📤'],['へんしん','','resposta (mensagem)','↩️'],['しめきり','','prazo','⏰']
  ], [['メール を おくりました。','Enviei o e-mail.'],['ファイル を ほぞん して ください。','Salve o arquivo, por favor.'],['かいぎ は なんじ から です か。','A reunião começa a que horas?'],['しめきり は あした です。','O prazo é amanhã.']]);
  V('m2', 'vb4', 'Vocabulário: viagem e hotel', '🧳', [
    ['りょこう','','viagem','🧳'],['パスポート','','passaporte','🛂'],['よやく','','reserva','📝'],['チェックイン','','check-in','🛎️'],['チェックアウト','','check-out','🚪'],['にもつ','','bagagem','🧳'],
    ['かんこう','','turismo','📸'],['おみやげ','','lembrancinha','🎁'],['ちず','','mapa','🗺️'],['りょうがえ','','câmbio','💱'],['ガイド','','guia','🧑‍🏫'],['おんせん','','fonte termal','♨️']
  ], [['よやく を おねがい したい の です が。','Gostaria de fazer uma reserva.'],['チェックアウト は なんじ です か。','Que horas é o check-out?'],['にもつ を あずかって もらえます か。','Pode guardar minha bagagem?'],['おみやげ を かいたい です。','Quero comprar lembrancinhas.']]);
  V('m2', 'vb5', 'Vocabulário: dinheiro e banco', '💴', [
    ['おかね','','dinheiro','💰'],['さいふ','','carteira','👛'],['ぎんこう','','banco','🏦'],['こうざ','','conta bancária','🏧'],['ふりこみ','','transferência','🔁'],['ひきだす','','sacar','💵'],
    ['あずける','','depositar / deixar','📥'],['てすうりょう','','taxa','🧾'],['りょうしゅうしょ','','recibo','🧾'],['わりびき','','desconto','🏷️'],['ぜいきん','','imposto','🏛️'],['ちょきん','','poupança','🐷']
  ], [['ATM で おかね を ひきだします。','Saco dinheiro no caixa eletrônico.'],['こうざ を ひらきたい です。','Quero abrir uma conta.'],['りょうしゅうしょ を ください。','O recibo, por favor.'],['まいつき ちょきん して います。','Guardo dinheiro todo mês.']]);
  V('m2', 'vb6', 'Vocabulário: esportes e lazer', '⚽', [
    ['サッカー','','futebol','⚽'],['やきゅう','','beisebol','⚾'],['すいえい','','natação','🏊'],['ジョギング','','corrida','🏃'],['ヨガ','','ioga','🧘'],['じゅうどう','','judô','🥋'],
    ['しあい','','partida / jogo','🏟️'],['かつ','','vencer','🏆'],['まける','','perder (jogo)','😞'],['チーム','','time','👥'],['れんしゅう','','treino','🔁'],['おうえん','','torcida / apoio','📣']
  ], [['まいあさ ジョギング を して います。','Corro toda manhã.'],['きのう の しあい で かちました。','Ganhamos o jogo de ontem.'],['どの チーム を おうえん して います か。','Para qual time você torce?'],['しゅう に にかい ヨガ を します。','Faço ioga duas vezes por semana.']]);
  V('m2', 'vb7', 'Vocabulário: natureza', '🏞️', [
    ['しぜん','','natureza','🌿'],['やま','','montanha','⛰️'],['うみ','','mar','🌊'],['かわ','','rio','🏞️'],['もり','','floresta','🌲'],['みずうみ','','lago','🏞️'],
    ['しま','','ilha','🏝️'],['はな','','flor','🌸'],['き','','árvore','🌳'],['くさ','','grama','🌱'],['ほし','','estrela','⭐'],['たいよう','','sol','☀️']
  ], [['しぜん が ゆたか な ところ に すみたい です。','Quero morar num lugar com muita natureza.'],['よる、ほし が きれい に みえます。','À noite, as estrelas aparecem lindas.'],['みずうみ の まわり を あるきました。','Andei ao redor do lago.'],['はる に なる と、はな が さきます。','Quando chega a primavera, as flores desabrocham.']]);
  V('m2', 'vb8', 'Vocabulário: tecnologia e internet', '📱', [
    ['スマホ','','smartphone','📱'],['アプリ','','aplicativo','📲'],['インターネット','','internet','🌐'],['ワイファイ','','Wi-Fi','📶'],['じゅうでん','','carregar (bateria)','🔋'],['がめん','','tela','🖥️'],
    ['しゃしん','','foto','📸'],['どうが','','vídeo','🎬'],['けんさく','','busca','🔎'],['とうこう','','postagem','📝'],['フォロー','','seguir','➕'],['つうち','','notificação','🔔']
  ], [['じゅうでん が きれそう です。','A bateria está acabando.'],['ワイファイ の パスワード は なん です か。','Qual é a senha do Wi-Fi?'],['その アプリ を ダウンロード しました。','Baixei esse aplicativo.'],['しゃしん を とうこう しました。','Postei uma foto.']]);
  V('m2', 'vb9', 'Vocabulário: relacionamentos', '💑', [
    ['こいびと','','namorado(a)','💑'],['かれし','','namorado','🧑'],['かのじょ','','namorada / ela','👩'],['けっこん','','casamento','💍'],['りこん','','divórcio','💔'],['デート','','encontro','🌹'],
    ['こくはく','','declaração de amor','💌'],['すきな人','すきなひと','pessoa de quem gosta','😍'],['なかま','','companheiros','🤝'],['しんゆう','','melhor amigo','👯'],['せんぱい','','veterano','🧑‍🎓'],['こうはい','','calouro / mais novo','🧒']
  ], [['かのじょ と デート に いきました。','Fui a um encontro com minha namorada.'],['かれ は わたし の しんゆう です。','Ele é meu melhor amigo.'],['せんぱい に そうだん しました。','Pedi conselho ao veterano.'],['らいねん けっこん する よてい です。','Pretendemos casar ano que vem.']]);
  V('m2', 'vb10', 'Vocabulário: advérbios de frequência e grau', '📊', [
    ['いつも','','sempre','♾️'],['よく','','frequentemente / bem','🔁'],['ときどき','','às vezes','🔀'],['たまに','','de vez em quando','🎲'],['あまり','','não muito (+neg.)','🤏'],['ぜんぜん','','nem um pouco (+neg.)','🚫'],
    ['とても','','muito','💯'],['すこし','','um pouco','🤏'],['もっと','','mais','➕'],['もう','','já','✔️'],['まだ','','ainda','⏳'],['すぐ','','logo / imediatamente','⚡']
  ], [['いつも あさごはん を たべます。','Sempre tomo café da manhã.'],['ときどき えいが を みます。','Às vezes assisto a filmes.'],['おさけ は ぜんぜん のみません。','Não bebo álcool de jeito nenhum.'],['もう たべました か。—いいえ、まだ です。','Já comeu? — Não, ainda não.']]);
  // ---------- B1 ----------
  V('m3', 'vc1', 'Vocabulário: trabalho e carreira', '📈', [
    ['しゅうしょく','','conseguir emprego','🤝'],['てんしょく','','mudar de emprego','🔄'],['きゅうりょう','','salário','💴'],['ざんぎょう','','hora extra','🌙'],['しゅっちょう','','viagem a trabalho','✈️'],['しょうしん','','promoção','📈'],
    ['たいしょく','','aposentar-se / demitir-se','🚪'],['めんせつ','','entrevista','🗣️'],['けいやく','','contrato','📜'],['ゆうきゅう','','férias remuneradas','🏖️'],['じょうし','','superior','👔'],['ぶか','','subordinado','🧑‍💼']
  ], [['らいげつ おおさか に しゅっちょう します。','Mês que vem viajo a trabalho para Osaka.'],['てんしょく を かんがえて います。','Estou pensando em mudar de emprego.'],['ゆうきゅう を とって、りょこう します。','Vou tirar férias e viajar.'],['けいやく に サイン して ください。','Assine o contrato, por favor.']]);
  V('m3', 'vc2', 'Vocabulário: saúde e corpo 2', '🩺', [
    ['けんこうしんだん','','check-up','🩺'],['しょほうせん','','receita médica','📄'],['ちゅうしゃ','','injeção','💉'],['にゅういん','','internação','🏥'],['たいいん','','alta hospitalar','🚪'],['しゅじゅつ','','cirurgia','🔪'],
    ['ずつう','','dor de cabeça','🤕'],['はきけ','','enjoo','🤢'],['めまい','','tontura','😵'],['アレルギー','','alergia','🤧'],['かふんしょう','','rinite de pólen','🌼'],['ストレス','','estresse','😫']
  ], [['きのう から はきけ が します。','Estou com enjoo desde ontem.'],['しょほうせん を もらいました。','Recebi a receita.'],['かふんしょう で はな が つらい です。','Meu nariz está sofrendo com a rinite de pólen.'],['ストレス が たまって います。','O estresse está acumulando.']]);
  V('m3', 'vc3', 'Vocabulário: sociedade e notícias', '📰', [
    ['しゃかい','','sociedade','🏙️'],['せいじ','','política','🏛️'],['けいざい','','economia','💹'],['じけん','','incidente','🚨'],['じこ','','acidente','💥'],['さいがい','','desastre','🌋'],
    ['せんきょ','','eleição','🗳️'],['しょうしか','','queda da natalidade','👶'],['こうれいか','','envelhecimento','👴'],['かんきょう','','meio ambiente','🌱'],['きこうへんどう','','mudança climática','🌡️'],['ぶっか','','custo de vida','💸']
  ], [['ぶっか が あがって います。','O custo de vida está subindo.'],['しょうしか は 日本[にほん] の おおきな もんだい です。','A queda da natalidade é um grande problema do Japão.'],['じこ で でんしゃ が とまりました。','O trem parou por causa de um acidente.'],['らいげつ せんきょ が あります。','Mês que vem tem eleição.']]);
  V('m3', 'vc4', 'Vocabulário: casa e moradia', '🏢', [
    ['アパート','','apartamento','🏢'],['やちん','','aluguel','💴'],['しききん','','caução','💰'],['れいきん','','"key money" (taxa ao proprietário)','🔑'],['おおや','','proprietário','🧓'],['ふどうさんや','','imobiliária','🏘️'],
    ['ひっこし','','mudança de casa','📦'],['まどり','','planta (layout)','📐'],['ごみ','','lixo','🗑️'],['ぶんべつ','','separação (do lixo)','♻️'],['きんじょ','','vizinhança','🏘️'],['でんきだい','','conta de luz','💡']
  ], [['やちん は いくら です か。','Quanto é o aluguel?'],['ごみ は ぶんべつ して だして ください。','Separe o lixo antes de jogar fora, por favor.'],['ふどうさんや で アパート を さがしました。','Procurei apartamento na imobiliária.'],['らいしゅう ひっこし します。','Semana que vem faço mudança.']],
  'No Japão a separação do lixo (燃えるゴミ／燃えないゴミ／資源ゴミ) é levada a sério. Aprenda essas palavras antes de morar lá!');
  V('m3', 'vc5', 'Vocabulário: verbos compostos', '🧩', [
    ['のりかえる','','fazer baldeação','🔁'],['とりかえる','','trocar','🔄'],['おもいだす','','lembrar-se','💭'],['よびだす','','convocar / chamar','📢'],['ききとる','','entender ouvindo','👂'],['かきなおす','','reescrever','✍️'],
    ['たべすぎる','','comer demais','🤰'],['のみすぎる','','beber demais','🍺'],['いいすぎる','','falar demais','🙊'],['よみはじめる','','começar a ler','📖'],['かきおわる','','terminar de escrever','✅'],['みつける','','encontrar','🔍']
  ], [['ゆうべ は のみすぎました。','Ontem à noite bebi demais.'],['かれ の なまえ が おもいだせません。','Não consigo lembrar o nome dele.'],['この さくぶん を かきなおして ください。','Reescreva esta redação, por favor.'],['はやすぎて、ききとれません でした。','Foi rápido demais, não consegui entender.']],
  'Padrão útil: stem + すぎる (demais), + はじめる (começar a), + おわる (terminar de), + なおす (refazer). Com 4 terminações você multiplica seu vocabulário.');
  // ---------- B2 ----------
  V('m4', 'vd1', 'Vocabulário: negócios', '🏢', [
    ['とりひき','','transação comercial','🤝'],['うりあげ','','vendas (faturamento)','📈'],['りえき','','lucro','💰'],['そんがい','','prejuízo','📉'],['けいやくしょ','','contrato (documento)','📜'],['みつもりしょ','','orçamento (documento)','🧾'],
    ['せいきゅうしょ','','fatura','🧾'],['のうき','','prazo de entrega','📦'],['こうしょう','','negociação','⚖️'],['ていあん','','proposta','💡'],['けんとう','','análise','🔍'],['しょうにん','','aprovação','✅']
  ], [['うりあげ が きょねん より ふえました。','As vendas aumentaram em relação ao ano passado.'],['みつもりしょ を おくって いただけますか。','Poderia enviar o orçamento?'],['この ていあん は しゃない で けんとう します。','Vamos analisar esta proposta internamente.'],['のうき に まにあいそう に ありません。','Parece que não vamos cumprir o prazo.']]);
  V('m4', 'vd2', 'Vocabulário: abstrato e debate', '🧠', [
    ['かち','','valor','💎'],['いぎ','','significado (importância)','🎯'],['ろんり','','lógica','🧮'],['こんきょ','','fundamento','🧱'],['ぜんてい','','premissa','📌'],['けつろん','','conclusão','🏁'],
    ['たちば','','posição','🧍'],['かんてん','','ponto de vista','🔭'],['りかい','','compreensão','💡'],['はんろん','','contra-argumento','↩️'],['しゅちょう','','alegação','📣'],['きょうつうてん','','ponto em comum','🔗']
  ], [['その しゅちょう の こんきょ は なん です か。','Qual é o fundamento dessa alegação?'],['べつ の かんてん から かんがえて みましょう。','Vamos pensar de outro ponto de vista.'],['ふたり の いけん に は きょうつうてん が あります。','As opiniões dos dois têm pontos em comum.'],['けつろん から いう と、さんせい です。','Resumindo, sou a favor.']]);
  V('m4', 'vd3', 'Vocabulário: expressões do cotidiano nativo', '💬', [
    ['なるほど','','faz sentido','💡'],['さすが','','como esperado (elogio)','👏'],['もったいない','','que desperdício','😩'],['しかたない','','não tem jeito','🤷'],['めんどくさい','','que preguiça / trabalhoso','😮‍💨'],['なつかしい','','que saudade (nostalgia)','🥹'],
    ['うらやましい','','que inveja (boa)','😍'],['おつかれ','','bom trabalho (casual)','🙌'],['ざんねん','','que pena','😢'],['よかった','','que bom (alívio)','😮‍💨'],['ありえない','','impossível / absurdo','🤯'],['ほっとする','','sentir alívio','😌']
  ], [['この うた、なつかしい ね！','Que saudade dessa música!'],['すてる の は もったいない よ。','Jogar fora é desperdício.'],['さすが プロ です ね。','Como esperado de um profissional.'],['ぶじ に ついて、ほっと しました。','Fiquei aliviado que chegou bem.']],
  'Essas palavras quase não têm tradução exata. Observe EM QUE situação os japoneses as usam em séries e vlogs, e copie a situação, não a tradução.');
})();
