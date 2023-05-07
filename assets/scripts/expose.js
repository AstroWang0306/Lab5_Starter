// expose.js

window.addEventListener('DOMContentLoaded', init);

// Get necessary elements
const hornSelect = document.getElementById('horn-select');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-image');
const soundImage = document.getElementById('sound-image');
const audioElement = document.getElementById('audio');
const playButton = document.getElementById('honk-btn');

// Define horn options and their corresponding files
const hornOptions = [
  { name: 'Air Horn', image: '/assets/image/air-horn.svg', sound: '/assets/audio/air-horn.mp3' },
  { name: 'Car Horn', image: '/assets/image/car-horn.svg', sound: '/assets/audio/car-horn.mp3' },
  { name: 'Party Horn', image: '/assets/image/party-horn.svg', sound: '/assets/audio/party-horn.mp3' }
];

// Initialize the app
function init() {
  // Populate horn options in the select menu
  hornOptions.forEach((option, index) => {
    const optionElement = document.createElement('option');
    optionElement.value = index;
    optionElement.text = option.name;
    hornSelect.appendChild(optionElement);
  });

  // Add event listeners
  hornSelect.addEventListener('change', updateHorn);
  volumeSlider.addEventListener('input', updateVolume);
  playButton.addEventListener('click', playSound);

  // Set initial state
  updateHorn();
  updateVolume();
}

// Update the selected horn
function updateHorn() {
  const selectedHorn = hornOptions[hornSelect.value];
  soundImage.src = selectedHorn.image;
  audioElement.src = selectedHorn.sound;
}

// Update the volume
function updateVolume() {
  const volume = volumeSlider.value;
  audioElement.volume = volume / 100;

  // Update volume icon based on volume level
  if (volume >= 67) {
    volumeIcon.src = '/assets/icon/volume-level-3.svg';
  } else if (volume >= 33) {
    volumeIcon.src = '/assets/icon/volume-level-2.svg';
  } else if (volume >= 1) {
    volumeIcon.src = '/assets/icon/volume-level-1.svg';
  } else {
    volumeIcon.src = '/assets/icon/volume-level-0.svg';
  }
}

// Play the selected sound
function playSound() {
  audioElement.play();

  if (hornSelect.value === '2') {
    // Party Horn selected, trigger confetti
    confetti.start();
  }
}

  
  
