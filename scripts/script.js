

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

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
(function () {
    var setting = { "height": 557, "width": 803, "zoom": 17, "queryString": "Avenida Descubrimientos, Torrejón de Ardoz, España", "place_id": "EjRBdmVuaWRhIERlc2N1YnJpbWllbnRvcywgVG9ycmVqw7NuIGRlIEFyZG96LCBFc3Bhw7FhIi4qLAoUChIJ-YCZwEs2Qg0RWK6tJstJLtwSFAoSCbdmXpcbN0INEY6tEPU-UBdJ", "satellite": false, "centerCoord": [40.46513631354637, -3.4516709999999895], "cid": "0xdc2e49cb26adae58", "lang": "es", "cityUrl": "/spain/madrid", "cityAnchorText": "Mapa de Madrid, Comunidad de Madrid, España", "id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3", "embed_id": "931158" };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=931158';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();