function setUpEvents() {
  const content = document.getElementById("content");
  const button = document.getElementById("show-more");

  button.onclick = function () {
    if (content.classList == "open") {
      content.className = "";
      button.innerHTML = "Show more";
    } else {
      content.className = "open";
      button.innerHTML = "Show less";
    }
  };
}

window.onload = function () {
  setUpEvents();
};
