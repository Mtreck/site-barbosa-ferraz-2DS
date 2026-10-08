# Novo site do Colégio Estadual Barbosa Ferraz

Projeto da turma do 2º ano do Técnico em Desenvolvimento de Sistemas.
Vamos refazer o site do colégio (referência: https://www.colegiobarbosa.com.br/) usando somente HTML, CSS e JavaScript puros.

Cada equipe cuida de uma página e trabalha SOMENTE na sua pasta. Assim ninguém mexe no arquivo do outro e os Pull Requests não dão conflito.

Antes de tudo, leia o [REGRAS.md](REGRAS.md). Para conversar com a IA, use o [PROMPT-INICIAL.md](PROMPT-INICIAL.md).

## Como abrir o site

Dê dois cliques no arquivo `index.html` da raiz. Ele leva para a página Início. Não precisa de servidor nem de instalar nada.

## Estrutura de pastas

```text
site-barbosa-ferraz/
  README.md               este arquivo
  REGRAS.md               regras do projeto (cole na IA)
  PROMPT-INICIAL.md       modelo de prompt para a IA
  index.html              redireciona para a página Início
  .github/                modelo de Pull Request (professor)
  compartilhado/          equipe Identidade visual
    estilo.css            cores, fontes e classes de todo o site
    componentes.js        monta o menu e o rodapé
    imagens/
  paginas/
    identidade/           equipe Identidade visual (guia de estilo)
    inicio/               equipe Início
    colegio/              equipe Colégio
    cursos/               equipe Cursos
    eventos/              equipe Eventos
    downloads/            equipe Downloads
    contato/              equipe Contato
```

Dentro de cada pasta de página:

```text
index.html    conteúdo da página (dentro do <main>)
pagina.css    estilo só desta página
pagina.js     JavaScript só desta página
imagens/      imagens da equipe
```

## Passo a passo no Linux

### 1. Primeira vez: faça o fork e baixe

No GitHub, clique em **Fork** no repositório do professor. Depois, no terminal:

```bash
git clone <link do SEU fork>
cd site-barbosa-ferraz
```

### 2. Antes de cada entrega: sincronize o seu fork

No GitHub, abra o SEU fork e clique em **Sync fork** e depois em **Update branch**.
Depois, no terminal, dentro da pasta do projeto:

```bash
git checkout main
git pull
```

### 3. Crie a branch da equipe

```bash
git checkout -b equipe-<nome>
```

Exemplo: `git checkout -b equipe-cursos`

### 4. Edite os arquivos

Somente dentro da pasta da sua equipe.

### 5. Confira e envie

```bash
git status
git add .
git commit -m "<equipe>: o que mudou"
git push origin equipe-<nome>
```

No `git status`, confira que só aparecem arquivos da sua pasta. Se aparecer arquivo de outra pasta, chame o professor antes do `git add`.

### 6. Abra o Pull Request

No GitHub, clique em **Compare & pull request**, use o título `[Equipe] nome da entrega` e preencha o modelo inteiro.

### Aviso sobre o login

No `git push`, o terminal pode pedir login. O GitHub não aceita a senha normal da conta:
pode abrir o navegador para você autorizar, ou pedir um **token** (Personal Access Token), que você cola no lugar da senha.
