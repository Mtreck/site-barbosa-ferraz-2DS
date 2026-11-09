/*
  JavaScript da página Eventos
  Equipe: Eventos
  Somente a equipe Eventos edita este arquivo.
  Use JavaScript só onde ele tem função real (veja REGRAS.md, seção 12).

  Este arquivo tem quatro funções:
  1. guardar os dados dos eventos;
  2. montar os cards da agenda na página inicial de Eventos;
  3. animar a entrada dos cards quando a seção aparece na tela;
  4. preencher a página de detalhe de cada evento.
*/

/* ========== 1. DADOS DOS EVENTOS ========== */

/*
  Cada evento tem:
  - id: nome curto usado no endereço da página de detalhe;
  - titulo, area e quando: informações exibidas nos cards;
  - resumo: texto curto do card;
  - imagem, imagemAlt e imagemFormato: capa opcional do card;
  - imagemLargura e imagemAltura: dimensões da capa, para reservar o espaço;
  - sobre: parágrafos da página de detalhe;
  - local e inscricao: informações práticas da página de detalhe.

  O que a secretaria ainda não informou aparece como [CONFIRMAR].
*/
const eventosSemanais = [
  {
    id: "treino-de-basquetebol",
    titulo: "Treino de Basquetebol",
    tipo: "Evento semanal",
    area: "Esporte",
    quando: "Quarta e sexta, 19h às 20:30",
    resumo: "Treino de basquetebol às quartas e sextas-feiras, das 19h às 20:30.",
    imagem: "imagens/basquete.jpg",
    imagemAlt: "Alunos em treino de basquetebol no Colégio Estadual Barbosa Ferraz.",
    imagemFormato: "paisagem",
    imagemLargura: 1063,
    imagemAltura: 656,
    sobre: [
      "O colégio apresenta um projeto de treinamento esportivo para a modalidade " +
        "de basquetebol. Os encontros acontecem toda quarta-feira e sexta-feira, " +
        "das 19:00 às 20:30.",
      "O treino é realizado pelo professor Pablo. Para participar, procure a " +
        "secretaria do colégio."
    ],
    local: "Colégio Estadual Barbosa Ferraz, [CONFIRMAR] espaço do treino",
    inscricao: "[CONFIRMAR] como participar"
  },
  {
    id: "programa-mais-aprendizagem",
    titulo: "Programa Mais Aprendizagem",
    tipo: "Evento semanal",
    area: "Aprendizagem",
    quando: "Quinta, 14h às 16h",
    resumo: "Aulas de português e matemática para o ENEM toda quinta-feira, das 14h às 16h.",
    imagem: "imagens/mais-aprendizagem.jpg",
    imagemAlt: "Alunos participando do Programa Mais Aprendizagem no Colégio Estadual Barbosa Ferraz.",
    imagemFormato: "paisagem",
    imagemLargura: 1706,
    imagemAltura: 1080,
    sobre: [
      "O Programa Mais Aprendizagem é um dos projetos para aprimoramento dos " +
        "alunos no ENEM. Ele foi criado para reforçar as habilidades dos " +
        "componentes de português e matemática.",
      "Os encontros acontecem toda quinta-feira, das 14h às 16h, e são " +
        "realizados pela professora Daiane."
    ],
    local: "Colégio Estadual Barbosa Ferraz, [CONFIRMAR] sala",
    inscricao: "[CONFIRMAR] vagas e inscrição"
  },
  {
    id: "robotica",
    titulo: "Robótica",
    tipo: "Evento semanal",
    area: "Tecnologia",
    quando: "Toda terça-feira",
    resumo: "Oficina de Robótica realizada toda terça-feira no colégio.",
    imagem: "imagens/robotica.webp",
    imagemAlt: "Estudantes em atividade de robótica.",
    imagemFormato: "paisagem",
    imagemLargura: 500,
    imagemAltura: 385,
    sobre: [
      "A oficina de Robótica acontece toda terça-feira, no Colégio Estadual " +
        "Barbosa Ferraz.",
      "A atividade integra os encontros semanais da escola. O horário e a sala " +
        "ainda serão informados pela secretaria."
    ],
    local: "Colégio Estadual Barbosa Ferraz, [CONFIRMAR] sala",
    inscricao: "[CONFIRMAR] inscrição"
  },
  {
    id: "libras",
    titulo: "Libras",
    tipo: "Evento semanal",
    area: "Linguagem",
    quando: "Terça e quinta-feira",
    resumo: "Aulas de Libras toda semana, às terças e quintas-feiras.",
    imagem: "imagens/libras-celem.png",
    imagemAlt: "Cartaz do curso CELEM de Libras do Colégio Estadual Barbosa Ferraz.",
    imagemFormato: "retrato",
    imagemLargura: 195,
    imagemAltura: 258,
    sobre: [
      "As aulas de Libras acontecem toda semana, às terças e quintas-feiras.",
      "O horário e a sala das aulas ainda serão confirmados pela secretaria do " +
        "colégio."
    ],
    local: "[CONFIRMAR] local e sala",
    inscricao: "[CONFIRMAR] inscrição"
  },
  {
    id: "projeto-altas-habilidades",
    titulo: "Projeto Altas Habilidades",
    tipo: "Evento semanal",
    area: "Projetos",
    quando: "Ter, qua e qui, 13h às 17h",
    resumo: "Projeto da professora Daniele Arruda, às terças, quartas e quintas-feiras, das 13h às 17h.",
    imagem: "imagens/altas-habilidades.webp",
    imagemAlt: "Alunos desenvolvendo atividades do Projeto Altas Habilidades no Colégio Estadual Barbosa Ferraz.",
    imagemFormato: "paisagem",
    imagemLargura: 1080,
    imagemAltura: 927,
    sobre: [
      "Desempenhado pela professora Daniele Arruda, a aula ofertada no período da " +
        "tarde inova pois permite aos jovens desenvolverem projetos sobre temas, " +
        "necessidades e oportunidades presentes na sociedade, a fim de tornar o " +
        "mundo um lugar melhor!",
      "O projeto acontece toda terça-feira, quarta-feira e quinta-feira, das " +
        "13:00 às 17:00."
    ],
    local: "Colégio Estadual Barbosa Ferraz, [CONFIRMAR] sala",
    inscricao: "[CONFIRMAR] inscrição"
  }
];

