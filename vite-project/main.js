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

rats.toggle.addEventListener("change", function () {
  rats.toggle.classList.add("darkmode");
});

let app = document.getElementById("app");
app.insertAdjacentHTML("afterend", `<h1>Rat Acountants</h1>`);
