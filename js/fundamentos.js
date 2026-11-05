// Aulas de fundamentos para iniciantes (como a língua funciona, ritmo, estrutura, partículas e polidez)
// e as notas do "professor" que abrem cada aula do módulo Fundamentos.
(function () {
  const m0 = window.COURSE.find(m => m.id === 'm0');
  const at = (afterId, lesson) => {
    const i = afterId ? m0.lessons.findIndex(l => l.id === afterId) + 1 : 0;
    m0.lessons.splice(i, 0, lesson);
  };

  at(null, {
    id: 'm0f1', title: 'Como o japonês funciona (o mapa do curso)', icon: '🧭',
    cando: ['Entender por que o japonês tem três escritas', 'Saber a ordem das palavras e o papel das partículas', 'Conhecer o roteiro do zero ao avançado'],
    prof: `Antes de decorar qualquer letra, quero que você veja o <b>mapa inteiro</b>. Quem entende a lógica da língua aprende muito mais rápido, porque cada aula nova se encaixa em algo que já faz sentido. Hoje não tem decoreba: só entender.`,
    intro: `<h4>1. Três escritas, cada uma com uma função</h4>
<p>Uma frase japonesa comum mistura três sistemas:</p>
<p class="demo-jp"><span class="hk">私</span><span class="hh">は</span><span class="hkt">ブラジル</span><span class="hh">の</span><span class="hkt">コーヒー</span><span class="hh">が</span><span class="hk">好</span><span class="hh">きです。</span></p>
<p class="muted">"Eu gosto de café do Brasil."</p>
<ul>
<li><span class="hk">Kanji</span> (漢字): ideogramas vindos da China. Carregam o <b>significado</b>: 私 = eu, 好 = gostar.</li>
<li><span class="hh">Hiragana</span> (ひらがな): sílabas para a <b>gramática</b>, como partículas e terminações (は, の, が, きです) e palavras sem kanji.</li>
<li><span class="hkt">Katakana</span> (カタカナ): as mesmas sílabas em outro desenho, para <b>palavras estrangeiras</b> e nomes (ブラジル, コーヒー).</li>
</ul>
<p>Hiragana e katakana têm <b>46 sons básicos cada</b> e se aprendem em poucas semanas. Os kanji vêm aos poucos, dentro de palavras, durante todo o curso.</p>
<h4>2. O verbo fica no fim</h4>
<p>Português: <i>Eu <b>bebo</b> café.</i> Japonês: <i>Eu café <b>bebo</b>.</i> → 私は コーヒーを <b>飲みます</b>。</p>
<h4>3. Partículas são etiquetas</h4>
<p>Pequenas palavras depois de cada termo dizem qual é a função dele: は = tópico ("quanto a…"), を = objeto, で = lugar ou meio, に = destino. É como colar uma etiqueta em cada peça da frase.</p>
<h4>4. O que o japonês NÃO tem (boa notícia!)</h4>
<ul><li>Não tem artigo (o/a/um), não tem gênero e quase não tem plural: 本 = livro ou livros.</li>
<li>O verbo <b>não muda com a pessoa</b>: 飲みます = eu bebo, você bebe, eles bebem.</li>
<li>O sujeito some quando é óbvio: 飲みます。 já é uma frase completa.</li></ul>
<h4>5. Polidez faz parte da gramática</h4>
<p>A mesma frase tem forma educada (飲みます) e casual (飲む). Você começa pela educada, que serve para qualquer pessoa.</p>
<h4>6. Os sons são fáceis para brasileiros</h4>
<p>São só 5 vogais (a, i, u, e, o), quase iguais às nossas, e poucas consoantes. O desafio é o <b>ritmo</b>: cada sílaba tem o mesmo tempo.</p>
<h4>🗺️ Seu roteiro</h4>
<ol>
<li><b>Fundamentos</b> (3–6 semanas): sons, hiragana, katakana, primeiros kanji, estrutura e partículas.</li>
<li><b>A1 / N5</b> (3–4 meses): se apresentar, comprar, comer, rotina e frases com です e ます.</li>
<li><b>A2 / N4</b> (4–6 meses): forma て, fala casual, contar experiências, dar opinião.</li>
<li><b>B1 / N3 → C1 / N1</b> (1–3 anos): keigo, notícias, trabalho, literatura e debate.</li>
</ol>
<p class="muted">Estimativas para quem estuda 30 minutos por dia, todos os dias.</p>`,
    vocab: [['日本語','にほんご','língua japonesa','🗾'], ['ひらがな','','hiragana','あ'], ['カタカナ','','katakana','ア'], ['漢字','かんじ','kanji','🈶'], ['私','わたし','eu','🙋'], ['コーヒー','','café','☕'], ['好き','すき','gostar de','❤️'], ['飲みます','のみます','beber (forma educada)','🥤']],
    sentences: [['私[わたし] は コーヒー が 好[す]き です。','Eu gosto de café.'], ['私[わたし] は コーヒー を 飲[の]みます。','Eu bebo café.'], ['日本語[にほんご] は おもしろい です。','Japonês é interessante.']],
    quiz: [
      ['Qual escrita é usada para palavras estrangeiras como コーヒー?', ['Hiragana','Katakana','Kanji'], 1],
      ['Em japonês, o verbo fica…', ['no começo da frase','no meio, como em português','no fim da frase'], 2],
      ['As partículas (は, を, で…) servem para…', ['marcar a função de cada palavra na frase','indicar o plural','indicar o gênero'], 0],
      ['O verbo japonês muda conforme a pessoa (eu, você, ele)?', ['Sim, como em português','Não: 飲みます serve para todos'], 1]
    ],
    tip: 'Confie no roteiro: sons → escrita → estrutura → vocabulário em contexto. Uma aula por dia, com revisão diária, vale mais que maratonas.',
    mission: 'Encontre uma frase em japonês (embalagem, site, mangá) e tente identificar as três escritas: o que é kanji, o que é hiragana e o que é katakana.'
  });

  at('m0l5', {
    id: 'm0f2', title: 'Ritmo e melodia: mora, っ, ん, vogais longas e tom', icon: '🎵',
    cando: ['Contar moras e pronunciar っ, ん e vogais longas com o tempo certo', 'Entender o acento de altura (tom) e o "u" que some em です'],
    prof: `Você já conhece os sons. Agora vem o que separa quem "lê japonês" de quem <b>soa natural</b>: o ritmo. Bata palmas enquanto fala, sério. Em japonês, errar o ritmo pode mudar a palavra inteira.`,
    intro: `<h4>1. Mora: a batida do japonês</h4>
<p>Cada kana conta como <b>uma batida</b> de mesmo tempo, como notas de música iguais. Bata palmas: に・ほ・ん・ご = 4 batidas. か・ん・じ = 3.</p>
<h4>2. Os sons que valem uma batida inteira</h4>
<ul>
<li><b>Vogal longa</b>: おばさん (o-ba-sa-n, tia) × おばあさん (o-ba-a-sa-n, avó). No katakana usa-se ー: ケーキ.</li>
<li><b>っ pequeno</b> (pausa): きて (venha) × きって (selo). Na っ você "segura" a consoante por uma batida em silêncio.</li>
<li><b>ん</b>: é uma batida própria e muda de som conforme a letra seguinte:
<br>• antes de b/p/m vira <b>m</b>: さんぽ (sampo, passeio), しんぶん (shimbun);
<br>• antes de k/g vira <b>ng</b>: りんご (ringo), ぎんこう;
<br>• antes de t/d/n/r é um <b>n</b> claro: ほんだ, はんたい;
<br>• no fim da palavra é nasal e leve: ほん, にほん. Nunca transforme em "ãu" ou "im" como no português.</li>
</ul>
<h4>3. O "u" e o "i" que somem</h4>
<p>Entre consoantes surdas (k, s, t, h, p), o <b>i</b> e o <b>u</b> ficam sussurrados: です soa "dess", します soa "shimass", した soa "shta". Se você falar "dêsu" com u forte, soa estrangeiro.</p>
<h4>4. Acento de altura (tom)</h4>
<p>O japonês não tem sílaba "mais forte". Ele usa tom <b>alto e baixo</b>, como uma melodia:</p>
<ul><li>箸 (hashi de comer): HA-shi, alto → baixo</li><li>橋 (ponte): ha-SHI, baixo → alto</li><li>雨 (chuva): A-me × 飴 (bala): a-ME</li></ul>
<p>Na prática, o contexto resolve quase tudo. O segredo é <b>imitar os áudios</b> (shadowing) desde o começo, sem decorar regras.</p>`,
    vocab: [['きって','','selo','📮'], ['きて','','venha!','🫴'], ['おばあさん','','avó / senhora idosa','👵'], ['おばさん','','tia / senhora','👩'], ['びょういん','','hospital','🏥'], ['びよういん','','salão de beleza','💇'], ['さんぽ','','passeio','🚶'], ['りんご','','maçã','🍎'], ['しんぶん','','jornal','📰'], ['ケーキ','','bolo','🍰']],
    sentences: [['きって を ください。','Um selo, por favor.'], ['おばあさん は げんき です。','A avó está bem.'], ['びょういん は どこ です か。','Onde é o hospital?'], ['さんぽ に いきます。','Vou passear.'], ['りんご と ケーキ を たべます。','Como maçã e bolo.']],
    quiz: [
      ['Quantas moras (batidas) tem きって?', ['2','3','4'], 1],
      ['Em さんぽ, o ん soa como…', ['m','ng','n'], 0],
      ['です normalmente soa como…', ['"dêsu", com u forte','"dess", com o u quase sumindo'], 1],
      ['O que diferencia 箸 (hashi de comer) de 橋 (ponte) na fala?', ['A quantidade de moras','A melodia (tom alto ou baixo)','Nada, é igual'], 1],
      ['びょういん × びよういん significam…', ['a mesma coisa','hospital × salão de beleza'], 1]
    ],
    tip: 'Shadowing: ouça a frase, pause, repita imitando a melodia como se fosse uma música. Grave-se e compare. Cinco minutos por dia mudam sua pronúncia em um mês.',
    mission: 'Fale 10 palavras desta aula batendo palmas em cada mora. Depois grave きって, きて, おばさん e おばあさん e veja se dá para ouvir a diferença.'
  });

  at('m0l8', {
    id: 'm0f3', title: 'Estrutura da frase: a lógica do japonês', icon: '🧱',
    cando: ['Montar frases na ordem japonesa (tópico, tempo, lugar, objeto, verbo)', 'Entender por que o sujeito some e por que o modificador vem antes'],
    prof: `Hoje é a aula mais importante do módulo. Vou te dar a <b>fórmula</b> que monta 80% das frases do japonês básico. Depois dela, gramática nova deixa de ser regra solta e vira peça que se encaixa num lugar fixo.`,
    intro: `<h4>A fórmula da frase japonesa</h4>
<p class="formula"><span>Tópico は</span><span>Quando</span><span>Onde で</span><span>O quê を</span><span><b>Verbo</b></span></p>
<p>Vamos montar uma frase peça por peça, sempre terminando no verbo:</p>
<ol>
<li>食べます。 → (eu) como.</li>
<li>パンを 食べます。 → como pão.</li>
<li>朝 パンを 食べます。 → de manhã, como pão.</li>
<li>朝 うちで パンを 食べます。 → de manhã, como pão em casa.</li>
<li>私は 朝 うちで パンを 食べます。 → eu, de manhã, como pão em casa.</li>
</ol>
<h4>Três ideias que mudam tudo</h4>
<ul>
<li><b>O verbo sozinho já é uma frase.</b> 食べます。 está completo. O sujeito só aparece quando é novidade ou para contrastar.</li>
<li><b>Quem descreve vem antes.</b> 赤い 車 = vermelho carro → "carro vermelho". 日本の 車 = "carro do Japão". Até frases inteiras vêm antes do substantivo (você verá no A2).</li>
<li><b>As partículas vêm depois.</b> Em português dizemos "<b>em</b> Tóquio"; em japonês, 東京<b>で</b>. Pense em "pós-posições".</li>
</ul>
<h4>Os 3 tipos de frase</h4>
<ul>
<li><b>Substantiva</b>: A は B です (Eu sou estudante): 私は 学生です。</li>
<li><b>Adjetiva</b>: A は (adjetivo) です (O Japão é bonito): 日本は きれいです。</li>
<li><b>Verbal</b>: A は … verbo (Eu vejo TV): 私は テレビを 見ます。</li>
</ul>
<p>Todo o módulo A1 é aprender a variar esses três tipos: negativa, passado, pergunta, formal e casual.</p>`,
    grammar: [
      { t: 'Sujeito – Objeto – Verbo', d: 'A ordem básica é SOV. O tempo e o lugar costumam vir antes do objeto.', ex: [['私[わたし] は テレビ を 見[み]ます。','Eu vejo TV.'], ['私[わたし] は 朝[あさ] うち で パン を 食[た]べます。','Eu como pão em casa de manhã.']] },
      { t: 'Pergunta: só coloque か no fim', d: 'A ordem não muda. か funciona como o ponto de interrogação falado.', ex: [['テレビ を 見[み]ます か。','Você vê TV?'], ['はい、見[み]ます。','Sim, vejo.']] },
      { t: 'Modificador antes do substantivo', d: 'Adjetivos e expressões com の vêm antes da coisa descrita.', ex: [['日本[にほん] の 車[くるま]','carro do Japão'], ['赤[あか]い 車[くるま]','carro vermelho']] }
    ],
    vocab: [['食べます','たべます','comer (forma educada)','🍽️'], ['見ます','みます','ver / assistir','👀'], ['パン','','pão','🍞'], ['朝','あさ','manhã','🌅'], ['うち','','casa','🏠'], ['学生','がくせい','estudante','🎓'], ['テレビ','','televisão','📺'], ['車','くるま','carro','🚗']],
    sentences: [['パン を 食[た]べます。','Como pão.'], ['朝[あさ] パン を 食[た]べます。','De manhã como pão.'], ['私[わたし] は 朝[あさ] うち で パン を 食[た]べます。','Eu como pão em casa de manhã.'], ['私[わたし] は 学生[がくせい] です。','Eu sou estudante.'], ['テレビ を 見[み]ます か。','Você assiste TV?']],
    quiz: [
      ['Qual é a ordem japonesa de "Eu bebo água"?', ['私は 飲みます 水を','私は 水を 飲みます','飲みます 私は 水を'], 1],
      ['日本の車 significa…', ['Japão do carro','carro do Japão'], 1],
      ['Por que o japonês omite tanto o sujeito?', ['Porque é falta de educação dizer "eu"','Porque o contexto já deixa claro quem é'], 1],
      ['Como transformar uma frase em pergunta?', ['Inverter a ordem das palavras','Colocar か no fim'], 1]
    ],
    tip: 'Ao ler qualquer frase, procure primeiro o verbo no fim, depois volte achando as partículas. Ler "de trás para frente" no começo é normal e ajuda muito.',
    mission: 'Escreva 3 frases sobre sua rotina usando a fórmula: 私は (quando) (onde)で (o quê)を (verbo). Pode misturar português onde faltar vocabulário.'
  });

  at('m0f3', {
    id: 'm0f4', title: 'Partículas: as etiquetas da frase', icon: '🏷️',
    cando: ['Reconhecer as 10 partículas mais usadas e a função de cada uma', 'Ler は como "wa", へ como "e" e を como "o"'],
    prof: `Partícula é o que mais trava o iniciante, então vamos com calma. Não decore definições: veja cada partícula como uma <b>etiqueta</b> colada atrás da palavra dizendo o papel dela. Hoje é só reconhecer; nas próximas aulas você vai usar cada uma várias vezes.`,
    intro: `<h4>Por que etiquetas?</h4>
<p>Em português, a função vem da ordem: "o gato come o peixe" ≠ "o peixe come o gato". Em japonês, quem manda são as partículas: ねこ<b>が</b> さかな<b>を</b> 食べます (o gato come o peixe). Mesmo trocando a ordem, さかな<b>を</b> ねこ<b>が</b> 食べます continua sendo o gato que come.</p>
<table class="ptable">
<tr><th>Partícula</th><th>Função</th><th>Exemplo</th></tr>
<tr><td>は (wa)</td><td>tópico: "quanto a…"</td><td>私は 学生です</td></tr>
<tr><td>が</td><td>sujeito / informação nova</td><td>ねこが います</td></tr>
<tr><td>を (o)</td><td>objeto direto</td><td>水を 飲みます</td></tr>
<tr><td>に</td><td>destino, horário, onde algo está</td><td>日本に 行きます</td></tr>
<tr><td>へ (e)</td><td>direção</td><td>駅へ 行きます</td></tr>
<tr><td>で</td><td>onde a ação acontece / meio</td><td>電車で 行きます</td></tr>
<tr><td>と</td><td>e / com (alguém)</td><td>友だちと 行きます</td></tr>
<tr><td>も</td><td>também</td><td>私も 行きます</td></tr>
<tr><td>の</td><td>de (posse, ligação)</td><td>私の 本</td></tr>
<tr><td>か</td><td>pergunta</td><td>行きますか</td></tr>
</table>
<h4>Pronúncia que engana</h4>
<p>Quando são partículas, は lê-se <b>wa</b>, へ lê-se <b>e</b> e を lê-se <b>o</b>. A escrita guarda a pronúncia antiga.</p>
<h4>は × が em uma frase</h4>
<p>は apresenta o assunto ("falando de mim…"); が aponta quem fez ou o que existe, muitas vezes uma informação nova. Você vai sentir a diferença com o tempo. No começo, use は para "eu sou…" e が com います/あります e 好き.</p>`,
    grammar: [
      { t: 'を, に, で: o trio do dia a dia', d: 'を = o quê; に = para onde ou quando; で = onde a ação acontece, ou com o quê.', ex: [['水[みず] を 飲[の]みます。','Bebo água.'], ['駅[えき] に 行[い]きます。','Vou à estação.'], ['電車[でんしゃ] で 行[い]きます。','Vou de trem.']] },
      { t: 'と, も, の', d: 'と liga pessoas ou coisas; も substitui は/が para dizer "também"; の liga dois substantivos.', ex: [['友[とも]だち と 行[い]きます。','Vou com um amigo.'], ['私[わたし] も 行[い]きます。','Eu também vou.'], ['これ は 私[わたし] の 本[ほん] です。','Este é o meu livro.']] }
    ],
    vocab: [['水','みず','água','💧'], ['駅','えき','estação','🚉'], ['友だち','ともだち','amigo(a)','🧑‍🤝‍🧑'], ['行きます','いきます','ir (forma educada)','➡️'], ['電車','でんしゃ','trem','🚃'], ['本','ほん','livro','📕'], ['ねこ','','gato','🐈'], ['さかな','','peixe','🐟']],
    sentences: [['私[わたし] は 水[みず] を 飲[の]みます。','Eu bebo água.'], ['友[とも]だち と 駅[えき] へ 行[い]きます。','Vou à estação com um amigo.'], ['電車[でんしゃ] で 行[い]きます。','Vou de trem.'], ['これ は 私[わたし] の 本[ほん] です。','Este é o meu livro.'], ['ねこ が さかな を 食[た]べます。','O gato come o peixe.'], ['私[わたし] も 行[い]きます。','Eu também vou.']],
    quiz: [
      ['Qual partícula marca o objeto direto (o que é comido, bebido, lido)?', ['は','を','で'], 1],
      ['電車＿行きます (vou DE trem)', ['で','を','の'], 0],
      ['Quando é partícula, は lê-se…', ['ha','wa','ba'], 1],
      ['私＿本 (MEU livro)', ['の','と','も'], 0],
      ['友だち＿行きます (vou COM um amigo)', ['と','を','か'], 0]
    ],
    tip: 'Faça um "cartão de partículas": escreva cada partícula com UMA frase de exemplo que você goste. Quando tiver dúvida, compare com a sua frase-modelo.',
    mission: 'Pegue as frases que você escreveu na aula anterior e circule as partículas. Para cada uma, diga em voz alta a função dela ("を: o que eu como").'
  });

  at('m0f4', {
    id: 'm0f5', title: 'Formal × informal: níveis de polidez', icon: '🙇',
    cando: ['Escolher entre forma educada (です・ます) e casual', 'Usar さん, くん, ちゃん e 先生 corretamente'],
    prof: `No Japão, <b>como</b> você fala diz tanto quanto <b>o que</b> você fala. A boa notícia: existe uma regra segura para iniciantes. Saindo desta aula, você não vai mais ter medo de soar mal-educado.`,
    intro: `<h4>Três degraus de polidez</h4>
<ol>
<li><b>Casual</b> (普通体): família, amigos, crianças. 行く, 学生だ, ありがとう.</li>
<li><b>Educado</b> (丁寧語 / です・ます): desconhecidos, colegas, professores, lojas. 行きます, 学生です, ありがとうございます. <b>É o seu padrão.</b></li>
<li><b>Keigo</b> (敬語): clientes, chefes, cerimônias. Verbos especiais como いらっしゃる e まいる. Você ouve isso em lojas desde o primeiro dia e vai estudar no B1.</li>
</ol>
<h4>Uchi e soto: dentro e fora</h4>
<p>A polidez depende do <b>grupo</b>. Com quem é "de dentro" (うち: família, amigos próximos) usa-se casual; com quem é "de fora" (そと), educado. Numa empresa, ao falar com um cliente, até o seu chefe vira "de dentro" e você fala dele com humildade.</p>
<h4>Sufixos de nome</h4>
<ul>
<li><b>〜さん</b>: o coringa respeitoso (senhor/senhora). 田中さん.</li>
<li><b>〜くん</b>: meninos e homens mais jovens ou subordinados.</li>
<li><b>〜ちゃん</b>: crianças, amigas íntimas, apelidos carinhosos.</li>
<li><b>〜先生</b>: professores, médicos, advogados.</li>
<li><b>〜様</b> (さま): clientes e cartas, muito formal.</li>
</ul>
<p><b>Nunca</b> use sufixo no seu próprio nome: diga "ララです", não "ララさんです".</p>
<h4>Regra de ouro</h4>
<p>Use です・ます com todo mundo até a outra pessoa falar casual com você e te convidar a fazer o mesmo.</p>`,
    vocab: [['ありがとうございます','','muito obrigado(a) (formal)','🙏'], ['ありがとう','','obrigado(a) (casual)','👍'], ['おはようございます','','bom dia (formal)','🌅'], ['おはよう','','bom dia (casual)','☀️'], ['すみません','','com licença / desculpe','🙇'], ['ごめん','','foi mal (casual)','😅'], ['先生','せんせい','professor(a) / doutor(a)','👩‍🏫'], ['友だち','ともだち','amigo(a)','🧑‍🤝‍🧑']],
    sentences: [['行[い]きます。','Vou. (educado)'], ['行[い]く よ。','Vou! (casual)'], ['学生[がくせい] です。','Sou estudante. (educado)'], ['学生[がくせい] だ よ。','Sou estudante. (casual)'], ['田中[たなか] さん は 先生[せんせい] です。','O sr. Tanaka é professor.']],
    quiz: [
      ['Com um desconhecido na rua, use…', ['a forma casual (行く)','a forma です・ます (行きます)'], 1],
      ['Você pode dizer o próprio nome com さん (ララさんです)?', ['Sim, é educado','Não: さん é só para os outros'], 1],
      ['ちゃん normalmente é usado com…', ['chefes','crianças e pessoas muito próximas','clientes'], 1],
      ['Ao falar com um cliente sobre o seu chefe, você…', ['eleva o chefe com keigo','fala do chefe com humildade, como alguém "de dentro"'], 1]
    ],
    tip: 'Ao assistir anime ou dorama, repare quem fala casual com quem. Isso treina o seu "radar de polidez" melhor que qualquer regra.',
    mission: 'Escolha 3 pessoas da sua vida e decida: com cada uma você usaria casual, です・ます ou keigo? Diga "bom dia" e "obrigado" na forma certa para cada uma.'
  });

  // Notas do professor para as aulas originais do módulo Fundamentos
  const PROF = {
    m0l1: 'Hoje vamos afinar o ouvido. Os sons do japonês são amigáveis para quem fala português, mas três detalhes (o r, o h e o tamanho das vogais) entregam o sotaque. Ouça cada palavra e repita em voz alta, sem vergonha.',
    m0l2: 'Começa a parte divertida: as primeiras 15 letras. Não tente decorar a tabela inteira. Olhe a forma, leia a historinha (mnemônico), ouça o som e escreva à mão. Amanhã, revise antes de seguir.',
    m0l3: 'Mais 15 hiragana. Atenção especial às exceções ち, つ, ふ e ao は que vira "wa" quando é partícula. Escreva cada letra falando o som.',
    m0l4: 'Última leva de hiragana básico! Depois desta aula você consegue ler qualquer palavra escrita só em hiragana. Faça a revisão da tabela inteira na aba Kana antes da próxima aula.',
    m0l5: 'Agora as variações: ゛ e ゜, as combinações きゃ/しゅ e o っ pequeno. É só uma lógica nova aplicada às letras que você já sabe.',
    m0l6: 'Katakana tem os mesmos sons do hiragana, só muda o desenho. Você vai reconhecer muitas palavras porque vêm do inglês e até do português!',
    m0l7: 'Fechando o katakana com as combinações para sons estrangeiros (ティ, ファ…). Tente escrever seu nome em katakana até o fim da aula.',
    m0l8: 'Kanji assusta, mas tem lógica: cada um é feito de peças (radicais) com significado. Hoje você aprende 12 e, mais importante, entende o que são on\'yomi e kun\'yomi.'
  };
  m0.lessons.forEach(l => { if (PROF[l.id]) l.prof = PROF[l.id]; });
})();
