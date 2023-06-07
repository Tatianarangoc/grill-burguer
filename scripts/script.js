/*Función que controla el carrusel de imagenes*/

let images = document.querySelectorAll(".about__slider__images")

let index = 0
setInterval(function () {

    if (index > (images.length - 1)) {
        index = 0
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[index].style.display = "block";

    index++;

}, 2000);


/*--------------- función que genera el menu hamburguesa en dispositivos de telefónos y tablets ------*/

const icon = document.querySelector(".icon");
icon.addEventListener("click", (e) => {
    e.preventDefault();
    menu_navegacion();

})

function menu_navegacion() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}


/*------------------------Evento que valida el formulario-------------------*/

const btn = document.querySelector(".container__form__btn");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    required_info()




})
function required_info() {
    const nombre = document.getElementById("nombre")
    const email = document.getElementById("email")
    const tel = document.getElementById("tel")
    const text = document.getElementById("text")
    if (nombre.value === "" || email.value === "" || tel.value === "" || text.value === "") {
        document.querySelector(".msj").innerHTML = "Debe rellenar todos los campos"
    } else {
        document.querySelector(".msj").innerHTML = ""
        document.querySelector(".text").innerHTML = "Hemos recibido su mensaje, muy pronto confirmaremos su reserva";
        document.querySelector(".text").style.background = "#000"
    }

}