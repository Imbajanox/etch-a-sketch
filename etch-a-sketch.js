const size = 100;

let container = document.querySelector("#container");




function createGrid(size){
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add('row');
        row.style.width = size*10 + "px";

        for (let j = 0; j < size; j++) {
            let col = document.createElement("div");
            col.classList.add('col');
            row.appendChild(col);

        }
        container.appendChild(row);
    }
}

createGrid(size);