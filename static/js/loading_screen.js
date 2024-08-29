const loading_container = document.getElementById("loading-container");
const find_container = document.getElementById("find-container");

function find_match() {
  setTimeout(() => {
    loading_container.style.transition = "opacity 0.2s";
    loading_container.style.opacity = 0;
  }, 7000);

  loading_container.addEventListener("transitionend", () => {
    loading_container.style.display = "none";
    setTimeout(() => {
      var text_find = document.createElement("p");
      text_find.textContent = "¡Partida encontrada!";
      text_find.style.opacity = 0;
      text_find.style.fontSize = "1em";
      text_find.style.transition = "opacity 0.7s, font-size 0.7s";
      find_container.appendChild(text_find);


      setTimeout(() => {
        text_find.style.opacity = 1;
        text_find.style.fontSize = "2.2em";
      }, 250);
      var telon = document.createElement("div");
      telon.style.position = "fixed";
      telon.style.top = "0";
      telon.style.left = "0";
      telon.style.width = "100%";
      telon.style.height = "0";
      telon.style.background = "rgba(38, 34, 36, 0.9)";
      telon.style.transition = "height 2.2s";
      document.body.appendChild(telon);

      setTimeout(() => {
        telon.style.height = "100vh";
      }, 1700);
      setTimeout(() => {
        window.location.href = "/draft";
        }, 4300);
    }, 400);
  
  });

}

window.addEventListener("load", find_match);