import LOGO from '../logos/logo.png';

const name = document.querySelector('.name');
const img = document.createElement('img');
img.className = 'logo';
img.src = LOGO;
name.prepend(img);
