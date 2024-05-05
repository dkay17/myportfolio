// var slides = document.getElementsByClassName("slide");
// var currentSlide = 0;
// let main = document.getElementsByClassName('main');
// let currentslide = document.getElementsByClassName('Slide');

// function showSlide() {
//     // Hide all slides
//     for (var i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         currentslide[i].classList.remove("active");
//     }

//     // Show the current slide
//     slides[currentSlide].style.display = "block";
//     currentslide[currentSlide].classList.add("active");

    

//     // Increment the current slide index
//     currentSlide++;

//     // Reset to the first slide if the end is reached
//     if (currentSlide >= slides.length && currentSlide >= currentslide.length) {
//         currentSlide = 0;
//     }

//     // Change slide every 5 seconds (5000 milliseconds)
//     setTimeout(showSlide, 5000);
// }

// // Start the slideshow
// showSlide();

// for (let i = 0; i<=slides.length; i++){
//     currentslide[i];
// }

// function homeButton(){
//     main.style.display = "none";
// }
// currentslide[i].style.display = "none";


function download() {
    let link = document.createElement('a');
    link.href = 'extra/CV.docx'
    link.download = 'CV_Of_Marvin_Idibia'
    link.click()
}
