const myForm = document.forms.myForm;
const message = document.getElementById("message");

myForm.onsubmit = function () {
  if (myForm.name.value == "") {
    console.log('empty');
    message.innerHTML = "please enter a name";
    return false;
  } else {
    message.innerHTML = "";
    return true;
  }
};
