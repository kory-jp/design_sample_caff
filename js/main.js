let button = document.getElementById("humburger_btn");
button.addEventListener("click", openMenu);

function openMenu() {
  document.querySelector("body").classList.toggle("menu-open");
}
