// Gera provedores únicos
const provedores = Array.from(new Set(listaSites.map(site => site.provedor)));

// Monta o menu de filtros
const menu = document.getElementById('provedor-menu');
menu.innerHTML = `<button class="active" data-provedor="Todos">Todos</button>` +
  provedores.map(p => `<button data-provedor="${p}">${p}</button>`).join('');

// Função para renderizar os sites filtrados
function renderSites(provedor) {
  const container = document.getElementById('sites-list');
  container.innerHTML = '';
  const filtrados = provedor === "Todos"
    ? listaSites
    : listaSites.filter(site => site.provedor === provedor);
  filtrados.forEach((site, i) => {
    const card = document.createElement('div');
    card.className = 'site-card';
    let stars = '';
    for (let s = 1; s <= 5; s++) stars += s <= site.avaliacao ? '★' : '☆';
    card.innerHTML = `
      <div class="site-badge">${site.provedor}</div>
      <img src="${site.imagem}" alt="${site.nome}" class="site-thumb">
      <h2>${site.nome}</h2>
      <div class="site-rating">${stars}</div>
      <div class="site-bonus">${site.bonus}</div>
      <div class="site-desc">${site.descricao}</div>
      <a class="site-btn" href="${site.linkConvite}" target="_blank" rel="noopener">Acessar com meu convite</a>
    `;
    container.appendChild(card);
  });
}

// Evento de clique nos botões do menu
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    document.querySelectorAll('.provedor-menu button').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    renderSites(e.target.dataset.provedor);
  }
});

// Renderiza todos ao abrir
renderSites("Todos");