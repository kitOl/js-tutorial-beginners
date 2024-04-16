const parent =document.getElementById('main-nav').getElementsByTagName('ul')[0];
const child = parent.getElementsByTagName('li')[0];

const removed = parent.removeChild(child);

parent.appendChild(removed);