const eventosAnuais = [
  {
    id: "x-setec",
    titulo: "X SETEC",
    tipo: "Evento anual",
    area: "Evento estudantil",
    quando: "Novembro",
    resumo: "Evento realizado pelos alunos do colégio, com programação em novembro.",
    imagem: "imagens/setec.jpg",
    imagemAlt: "Imagem do evento X SETEC do Colégio Estadual Barbosa Ferraz.",
    imagemFormato: "paisagem",
    imagemLargura: 1091,
    imagemAltura: 953,
    sobre: [
      "O X SETEC acontece em novembro, no Colégio Estadual Barbosa Ferraz, e é " +
        "realizado pelos alunos do colégio.",
      "A data exata e a programação do evento ainda serão divulgadas. Acompanhe " +
        "a agenda para novas informações."
    ],
    local: "Colégio Estadual Barbosa Ferraz, [CONFIRMAR] espaços",
    inscricao: "[CONFIRMAR] inscrição"
  },
  {
    id: "arraia-do-barbosa",
    titulo: "Arraiá do Barbosa",
    tipo: "Evento anual",
    area: "Festa",
    quando: "Junho/Julho",
    resumo: "Festa do calendário do colégio, realizada em junho ou julho, com início às 19h.",
    imagem: "imagens/arraia.png",
    imagemAlt: "Cartaz do Arraiá do Colégio Estadual Barbosa Ferraz.",
    imagemFormato: "paisagem",
    imagemLargura: 478,
    imagemAltura: 358,
    sobre: [
      "O Arraiá do Barbosa é um dos eventos anuais do colégio e acontece em " +
        "junho ou julho. A festa tem início às 19h.",
      "A data exata ainda será confirmada pela escola. Procure a secretaria " +
        "para mais informações."
    ],
    local: "Colégio Estadual Barbosa Ferraz, [CONFIRMAR] espaço",
    inscricao: "[CONFIRMAR] entrada"
  },
  {
    id: "seminario-de-formacao-de-docentes",
    titulo: "Seminário de Formação de Docentes",
    tipo: "Evento anual",
    area: "Formação",
    quando: "28/10",
    resumo: "Seminário com a participação das alunas do curso de Formação de Docentes.",
    imagem: "imagens/seminario.webp",
    imagemAlt: "Imagem do Seminário de Formação de Docentes do Colégio Estadual Barbosa Ferraz.",
    imagemFormato: "paisagem",
    imagemLargura: 800,
    imagemAltura: 489,
    sobre: [
      "O Seminário de Formação de Docentes é uma amostra dos trabalhos " +
        "desenvolvidos pelas alunas cursantes do curso de Formação de Docentes.",
      "O evento é realizado no dia 28/10 e organizado pelas alunas do curso. " +
        "O horário e o valor da inscrição devem ser confirmados com a secretaria."
    ],
    local: "Colégio Estadual Barbosa Ferraz, [CONFIRMAR] espaço",
    inscricao: "[CONFIRMAR] valor da inscrição"
  }
];

