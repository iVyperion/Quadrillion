const levelZoeker = document.querySelectorAll('.level');
levelZoeker.forEach((level) => {
  level.addEventListener('click', () => {
    const levelId = level.id;
    window.location.href = `game.html?level=${levelId}`;
  });
});
