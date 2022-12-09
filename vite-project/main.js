import "./style.css";
const rats = {
  toggle: document.getElementById("toggleswitch"),
};

/* document.querySelector("#app").innerHTML = `
    <h1>Rat Acountants</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </a>
`; */
let mode = "lightmode";

rats.toggle.addEventListener("click", function () {
  if (mode === "lightmode") {
    rats.toggle.classList.add("darkmode");
    title.classList.add("darkmode");
    document.body.style.backgroundColor = "rgb(207, 17, 17)";
    mode = "darkmode";
    return mode;
  }
  if (mode === "darkmode") {
    rats.toggle.classList.remove("darkmode");
    title.classList.remove("darkmode");
    document.body.style.backgroundColor = "rgb(255, 187, 187)";
    mode = "lightmode";
    return mode;
  }
});
let app = document.getElementById("app");
app.insertAdjacentHTML("afterend", `<h1 id="title">Rat Acountants</h1>`);
let title = document.getElementById("title");