/* ========== 2. MONTAGEM DOS CARDS ========== */

// Junta as duas listas para a busca da página de detalhe
function obterTodosEventos() {
  return eventosSemanais.concat(eventosAnuais);
}

// Cria o card (<li>) de um evento
function montarCardEvento(evento) {
  const item = document.createElement("li");
  item.className = "eventos-card";

  // O link cobre o card inteiro e leva à página de detalhe
  const link = document.createElement("a");
  link.className = "eventos-card-link";
  link.href = "evento.html?evento=" + encodeURIComponent(evento.id);
  link.setAttribute("aria-label", "Ver detalhes do evento " + evento.titulo);

  const conteudo = document.createElement("article");
  conteudo.className = "eventos-card-conteudo";

  // Linha de cima: área do evento e período
  const topo = document.createElement("div");
  topo.className = "eventos-card-topo";

  const area = document.createElement("p");
  area.className = "eventos-card-area";
  area.textContent = evento.area;

  const quando = document.createElement("p");
  quando.className = "eventos-card-quando";
  quando.textContent = evento.quando;

  topo.appendChild(area);
  topo.appendChild(quando);

  // Quando o evento tem imagem, ela vira a capa do card
  if (evento.imagem) {
    const midia = document.createElement("div");
    midia.className = "eventos-card-midia";
    if (evento.imagemFormato) {
      midia.classList.add("eventos-card-midia-" + evento.imagemFormato);
    }

    // Cópia desfocada da imagem preenche as laterais de cartazes verticais
    const imagemFundo = document.createElement("img");
    imagemFundo.className = "eventos-card-midia-fundo";
    imagemFundo.src = evento.imagem;
    imagemFundo.alt = "";
    imagemFundo.setAttribute("aria-hidden", "true");
    imagemFundo.loading = "lazy";
    imagemFundo.decoding = "async";

    const imagem = document.createElement("img");
    imagem.className = "eventos-card-midia-imagem";
    imagem.src = evento.imagem;
    imagem.alt = evento.imagemAlt || "";
    imagem.loading = "lazy";
    imagem.decoding = "async";
    if (evento.imagemLargura) {
      imagem.width = evento.imagemLargura;
    }
    if (evento.imagemAltura) {
      imagem.height = evento.imagemAltura;
    }

    // Categoria e período ficam sobre a parte escura da imagem
    topo.classList.add("eventos-card-topo-midia");

    midia.appendChild(imagemFundo);
    midia.appendChild(imagem);
    midia.appendChild(topo);
    link.appendChild(midia);
  } else {
    conteudo.appendChild(topo);
  }

  // Nome do evento
  const nome = document.createElement("h3");
  nome.className = "eventos-card-nome";
  nome.textContent = evento.titulo;

  // Resumo exibido no card
  const texto = document.createElement("p");
  texto.className = "eventos-card-texto";
  texto.textContent = evento.resumo;

  // Rodapé com a chamada visual para abrir o evento
  const rodape = document.createElement("div");
  rodape.className = "eventos-card-rodape";

  const acao = document.createElement("span");
  acao.className = "eventos-card-acao";
  acao.textContent = "Ver detalhes";
  acao.setAttribute("aria-hidden", "true");

  rodape.appendChild(acao);
  conteudo.appendChild(nome);
  conteudo.appendChild(texto);
  conteudo.appendChild(rodape);
  link.appendChild(conteudo);
  item.appendChild(link);

  return item;
}

// Percorre uma lista de eventos e coloca os cards dentro da <ul> da página
function montarCards(idDaLista, listaDeEventos) {
  const lugar = document.getElementById(idDaLista);
  if (!lugar) {
    return; // a lista não existe nesta página
  }

  for (let i = 0; i < listaDeEventos.length; i++) {
    lugar.appendChild(montarCardEvento(listaDeEventos[i]));
  }
}

/* ========== 3. ANIMAÇÃO DE ENTRADA ========== */

// A animação só acontece se o navegador suportar e a pessoa não preferir menos movimento
function animacaoDeEntradaPermitida() {
  const prefereMenosMovimento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return !prefereMenosMovimento && "IntersectionObserver" in window;
}

// Esconde os cards antes de eles serem criados, evitando que apareçam e sumam
function prepararAnimacaoDeEntrada() {
  if (!animacaoDeEntradaPermitida()) {
    return false;
  }

  const secoes = document.querySelectorAll(".eventos-secao");
  for (let i = 0; i < secoes.length; i++) {
    secoes[i].classList.add("eventos-animar");
  }

  return true;
}

