var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("myimages");
    //   var slides= img1,img2,img3
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 3000);

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
