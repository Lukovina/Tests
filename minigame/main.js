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

    function findNeighbours(target){
        console.log(target)
        let num = target.id.slice(3);
        let bottomNeighbour = document.querySelector(`#id-${+num + 6}`)
        let upperNeighbour = document.querySelector(`#id-${+num - 6}`)
        let rightNeighbour = document.querySelector(`#id-${+num + 1}`)
        let leftNeighbour = document.querySelector(`#id-${+num - 1}`)

        if(bottomNeighbour.classList.value == target.classList.value) {
            if(bottomNeighbour){findNeighbours(bottomNeighbour)}
            clearCell(bottomNeighbour);
        }
        if(upperNeighbour.classList.value == target.classList.value) {
            if(upperNeighbour){findNeighbours(upperNeighbour)}
            clearCell(upperNeighbour);
        }
        if(rightNeighbour.classList.value == target.classList.value) {
            if(rightNeighbour){findNeighbours(rightNeighbour)}
            clearCell(rightNeighbour);
        }
        if(leftNeighbour.classList.value == target.classList.value) {
            if(leftNeighbour){findNeighbours(leftNeighbour)}
            clearCell(leftNeighbour);
        }
        
        clearCell(target)
    }

    function clearCell(cell) {
        // target.classList = "cell"
        cell.innerHTML = ""
        console.dir(cell)
    }


    
    arrayRender(field)

}