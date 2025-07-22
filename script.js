fetch('sites.json')
  .then(response => response.json())
  .then(sites => {
    const container = document.getElementById('sites-list');
    sites.forEach((site, i) => {
      const card = document.createElement('div');
      card.className = 'site-card';

      // Gera estrelas de avaliação (de 1 a 5)
      let stars = '';
      for (let s = 1; s <= 5; s++) {
        stars += s <= site.avaliacao ? '★' : '☆';
      }

      card.innerHTML = `
        <div class="site-badge">#${i + 1} recomendado</div>
        <img src="${site.imagem}" alt="${site.nome}" class="site-thumb">
        <h2>${site.nome}</h2>
        <div class="site-rating">${stars}</div>
        <div class="site-bonus">${site.bonus}</div>
        <div class="site-desc">${site.descricao}</div>
        <a class="site-btn" href="${site.linkConvite}" target="_blank" rel="noopener">Acessar com meu convite</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(() => {
    document.getElementById('sites-list').innerHTML = "<p>Erro ao carregar os sites.</p>";
  });
