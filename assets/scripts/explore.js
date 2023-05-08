// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.getElementById('speak-button');
  const textInput = document.getElementById('text-to-speak');
  const face = document.getElementById('face');
  const playButton = document.querySelector("#expose button");
  
  // Function to populate the "Select Voice" dropdown with available voices
  function populateVoices() {
    const voices = speechSynthesis.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }
  
  populateVoices();
  
  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  
  function speakText() {
    const selectedVoice = voiceSelect.value;
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const voices = speechSynthesis.getVoices();
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
      utterance.onstart = () => {
        toggleFace(true);
      };
      utterance.onend = () => {
        toggleFace(false);
      };
      speechSynthesis.speak(utterance);
    }
  }
  
  playButton.addEventListener('click', speakText);
}
