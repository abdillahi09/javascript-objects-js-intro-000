var playlist = {};
playlist[`Micheal Jackson`] = `Rock My World`

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}