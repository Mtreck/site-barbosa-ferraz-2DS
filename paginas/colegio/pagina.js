/*
  JavaScript da página Colégio
  Equipe: Colégio
  Somente a equipe Colégio edita este arquivo.
  Use JavaScript só onde ele tem função real (veja REGRAS.md, seção 12).
*/

/* ========== Linha do tempo: carrossel horizontal ========== */
// Monta os pontos de navegação, liga as setas e destaca o momento visível

function iniciarLinhaDoTempo() {
  const lista = document.getElementById("colegio-tempo-lista");
  const pontosContainer = document.getElementById("colegio-tempo-pontos");
  const setaAnterior = document.querySelector(".colegio-tempo-seta-anterior");
  const setaProxima = document.querySelector(".colegio-tempo-seta-proxima");

  // Se a página não tem o carrossel completo, não faz nada
  if (!lista || !pontosContainer || !setaAnterior || !setaProxima) {
    return;
  }

  const itens = Array.from(lista.querySelectorAll(".colegio-tempo-item"));
  let indiceAtual = 0;

  // Cria um botão-ponto para cada momento da história
  const pontos = itens.map(function (item, indice) {
    const ponto = document.createElement("button");
    ponto.type = "button";
    ponto.className = "colegio-tempo-ponto";
    ponto.setAttribute("aria-label", "Ir para o momento " + (indice + 1) + " de " + itens.length);
    ponto.addEventListener("click", function () {
      irParaMomento(indice);
    });
    pontosContainer.appendChild(ponto);
    return ponto;
  });

  // Rola a lista até o momento escolhido e atualiza pontos e setas
  function irParaMomento(indice) {
    const alvo = itens[indice];
    if (!alvo) {
      return;
    }
    alvo.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    marcarAtivo(indice);
  }

  // Destaca o ponto do momento atual e desativa setas nas pontas
  function marcarAtivo(indice) {
    indiceAtual = indice;

    pontos.forEach(function (ponto, i) {
      const estaAtivo = i === indice;
      ponto.classList.toggle("ativo", estaAtivo);
      ponto.setAttribute("aria-current", estaAtivo ? "true" : "false");
    });

    setaAnterior.disabled = indiceAtual === 0;
    setaProxima.disabled = indiceAtual === itens.length - 1;
  }

  setaAnterior.addEventListener("click", function () {
    irParaMomento(Math.max(indiceAtual - 1, 0));
  });

  setaProxima.addEventListener("click", function () {
    irParaMomento(Math.min(indiceAtual + 1, itens.length - 1));
  });

  // Se a pessoa arrastar a lista direto (no celular), os pontos acompanham
  const observadorDeRolagem = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting && entrada.intersectionRatio > 0.6) {
          marcarAtivo(itens.indexOf(entrada.target));
        }
      });
    },
    { root: lista, threshold: 0.6 }
  );
  itens.forEach(function (item) {
    observadorDeRolagem.observe(item);
  });

  marcarAtivo(0);
}

iniciarLinhaDoTempo();
