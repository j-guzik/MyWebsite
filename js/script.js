var header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0)
})

const burger = document.querySelector(".menu-circle");
burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    // document.body.style.overflowY("hidden");



    //jak zrobic zeby kazde SelectorAll petla?

    var textWrapper = document.querySelector('.letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline(1)
        .add({
            targets: '.letters .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i + 1)
        });
})

// jesli szerokosc okna mniejsza niz 1000 dodaj do header sticky
