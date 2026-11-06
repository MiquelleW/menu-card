console.log("Hello from script.js!");
// Get HTML Elements
let form = document.querySelector("#menu-form");
let input = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");
let special = document.querySelector("#special");

function handleSubmit(event) {
  event.preventDefault();
  let menu = JSON.parse(input.value);
  special.textContent = "Today's Special: " + menu[0].name;

  count.textContent = "We have " + menu.length + " items today.";

  menuText.textContent = "";

  for (let i = 0; i < menu.length; i++) {
    menuText.textContent =
      menuText.textContent + menu[i].name + " — $" + menu[i].price + "\n";
  }
}

form.addEventListener("submit", handleSubmit);
