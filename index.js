

var box = Array.from(document.getElementsByClassName("box"));


var o_player = "O"
var x_player = "X"
cureentPlayer = o_player
winnerZone = []

var areas = [null,null,null,null,null,null,null,null,null,];

function pressBtn(e){
    box.forEach(box =>{
        box.addEventListener("click",boxes)
        
    })
   
}

function boxes(e){
    
    var id = e.target.id;
    if(!areas[id]){
        areas[id] = cureentPlayer;
        e.target.innerHTML = cureentPlayer;

        cureentPlayer = cureentPlayer == o_player ? x_player : o_player;

    }
}

