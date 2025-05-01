const lyrics = [
  "Maybe it's the way you say my name",
  "Maybe it's the way you play your game",
  "But it's so good, I've never known anybody like you",
  "But it's so good, I've never dreamed of nobody like you",
  "And I've heard of a love that comes once in a lifetime",
  "And I'm pretty sure that you are that love of mine"
];

const startBtn = document.getElementById('startBtn');
const lyricsContainer = document.getElementById('lyrics');
const audio = document.getElementById('audio');

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  audio.play();
  displayLyrics();
});

function displayLyrics() {
  let lineIndex = 0;
  const lineInterval = 8000; // 8 seconds per line

  function showLine() {
    if (lineIndex >= lyrics.length) return;

    const lineText = lyrics[lineIndex];
    const words = lineText.split(' ');
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line');
    lyricsContainer.appendChild(lineDiv);

    words.forEach((word, i) => {
      const wordSpan = document.createElement('span');
      wordSpan.textContent = word + ' ';
      wordSpan.style.opacity = 0;
      wordSpan.style.transition = 'opacity 0.5s ease';
      lineDiv.appendChild(wordSpan);

      setTimeout(() => {
        wordSpan.style.opacity = 1;
      }, (i * (lineInterval / words.length)));
    });

    lineIndex++;
    setTimeout(showLine, lineInterval);
  }

  showLine();
}