// Mostra os cards com animação quando cada seção entra na tela
function iniciarAnimacaoDeEntrada(animar) {
  const secoes = document.querySelectorAll(".eventos-secao");
  if (!secoes.length) {
    return; // a página de detalhe não tem seções da agenda
  }

  // Sem animação: o conteúdo aparece direto
  if (!animar) {
    for (let i = 0; i < secoes.length; i++) {
      secoes[i].classList.add("eventos-visivel");
    }
    return;
  }

  const observador = new IntersectionObserver(
    function (entradas, observadorAtual) {
      for (let i = 0; i < entradas.length; i++) {
        if (entradas[i].isIntersecting) {
          entradas[i].target.classList.add("eventos-visivel");
          observadorAtual.unobserve(entradas[i].target);
        }
      }
    },
    { threshold: 0.1 }
  );

  for (let i = 0; i < secoes.length; i++) {
    // Se a seção já está na tela, mostra os cards sem esperar o observador
    const caixa = secoes[i].getBoundingClientRect();
    const estaNaTela = caixa.top < window.innerHeight && caixa.bottom > 0;
    if (estaNaTela) {
      secoes[i].classList.add("eventos-visivel");
    }

    observador.observe(secoes[i]);
  }
}

/* ========== 4. PÁGINA DE DETALHE ========== */

// Procura um evento pelo id que vem no endereço (ex.: evento=robotica)
function encontrarEvento(id) {
  const todos = obterTodosEventos();

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      return todos[i];
    }
  }

  return null;
}

// Escreve um texto dentro de um elemento, se ele existir na página
function preencherTexto(id, texto) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.textContent = texto;
  }
}

// Mostra o aviso de evento não encontrado
function mostrarEventoNaoEncontrado() {
  const etiquetas = document.getElementById("evento-etiquetas");
  const resumo = document.getElementById("evento-resumo");
  const corpo = document.getElementById("evento-corpo");
  const erro = document.getElementById("evento-erro");

  if (etiquetas) {
    etiquetas.hidden = true;
  }
  if (resumo) {
    resumo.hidden = true;
  }
  if (corpo) {
    corpo.hidden = true;
  }
  if (erro) {
    erro.hidden = false;
  }

  preencherTexto("evento-titulo", "Evento não encontrado");
  preencherTexto("evento-trilha-atual", "Evento não encontrado");
  document.title = "Evento não encontrado | Colégio Estadual Barbosa Ferraz";
}

// Preenche a página evento.html com os dados do evento escolhido
function montarDetalheEvento(evento) {
  document.title = evento.titulo + " | Eventos | Colégio Estadual Barbosa Ferraz";

  preencherTexto("evento-trilha-atual", evento.titulo);
  preencherTexto("evento-titulo", evento.titulo);
  preencherTexto("evento-resumo", evento.resumo);
  preencherTexto("evento-tipo", evento.tipo);
  preencherTexto("evento-area", evento.area);
  preencherTexto("evento-quando", evento.quando);
  preencherTexto("evento-local", evento.local);
  preencherTexto("evento-inscricao", evento.inscricao);

  // A etiqueta do tipo muda de cor nos eventos anuais
  const etiquetaTipo = document.getElementById("evento-tipo");
  if (etiquetaTipo && evento.tipo === "Evento anual") {
    etiquetaTipo.classList.add("eventos-etiqueta-anual");
  }

  // Cria um parágrafo para cada texto da lista "sobre"
  const lugarSobre = document.getElementById("evento-sobre");
  if (lugarSobre) {
    lugarSobre.textContent = "";

    for (let i = 0; i < evento.sobre.length; i++) {
      const paragrafo = document.createElement("p");
      paragrafo.textContent = evento.sobre[i];
      lugarSobre.appendChild(paragrafo);
    }
  }
}

/* ========== 5. EXECUÇÃO ========== */

// Esconde os cards antes de montá-los, para a entrada ser animada sem piscar
const animarEntrada = prepararAnimacaoDeEntrada();

// Na página da agenda, monta os cards das duas seções
montarCards("eventos-lista-semanal", eventosSemanais);
montarCards("eventos-lista-anual", eventosAnuais);

// Depois dos cards montados, observa as seções e revela as que já estão na tela
iniciarAnimacaoDeEntrada(animarEntrada);

// Na página de detalhe, lê o id do endereço e mostra o evento correspondente
const tituloDetalhe = document.getElementById("evento-titulo");
if (tituloDetalhe) {
  const parametros = new URLSearchParams(window.location.search);
  const idDoEvento = parametros.get("evento");
  const evento = encontrarEvento(idDoEvento);

  if (evento) {
    montarDetalheEvento(evento);
  } else {
    mostrarEventoNaoEncontrado();
  }
}
