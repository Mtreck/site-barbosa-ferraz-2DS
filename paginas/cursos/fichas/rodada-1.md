# Ficha da rodada — Equipe Cursos

**Rodada:** 1 (estrutura) + 2 (estilo) + 3 (conteúdo do catálogo)
**Branch:** `equipe-cursos-rodada-1`
**Arquivos alterados:** `paginas/cursos/index.html`, `paginas/cursos/pagina.css`, `paginas/cursos/pagina.js`, `paginas/cursos/fichas/rodada-1.md`

## O que foi feito

- Página `index.html` com HTML semântico: um `<h1>` (Cursos), três `<h2>`
  (Catálogo de cursos, Quais são as modalidades, Como se inscrever) e `<h3>`
  dentro de cada seção, na ordem certa.
- Catálogo dos 7 cursos gerado por JavaScript a partir de um `array` de objetos,
  com um `for` que monta um `<li>` por curso (nome, duração, modalidade, período).
- Filtro por modalidade (Todas / Normal / Integrado / Subsequente) usando o
  atributo `hidden` do navegador.
- `pagina.css` usando apenas as variáveis de `main.css`, sem cor em hexadecimal,
  sem `!important` e sem estilo inline no HTML.
- Reaproveitamento das classes prontas do `main.css`: `.container`, `.card`,
  `.grade` e `.botao`.

## Por que o JavaScript foi usado aqui

O `pagina.js` faz duas coisas com função real:

1. **Evitar repetição:** os 7 cards são praticamente iguais. Escrever 7 blocos de
   HTML à mão seria copiar e colar; com o `array`, quem corrige um dado corrige
   uma linha só.
2. **Filtro por modalidade:** sem JavaScript, clicar no botão não esconderia nada.

## Pendências — precisa da secretaria

Nada foi inventado. Tudo que não está confirmado está marcado com `[CONFIRMAR]`
no código e listado aqui:

- [ ] Período de matrículas e canal oficial de inscrição.
- [ ] Lista de documentos exigidos para a matrícula.
- [ ] Local e prazo de inscrição.
- [ ] Data e forma de divulgação da lista de aprovados.
- [ ] Número de vagas por turma, para cada um dos 7 cursos.
- [ ] Confirmar a modalidade do curso "Novo Ensino Médio" (no site atual ela
      aparece como "Normal"). Os dados desta página foram copiados de
      `paginas/inicio/pagina.js` para as duas páginas não se contradizerem.
- [ ] Texto de apresentação de cada curso (o que se aprende, para onde serve a
      profissão). Hoje o card mostra só os quatro dados do catálogo.

## Pendências técnicas

- [ ] Faltam as imagens dos 7 cursos em `imagens/`. Enquanto não existirem, o
      card mostra o aviso "Imagem em breve". Se forem usadas, guardar em
      `jpg`, `png`, `webp` ou `svg`, até 300 KB cada, com `alt` descritivo.
- [ ] Testar em 360px e 768px (Rodada 4) e colocar o print nesta ficha.

## Checagem das regras

- [x] Só HTML, CSS e JavaScript puros; nenhuma biblioteca, nenhum CDN.
- [x] Nenhum arquivo fora de `paginas/cursos/`.
- [x] Esqueleto da página intacto: `head`, `div#menu`, `div#rodape`,
      `data-pagina="cursos"` e a ordem dos scripts.
- [x] Um único `<h1>` na página.
- [x] Classes desta página começam com `cursos-`.
- [x] Nenhum `style="..."`, `!important` ou `onclick="..."`.
- [x] Nenhuma cor em hexadecimal no `pagina.css`.
- [x] Sem erro no console (verificado abrindo a página com duplo clique).