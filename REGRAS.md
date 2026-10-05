# REGRAS DO PROJETO: Novo site do Colégio Estadual Barbosa Ferraz

## Como usar este arquivo

Cole este arquivo inteiro no início de CADA conversa com a IA, junto do PROMPT-INICIAL.md preenchido. Se a IA desobedecer, o Revisor da equipe corrige.

## 1. Tecnologia permitida

- Somente HTML, CSS e JavaScript puros.
- Proibido: frameworks (React, Vue, Bootstrap, Tailwind), npm, jQuery, bibliotecas via CDN, bibliotecas de ícones.
- Proibido: estilo inline (style="..."), !important, JavaScript dentro do HTML (onclick="...").
- Fontes do Google Fonts só podem ser adicionadas pela equipe Identidade visual, em compartilhado/.

## 2. De quem é cada pasta

| Pasta | Quem altera |
| --- | --- |
| paginas/inicio | Equipe Início |
| paginas/colegio | Equipe Colégio |
| paginas/cursos | Equipe Cursos |
| paginas/eventos | Equipe Eventos |
| paginas/downloads | Equipe Downloads |
| paginas/contato | Equipe Contato |
| paginas/identidade e compartilhado | Equipe Identidade visual |
| raiz, modelos, .github | Somente o professor |

Regra de ouro: cada equipe altera APENAS arquivos da sua pasta. PR que mexer na pasta de outra equipe é recusado.

Precisa de uma mudança em compartilhado/ (uma cor, uma classe, o menu)? Abra uma Issue com o título "[Equipe] Pedido: ..." para a equipe Identidade visual.

## 3. Estrutura de cada página

- Cada página tem index.html, pagina.css e pagina.js. Pode criar HTMLs extras dentro da própria pasta.
- Não altere o esqueleto: head, div#menu, div#rodape, atributo data-pagina e ordem dos scripts.
- O conteúdo da página fica dentro de `<main>`.
- Use HTML semântico (header, nav, main, section, article, footer). Apenas um `<h1>` por página, e h2/h3 em ordem.

## 4. Nomes

- Arquivos e pastas: minúsculas, sem acento, sem espaço, com hífen.
- Classes CSS começam com o nome da equipe: .cursos-card, .eventos-lista.
- Funções e variáveis JS em camelCase, em português claro: listarCursos, montarCard.
- IDs únicos na página.

## 5. Cores, fontes e espaçamento

- Use somente as variáveis de compartilhado/estilo.css (var(--cor-primaria), var(--espaco-md) etc.).
- Proibido escrever cor em hexadecimal no pagina.css.
- Reaproveite as classes prontas (.container, .botao, .card, .grade) antes de criar novas.
- Faltou uma variável ou classe? Peça por Issue. Não invente.

## 6. Conteúdo

- Somente informação real do colégio (site atual: https://www.colegiobarbosa.com.br/ ou o que o professor/secretaria fornecer).
- Proibido inventar telefone, endereço, datas, nomes ou números. Se faltar, escreva [CONFIRMAR] e anote na ficha.
- Proibido Lorem ipsum a partir da Rodada 3.
- Imagens: do acervo do colégio ou criadas por IA. Proibido foto identificável de aluno menor de idade ou de professor sem autorização por escrito.
- Imagens na pasta imagens/ da equipe, até 300 KB cada, formatos jpg, png, webp ou svg, sempre com alt descritivo.
- Nunca coloque chaves de API, senhas ou dados pessoais no código.

## 7. Qualidade

- Comentários curtos em português explicando cada bloco de HTML, CSS e JS.
- Funciona no celular (360px sem rolagem horizontal) e no computador.
- Texto com bom contraste. Links com texto claro (nada de "clique aqui").
- Sem erros no console do navegador.
- Use JavaScript só onde ele tem função real. Não entregue código que ninguém da equipe consegue explicar.

## 8. Regras para a IA

A IA deve:

1. Perguntar a equipe e a rodada antes de escrever qualquer código.
2. Escrever somente arquivos da pasta da equipe, informando o caminho de cada arquivo.
3. Seguir estas regras. Se o pedido violar alguma, recusar e dizer qual.
4. Responder em português do Brasil e comentar o código em português.
5. Entregar o arquivo completo (não trechos soltos), dizendo se é para substituir o arquivo inteiro.
6. Nunca inventar informação do colégio. Usar [CONFIRMAR].
7. Terminar cada resposta com "O que cada parte faz", em até 5 linhas simples, para o Revisor.

## 9. Git e Pull Request

- Nunca trabalhe na main. Branch: equipe-<nome>-rodada-<numero> (ex.: equipe-cursos-rodada-1).
- Commit em português: "<equipe>: o que mudou" (ex.: "cursos: adiciona estrutura da página").
- Um PR por rodada, com título "[Cursos] Rodada 1: estrutura". Preencha o modelo de PR inteiro.
- Ninguém faz merge do próprio PR. O merge é do professor.
- Antes do PR, rode git status e confira que só mexeu na sua pasta.
- No início de cada rodada, sincronize o fork (Sync fork no GitHub e git pull).

## 10. Papéis e ficha

- Quatro papéis por equipe: Diretor de prompt, Revisor, Testador e Conteúdo. Eles giram a cada rodada. Equipes de 3 pessoas: o Testador também faz o Conteúdo.
- A ficha da rodada (modelo em modelos/ficha-da-rodada.md) vai em paginas/<equipe>/fichas/rodada-N.md. Sem ficha, a rodada não conta.
- O Revisor precisa conseguir explicar qualquer linha do código entregue.

## 11. Rodadas e o que é "pronto"

- Rodada 1, Estrutura: index.html completo em HTML semântico, com todos os blocos da página (placeholders permitidos), sem estilo próprio. Ficha entregue.
- Rodada 2, Estilo: pagina.css usando somente variáveis, seguindo o guia da equipe Identidade.
- Rodada 3, Conteúdo: textos e dados reais, sem Lorem ipsum, pendências [CONFIRMAR] listadas na ficha.
- Rodada 4, Celular: testado em 360px e 768px, com print na ficha.
- Rodada 5, Apresentação: PR final, ficha completa e apresentação de 3 minutos com todos falando.
- Identidade visual: R1 guia-de-estilo.md + estilo.css + menu e rodapé estilizados; R2 atende os pedidos (Issues) das outras equipes; R3 revisão de contraste e acessibilidade; R4 menu no celular; R5 apresentação.

## 12. Missão de cada equipe

- Identidade visual: guia de estilo, estilo.css, menu e rodapé em componentes.js. Entrega primeiro.
- Início: boas-vindas, destaques e recados. Sugestão de JS: lista de recados gerada com array e for.
- Colégio: história, estrutura e missão. Sugestão de JS: seções que abrem e fecham.
- Cursos: catálogo dos 7 cursos (nome, duração, modalidade, período). Sugestão de JS: array de objetos que gera os cards.
- Eventos: lista de eventos e recados. Sugestão de JS: filtro simples.
- Downloads: lista de documentos com link (arquivos hospedados fora do repositório, como links do Drive). Sugestão de JS: array que gera a lista.
- Contato: formulário com validação, endereço, WhatsApp e redes sociais oficiais. Sugestão de JS: função de validação.
