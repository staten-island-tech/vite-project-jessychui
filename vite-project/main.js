import "./style.css";
import { accountants } from "./accountants";
const rats = {
  toggle: document.getElementById("toggleswitch"),

  app: document.getElementById("app"),
  title: document.getElementById("title"),
  container: document.getElementById("container"),
  elsome: document.getElementById("elsome"),
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
    rats.toggle.style.backgroundColor = "rgb(12, 73, 73)";
    rats.toggle.style.width = "90px";
    rats.toggle.style.height = "50px";
    mode = "darkmode";
    return mode;
  }
  if (mode === "darkmode") {
    rats.toggle.classList.remove("darkmode");
    title.classList.remove("darkmode");
    document.body.style.backgroundColor = "rgb(255, 187, 187)";
    title.innerHTML = "Rat Accountants";
    rats.toggle.innerHTML = "light";
    rats.toggle.style.backgroundColor = "#fff5f5";
    rats.toggle.style.width = "50px";
    mode = "lightmode";
    return mode;
  }
});

app.insertAdjacentHTML("afterend", ``);

// rats.container.innerHTML = `<div class="card">
// <h2>George</h2>
// <img class="accountants" src="/calc1.png" alt="calculator rat" >
// </div>`;

accountants.forEach((rat) => {
  console.log(rat.name);
  rats.elsome.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <div class="content">
      <div class="front">
        <h2>${rat.name}</h2>
        <img class="accountants" src="${rat.img}" alt="calculator rat" >
      </div>
      <div class="back">
        <p class="info">rating : ${rat.rating} <br><br>pricing : ${rat.pricing} <br><br>description : ${rat.description} </p>
      </div>
    </div>
  </div>`
  );
});
