# Ficha da rodada

**Equipe:** Colégio

**Rodada:** 1 — Estrutura

**Data:** [CONFIRMAR] data da entrega

## Quem foi cada papel

- Diretor de prompt: [CONFIRMAR] nome
- Revisor: [CONFIRMAR] nome
- Testador: [CONFIRMAR] nome
- Conteúdo: [CONFIRMAR] nome

## Prompt usado (colar)

```text
Você vai me ajudar a construir uma página do site do Colégio Estadual Barbosa Ferraz.

Equipe: Colégio
Rodada: 1 — Estrutura
Meu papel agora: Diretor de prompt

Siga as regras abaixo à risca. Antes de escrever qualquer código, confirme em uma frase a equipe, a rodada e a pasta onde você vai escrever.

[COLE AQUI O CONTEÚDO DO REGRAS.md]

O que eu quero agora:

Monte a ESTRUTURA da página da equipe Colégio, em paginas/colegio/index.html.
É a página do site's missão é história, estrutura e missão da escola. Nada de estilo
próprio ainda (isso é a Rodada 2) e nada de JavaScript ainda: entregue só o HTML
semântico, com placeholders permitidos e os textos reais que eu vou colar.

Blocos que a página precisa ter, nesta ordem dentro do <main>:
1. h1 "Colégio Estadual Barbosa Ferraz" e um texto de abertura curto
2. h2 "Quem foi Barbosa Ferraz" — a homenagem a Leovegildo Barbosa Ferraz e à
   Companhia Territorial Sul Brasil (antiga Companhia Ubá), que comprou as
   glebas de terra que hoje formam Ivaiporã na década de 1940
3. h2 "História" — com h3 para cada fase: o Grupo Escolar Barbosa Ferraz no início
   dos anos 60; a Lei nº 2.017 de 15/09/1960 e a estadualização do Instituto
   Ginasial e Comercial Interventor Manoel Ribas; o Decreto nº 4.088 de 15/02/1967
   que autorizou o Técnico em Contabilidade noturno no Colégio Comercial Estadual
   Barão de Mauá; a primeira turma de Contabilidade de 1970; os primeiros
   professores, a primeira secretária e os alunos que vinham de toda a região;
   as direções e as mudanças de nome (1978, 1981, 1996, 2002, 2005); e os cursos
   profissionalizantes de 2005 e 2006
4. h2 "Linha do tempo" — uma <ol> com os anos e datas mais importantes, cada item
   com h3 e um parágrafo curto
5. h2 "Estrutura" — o prédio sede em alvenaria no centro da cidade e cards com os
   ensinos oferecidos, os espaços e o público atendido
6. h2 "Missão" — o resumo da missão da escola e uma lista com três pontos

Regras específicas desta entrega:
- Um h1 só. h2 e h3 sempre em ordem, sem pular nível.
- Esqueleto da página intacto: nada de mexer no <head>, no div#menu, no div#rodape,
  no data-pagina nem na ordem dos scripts.
- Reaproveite as classes prontas do site: .container, .card, .grade. Para criar
  classes novas use o prefixo .colegio- (ex.: .colegio-secao, .colegio-tempo-item).
- Nenhuma cor em hexadecimal e nenhuma tag <style> nesta rodada: a cor vem das
  variáveis de compartilhado/estilo.css (--cor-primaria é o azul do site).
- Comentário curto em português em cima de cada bloco do HTML.
- Se faltar um dado (endereço, número de alunos, data), escreva [CONFIRMAR] no lugar
  e liste na ficha. Nunca invente.
- Entregue o arquivo inteiro, não trechos soltos, e diga que é para substituir o
  arquivo.
- Termine a resposta com "O que cada parte faz", em até 5 linhas simples, para o
  Revisor.
```

## O que a IA devolveu (trecho principal)

