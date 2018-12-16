var playlist = {'Astrud Gilberto': 'Corcovado'};

function updatePlaylist (playlist, artistName, songTitle) {
  newPlaylist = Object.assign(playlist, {artistName : songTitle})
  return newPlaylist
}