

let slider = document.querySelectorAll(".about__slider");
let images = document.querySelectorAll(".about__slider__images")

let index = 1
setInterval(function () {
    let percentage = index * -100;
    slider.style.transform = "translateX(" + percentage + " %)";
    if (index > (images.length - 1)) {
        index = 0
    }
    index++
}, 1000);
console.log(slider);