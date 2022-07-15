const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#input");
const loginInputBtn = document.querySelector("#inputBtn");
const PersonName = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function ClickBtn(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  printedgreeting(USERNAME_KEY);
}

loginForm.addEventListener("submit", ClickBtn);

function printedgreeting(username) {
  PersonName.innerText = `Hello ${username}`;
  PersonName.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", ClickBtn);
} else {
  printedgreeting(savedUsername);
}
