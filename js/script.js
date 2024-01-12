// recupero gli elementi dal DOM
const button = document.getElementById("play");
const levelChoice = document.getElementById("level");
const grid = document.querySelector(".grid");
const bigLevel = document.getElementById("big");
const mediumLevel = document.getElementById("medium");
const smallLevel = document.getElementById("small");
// dichiaro la costante col numero totale di cell
const totalCells = 100;

// aggancio la creazione della griglia al click del pulsante

button.addEventListener("click", function () {
    // creo un elemento colla classe cell per 100 volte
    for (let i = 0; i < totalCells; i++){
        const cell = document.createElement("div");
        // metto nella cella il numero che le corrisponde
        cell.innerText = i + 1;
        cell.classList.add("cell");
        // appendo le celle alla griglia
        grid.appendChild(cell);
        // aggancio al click sulle celle il toggle della classe clicked per colorare le suddette
        cell.addEventListener("click", function () {
            cell.classList.toggle("clicked");
            console.log(i + 1);
        })
    }
    
})



levelChoice.addEventListener ("change", function () {
    const levelValue = levelChoice.value;
    console.log(levelValue);
})

