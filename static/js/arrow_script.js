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
      <h2>Article 2</h2>
      <p>This is content for article 2.</p>
    </div>`,
  `<div>
      <h2>Article 3</h2>
      <p>This is content for article 3.</p>
    </div>`
];

const extra = [
  `<div>
      <h2 id="info-header">¿Cómo jugar Penalty shootout?</h2>
      <p>Yyyy está complejo mi loco, pero acá podría meterte un mini tutorial o texto explicando como se juega a este juegazo papá.</p>
    </div>`
]

let currentIndex = 0;

const section = document.getElementById("window");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

section.innerHTML = articles[0];

function attachInfoListener() {
  const info_button = document.getElementById("info-button");
  if (info_button) {
    info_button.addEventListener("click", infopage);
  }
}

function changeArticle(direction) {
  section.style.opacity = 0;
  setTimeout(() => {
    currentIndex = (currentIndex + direction + articles.length) % articles.length;
    section.innerHTML = articles[currentIndex];
    section.style.opacity = 1;
    attachInfoListener();  // Reattach the info button listener
  }, 600);
}

function infopage() {
  section.style.opacity = 0;
  setTimeout(() => {
    section.innerHTML = extra[0];
    section.style.opacity = 1;
  }, 600);
}

// Initial attachment of the info button listener
attachInfoListener();

arrowLeft.addEventListener("click", () => changeArticle(-1));
arrowRight.addEventListener("click", () => changeArticle(1));
