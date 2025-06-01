const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseOverlay = document.getElementById('surpriseOverlay');
const closeOverlayBtn = document.getElementById('closeOverlay');

surpriseBtn.addEventListener('click', () => {
  surpriseOverlay.classList.remove('hidden');
});

closeOverlayBtn.addEventListener('click', () => {
  surpriseOverlay.classList.add('hidden');
});

// Also close overlay if user clicks outside content
surpriseOverlay.addEventListener('click', (e) => {
  if (e.target === surpriseOverlay) {
    surpriseOverlay.classList.add('hidden');
  }
});
