const Boardcast = document.querySelector("#boardcast strong");
var time = 2;

//function timing
function Timer(){
time=time+1;
if (time<1000){
    Boardcast.innerHTML="UNDERSTAND THE CAPACITY OF A TEAM";
   Boardcast.setAttribute("style", "color:#673ab7; opacity:1; transition:opacity 3s;");
}
if (time > 1000){
    Boardcast.setAttribute("style", "color:#673ab7; opacity:0;transition:opacity 4s;");
 }


if (time > 2000){
   Boardcast.innerHTML="COOPERATE WITH TEAM PLAYERS.";
   Boardcast.setAttribute("style", "color:#FFED00; opacity:1;transition:opacity 3s;");
}
if (time > 3000){
    Boardcast.setAttribute("style", "color:#FFED00; opacity:0;transition:opacity 4s;");
 }

if (time > 4000){
    Boardcast.innerHTML="SATISFY THE NEEDS FROM USERS AND STOCKHOLDERS";
    Boardcast.setAttribute("style", "color:#FFB801; opacity:1;transition:opacity 3s;");
}
if (time > 5000){
    Boardcast.setAttribute("style", "color:#FFB801; opacity:0;transition:opacity 4s;");
}



if (time > 6000){
    Boardcast.innerHTML="INCREASE EFFICIENCY OF TEAM";
    Boardcast.setAttribute("style", "color:#63FF01; opacity:1; transition:opacity 3s;");
}
if (time > 7000){
    Boardcast.setAttribute("style", "color:#63FF01; opacity:0; transition:opacity 4s;");
}
if (time > 8000){
   time=0;
}

}


//change HTML inner
// Boardcast.innerHTML="Innovative design satisfy users needs";

// console.log("time>10");

// Start the timer:
setInterval(Timer);
