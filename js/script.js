document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields');
            } else {
                alert('Thank you for your message!');
                contactForm.reset();
            }
        });
    }
});

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth = imageList.clientWidth;
// thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPostion = scrollbarThumb.offsetLeft;
// updating mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPostion + deltaX;
const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
const scrollPosition = (boundedPosition /maxThumbPosition)* maxScrollLeft;
            scrollbarThumb.style.left = `${boundedPosition}px`;
imageList.scrollLeft = scrollPosition;
        }
        const handleMouseUp = () => {

            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);

        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    // sliding images according to button clicks
    slideButtons.forEach(button =>{
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
    });
});

const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
}
const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPostion = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left =`${thumbPostion}px`;
}

imageList.addEventListener("scroll", () =>{
    handleSlideButtons();
    updateScrollThumbPosition();
});
}

window.addEventListener("load", initSlider)