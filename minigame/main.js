window.onload = function(){  
    let container = document.querySelector(".container")

    let field = new Array(7)

    for(i = 0; i < field.length; i++){
        field[i] = new Array(6);
        for(var j = 0; j < field[i].length; j++){
            field[i][j] = Math.floor(Math.random()*4)
        }
    } 

    function arrayRender(arr){
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < arr[i].length; j++){
                container.innerHTML+= `<div class='cell cell-${arr[i][j]}'><img src='./img/${arr[i][j]}.png'></div>`  ;
            }
            container.innerHTML+= "</br>"
        }     
          let cells = document.querySelectorAll(".cell")
          cells.forEach(item=>item.addEventListener("click", clearCell))
    }

    function clearCell() {
        this.classList = "cell"
        this.innerHTML = ""
        console.dir(this)
    }


    
    arrayRender(field)

}