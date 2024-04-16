const myMessage = document.getElementById("message");

function showMessage() {
  myMessage.className = "show";
}

setTimeout(showMessage, 3000);

const colorChanger = document.getElementById("color-changer");

const colors = ["red", "blue", "green", "pink"];
let counter = 0;

function changeColor() {
  colorChanger.style.background = colors[counter];
  counter++;
  if (counter === colors.length) {
    counter = 0;
    colorChanger.style.background = "#fff";
  }
}

myTimer = setInterval(changeColor, 3000);

colorChanger.onclick = function () {
  clearInterval(myTimer);
  colorChanger.innerHTML = "Timer stopped";
};
