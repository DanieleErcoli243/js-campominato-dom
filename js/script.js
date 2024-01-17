// recupero gli elementi dal DOM
const button = document.getElementById("play");
const levelChoice = document.getElementById("level");
const grid = document.getElementById("grid");
const form = document.querySelector("form");
const scoreCounter = document.querySelector("strong");

// funzioni
// dichiaro una funzione per generare le celle

const startGame = event => {
    event.preventDefault();
    // svuoto la griglia
    grid.innerText = "";
    // creo un flag per determinare la fine del gioco
    let isGameOver = false;
    // funzioni nel gioco
    // funzione che genera la cella
    const createCell = cellNumber => {
        // creo la cella la stilizzo colla classe cell
        const cell = document.createElement("div");
        cell.classList.add("cell");
        // metto nella cella il numero che le corrisponde
        cell.append (cellNumber + 1);
        return cell;
    }

    const generateBombs = (maxNumber, totalBombs) => {
        const bombs = [];
        while (bombs.length < totalBombs) {
            const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
            if (!bombs.includes(randomNumber))bombs.push(randomNumber); 
            
        }
        return bombs;
    }

    const endGame = (score, hasWon = false) =>{
        const message = hasWon 
        ? `Hai vinto. Hai totalizzato ${score} punti` 
        :`Hai perso. Hai totalizzato ${score} punti`;

        isGameOver = true;    
        const restart = confirm(message);
        if (restart) form.submit;
        revealAllCells();
    } 

    const revealAllCells = () => {
        const cells = document.querySelectorAll(".cell");
        for (let cell of cells) {
            cell.classList.add("clicked");
        }
    }
    
    
    // cambio il testo nel bottone
    button.innerText = "Rigioca";
    
    // recupero i valori dei livelli
    const level = levelChoice.value;
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
    }
        
        // determino la grandezza delle celle in base al valore
        const root = document.querySelector(":root");
        root.style.setProperty("--cols-per-row", cols);
        const totalCells = rows * cols;
        let score = 0;
        scoreCounter.innerText = score;

        // preparo le informazioni utili per le bombe
        const totalBombs = 1;
        const maxScore = totalCells -totalBombs;
        const bombs = generateBombs(totalCells, totalBombs)
        console.log(bombs);
        // genero le celle
        for (let i = 0; i < totalCells; i++){
        const cell = createCell(i);
        
        
        
        // aggancio al click sulle celle l'aggiunta della classe clicked per colorare le suddette
        cell.addEventListener("click", () => {
           
            // impedisco di ricliccare una cella
            if (isGameOver || cell.classList.contains("clicked")) return;
            cell.classList.add("clicked");
            console.log(i);
            // controllo se la cella cliccata sia una bomba
            const isCellBomb = bombs.includes(i + 1);
            if(isCellBomb) {
                cell.classList.add("bomb");
                endGame (score, false);
            } else {
                scoreCounter.innerText = ++score;
            }

            // controllo se l'utente abbia vinto
            if (score === maxScore) {
                endGame (score, true);
            }

           
        });
        // appendo le celle alla griglia
        grid.appendChild(cell);
    }

    // cell.addEventListener ("click", onCellCLicked)
}

form.addEventListener("submit", startGame);