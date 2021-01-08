// notas
const mainKeys = document.querySelectorAll(".main-note");
const subKeys = document.querySelectorAll(".sub-note");

function playNote(event) {
  //mouse
  // dó
  if (event.target == mainKeys[0]) {
    playTone(261, "sine", 0.5);
  }

  // dó sustenido
  else if (event.target == subKeys[0]) {
    playTone(277.2, "sine", 0.5);
  }

  // ré
  else if (event.target == mainKeys[1]) {
    playTone(293.7, "sine", 0.5);
  }

  // ré sustenido
  else if (event.target == subKeys[1]) {
    playTone(311.1, "sine", 0.5);
  }

  // mi
  else if (event.target == mainKeys[2]) {
    playTone(329.6, "sine", 0.5);
  }

  // fá
  else if (event.target == mainKeys[3]) {
    playTone(349.2, "sine", 0.5);
  }

  // fá sustenido
  else if (event.target == subKeys[2]) {
    playTone(370.0, "sine", 0.5);
  }

  // sol
  else if (event.target == mainKeys[4]) {
    playTone(392.0, "sine", 0.5);
  }

  // sol sustenido
  else if (event.target == subKeys[3]) {
    playTone(466.2, "sine", 0.5);
  }

  // lá
  else if (event.target == mainKeys[5]) {
    playTone(440.0, "sine", 0.5);
  }

  // lá sustenido
  else if (event.target == subKeys[4]) {
    playTone(466.2, "sine", 0.5);
  }

  // si
  else if (event.target == mainKeys[6]) {
    playTone(493.9, "sine", 0.5);
  }

  //   //teclado
  //   // dó
  //   if (event.key == "c") {
  //     playTone(261, "sine", 0.5);
  //   }

  //   // ré
  //   else if (event.key == "d") {
  //     playTone(293.7, "sine", 0.5);
  //   }

  //   // mi
  //   else if (event.key == "e") {
  //     playTone(329.6, "sine", 0.5);
  //   }

  //   // fá
  //   else if (event.key == "f") {
  //     playTone(349.2, "sine", 0.5);
  //   }

  //   // sol
  //   else if (event.key == "g") {
  //     playTone(392.0, "sine", 0.5);
  //   }

  //   // lá
  //   else if (event.key == "a") {
  //     playTone(440.0, "sine", 0.5);
  //   }

  //   // si
  //   else if (event.key == "b") {
  //     playTone(493.9, "sine", 0.5);
  //   }
  else {
    return 0;
  }
}

//clique do mouse
for (let key of mainKeys) {
  key.addEventListener("click", playNote);
}

//clique do mouse
for (let key of subKeys) {
  key.addEventListener("click", playNote);
}

// // clique do teclado
// window.addEventListener("keydown", playNote);
