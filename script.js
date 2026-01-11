document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  music.volume = 1;

  // 1️⃣ COBA AUTOPLAY SAAT LOAD
  const playMusic = () => {
    music.play().catch(() => {
      // gagal autoplay → ditangani di bawah
    });
  };

  playMusic();

  // 2️⃣ FALLBACK: nyala saat ADA INTERAKSI APA PUN
  const enableAudio = () => {
    playMusic();
    document.removeEventListener("click", enableAudio);
    document.removeEventListener("scroll", enableAudio);
    document.removeEventListener("touchstart", enableAudio);
  };

  document.addEventListener("click", enableAudio);
  document.addEventListener("scroll", enableAudio);
  document.addEventListener("touchstart", enableAudio);
});
