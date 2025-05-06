document.addEventListener("DOMContentLoaded", function () {
    const textSlides = document.querySelectorAll(".slide");
    if (textSlides.length === 0) {
        console.error("Слайды не найдены. Убедитесь, что HTML содержит элементы с классом .slide.");
        return;
    }

    let currentSlide = 0;

    function changeTextSlide() {
        textSlides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % textSlides.length;

        textSlides[currentSlide].classList.add("active");
    }

    setInterval(changeTextSlide, 3000);

    textSlides[currentSlide].classList.add("active");
});
