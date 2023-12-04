// filter js

$(document).ready(function(){
    $('.filter-items').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'all'){
            $('.post-box').show('1000');
        } else {
            $(".post-box")
            .not("."+ value)
            .hide("1000");
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    // add active to btn
    $('.filter-items').click(function (){
        $(this).addClass("active-filter").sibilings().removeClass("active-filter");
    });
});

// header background change on scrioll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow",window.scrollY > 0);
});