const articles = [
  `<div>
        <div id="settings-button"><p>⚙</p></div>
        <div id="info-button"><p>ℹ</p></div>
        <h2>Busca una partida</h2>
        <select id="gamemode">
            <label for="gamemode" id="label-txt">Modo de juego</label>
            <option value="0">Partida clásica</option>
            <option value="1">Partida Vs CPU</option>
            <option value="2">Partida Amistosa</option>
        </select>
        <button id="play">Jugar</button>
    </div>`,
  `<div>
    <h2 id="shop-heading">Tienda</h2>
    <div id="cartas">
      <img src="/static/images/carta.png" alt="Packs y Cartas" class="shop-image">
    <p>Packs y Cartas</p>
  </div>
    <div id="positions">
      <img src="/static/images/posiciones.png" alt="Posiciones" class="shop-image">
      <p>Posiciones</p>
    </div>
  </div>`,
  `<h2>Perfil</h2>
  <div class="profile-tab">
  <div class="profile-info">
    <img src="/static/images/pfp.png" alt="Profile Picture" class="profile-picture">
    <div class="profile-details">
      <h3>Nombre: <span id="username">Elián Fc.</span></h3>
      <p>Bio: <span id="bio">Aguante el manya paa</span></p>
      <p>Id: <span id="contact">db572670-5db5-451d-8fd6-dec954b2dc02</span></p>
    </div>
    <div id="p-buttons">
      <button id="friend-button"><img src="/static/images/user.png" alt="User" class="user-img"></button>
      <button id="cards-button">Mis cartas</button>
    </div>
  </div>
</div>`
];

const extra = [
  `<div>
      <h2 id="info-header">¿Cómo jugar Penalty shootout?</h2>
      <p>Yyyy está complejo mi loco, pero acá podría meterte un mini tutorial o texto explicando como se juega a este juegazo papá.</p>
      <button id="info-back-button">↩</button>
    </div>`
]

let currentIndex = 0;
let isInfoPage = false;

const section = document.getElementById("window");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
section.innerHTML = articles[0];
const play_btn = document.getElementById("play")

function play_animation() {
  document.body.classList.add("closing-animation");
  setTimeout(() => {
    window.location.href = "/play-classic";
    }, 3200);
}

function attachInfoListener() {
  const info_button = document.getElementById("info-button");
  if (info_button) {
    info_button.addEventListener("click", infopage);
  }
}

function changeArticle(direction) {
  if (isInfoPage) return;
  section.style.opacity = 0;
  setTimeout(() => {
    currentIndex = (currentIndex + direction + articles.length) % articles.length;
    section.innerHTML = articles[currentIndex];
    section.style.opacity = 1;
    attachInfoListener();
  }, 600);
}

function infopage() {
  isInfoPage = true;
  section.style.opacity = 0;
  setTimeout(() => {
    section.innerHTML = extra[0];
    section.style.opacity = 1;
    arrowLeft.disabled = true;
    arrowRight.disabled = true;
    arrowLeft.style.backgroundColor = "lightgrey";
    arrowRight.style.backgroundColor = "lightgrey";
    arrowLeft.style.cursor = 'default';
    arrowRight.style.cursor = 'default';
    info_back_btn = document.getElementById("info-back-button"); // Update the info_back_btn variable
    info_back_btn.addEventListener("click", () => {
      isInfoPage = false;
      section.style.opacity = 0;
      setTimeout(() => {
        section.innerHTML = articles[0];
        section.style.opacity = 1;
        arrowLeft.disabled = false;
        arrowRight.disabled = false;
        arrowLeft.style.backgroundColor = "";
        arrowRight.style.backgroundColor = "";
        arrowLeft.style.cursor = 'pointer';
        arrowRight.style.cursor = 'pointer';
        attachInfoListener();
      }, 600);
    });
  }, 600);
}


attachInfoListener();

arrowLeft.addEventListener("click", () => changeArticle(-1));
arrowRight.addEventListener("click", () => changeArticle(1));
play_btn.addEventListener("click", play_animation);
