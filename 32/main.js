const myContentDivs = document.getElementsByClassName("content");
console.log(myContentDivs);

const myTagH2 = myContentDivs[1].getElementsByTagName('h2');
console.log(myTagH2);

myTagH2[0].innerHTML = "YO NINJAS!";

const myId = document.getElementById('page-title');
myId.innerHTML = 'GO FOO!';