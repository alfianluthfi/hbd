document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playMusicBtn");
  const music = document.getElementById("bgMusic");

  playBtn.addEventListener("click", () => {
    music.play();
    playBtn.style.display = "none"; // tombol hilang setelah play
  });
});