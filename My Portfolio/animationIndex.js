
window.onscroll = function() {animationFunction()};

function animationFunction() {
     
    
    //hero animation
    // if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
    // 	document.getElementById("heroAnima").className ="fadeIn";
    // }else{
    // 	document.getElmentById("heroAnima").className ="";
    // }


    //gallary animation
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("galleryAnima").className = "slideUp ";
    } else {
        document.getElementById("galleryAnima").className = "";
    }
    //profile-recommendation animation
     if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.getElementById("profileAnima").className = "fadeIn ";
    } else {
        document.getElementById("profileAnima").className = "";
    }

    //profile-left right animation

    if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
        document.getElementById("profileRight").className = "fadeRight ";
        document.getElementById("profileLeft").className = "fadeLeft ";
    } else {
        document.getElementById("profileRight").className = "";
        document.getElementById("profileLeft").className = "";
    }




}
