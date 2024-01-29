const gridSize = 500;

let gridDimensions = document.getElementById("gridDimensions").value;
const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${gridSize}px`
sketchArea.style.height = `${gridSize}px`

function createGrid(){
    sketchArea.innerHTML="";
    let gridDimensions = document.getElementById("gridDimensions").value;
    for(let i = 0; i < (gridDimensions * gridDimensions); i++){
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(gridSize/gridDimensions)-2}px`;
        gridCell.style.height = `${(gridSize/gridDimensions)-2}px`;
        gridCell.classList.add("cell");
        gridCell.onmouseover = () => gridCell.style.backgroundColor = "black"

        sketchArea.appendChild(gridCell);


    }
}

function clear(){
    sketchArea.innerHTML="";
}

