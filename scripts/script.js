

let images = document.querySelectorAll(".about__slider__images")

let index = 0
setInterval(function () {
    //let percentage = index * -100;
    if (index > (images.length - 1)) {
        index = 0
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[index].style.display = "block";
    //images[index].style.transform = "translateX(" + percentage + " %)";
    //images[index].style.transform = `translateX(${index * 100}%)`;
    index++;
    /*images.forEach((image, indx) => {
        image.style.transform = `translateX(${indx * 100}%)`;
    });*/
    /*var i;

    var images = document.querySelectorAll(".about__slider__images")
    if (index > images.length) { slideIndex = 1 }
    if (index < 1) { slideIndex = images.length }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[slideIndex - 1].style.display = "block";
    index++;*/
}, 2000);