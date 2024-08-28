const playerList = [{ "name": "Dibu Martinez", "position": "GK" },
  { "name": "Sergio Ramos", "position": "DEF" },
  { "name": "Luka Modrić", "position": "MID" },
  { "name": "Kylian Mbappé", "position": "STRIKER" }];
const positions = document.querySelectorAll('.position');
const playerModal = document.getElementById('player-modal');
const playerListElement = document.getElementById('player-list');

// Render player list in modal
playerList.forEach((player) => {
  const playerListItem = document.createElement('li');
  playerListItem.textContent = player.name;
  playerListItem.dataset.position = player.position;
  playerListElement.appendChild(playerListItem);
});

// Add event listeners to positions
positions.forEach((position) => {
  position.addEventListener('click', () => {
    // Show modal with player list
    playerModal.style.display = 'block';

    // Add event listener to player list items
    playerListElement.addEventListener('click', (event) => {
      const selectedPlayer = event.target.textContent;
      const selectedPosition = event.target.dataset.position;

      // Update the corresponding position on the football field
      document.getElementById(selectedPosition).textContent = selectedPlayer;

      // Hide modal
      playerModal.style.display = 'none';
    });
  });
});