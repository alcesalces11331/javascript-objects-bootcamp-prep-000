var playlist = {putsomething: 'in here'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromkPlaylist(playlist, artistName) {
  delete playlist.artistName
}