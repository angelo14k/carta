document.addEventListener("DOMContentLoaded", function () {
  // Botón para reproducir música
  const music = document.getElementById("bgmusic");
  const playBtn = document.querySelector(".music-btn");

  if (playBtn && music) {
    playBtn.addEventListener("click", function () {
      music.play();
      playBtn.classList.add("pulse");
      setTimeout(() => {
        playBtn.classList.remove("pulse");
      }, 1000);
    });
  }

  // Animaciones al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  // Mostrar mensaje secreto
  const revealBtn = document.querySelector(".reveal-button");
  const secretMessage = document.querySelector(".secret-message");

  if (revealBtn && secretMessage) {
    revealBtn.addEventListener("click", () => {
      secretMessage.classList.remove("hidden");
      secretMessage.scrollIntoView({ behavior: "smooth" });
    });
  }
});