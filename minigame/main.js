window.onload = function() {

    let container = document.querySelector('.container'),
        field     = new Array(7);

    for (let i = 0; i < field.length; i++) {
        field[i] = new Array(6);
        for (let j = 0; j < field[i].length; j++) {
        field[i][j] = Math.floor(Math.random() * 4);
        }
    }
   
    function arrayRender(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                container.innerHTML += `
                    <div class='cell cell-${arr[i][j]}' id="id-${count}">
                        <img src='./img/${arr[i][j]}.png'>
                    </div>`;
                count++;
            }
        container.innerHTML += '</br>';
    }

let cells = document.querySelectorAll('.cell');
cells.forEach(item => item.addEventListener('click', () => findNeighbours(item)));
}
   
    arrayRender(field);
   
    function findNeighbours(target) {
        let num          = target.id.slice(3);
        let nextElements = [];

        let bottomNeighbour = document.querySelector(`#id-${+num + 6}`);
            if (bottomNeighbour && bottomNeighbour.classList.value === target.classList.value) {
            nextElements.push(bottomNeighbour);
        }
        let upperNeighbour = document.querySelector(`#id-${+num - 6}`);
            if (upperNeighbour && upperNeighbour.classList.value === target.classList.value) {
            nextElements.push(upperNeighbour);
        }
        let rightNeighbour = document.querySelector(`#id-${+num + 1}`);
            if (rightNeighbour && rightNeighbour.classList.value === target.classList.value) {
            nextElements.push(rightNeighbour);
        }
        let leftNeighbour = document.querySelector(`#id-${+num - 1}`);
            if (leftNeighbour && leftNeighbour.classList.value === target.classList.value) {
            nextElements.push(leftNeighbour);
        }
     // clear current cell
     clearCell(target);
   
     // find and clear neighbours for all others
    nextElements.forEach(el => {
        findNeighbours(el);
        clearCell(el)
        });
    }
   
    function clearCell(cell) {
        cell.classList = 'cell';
        cell.innerHTML = '';
    }
   
};

