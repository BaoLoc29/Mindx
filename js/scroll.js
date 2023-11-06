function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener("scroll", function () {
    var scrollToTopButton = document.getElementById("scrollToTopBtn");

    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollToTopButton.style.opacity = "1";
    } else {
        scrollToTopButton.style.opacity = "0";
    }
});

window.addEventListener('scroll', function() {
    const headerContainer = document.querySelector('.header-container');
    if (window.scrollY > headerContainer.offsetTop) {
        headerContainer.classList.add('sticky');
    } else {
        headerContainer.classList.remove('sticky');
    }
});
