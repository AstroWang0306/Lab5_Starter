// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  var hornSelect = document.getElementById("horn-select");
  var image = document.querySelector("#expose img");
  //const volume = document.getElementById('volume');
  //const volumeIcon = document.querySelector('#volume-controls img');
  //const playButton = document.querySelector('#expose button');
  //const audio = document.querySelector('.hidden');
  
  hornSelect.addEventListener("change", updateHorn);
  // volume.addEventListener('input', updateVolume);
  // playButton.addEventListener('click', playSound);
  

  
  function updateHorn() {
    //const selectedHorn = hornSelect.value;
    
    if (hornSelect.value = "air-horn") {
      image.src = "/assets/images/air-horn.svg";
    }
    
    //document.querySelector("#expose img").src = "assets/images/${selectedHorn}.svg";
    
  }
}
 


  
  
