const menu = document.getElementById("main-nav").getElementsByTagName("ul")[0];
const newLi = document.createElement("li");
const newA = document.createElement("a");

menu.appendChild(newLi);
newLi.appendChild(newA);
newA.innerHTML = "Blog";

menu.insertBefore(newLi, menu.getElementsByTagName('li')[0]);
