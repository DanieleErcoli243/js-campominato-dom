// recupero gli elementi dal DOM
const button = document.getElementById("play");
const levelChoice = document.getElementById("level");
const grid = document.getElementById("grid");
const form = document.querySelector("form");
// dichiaro le costanti per determinare il numero totale di celle




// funzioni
// dichiaro una funzione per generare le celle

const startGame = event => {
    event.preventDefault();
    // svuoto la griglia
    grid.innerText = "";
    // funzioni nel gioco
    // funzione che genera la cella
    const createCell = (cellNumber) => {
        // creo la cella la stilizzo colla classe cell
        const cell = document.createElement("div");
        cell.classList.add("cell");
        // metto nella cella il numero che le corrisponde
        cell.append (cellNumber + 1);
        return cell;
    }
    

    // funzione che cambia il colore della cella ed esegue il console.log del numero della cella 
    const onCellClicked = event => {
        // impedisco di ricliccare una cella
        
    }
    // cambio il testo nel bottone
    button.innerText = "Rigioca";
    
    // recupero i valori dei livelli
    const level = levelChoice.value;
    // determino la grandezza delle celle in base al valore
    grid.classList.add(level);
    // determino la quantità di celle in base al value
    let rows = 10;
    let cols = 10;
    switch (level) {
        case "medium":
            rows = 9;
            cols = 9;
            break;
        case "small":
            rows = 7;
            cols = 7;
            break;
            default:
    }
    const totalCells = rows * cols;

    
    // genero le celle
    for (let i = 0; i < totalCells; i++){
        const cell = createCell(i);
        
        // appendo le celle alla griglia
        grid.appendChild(cell);
        // aggancio al click sulle celle il toggle della classe clicked per colorare le suddette
        cell.addEventListener("click", () => {
            if (cell.classList.contains("clicked")) return;
            cell.classList.add("clicked");
            console.log(i);
        });
    }

    // cell.addEventListener ("click", onCellCLicked)
}

form.addEventListener("submit", startGame);