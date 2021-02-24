// change menu appearance

var header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0)
})

// mobile menu

$(".menu-circle").on("click", function () {
    $(this).toggleClass("active");
    $('body , html').toggleClass("stop-scroll");
})

// burger.addEventListener("click", function () {
//     burger.classList.toggle("active");
//     // document.body.style.overflow("hidden");
//     document.body.classList.toggle('lock-scroll');




// $(window).resize(function () {//begin resize event


//     //get the window width
//     var winWidth = $(window).width();

//     //set the maxWidth
//     var maxWidth = 1000;


//     //if the window width is less than maxWidth pixels
//     if (winWidth < maxWidth) {//begin if then

//         //add the class hidden to .jobFilter         
//         $(header).addClass("sticky");

//     }
//     else {

//         //remove the class hidden                 
//         $(header).removeClass("sticky");


//     }//end if then else


// });
















// var textWrapper = document.querySelector('.letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline(1)
//     .add({
//         targets: '.letters .letter',
//         opacity: [0, 1],
//         easing: "easeInOutQuad",
//         duration: 2250,
//         delay: (el, i) => 150 * (i + 1)
//     });


// jesli szerokosc okna mniejsza niz 1000 dodaj do header sticky






// loader:

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += "hidden";
})



//modal:
$('.button-video, i.close').on('click', function () {
    $(".modal-wrap").toggleClass("active");
    $('body , html').toggleClass("stop-scroll");
})

var video = document.querySelector('.video');
function pauseVideo() {
    video.pause();
}
s
$('i.close').on('click', pauseVideo);

// PAUZA DZIALA TYLKO JAK JEST JEDNE ROZWIAZ TO IFEM CZY CZYMS< DODATKOWYMI KLASAMi