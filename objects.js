var playlist = {'Astrud Gilberto': 'Corcovado'};

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {artistName : songTitle})
}