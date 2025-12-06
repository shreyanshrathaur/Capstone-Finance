
const stocks = { 
  GOOGLE: 24350.20,
  NEWTON: 1650.00,
  RELIANCE: 2750.40,
  HDFCBANK: 1520.90
};

window.onload = () => {
  const cards = document.querySelectorAll('.stock-card');
  cards.forEach(card => {
    const name  = card.querySelector('.stock-name').textContent;
    const priceP= card.querySelector('.stock-value');


    const changeRow = document.createElement('div');
    changeRow.className = 'stock-row';
    changeRow.innerHTML = `<p class="stock-label">Change</p>
                           <p class="stock-change">+0.00%</p>`;
    card.appendChild(changeRow);
    const changeP = changeRow.querySelector('.stock-change');


    
    setInterval(() => {
      const old = stocks[name];
      const per = (Math.random()*4 - 2).toFixed(2);   // -2 to +2 %
      const nw  = old + old*per/100;
      stocks[name] = nw;

      priceP.textContent  = `₹${nw.toFixed(2)}`;
      changeP.textContent = (per >= 0 ? '+' : '') + per + '%';
      changeP.className   = 'stock-change ' + (per >= 0 ? 'stock-change-positive' : 'stock-change-negative');
    }, 3000);
  });
};
