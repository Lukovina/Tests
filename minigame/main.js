window.onload = function(){  

    function fillArray(n,m) {
   
        var arr = new Array(n)
    
        for(i = 0; i < arr.length; i++){
            arr[i] = new Array(m);
            for(var j = 0; j < arr[i].length; j++){
                arr[i][j] = Math.floor(Math.random()*4)
            }
        } 
        return arr
    
    }
    
    let field = fillArray(7,6)
    
    function arrayRender(arr){
    
        let container = document.querySelector(".container")
    
    
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < arr[i].length; j++){
                container.innerHTML+= `<div class='cell'>${chooseImg(arr[i][j])}</div>`  ;
            }
            container.innerHTML+= "</br>"
        }
    }

    function chooseImg(number) {
        switch (number) {
            case 0:
                return "<img src='./img/0.png'>"
            case 1:
                return "<img src='./img/1.png'>"
            case 2:
                return "<img src='./img/2.png'>"
            case 3:
                return "<img src='./img/3.png'>"
            default:
              return 0;
          }
    }
    
    arrayRender(field)

}