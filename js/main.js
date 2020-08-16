// notas
let keys       = document.querySelector(".container").childNodes;
let keysAudios = document.querySelectorAll("audio");
// console.log(keys);
console.log(keysAudios);


function playNote (event) {
    // dó
    if (event.target == keys[1]) {
        keysAudios[0].play();
    }
    // ré
    else if (event.target == keys[3]) {
        keysAudios[1].play();
    }
    // mi
    else if (event.target == keys[5]) {
        keysAudios[2].play();
    }
    // fá
    else if (event.target == keys[7]) {
        keysAudios[3].play();
    }
    //sol
    else if (event.target == keys[9]) {
        keysAudios[4].play();
    }
    //lá
    else if (event.target == keys[11]) {
        keysAudios[5].play();
    }
    else if (event.target == keys[13]) {
        keysAudios[6].play();
    }
}


// clique do teclado
window.addEventListener("keydown", playNote);