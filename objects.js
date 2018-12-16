var playlist = {'Astrud Gilberto': 'Corcovado'};

function updatePlaylist (aplaylist, artistName, songTitle) {
  return Object.assign({}, aplaylist, {artistName : songTitle})
}