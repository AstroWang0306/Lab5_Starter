// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const image = document.querySelector("#expose img");
  //const volume = document.getElementById('volume');
  //const volumeIcon = document.querySelector('#volume-controls img');
  //const playButton = document.querySelector('#expose button');
  //const audio = document.querySelector('.hidden');
  
  hornSelect.addEventListener("change", updateHorn);
  // volume.addEventListener('input', updateVolume);
  // playButton.addEventListener('click', playSound);
  

  
  function updateHorn() {
    //const selectedHorn = hornSelect.value;
    //image.src = "assets/images/${selectedHorn}.svg";
    
    if (hornSelect.value = "air-horn") {
      image.src = "assets/images/air-horn.svg";
    } else if (hornSelect.value = "car-horn") {
      image.src = "assets/images/car-horn.svg";
    } else if (hornSelect.value = "party-horn") {
      image.src = "assets/images/party-horn.svg";
    } else {
      image.src = "assets/images/no-image.png";
    }
    
    //document.querySelector("#expose img").src = "assets/images/${selectedHorn}.svg";
    
  }
}
 


  
  
