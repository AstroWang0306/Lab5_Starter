// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const image = document.querySelector("#expose img");
  const volume = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("#expose button");
  const audio = document.querySelector(".hidden");
  
  hornSelect.addEventListener("change", updateHorn);
  volume.addEventListener("input", updateVolume);
  playButton.addEventListener("click", playSound);
  
  function updateHorn() {
    if (hornSelect.value == "air-horn") {
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (hornSelect.value == "car-horn") {
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (hornSelect.value == "party-horn") {
      image.src == "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    } else {
      image.src == "assets/images/no-image.png";
    }
  }
  
  function updateVolume() {
  
  }
  
  function playSound() {
  }
}
 


  
  
