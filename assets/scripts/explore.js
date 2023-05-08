// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const image = document.querySelector("#explore img");
  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const audio = document.querySelector("#explore button");
 
  const synth = window.speechSynthesis;
  
  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();
console.log("123");
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = "${voices[i].name} (${voices[i].lang})";

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
console.log(voices[i].lang);
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
}
