/*First Slideshow*/
var slideIndex3 = 0;
showSlides3();

function showSlides3() {
    var slides3 = document.getElementsByClassName("myimages3");
    for (var b = 0; b < slides3.length; b++) {
        slides3[b].style.display = "none";
    }
    slideIndex3++
    if (slideIndex3 >= slides3.length) {
        slideIndex3 = 0;
    }
    slides3[slideIndex3].style.display = "block";
    setTimeout(showSlides3, 4000);
}
