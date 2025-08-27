const CALL_COST = 20;

// Service Cards Data
const services = [
  { id: 1, name: 'National Emergency', subtitle: 'All Services', number: '999', badge: 'All', icon: './assets/emergency.png' },
  { id: 2, name: 'Police Helpline', subtitle: 'Police', number: '999', badge: 'Police', icon: './assets/police.png' },
  { id: 3, name: 'Fire Service', subtitle: 'Fire', number: '999', badge: 'Fire', icon: './assets/fire-service.png' },
  { id: 4, name: 'Ambulance', subtitle: 'Health', number: '1994-999999', badge: 'Health', icon: './assets/ambulance.png' },
  { id: 5, name: 'Women & Child', subtitle: 'Support', number: '109', badge: 'Help', icon: './assets/emergency.png' },
  { id: 6, name: 'Anti-Corruption', subtitle: 'Government', number: '106', badge: 'Govt.', icon: './assets/logo-dark.png' }
];

// Application State
const state = {
  hearts: 0,
  coins: 100,
  copyCount: 0,
  history: []
};
