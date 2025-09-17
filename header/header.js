const header = document.getElementById('header');

const total = document.createElement('h2');
total.id = 'total';
total.textContent = 'Q 0.00';
total.style.color = 'green';

const hr = document.createElement('hr');

header.appendChild(total);
header.appendChild(hr);
