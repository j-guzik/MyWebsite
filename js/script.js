// typing

const box = document.querySelector('.typing');
const text = ["Hi! I'm Justyna!", "I'm a Frontend Developer and a master's student in Computer Science.", "Below you will find some information about me and my projects.", " "];
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


// change menu appearance

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})


// stop page scrolling

function stopScroll(){
    $('body , html').toggleClass("stop-scroll");
}


// mobile menu

function toggleMenu(){
    $(".menu-circle").toggleClass("active");
}

function menu(){
    toggleMenu();
    $('body , html').removeClass("stop-scroll");
}

function circleMenu(){
    toggleMenu();
    stopScroll();
}


// animation when hovering over the menu

function bubbles() {
    $.each($(".bubbles"), function(){
       const count = ($(this).width()/60)*10;
       for(let i = 0; i <= count; i++) {
          const colors = ["#9745FC", "#54E6F1"];
          const size = ($.rnd(40,80)/9);
          const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          $(this).append('<span class="bubble" style="top:' + $.rnd(0,95) + '%; left:' + $.rnd(0,97) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,20)/10) + 's;background-color:' + backgroundColor +';"></span>');
       }
    });
 }

 jQuery.rnd = function(m,n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}

bubbles();


// scrolling the page to the appropriate section

$('li a').on('click', function () {
    const goToSection = '#' + $(this).attr('data-section');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})


//modal

$('.button-video-recomm, i.closeRecomm').on('click', function () {
    $("#recommMovie").toggleClass("active");
    stopScroll();
});

$('.button-video-museum, i.closeMuseum').on('click', function () {
    $("#museumManagement").toggleClass("active");
    stopScroll();
});

$('.button-video-python, i.closePython').on('click', function () {
    $("#pythonGame").toggleClass("active");
    stopScroll();
});

$('.button-video-cafe, i.closeCafeWeb').on('click', function () {
    $("#cafeWeb").toggleClass("active");
    stopScroll();
});

$('.button-video-bills, i.closeBillsSplitter').on('click', function () {
    $("#billsSplitter").toggleClass("active");
    stopScroll();
});

$('i.closeRecomm').on('click', function () {
    const videoRecommMovie = document.querySelector('#videoRecommMovie');
    videoRecommMovie.pause();
});

$('i.closeMuseum').on('click', function () {
    const videoMuseumManagement = document.querySelector('#videoMuseumManagement');
    videoMuseumManagement.pause();
});

$('i.closePython').on('click', function () {
    const videoPythonGame = document.querySelector('#videoPythonGame');
    videoPythonGame.pause();
});

$('i.closeCafeWeb').on('click', function () {
    const videoCafeWeb = document.querySelector('#videoCafeWeb');
    videoCafeWeb.pause();
});

$('i.closeBillsSplitter').on('click', function () {
    const videoBillsSplitter = document.querySelector('#videoBillsSplitter');
    videoBillsSplitter.pause();
});