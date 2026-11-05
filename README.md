# Michi 道 — Japonês do zero ao avançado

Plataforma gratuita que funciona como um **professor particular**: leva alguém que não sabe nada de japonês até o nível avançado (C1 / JLPT N1) em **fala, escuta, leitura e escrita**, ensinando também a **cultura, a história e a sociedade** do Japão. Funciona **offline**, salva o progresso no aparelho e não depende de nenhum servidor ou serviço pago.

## O que tem

- **185 aulas em 6 módulos**: Fundamentos (pré-A1) → A1/N5 → A2/N4 → B1/N3 → B2/N2 → C1/N1
- **Cada aula é guiada em 6 passos**: 👩‍🏫 professor (o que e por que estudar) → 🎬 vídeos (curso da Jenni + vídeos gratuitos) → 📘 explicação escrita com áudio → ✍️ exercícios escritos com correção → 🎮 prática estilo jogo → 🏮 cápsula cultural com atividade
- **Fundamentos para iniciantes**: como o japonês funciona (3 escritas, ordem da frase), sons e ritmo (mora, っ, ん, tom), estrutura da frase, partículas e níveis de polidez
- **7 trilhas misturadas na ordem certa**: gramática, **kanji** (360 kanji do N5 ao N3), **vocabulário temático**, **situações reais**, **histórias** graduadas, **cultura e sociedade** (18 aulas: história, religião, etiqueta, comida, festas, escola, trabalho, imigração no Brasil, sociedade atual, cultura pop, estética, desastres, artes e regiões) e **revisões gerais**
- Aba **Vídeos** com ~130 vídeos por tema (sons, kana, kanji, estrutura, história, costumes, sociedade, Japão e Brasil, artes, regiões, imersão), o canal gratuito da Jenni e links para cada módulo do curso *Jornada Japonês Express*
- Tela inicial com o professor dizendo onde você está e qual é o próximo passo, plano do dia e mapa do curso
- Exercícios: apresentação de palavras, múltipla escolha, escuta, pares, digitação (romaji → kana automático), montar frases, ditado, **fala com nota de pronúncia**, **escrita à mão** com guia e leitura com perguntas
- **Revisão espaçada (SRS)**: cada item volta pouco antes de você esquecer
- Aba **Kana** com tabelas completas, mnemônicos em português e treino de leitura/escrita
- Aba **Treinar**: shadowing, ditado, montar frases, escrita, **role-play de diálogos** e recursos gratuitos (Minato, Irodori, NHK Easy, Tae Kim…)
- XP, sequência de dias, meta diária, níveis, tema claro/escuro, backup/importação do progresso
- Áudio gerado pela voz japonesa do próprio aparelho (sem arquivos de áudio, funciona offline)

## Como usar

**Pela internet (recomendado):** abra o link do GitHub Pages no celular ou no computador. No celular, use "Adicionar à tela inicial" (ou o botão *Instalar app* no Perfil). Depois da primeira abertura, tudo funciona sem internet.

**No computador, sem internet:** clique com o botão direito em `iniciar-local.ps1` → *Executar com o PowerShell*. O app abre em `http://localhost:8787`.

### Voz japonesa
Se os áudios não tocarem em japonês, instale uma voz japonesa:
- **Windows**: Configurações → Hora e idioma → Fala → Adicionar vozes → Japonês
- **Android**: Configurações → Idioma → Saída de texto para fala → Google → instalar dados de voz em japonês
- **iPhone**: Ajustes → Acessibilidade → Conteúdo Falado → Vozes → Japonês

O reconhecimento de fala (nota de pronúncia) funciona no Chrome e no Edge com internet. Sem ele, o app grava sua voz para você comparar com o áudio original.

## Publicar no GitHub Pages

1. Crie um repositório (por exemplo `michi`) em github.com/new.
2. Em *Add file → Upload files*, arraste **todo o conteúdo desta pasta** (index.html, css/, js/, icons/, sw.js, manifest.webmanifest…) e faça o commit.
3. Em *Settings → Pages*, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)` e salve.
4. Em 1 a 2 minutos o app estará em `https://SEU-USUARIO.github.io/michi/`.

## Lançar uma atualização

1. Edite o conteúdo (as aulas ficam em `js/course-m0.js` … `js/course-m5.js`, os vídeos em `js/videos.js`).
2. Aumente a versão em `sw.js` (`VERSION = 'michi-v1.0.1'`) e em `js/app.js` (`APP_VERSION`).
3. Publique os arquivos. O app se atualiza sozinho em segundo plano na próxima vez que for aberto com internet (sem aviso e sem interromper uma prática), e o progresso é mantido.

## Estrutura das aulas

Formato de cada aula (`js/course-mX.js`):

```js
{
  id: 'm1l5', title: 'Comida e bebida', icon: '🍱',
  cando: ['Pedir comida e bebida'],
  vocab: [['肉','にく','carne','🥩']],            // escrita, leitura, significado, emoji
  kanji: [['肉','ニク','—','carne']],             // kanji, on'yomi, kun'yomi, significado
  grammar: [{ t: 'título', d: 'explicação', ex: [['日本語','português']] }],
  sentences: [['お水[みず] を ください。','Água, por favor.']],  // espaços = blocos; 漢字[かな] = furigana
  dialogue: [['A','japonês','português']],
  quiz: [['pergunta', ['opção 1','opção 2'], 0]],
  tip: 'técnica de estudo', mission: 'missão na vida real'
}
```

## Créditos

Trilha inspirada na progressão por *can-do* do Marugoto / JF Japanese e-Learning Minato e do Irodori (Fundação Japão), e no estudo por tipos de frase (substantiva, adjetiva e verbal). Os vídeos pertencem aos seus criadores e são apenas incorporados a partir do YouTube. O trecho de 『吾輩は猫である』 (Natsume Sōseki) está em domínio público.
