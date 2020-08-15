// notas
let keys = document.querySelector(".container").childNodes;
// console.log(keys);


function playNote (event) {
    // console.log(event);
}


//clique do mouse
for (let key of keys){
    key.addEventListener("click", playNote);
}


// clique do teclado
window.addEventListener("keydown", playNote);