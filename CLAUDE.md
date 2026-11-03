# Olix Studio — site vitrine v2 « Votre site en 30 secondes »

Responda sempre em português. Os textos do site são em francês (idioma principal) com versão em inglês.

## A regra número 1

O design está **aprovado e fechado**. A referência é `referencia/prototipo.html`: abra no navegador e reproduza **exatamente** o que está lá, com as mesmas cores, fontes, animações, textos, espaçamentos e comportamento.

- Não redesenhe nada, não "melhore" o visual e não troque fontes ou cores.
- Se achar que algo deveria mudar, pergunte antes.
- O protótipo é um arquivo único. O trabalho aqui é transformá-lo num projeto de verdade (organizado, rápido, bilíngue e com formulário funcionando), sem mudar o que se vê.

## A marca

- **Nome:** Olix Studio, estúdio web baseado em Genebra (atende comércios de qualquer lugar)
- **Dupla:** Gabriel (código) e a sócia dele (atendimento e vendas)
- **Domínio:** olixstudio.ch
- **E-mail:** contact@olixstudio.ch
- **WhatsApp:** +41 79 512 15 70
- **Instagram:** @olixstudio.ch
- **Logo:** `../olix-studio/public/brand/logo olix studio.jpeg`. É um anel de luz em degradê (azul → violeta → âmbar) com "OLIX STUDIO" no meio. O anel em degradê do cabeçalho do protótipo vem desse logo e fica como está. Use o logo para o favicon e a imagem de compartilhamento (Open Graph).

## O conceito

O visitante (dono de comércio, quase sempre no celular) monta um **aperçu animado do próprio site**:

1. Escolhe a atividade: Barbier, Café, Restaurant ou Autre.
2. Digita o nome do comércio. O nome aparece gigante, letra por letra, e se ajusta para caber. O domínio aparece ao vivo (ex.: lepetitcomptoir.ch).
3. Escolhe o ambiente: Élégant, Chaleureux ou Moderne.

A **cena** fica fixa no topo da tela (sticky) enquanto as opções passam por baixo. Ela ocupa a largura toda, de ponta a ponta, sem moldura de celular nem de navegador. Cada atividade tem sua animação de fundo:

- Barbier: listras correndo
- Café: vapor subindo
- Restaurant: anéis girando
- Autre: luz passeando numa grade de pontos

Na troca de atividade ou ambiente, uma cortina de cor passa pela cena com o ícone do negócio. Embaixo, a faixa de preços desfila sem parar.

Depois vem a **formule conseillée** (Restaurant leva para Premium, Autre para Essentiel e as outras atividades para Pro). O botão « J'en veux un comme ça » leva ao formulário de contato já preenchido.

## Seções (na ordem do protótipo)

1. Topo: « Votre commerce mérite un site qui *vend.* »
2. Configurador « Votre site en 30 secondes »
3. Projets conceptuels (ver "Projetos conceituais" abaixo)
4. Formules (tarif de lancement, 5 premiers clients):
   - Essentiel: dès CHF 500 (CHF 900 riscado)
   - Pro: dès CHF 850 (CHF 1'200 riscado), marcado como recomendado
   - Premium: dès CHF 1'700 (CHF 2'000 riscado)
   - Maintenance: à partir de CHF 50/mois
5. Contact: formulário, WhatsApp e e-mail
6. Rodapé, com link para a página de privacidade

## Projetos conceituais: fácil de adicionar mais

Os projetos **não ficam escritos direto no HTML**. Ficam numa lista de dados, `src/data/projets.js`, e o site monta os cartões a partir dela:

```js
export const projets = [
  {
    nom: "Fade District",
    type: { fr: "Barbier · réservation en ligne", en: "Barber · online booking" },
    url: "https://fadedistrict1.netlify.app/",
    accent: "#c9a45c",
    fond: "#5a4826",
    icone: "barbier",
    image: null
  },
  {
    nom: "Maison du Café",
    type: { fr: "Café · carte et horaires", en: "Café · menu and hours" },
    url: "https://maison-du-cafe.netlify.app/",
    accent: "#e0a06a",
    fond: "#6b3f1f",
    icone: "cafe",
    image: null
  },
  {
    nom: "Maison Épuré",
    type: { fr: "Restaurant · menu du jour", en: "Restaurant · daily menu" },
    url: "https://maison-epure.netlify.app/",
    accent: "#e07a62",
    fond: "#6e2c1f",
    icone: "restaurant",
    image: null
  }
];
```

