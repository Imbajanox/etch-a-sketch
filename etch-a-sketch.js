const size = 8;

const sketchPadSize = 960;

let container = document.querySelector("#container");

let button = document.querySelector("button");



button.addEventListener("click", getNewGrid);

function getNewGrid(){
    let newSize = prompt("Enter new grid size!");
    container.replaceChildren();
    createGrid(newSize);
}

function randomColor(){
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
      }
    return 'rgb(' + color.join(', ') + ')';
}

function increaseOpacity(){

}

function createGrid(size){
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add('row');
        row.style.width = sketchPadSize + "px";
        row.style.height = sketchPadSize/size + "px";

        for (let j = 0; j < size; j++) {
            let col = document.createElement("div");
            col.classList.add('col');
            col.style.width = sketchPadSize/size + "px";
            col.style.height = sketchPadSize/size + "px";
            col.style.opacity = 0;
            col.addEventListener("mouseenter", function(){col.style.backgroundColor = randomColor(); (col.style.opacity <= 0.9) ? col.style.opacity = +col.style.opacity + 0.1: col.style.opacity = 1.0;})
            row.appendChild(col);

        }
        container.appendChild(row);
    }
}



createGrid(size);