// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get references to the necessary elements
  var hornSelect = document.getElementById('horn-select');
  var volumeSlider = document.getElementById('volume-slider');
  var audioElement = document.getElementById('horn-sound');
  var volumeIcon = document.getElementById('volume-image');
  var honkButton = document.getElementById('honk-btn');

  // Add event listeners
  hornSelect.addEventListener('change', updateHorn);
  volumeSlider.addEventListener('input', updateVolume);
  honkButton.addEventListener('click', playSound);

  // Function to update the displayed image and sound file based on the selected horn
  function updateHorn() {
    var hornImage = document.getElementById('sound-image');
    var hornSelection = hornSelect.value;

    // Update the image source based on the selected horn
    hornImage.src = 'assets/images/' + hornSelection + '.svg';

    // Update the sound file based on the selected horn
    audioElement.src = 'assets/audio/' + hornSelection + '.mp3';
}
  
function updateVolume() {
    var volumeLevel = Number(volumeSlider.value);

    // Update the volume level for the audio element
    audioElement.volume = volumeLevel / 100;

    // Update the volume icon based on the volume level
    if (volumeLevel == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume Level 0';
    } else if (volumeLevel < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume Level 1';
    } else if (volumeLevel < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume Level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume Level 3';
    }
  }
