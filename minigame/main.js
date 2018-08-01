window.onload = function() {
        let container = document.querySelector('.container') 
        arrayRender(field, container);  
   };


let field = new Array(7);

for (let i = 0; i < field.length; i++) {
    field[i] = new Array(6);
    for (let j = 0; j < field[i].length; j++) {
        field[i][j] = Math.floor(Math.random() * 4);
    }
}

function arrayRender(arr, container) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            count++;
            container.innerHTML += `<div class='cell cell-${arr[i][j]}' id="id-${count}"><img src='./img/${arr[i][j]}.png'></div>`;
        }
    }
    let cells = document.querySelectorAll('.cell');
    cells.forEach(item => item.addEventListener('click', () => findNeighbours(item)));
}


function findNeighbours(target) {
    let num = target.id.slice(3),
        nextElements = [],
        bottomNeighbour = document.querySelector(`#id-${+num + 6}`),
        upperNeighbour  = document.querySelector(`#id-${+num - 6}`),
        rightNeighbour  = document.querySelector(`#id-${+num + 1}`),
        leftNeighbour   = document.querySelector(`#id-${+num - 1}`);

    
    if (bottomNeighbour && bottomNeighbour.classList.value === target.classList.value) {
            nextElements.push(bottomNeighbour);
    }
    if (upperNeighbour && upperNeighbour.classList.value === target.classList.value) {
        nextElements.push(upperNeighbour);
    }
    if (rightNeighbour && rightNeighbour.classList.value === target.classList.value) {
        nextElements.push(rightNeighbour);
    }
    if (leftNeighbour && leftNeighbour.classList.value === target.classList.value) {
        nextElements.push(leftNeighbour);
    }
    // clear current cell
clearCell(target);

    // find and clear neighbours for all others
nextElements.forEach(el => {
    findNeighbours(el);
    clearCell(el);
    });
}

function clearCell(cell) {
    cell.classList = 'cell';
    cell.innerHTML = '';
}

   