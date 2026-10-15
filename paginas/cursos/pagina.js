/*
  JavaScript da página Cursos
  Equipe: Cursos
  Somente a equipe Cursos edita este arquivo.

  Este arquivo faz duas coisas:
  1. transforma a lista de cursos em cards na tela;
  2. filtra esses cards pela modalidade escolhida no botão.
*/

/* ========== 1. LISTA DE CURSOS ========== */

// Os sete cursos que estão em funcionamento no colégio.
// Os dados (nome, duração, modalidade e período) vieram do site atual
// e são os mesmos usados pela equipe Início na página inicial.
// Campo "imagem": caminho da foto dentro de imagens/ (ex.: "imagens/curso-enfermagem.png").
// Enquanto estiver vazio (""), o card mostra o aviso de "Imagem em breve".
const cursos = [
  {
    nome: "Novo Ensino Médio",
    imagem: "",
    duracao: "03 anos",
    modalidade: "Normal",
    periodo: "Manhã e Noite"
  },
  {
    nome: "Técnico em Desenvolvimento de Sistemas",
    imagem: "",
    duracao: "03 anos",
    modalidade: "Integrado",
    periodo: "Manhã"
  },
  {
    nome: "Técnico em Formação de Docentes",
    imagem: "",
    duracao: "03 anos",
    modalidade: "Integrado",
    periodo: "Manhã e Tarde"
  },
  {
    nome: "Técnico em Estética",
    imagem: "",
    duracao: "03 anos",
    modalidade: "Integrado",
    periodo: "Manhã"
  },
  {
    nome: "Técnico em Enfermagem",
    imagem: "",
    duracao: "02 anos",
    modalidade: "Subsequente",
    periodo: "Tarde"
  },
  {
    nome: "Técnico em Administração",
    imagem: "",
    duracao: "01 ano",
    modalidade: "Subsequente",
    periodo: "Noite"
  },
  {
    nome: "Técnico em Segurança do Trabalho",
    imagem: "",
    duracao: "1,5 ano",
    modalidade: "Subsequente",
    periodo: "Noite"
  }
];

/* ========== 2. MONTAR OS CARDS ========== */

// Cria um item de dados do card (a linha "Duração: 03 anos")
function criarDadoDoCard(rotulo, valor) {
  const item = document.createElement("li");
  const rotuloElemento = document.createElement("strong");
  rotuloElemento.textContent = rotulo + ": ";
  item.appendChild(rotuloElemento);
  item.appendChild(document.createTextNode(valor));
  return item;
}

// Cria a imagem do curso; se ainda não houver arquivo, cria o aviso
function criarImagemDoCard(curso) {
  if (curso.imagem) {
    const imagem = document.createElement("img");
    imagem.src = curso.imagem;
    // alt vazio de propósito: o nome do curso já está no título do card,
    // então a imagem é só decorativa para quem usa leitor de tela
    imagem.alt = "";
    return imagem;
  }

  const aviso = document.createElement("span");
  aviso.className = "cursos-card-aviso";
  aviso.textContent = "Imagem em breve";
  return aviso;
}

// Monta o card (<li>) de um curso
function montarCardCurso(curso) {
  const item = document.createElement("li");
  // .card é a caixa pronta do main.css; a classe cursos- serve para o estilo da página
  item.className = "card cursos-card";
  // Guarda a modalidade no próprio card para o filtro saber o que mostrar
  item.dataset.modalidade = curso.modalidade;

  const areaImagem = document.createElement("div");
  areaImagem.className = "cursos-card-imagem";
  areaImagem.appendChild(criarImagemDoCard(curso));
  item.appendChild(areaImagem);

  const nome = document.createElement("h3");
  nome.className = "cursos-card-nome";
  nome.textContent = curso.nome;
  item.appendChild(nome);

  // Duração, modalidade e período: os quatro dados pedidos na missão da página
  const dados = document.createElement("ul");
  dados.className = "cursos-card-dados";
  dados.appendChild(criarDadoDoCard("Duração", curso.duracao));
  dados.appendChild(criarDadoDoCard("Modalidade", curso.modalidade));
  dados.appendChild(criarDadoDoCard("Período", curso.periodo));
  item.appendChild(dados);

  // Vagas por turma: ainda não informado pelo colégio
  const vagas = document.createElement("p");
  vagas.className = "cursos-card-vagas";
  vagas.textContent = "Vagas por turma: [CONFIRMAR]";
  item.appendChild(vagas);

  return item;
}

// Percorre a lista de cursos e coloca os cards na página
function montarCatalogoCursos() {
  const lugar = document.getElementById("lista-cursos");
  if (!lugar) return; // a lista não existe nesta página

  for (let i = 0; i < cursos.length; i++) {
    lugar.appendChild(montarCardCurso(cursos[i]));
  }
}

/* ========== 3. FILTRAR POR MODALIDADE ========== */

// Mostra os cards da modalidade escolhida e esconde os outros.
// "Todas" mostra tudo.
function filtrarCursos(modalidade) {
  const cards = document.querySelectorAll(".cursos-card");
  let quantidadeVisivel = 0;

  for (let i = 0; i < cards.length; i++) {
    const combina = modalidade === "Todas" || cards[i].dataset.modalidade === modalidade;
    // A propriedade hidden esconde o card sem precisar tirar ele da tela com CSS
    cards[i].hidden = !combina;
    if (combina) {
      quantidadeVisivel++;
    }
  }

  atualizarContagem(quantidadeVisivel, cards.length);
  atualizarAvisoVazio(quantidadeVisivel);
}

// Escreve "Mostrando X de 7 cursos" embaixo dos botões
function atualizarContagem(quantidadeVisivel, total) {
  const contagem = document.getElementById("cursos-contagem");
  if (!contagem) return;

  contagem.textContent =
    "Mostrando " + quantidadeVisivel + " de " + total + " cursos.";
}

// Mostra o aviso de lista vazia só quando nenhum curso sobrou
function atualizarAvisoVazio(quantidadeVisivel) {
  const aviso = document.getElementById("cursos-vazio");
  if (!aviso) return;

  aviso.hidden = quantidadeVisivel > 0;
}

// Marca o botão escolhido e tira a marca dos outros
function atualizarBotoesFiltro(modalidadeEscolhida) {
  const botoes = document.querySelectorAll(".cursos-filtro");

  for (let i = 0; i < botoes.length; i++) {
    const escolhido = botoes[i].dataset.modalidade === modalidadeEscolhida;
    botoes[i].classList.toggle("ativo", escolhido);
    botoes[i].setAttribute("aria-pressed", String(escolhido));
  }
}

// Liga o clique de cada botão ao filtro correspondente
function registrarFiltros() {
  const botoes = document.querySelectorAll(".cursos-filtro");

  for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
      const modalidade = this.dataset.modalidade;
      atualizarBotoesFiltro(modalidade);
      filtrarCursos(modalidade);
    });
  }
}

/* ========== 4. EXECUÇÃO ========== */

// Os scripts são carregados no fim do <body>, então o HTML já existe
montarCatalogoCursos();
registrarFiltros();

// Começa mostrando todos os cursos e escrevendo a contagem
atualizarBotoesFiltro("Todas");
filtrarCursos("Todas");