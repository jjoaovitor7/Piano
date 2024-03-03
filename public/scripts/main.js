const audio_ctx = new (window.AudioContext || window.webkitAudioContext)();
const notes = document.querySelectorAll(".note");

const notes_frequency = {
  "A": 440.0,
  "A#": 466.16,
  "B": 493.88,
  "C": 261.63,
  "C#": 277.18,
  "D": 293.66,
  "D#": 311.13,
  "E": 329.63,
  "F": 349.23,
  "F#": 369.99,
  "G": 392.0,
  "G#": 415.3
}

const play_note = (note) => {
  const oscillator = audio_ctx.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = notes_frequency[note];
  oscillator.connect(audio_ctx.destination);
  oscillator.start();

  setTimeout((_) => {
    oscillator.stop();
  }, 250);
}

notes.forEach((note) => {
  note.addEventListener("click", (e) => {
    play_note(e.target.dataset.note)
  });
  window.addEventListener("keydown", (e) => {
    if (String.fromCharCode(note.dataset.letter.toLowerCase().charCodeAt()) == e.key) {
      note.style.top = '2px';

      setTimeout(() => {
        note.style.top = null;
      }, 256);

      note.click();
    }
  });
});