import { AppHeader, AppFooter } from "./components.js";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const container = document.querySelector(".container"),
    startingApp = document.querySelector("#starting-app");

  if (sessionStorage.getItem("startClicked")) {
    startingApp.style.display = "none"; // Container'ı gizle
  } else {
    startApp(startingApp); // Başlangıçta container'ı göster
  }

  customElements.define("app-header", AppHeader);
  customElements.define("app-footer", AppFooter);

  function startApp(contain) {
    const start = document.createElement("div"),
      img = document.createElement("img");

    sessionStorage.getItem("startClicked");

    start.classList.add("start");
    img.setAttribute("src", "./images/start.svg");
    img.setAttribute("alt", "img");
    img.setAttribute("loading", "lazy");

    start.appendChild(img);
    contain.appendChild(start);
    start.addEventListener("click", () => {
      start.style.display = "none";
      sessionStorage.setItem("startClicked", "true");
    });
  }
});
