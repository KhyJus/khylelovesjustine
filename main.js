
const startBtn = document.getElementById('startBtn');
const content = document.getElementById('content');
const bgMusic = document.getElementById('bgMusic');

  startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';   // Hide the button
    content.style.display = 'block';   // Show the flower content
    bgMusic.play();                    // Play the music
  });

onload = () =>{
    document.body.classList.remove("container");
};