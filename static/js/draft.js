const playerList = [{ "name": "Dibu Martinez", "position": "GK" },
  { "name": "	Júlio César", "position": "GK" },
  { "name": "Fernando Muslera", "position": "GK" },
  { "name": "Sergio Romero", "position": "GK" }];
const positions = document.querySelectorAll('.position');
const playerModal = document.getElementById('player-modal');
const playerListElement = document.getElementById('player-list');

playerList.forEach((player) => {
  const playerListItem = document.createElement('li');
  playerListItem.textContent = player.name;
  playerListItem.dataset.position = player.position;
  playerListElement.appendChild(playerListItem);
});


positions.forEach((position) => {
  position.addEventListener('click', () => {

    playerModal.style.display = 'block';


    playerListElement.addEventListener('click', (event) => {
      const selectedPlayer = event.target.textContent;
      const selectedPosition = event.target.dataset.position;

 
      const positionElement = document.getElementById(selectedPosition);
      if (positionElement) {
        positionElement.textContent = selectedPlayer;


        playerModal.style.display = 'none';
      }
    }, { once: true });
  });
});