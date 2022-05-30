// add more stylings to navbar while scrolling 
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 40){
        nav.classList.add("navbar-moved");
    }
    else{
        nav.classList.remove("navbar-moved");
    }
}

