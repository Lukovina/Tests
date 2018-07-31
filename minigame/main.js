window.onload = function(){  
    let container = document.querySelector(".container"),
        field = new Array(7)

    for(i = 0; i < field.length; i++){
        field[i] = new Array(6);
        for(var j = 0; j < field[i].length; j++){
            field[i][j] = Math.floor(Math.random()*4)
        }
    } 

    function arrayRender(arr){
        let count = 0;
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < arr[i].length; j++){
                container.innerHTML+= `<div class='cell cell-${arr[i][j]}' id="id-${count}"><img src='./img/${arr[i][j]}.png'></div>`  ;
                count++
            }
            container.innerHTML+= "</br>"
        }     
          let cells = document.querySelectorAll(".cell")
          cells.forEach(item=>item.addEventListener("click", ()=>findNeighbours(item)))
    }

    arrayRender(field)

    async function findNeighbours(target){
        let num = target.id.slice(3),
            bottomNeighbour = document.querySelector(`#id-${+num + 6}`),
            upperNeighbour = document.querySelector(`#id-${+num - 6}`),
            rightNeighbour = document.querySelector(`#id-${+num + 1}`),
            leftNeighbour = document.querySelector(`#id-${+num - 1}`);

        if(bottomNeighbour.classList.value == target.classList.value) {
            findNeighbours(bottomNeighbour)
        }
        if(upperNeighbour.classList.value == target.classList.value) {
            findNeighbours(upperNeighbour)
        }
        if(rightNeighbour.classList.value == target.classList.value) {
            findNeighbours(rightNeighbour)
        }
        if(leftNeighbour.classList.value == target.classList.value) {
            findNeighbours(leftNeighbour)
        }
        
        clearCell(target)
    }

    function clearCell(cell) {
        cell.classList = "cell"
        cell.innerHTML = ""
    }

}