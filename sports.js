/*Third Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("myimages");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 4000);
}
*/

/*Second Slideshow*/
var slideIndex2 = 0;
showSlides2();

function showSlides2() {
    var slides2 = document.getElementsByClassName("myimages2");
    for (var a = 0; a < slides2.length; a++) {
        slides2[a].style.display = "none";
    }
    slideIndex2++
    if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0;
    }
    slides2[slideIndex2].style.display = "block";
    setTimeout(showSlides2, 4000);
}

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
