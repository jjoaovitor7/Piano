// notas
let keys = document.querySelector(".container").childNodes;
// console.log(keys);


function playNote (event) {
    // dó
    if (event.target == keys[1]) {
        console.log(event.target);
    }
    // ré
    else if (event.target == keys[3]) {
        console.log(event.target);
    }
    // mi
    else if (event.target == keys[5]) {
        console.log(event.target);
    }
    // fá
    else if (event.target == keys[7]) {
        console.log(event.target);
    }
    //sol
    else if (event.target == keys[9]) {
        console.log(event.target);
    }
    //lá
    else if (event.target == keys[11]) {
        console.log(event.target);
    }
    else if (event.target == keys[13]) {
        console.log(event.target);
    }
}


// clique do teclado
window.addEventListener("keydown", playNote);