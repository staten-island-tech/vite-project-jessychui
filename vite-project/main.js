import "./style.css";
import { accountants } from "./accountants";
const rats = {
  toggle: document.getElementById("toggleswitch"),
  app: document.getElementById("app"),
  title: document.getElementById("title"),
  container: document.getElementById("container"),
  elsome: document.getElementById("elsome"),
  cheap: document.getElementById("cheap"),
  expensive: document.getElementById("expensive"),
  loser: document.getElementById("loser"),
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
    document.body.style.backgroundColor = "rgb(17, 18, 17)";
    title.innerHTML = "Rat CarteL";
    rats.toggle.innerHTML = "dark";
    rats.toggle.style.backgroundColor = "rgb(111, 68, 68)";
    rats.toggle.style.width = "90px";
    rats.toggle.style.height = "50px";
    rats.toggle.style.fontFamily = "'Diplomata SC', cursive";
    rats.elsome.style.fontFamily = "'Vollkorn SC', serif";
    rats.elsome.style.fontWeight = "bold";
    rats.cheap.style.fontFamily = "'Vollkorn SC', serif";
    rats.expensive.style.fontFamily = "'Vollkorn SC', serif";
    rats.loser.style.fontFamily = "'Vollkorn SC', serif";
    rats.cheap.style.backgroundColor = "rgb(104, 34, 34)";
    rats.expensive.style.backgroundColor = "rgb(104, 34, 34)";
    rats.loser.style.backgroundColor = "rgb(104, 34, 34)";
    rats.cheap.style.color = "rgb(255, 255, 255)";
    rats.expensive.style.color = "rgb(255, 255, 255)";
    rats.loser.style.color = "rgb(255, 255, 255)";
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
    rats.toggle.style.fontFamily = "'Lexend'";
    rats.elsome.style.fontFamily = "'Lexend'";
    rats.elsome.style.fontWeight = "normal";
    rats.cheap.style.fontFamily = "'Lexend'";
    rats.expensive.style.fontFamily = "'Lexend'";
    rats.loser.style.fontFamily = "'Lexend'";
    rats.cheap.style.backgroundColor = "rgb(255, 255, 255)";
    rats.expensive.style.backgroundColor = "rgb(255, 255, 255)";
    rats.loser.style.backgroundColor = "rgb(255, 255, 255)";
    rats.cheap.style.color = "rgb(33, 53, 71)";
    rats.expensive.style.color = "rgb(33, 53, 71)";
    rats.loser.style.color = "rgb(33, 53, 71)";
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
  /* console.log(rat.name); */
  rats.elsome.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <div class="content">
        <div class="front">
          <h2>${rat.name}</h2>
          <img class="accountants" src="${rat.img}" alt="calculator rat" >
        </div>
        <div class="back">
          <p class="info">rating : ${rat.rating} <br><br>pricing : $${rat.pricing}/hr <br><br>description : ${rat.description} </p>
        </div>
      </div>
    </div>`
  );
});

let cheapfilter = false;

rats.cheap.addEventListener("click", function () {
  if (cheapfilter === false) {
    rats.elsome.innerHTML = "";
    accountants
      .filter((rat) => rat.pricing < 60)
      .forEach((rat) => {
        rats.elsome.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <div class="content">
            <div class="front">
              <h2>${rat.name}</h2>
              <img class="accountants" src="${rat.img}" alt="calculator rat" >
            </div>
            <div class="back">
              <p class="info">rating : ${rat.rating} <br><br>pricing : $${rat.pricing}/hr <br><br>description : ${rat.description} </p>
            </div>
          </div>
        </div>`
      );
    });
    cheapfilter = true;
  return cheapfilter;
  }

  if (cheapfilter === true) {
    rats.elsome.innerHTML = "";
    accountants
      .forEach((rat) => {
        rats.elsome.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <div class="content">
            <div class="front">
              <h2>${rat.name}</h2>
              <img class="accountants" src="${rat.img}" alt="calculator rat" >
            </div>
            <div class="back">
              <p class="info">rating : ${rat.rating} <br><br>pricing : $${rat.pricing}/hr <br><br>description : ${rat.description} </p>
            </div>
          </div>
        </div>`
      );
    });
    cheapfilter = false
  return cheapfilter }
});

let expensivefilter = false;

rats.expensive.addEventListener("click", function () {
  if (expensivefilter === false) {
    rats.elsome.innerHTML = "";
    accountants
      .filter((rat) => rat.pricing > 60)
      .forEach((rat) => {
        rats.elsome.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <div class="content">
            <div class="front">
              <h2>${rat.name}</h2>
              <img class="accountants" src="${rat.img}" alt="calculator rat" >
            </div>
            <div class="back">
              <p class="info">rating : ${rat.rating} <br><br>pricing : $${rat.pricing}/hr <br><br>description : ${rat.description} </p>
            </div>
          </div>
        </div>`
      );
    });
    expensivefilter = true;
  return expensivefilter;
  }

  if (expensivefilter === true) {
    rats.elsome.innerHTML = "";
    accountants
      .forEach((rat) => {
        rats.elsome.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <div class="content">
            <div class="front">
              <h2>${rat.name}</h2>
              <img class="accountants" src="${rat.img}" alt="calculator rat" >
            </div>
            <div class="back">
              <p class="info">rating : ${rat.rating} <br><br>pricing : $${rat.pricing}/hr <br><br>description : ${rat.description} </p>
            </div>
          </div>
        </div>`
      );
    });
    expensivefilter = false
  return expensivefilter }
});

let loserfilter = false;

rats.loser.addEventListener("click", function () {
  if (loserfilter === false) {
    rats.elsome.innerHTML = "";
    accountants
      .filter((rat) => rat.pricing < 10)
      .forEach((rat) => {
        rats.elsome.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <div class="content">
            <div class="front">
              <h2>${rat.name}</h2>
              <img class="accountants" src="${rat.img}" alt="calculator rat" >
            </div>
            <div class="back">
              <p class="info">rating : ${rat.rating} <br><br>pricing : $${rat.pricing}/hr <br><br>description : ${rat.description} </p>
            </div>
          </div>
        </div>`
      );
    });
    loserfilter = true;
  return loserfilter;
  }

  if (loserfilter === true) {
    rats.elsome.innerHTML = "";
    accountants
      .forEach((rat) => {
        rats.elsome.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <div class="content">
            <div class="front">
              <h2>${rat.name}</h2>
              <img class="accountants" src="${rat.img}" alt="calculator rat" >
            </div>
            <div class="back">
              <p class="info">rating : ${rat.rating} <br><br>pricing : $${rat.pricing}/hr <br><br>description : ${rat.description} </p>
            </div>
          </div>
        </div>`
      );
    });
    loserfilter = false
  return loserfilter }
});