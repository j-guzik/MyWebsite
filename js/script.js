// change menu appearance

var header = document.querySelector('header');

    // if ($(window).width() >= 984) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('sticky', window.scrollY > 0)
        })
    // }


// function checkWidth(init)
// {
//     /*If browser resized, check width again */
//     if ($(window).width() < 984) {
//         $('header').addClass('sticky');
//     }
//     else {
//         if (!init) {
//             $('header').removeClass('sticky');
//         }
        
//     }
// }

// $(document).ready(function() {
//     checkWidth(true);

//     $(window).resize(function() {
//         checkWidth(false);
//     });
// });



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
// setTimeout(function () { $(".loader").fadeOut("slow"); }, 5000);



//modal:
$('.button-video, i.close').on('click', function () {
    $(".modal-wrap").toggleClass("active");
    $('body , html').toggleClass("stop-scroll");
})

var video = document.querySelector('.video');
function pauseVideo() {
    video.pause();
}

$('i.close').on('click', pauseVideo); // PAUZA DZIALA TYLKO JAK JEST JEDNE ROZWIAZ TO IFEM CZY CZYMS< DODATKOWYMI KLASAMi







$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);


    const $technologies = $('.technologies');
    const $infoabout = $('.info-about');
    const $about = $('.about');
    const aboutFromTop = $about.offset().top;
    const aboutHeight = $about.outerHeight(true);

    if (scrollValue > aboutFromTop + aboutHeight - windowHeight) {
        $infoabout.addClass('active');
        $technologies.addClass('active');
    }

    if (scrollValue < 100) {
        $infoabout.removeClass('active');
    }

})




// typing:

const box = document.querySelector('.typing');
const text = ["Hi! I'm Justyna!", "I'm Frontend Developer.", "Below you will find some information about me and my projects.", " "];
let wordIndex = 0;
let oldTime = 0;
const speed = 100;
let textIndex = 0;
let activeDOMElement = box;

const typing = (newTime) => {

    if(newTime - oldTime > speed){
        if(wordIndex === text[textIndex].length){
            if(textIndex === text.length-1){
                return;
            }

            return setTimeout(() => {
            // box.textContent = " ";
            textIndex++;
            wordIndex = 0;
            requestAnimationFrame(typing);
        }, 1000)

        } else if(wordIndex===0){
            const p = document.createElement('p');
            box.appendChild(p);
            activeDOMElement = p;
        }

        oldTime = newTime;
        const letter = text[textIndex].substr(wordIndex, 1);
        activeDOMElement.textContent += letter;
        wordIndex++;
    }

    requestAnimationFrame(typing);
}

typing();