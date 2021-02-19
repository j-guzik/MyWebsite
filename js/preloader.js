$(document).ready(function () {
    // Preloader 
    preloaderFadeOutTime = 50;
    function hidePreloader() {
        var preloader = $('. spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});