```text
Confirmação: equipe Colégio, Rodada 1 — Estrutura, escrevendo somente em
paginas/colegio/index.html.

Arquivo entregue: paginas/colegio/index.html (substitui o arquivo inteiro).
Nada foi escrito em pagina.css, pagina.js nem em compartilhado/.

Blocos criados dentro do <main>:
1. h1 "Colégio Estadual Barbosa Ferraz" + parágrafo .colegio-lead de abertura
2. section#homenagem — h2 "Quem foi Barbosa Ferraz" (a Companhia Territorial
   Sul Brasil e a homage a Leovegildo Barbosa Ferraz)
3. section#historia — h2 "História" com cinco h3: Grupo Escolar; Contabilidade;
   professores e estudantes; direções e mudanças de nome; LDB 9.294/96 e os
   cursos profissionalizantes
4. section#linha-do-tempo — h2 e uma <ol class="colegio-tempo"> com 13 itens,
   cada um com h3 de data e parágrafo curto
5. section#estrutura — h2 e uma .grade com quatro .card: prédio sede, ensinos
   oferecidos, espaços e público atendido
6. section#missao — h2, parágrafo de resumo e uma ul.colegio-missao-lista com
   três pontos

O que cada parte faz
- A section#homenagem explica a origem do nome do colégio.
- A section#historia conta a escola em ordem cronológica, com h3 por fase.
- A ol da linha do tempo repete as datas em formato de lista para bater o olho.
- A grade da estrutura mostra os cards reaproveitando .card e .grade do site.
- A seção da missão resume a missão e pede o texto oficial com [CONFIRMAR].
```

## O que o Revisor explicou sobre o código (3 linhas)

1. O `<h1>` é o único da página e cada bloco começa com um `<h2>`; os `<h3>`
   (fases, datas e cards) ficam dentro desses `<h2>`, então a hierarquia de
   títulos não pula nível.
2. As classes `.container`, `.card` e `.grade` já existem em
   `compartilhado/estilo.css` e dão a cor azul do site sem escrever nenhum
   hexadecimal no `pagina.css`; as classes novas só começam com `.colegio-` e
   estão esperando o estilo da Rodada 2.
3. Todo dado que não estava confirmado no texto da pesquisa ficou escrito como
   `[CONFIRMAR]` dentro do texto, e não escondido num comentário, para ninguém
   publicar um dado errado.

## O que o Testador viu quebrar

- [CONFIRMAR] abrir `paginas/colegio/index.html` com duplo clique, conferir se o
  menu e o rodapé aparecem (montados por `compartilhado/componentes.js`).
- [CONFIRMAR] conferir se o link "Cursos" no card de Estrutura abre
  `paginas/cursos/index.html`.
- [CONFIRMAR] abrir o console do navegador (F12) e confirmar que não aparece
  nenhum erro.
- [CONFIRMAR] rolar a página até o fim para conferir que o rodapé não some.

## Itens [CONFIRMAR] pendentes

- Endereço completo do prédio sede. A pesquisa cita a Avenida Brasil, mas o site
  atual só mostra um mapa; perguntar à secretaria antes de publicar.
- Ano da emancipação política de Ivaiporã. O texto mais antigo só diz "desde sua
  emancipação política", sem o ano.
- Ano exato da implantação do Curso Normal (Habilitação ao Magistério).
- Como eram as primeiras salas de madeira na década de 1950.
- Salas, biblioteca, laboratórios, quadra, cantina e se o prédio tem
  acessibilidade para pessoas com deficiência.
- Número de alunos por turno.
- Texto oficial da missão institucional (site da Secretaria de Estado da Educação).
- Grafia do sobrenome do professor Rubens Noicki / Novicki: o site antigo usa as
  duas formas. Na página ficou "Novicki", que é a grafia repetida no texto.
- Nome da ex-diretora "Dione Beatriz de Mello Cardos": mantido exatamente como
  está no site antigo. Conferir se o sobrenome é "Cardoso".
- Números de lei: escrevi 2.017, 4.088, 1.663, 2.886, 2.887 e 1.621 com ponto de
  milhar. O site antigo escreve sem ponto (2017, 4088...). Padronizar com o
  padrão oficial do DOE.

## Pedido para a equipe Identidade visual (abrir Issue)

A equipe pediu "azul royal / azul Senac". Como a regra 5 proíbe escrever cor em
hexadecimal no `pagina.css` e só a equipe Identidade visual altera
`compartilhado/estilo.css`, a página usa hoje `var(--cor-primaria)`
(#1f4e79, um azul escuro), que já é o azul do menu e dos títulos do site.

Título sugerido: `[Colégio] Pedido: avaliar cor primária azul royal`

Se a cor mudar, todas as páginas mudam juntas e a equipe Colégio não precisa
tocar em nada.

## Print da página no celular

Print é obrigatório na Rodada 4 (celular em 360px e 768px). Quando tiver, salve
na pasta `imagens/` da equipe e troque N pelo número da rodada:

`![Print da página no celular](../imagens/print-rodada-1.png)`