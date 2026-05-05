let mybutton = document.getElementById("backToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

function displayCV() {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main-portfolio").style.display = "block";
    
    let today = new Date();
    document.getElementById("dateDisplay").innerHTML = "Date of Access: " + today.toDateString();
}