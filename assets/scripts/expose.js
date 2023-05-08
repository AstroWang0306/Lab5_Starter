// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose img');
  const volume = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audio = document.querySelector('.hidden');
  
  hornSelect.addEventListener("change", updateHorn);
  // volume.addEventListener('input', updateVolume);
  // playButton.addEventListener('click', playSound);
  

  
  function updateHorn(image) {
    const selectedHorn = hornSelect.value;
    image.src = "assets/images/${selectedHorn}.svg"
    
    if (selectedHorn.value == "air-horn") {
      image.src = "assets/images/air-horn.svg";
    } else if (selectedHorn == "car-horn") {
      image.src = "assets/images/car-horn.svg";
    } else if( {
      image.src = 'assets/images/party-horn.svg
    }
    
    //image.src = `assets/images/${selectedHorn}.svg`;
    //audio.src = `assets/audio/${selectedHorn}.mp3`;
  }
}
 


  
  
