/*

  Este arquivo monta o menu e o rodapé compartilhados por todas as páginas.
*/

/* ========== 1. DADOS ========== */

// Nome do colégio, usado no menu e no rodapé
const nomeColegio = "Colégio Estadual Barbosa Ferraz";

// Lista de páginas do site: texto que aparece no menu e nome da pasta
const paginas = [
  { nome: "Início", pasta: "inicio" },
  { nome: "Colégio", pasta: "colegio" },
  { nome: "Cursos", pasta: "cursos" },
  { nome: "Eventos", pasta: "eventos" },
  { nome: "Downloads", pasta: "downloads" },
  { nome: "Contato", pasta: "contato" }
];

/* ========== 2. MENU ========== */

// Cria um item da lista (<li>) com o link para uma página
function criarItemDoMenu(pagina, paginaAtual) {
  const item = document.createElement("li");
  const link = document.createElement("a");

  // Todas as páginas ficam em paginas/<pasta>/, então "../" volta uma pasta
  link.href = "../" + pagina.pasta + "/index.html";
  link.textContent = pagina.nome;

  // Se for a página que está aberta, marca o link como ativo
  if (pagina.pasta === paginaAtual) {
    link.classList.add("ativo");
    link.setAttribute("aria-current", "page");
  }

  item.appendChild(link);
  return item;
}

// Cria o botão "Menu", que abre e fecha a lista no celular
function criarBotaoDoMenu(lista) {
  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "menu-botao";
  botao.textContent = "Menu";
  botao.setAttribute("aria-controls", "menu-lista");
  botao.setAttribute("aria-expanded", "false");

  // A cada clique, coloca ou tira a classe .aberto da lista
  botao.addEventListener("click", function () {
    const estaAberto = lista.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", String(estaAberto));
  });

  return botao;
}

// Monta o cabeçalho completo dentro da <div id="menu">
function montarMenu() {
  const lugar = document.getElementById("menu");
  if (!lugar) {
    return; // a página não tem div#menu, então não faz nada
  }

  // Descobre qual página está aberta pelo atributo data-pagina do <body>
  const paginaAtual = document.body.dataset.pagina;

  // Lista de links
  const lista = document.createElement("ul");
  lista.className = "menu-lista";
  lista.id = "menu-lista";
  for (let i = 0; i < paginas.length; i++) {
    lista.appendChild(criarItemDoMenu(paginas[i], paginaAtual));
  }

  // Navegação que guarda a lista
  const nav = document.createElement("nav");
  nav.className = "menu-nav";
  nav.setAttribute("aria-label", "Menu principal");
  nav.appendChild(lista);

  // Nome do colégio, que também leva para o Início
  // O ícone é uma araucária (pinheiro-do-paraná) simplificada, símbolo do estado
  const logo = document.createElement("a");
  logo.className = "cabecalho-logo";
  logo.href = "../inicio/index.html";
  const logo = document.createElement("a");
  logo.className = "cabecalho-logo";
  logo.href = "../inicio/index.html";
  logo.innerHTML =
    '<svg class="cabecalho-marca" viewBox="0 0 32 32" aria-hidden="true" focusable="false">' +
    '<rect x="14" y="23" width="4" height="7" fill="currentColor"/>' +
    '<polygon points="4,23 28,23 22,16 10,16" fill="currentColor"/>' +
    '<polygon points="8,17 24,17 19,11 13,11" fill="currentColor"/>' +
    '<polygon points="12,12 20,12 17,6 15,6" fill="currentColor"/>' +
    "</svg>" +
    "<span>" + NOME_COLEGIO + "</span>";

  // Junta tudo dentro do <header>
  const conteudo = document.createElement("div");
  conteudo.className = "container cabecalho-conteudo";
  conteudo.appendChild(logo);
  conteudo.appendChild(criarBotaoDoMenu(lista));
  conteudo.appendChild(nav);

  const cabecalho = document.createElement("header");
  cabecalho.className = "cabecalho";
  cabecalho.appendChild(conteudo);

  lugar.appendChild(cabecalho);
}

/* ========== 3. RODAPÉ ========== */

// Cria um parágrafo com um texto
function criarParagrafo(texto, classe) {
  const paragrafo = document.createElement("p");
  paragrafo.textContent = texto;
  if (classe) {
    paragrafo.className = classe;
  }
  return paragrafo;
}

// Monta o rodapé dentro da <div id="rodape">
function montarRodape() {
  const lugar = document.getElementById("rodape");
  if (!lugar) {
    return; // a página não tem div#rodape, então não faz nada
  }

  const conteudo = document.createElement("div");
  conteudo.className = "container";
  conteudo.appendChild(criarParagrafo(nomeColegio, "rodape-nome"));
  // Dados ainda não confirmados com a secretaria: NÃO inventar
  conteudo.appendChild(criarParagrafo("Endereço: [CONFIRMAR] endereço"));
  conteudo.appendChild(criarParagrafo("Telefone: [CONFIRMAR] telefone"));

  const rodape = document.createElement("footer");
  rodape.className = "rodape";
  rodape.appendChild(conteudo);

  lugar.appendChild(rodape);
}

/* ========== 4. EXECUÇÃO ========== */

// O script é carregado no fim do <body>, então as divs já existem
montarMenu();
montarRodape();
