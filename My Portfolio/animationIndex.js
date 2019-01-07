
window.onscroll = function() {animationFunction()};

function animationFunction() {
     
    
    //hero animation
    // if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
    // 	document.getElementById("heroAnima").className ="fadeIn";
    // }else{
    // 	document.getElmentById("heroAnima").className ="";
    // }


    //gallary animation
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("galleryAnima").className = "slideUp ";
        document.getElementById("galleryAnima").style.opacity = "1";
    } else {
        document.getElementById("galleryAnima").className = "";
        document.getElementById("galleryAnima").style.opacity = "0";
    }
    //profile-recommendation animation
     if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.getElementById("profileAnima").className = "fadeIn ";
        document.getElementById("profileAnima").style.opacity = "1";

    } else {
        document.getElementById("profileAnima").className = "";
        document.getElementById("profileAnima").style.opacity = "0";
    }

    //profile-left right animation

    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
        document.getElementById("profileRight").className = "fadeRight ";
        document.getElementById("profileLeft").className = "fadeLeft ";
        document.getElementById("profileRight").style.opacity = "1";
        document.getElementById("profileLeft").style.opacity = "1";

    } else {
        document.getElementById("profileRight").className = "";
        document.getElementById("profileLeft").className = "";
        document.getElementById("profileRight").style.opacity = "0";
        document.getElementById("profileLeft").style.opacity = "0";
    }




}