- Para adicionar um projeto, basta acrescentar um item na lista. Nenhum outro arquivo muda.
- `image` é opcional: se tiver uma captura em `public/projets/`, o cartão mostra a imagem; se for `null`, mostra o ícone com o degradê, como no protótipo.
- Todo cartão leva a etiqueta « Projet conceptuel » (EN: « Concept project »). Nunca apresente um projeto como cliente real.
- Layout com qualquer quantidade de projetos:
  - No celular, carrossel horizontal com snap, como no protótipo.
  - No computador, grade de 3 colunas que cresce para novas linhas (4, 5, 6… projetos).
- Os ícones ficam em `src/data/icones.js`. Se um projeto novo for de outro ramo (ex.: salão de beleza), crie um ícone no mesmo estilo de traço fino dos existentes.

## Bilíngue (FR + EN)

- Francês em `/`, inglês em `/en/`.
- O « FR · EN » do topo vira um seletor de idioma que funciona.
- Todos os textos (inclusive os da cena, a faixa de preços e as mensagens do formulário) ficam em `src/i18n/fr.js` e `src/i18n/en.js`.
- Preços e nomes de comércio não se traduzem.

## Formulário

- Use Netlify Forms (`data-netlify="true"`, campo honeypot contra spam e o `form-name` escondido).
- Mantenha a validação e a mensagem de confirmação do protótipo, mas trocando o texto "prototype" por uma confirmação de verdade.
- O botão « J'en veux un comme ça » e os botões « Choisir » continuam preenchendo o formulário como no protótipo.

## Stack e requisitos

- Vite + JavaScript puro e CSS (sem framework), na mesma base do projeto Fade District.
- **Perfeito no iPhone, que é a prioridade número 1.** Teste em 375 px, 390 px e 320 px de largura, e também com a tela baixa (iPhone SE).
  - Sem rolagem lateral.
  - A cena sticky não pode cobrir os controles.
  - Os campos precisam ter 16 px para o iPhone não dar zoom.
  - Use as safe areas (`env(safe-area-inset-*)`).
- Fontes: Bricolage Grotesque, Figtree e Instrument Serif, hospedadas no próprio site (woff2 em `public/fonts/`, com `font-display: swap`) em vez do link do Google Fonts.
- `prefers-reduced-motion`: as animações param, mas tudo continua funcionando (é o comportamento do protótipo).
- Acessibilidade: foco visível, `aria-pressed` nos botões de escolha, contraste suficiente.
- Página de privacidade: copie `../olix-studio/public/confidentialite.html` e adapte ao novo visual.
- Hospedagem: Netlify, com o domínio olixstudio.ch.

## Estrutura sugerida

```
index.html
en/index.html
public/fonts/  public/projets/  public/brand/
src/styles/tokens.css  base.css  scene.css  sections.css
src/js/configurateur.js  projets.js  formulaire.js  i18n.js
src/data/projets.js  icones.js  activites.js
src/i18n/fr.js  en.js
```

`src/data/activites.js` guarda os dados de cada atividade (cores, fonte, textos, preços de exemplo, formule conseillée), copiados do objeto `TYPES` do protótipo.

## Skills

- **frontend-design** e **ui-ux-pro-max:** só para conferir a fidelidade ao protótipo, não para redesenhar
- **senior-frontend:** estrutura do código
- **code-reviewer:** revisão antes de cada publicação
- **webapp-testing** (se instalada): capturas de tela no celular e no computador, comparando com o protótipo

## Como trabalhar

- Antes de cada fase, apresente o plano e espere aprovação.
- Construa uma seção por vez e compare com `referencia/prototipo.html` lado a lado, no celular e no computador.
- Não invente números, depoimentos ou clientes.
