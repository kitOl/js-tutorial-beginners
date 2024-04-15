const link = document.getElementById('test');
console.log(link.getAttribute('href'));

console.log(link.getAttribute('class'));

link.setAttribute('class', 'pie');

link.className = 'ninja';

console.log(link.href);

console.log(link.style);