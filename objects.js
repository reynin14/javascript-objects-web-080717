var playlist = {
  Slowdive: "My Bloody Valentine"
}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = [songTitle]

  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]

  return playlist;
}
