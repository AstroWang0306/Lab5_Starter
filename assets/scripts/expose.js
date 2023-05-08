// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  var hornSelect = document.getElementById("horn-select");
  var image = document.querySelector("#expose img");
  var volume = document.getElementById("volume");
  var volumeIcon = document.querySelector("#volume-controls img");
  var playButton = document.querySelector("#expose button");
  var audio = document.querySelector(".hidden");
  
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
}
 


  
  
