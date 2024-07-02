const gridSize = prompt("How big?");
const container = document.querySelector('.grid-container');

//function to createGrid
document.addEventListener('DOMContentLoaded', function() {
    

    container.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
    
    
    for (let i = 0; i < gridSize*gridSize; i++) {
        const gridSquare = document.createElement('div');
        container.appendChild(gridSquare);

        gridSquare.addEventListener("mouseenter",function(){
            this.style.backgroundColor = `rgb(${setRandomColor()},${setRandomColor()},${setRandomColor()})`;
        });
    }
});

function setRandomColor(){
    return Math.floor(Math.random()*256);
}

