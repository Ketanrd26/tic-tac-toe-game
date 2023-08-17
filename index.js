
// add function from  html
var winner = document.getElementById("p1")
var headerText = document.getElementsByClassName("header-text");
var box = Array.from(document.getElementsByClassName("box"));



// create null array

var areas = [null, null, null, null, null, null, null, null, null];

//asign players

var o_player = "O";
var x_player = "X";
var currentPlayer = o_player;
var winnerZone = [];


//forEachLoop as a sepearte div

function blindClick(e){
    box.forEach(box =>{
            box.addEventListener("click",boxClick);

    })
   
}



function boxClick(e){
    var id = e.target.id;
    if(!areas[id]){
        areas[id] = currentPlayer;
        e.target.innerHTML = currentPlayer;
        if(playerWon(currentPlayer)){
            winner.innerHTML= `${currentPlayer} has won`
            
            return
        }
        currentPlayer = currentPlayer === o_player ? x_player : o_player;
       
        
    }


}

//FUNCTION TO CHECK WIN

    function playerWon(cplayer) {
    if(areas[0]=== cplayer){
    }
    if(areas[1] === cplayer && areas[2] === cplayer){
        winnerZone[0,1,2];
        return true;
    }
  
    if(areas[3] === cplayer && areas[6] === cplayer){
        winnerZone[0,3,6];
        return true;
    }
    if(areas[4]=== cplayer){
         if(areas[3] === cplayer && areas[5] === cplayer){
            winnerZone[3,4,5];
            return true ;
         }
         if(areas[1] === cplayer && areas[7] === cplayer){
            winnerZone[1,4,7];
            return true ;
         }
         if(areas[0] === cplayer && areas[8] === cplayer){
            winnerZone[0,4,8];
            return true;
        }
         if(areas[2] === cplayer && areas[6] === cplayer){
            winnerZone[2,4,6];
            return true ;
         }
         

    }
    if(areas[8]=== cplayer){
        if(areas[6] === cplayer && areas[7] === cplayer){
         winnerZone[6,7,8];
         return true ;
        }
        if(areas[2] === cplayer && areas[5] === cplayer){
         winnerZone[2,5,8];
         return true ;
        }
    }
}

function reset(){
    var reset = document.getElementById("resetBtn");
    winnerZone = [];
    areas.forEach((val, index) =>{
        areas[index] = null;
    })
    box.forEach(box => {
        box.innerHTML = "";
        currentPlayer = o_player
        winner.innerHTML = "";
    })
    
}







