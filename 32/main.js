const myContentDivs = document.getElementsByClassName("content");
console.log(myContentDivs);

const myTagH2 = myContentDivs[1].getElementsByTagName('h2');
console.log(myTagH2);

myTagH2[0].innerHTML = "YO NINJAS!";

const myId = document.getElementById('page-title');
myId.innerHTML = 'GO FOO!';

// ===[ - 34 -] ===
const myBody = document.getElementsByTagName('body');
console.log(myBody);
// myBody[0].innerHTML = "<p>I am a paragraph</p>";

const myTitlePage = document.getElementsByTagName('title');
console.log(myTitlePage[0].textContent);
myTitlePage[0].textContent = 'JS Tutorial For Beginners';