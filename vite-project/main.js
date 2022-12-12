import "./style.css";
const rats = {
  toggle: document.getElementById("toggleswitch"),
  app: document.getElementById("app"),
  title: document.getElementById("title"),
};

/* document.querySelector("#app").innerHTML = `
    <h1>Rat Acountants</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
`; */
let mode = "lightmode";

rats.toggle.addEventListener("click", function () {
  if (mode === "lightmode") {
    rats.toggle.classList.add("darkmode");
    title.classList.add("darkmode");
    document.body.style.backgroundColor = "rgb(207, 17, 17)";
    title.innerHTML = "Rat CarteL";
    rats.toggle.innerHTML = "dark";
    mode = "darkmode";
    return mode;
  }
  if (mode === "darkmode") {
    rats.toggle.classList.remove("darkmode");
    title.classList.remove("darkmode");
    document.body.style.backgroundColor = "rgb(255, 187, 187)";
    title.innerHTML = "Rat Accountants";
    rats.toggle.innerHTML = "light";
    mode = "lightmode";
    return mode;
  }
});

app.insertAdjacentHTML("afterend", ``);
