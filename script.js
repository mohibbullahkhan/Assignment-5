const CALL_COST = 20;


const services = [
  { id: 1, name: 'National Emergency', subtitle: 'All Services', number: '999', badge: 'All', icon: './assets/emergency.png' },
  { id: 2, name: 'Police Helpline', subtitle: 'Police', number: '999', badge: 'Police', icon: './assets/police.png' },
  { id: 3, name: 'Fire Service', subtitle: 'Fire', number: '999', badge: 'Fire', icon: './assets/fire-service.png' },
  { id: 4, name: 'Ambulance', subtitle: 'Health', number: '1994-999999', badge: 'Health', icon: './assets/ambulance.png' },
  { id: 5, name: 'Women & Child', subtitle: 'Support', number: '109', badge: 'Help', icon: './assets/emergency.png' },
  { id: 6, name: 'Anti-Corruption', subtitle: 'Government', number: '106', badge: 'Govt.', icon: './assets/logo-dark.png' },
  { id: 7, name: 'Electricity Helpline', subtitle: 'Electricity Outage', number: '16216', badge: 'Electricity', icon: './assets/logo-dark.png' },
  { id: 8, name: 'Brac Helpline', subtitle: 'Brac', number: '16465', badge: 'NGO', icon: './assets/brac.png' },
  { id: 9, name: 'Bangladesh Railway Helpline', subtitle: 'Bangladesh Railway', number: '163', badge: 'Travel', icon: './assets/Bangladesh-Railway.png' }
];


const state = {
  hearts: 0,
  coins: 100,
  copyCount: 0,
  history: []
};



const heartCount = document.querySelector('#heartCount');
const coinCount = document.querySelector('#coinCount');
const copyCount = document.querySelector('#copyCount');
const cardGrid = document.querySelector('#cardGrid');


function renderNav() {
  heartCount.textContent = state.hearts;
  coinCount.textContent = state.coins;
  copyCount.textContent = state.copyCount;
}


function generateCardHTML(s) {
  return `
    <article class="card p-4 bg-white rounded-xl shadow" data-id="${s.id}" data-name="${s.name}" data-number="${s.number}">
      <div class="flex justify-between items-start mb-3">
        <div class="flex items-center gap-3">
          <img src="${s.icon}" alt="${s.name}" class="h-9 w-9 rounded-lg">
          <div>
            <h3 class="font-bold text-sm">${s.name}</h3>
            <p class="text-gray-500 text-xs">${s.subtitle}</p>
          </div>
        </div>
        <button data-action="like" class="heart-btn" title="Like">💗</button>
      </div>
      <div class="text-2xl font-bold mb-2">${s.number}</div>
      <div class="flex gap-2 mb-2">
        <span class="badge px-2 py-1 rounded-full text-xs bg-gray-100">${s.badge}</span>
      </div>
      <div class="flex gap-2">
        <button data-action="copy" class="btn btn-outline flex-1">Copy</button>
        <button data-action="call" class="btn btn-success flex-1">Call</button>
      </div>
    </article>
  `;
}


function renderCards() {
  cardGrid.innerHTML = services.map(generateCardHTML).join('');
}

renderNav();
renderCards();





async function copyNumber(number) {
  await navigator.clipboard.writeText(number);
  state.copyCount += 1;
  renderNav();
  alert(`Copied: ${number}`);
}


function likeCard() {
  state.hearts += 1;
  renderNav();
}


function callService(name, number) {
  if (state.coins < CALL_COST) return alert('Not enough coins.');
  alert(`Calling ${name} — ${number}`);
  state.coins -= CALL_COST;
  renderNav();
  const time = new Date().toLocaleTimeString();
  state.history.unshift({ name, number, time });
  renderHistory();
}


document.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const card = btn.closest('[data-id]');
  const name = card?.getAttribute('data-name');
  const number = card?.getAttribute('data-number');
  const action = btn.getAttribute('data-action');

  if (action === 'like') likeCard();
  if (action === 'copy') copyNumber(number);
  if (action === 'call') callService(name, number);
});




const historyList = document.querySelector('#historyList');
const clearHistoryBtn = document.querySelector('#clearHistoryBtn');


function renderHistory() {
  historyList.innerHTML = state.history.map(h => `
    <li class="flex justify-between text-sm border-b py-2">
      <div>
        <div class="font-bold">${h.name}</div>
        <div class="text-gray-500">${h.number}</div>
      </div>
      <div class="text-gray-400">${h.time}</div>
    </li>
  `).join('');
}


clearHistoryBtn.addEventListener('click', () => {
  state.history = [];
  renderHistory();
});

