//For All
let currentWidth = document.documentElement.clientWidth
if(currentWidth < 930){
    // location.reload()
    document.documentElement.textContent = 'Mobile version not available'
}



//For About page




//For Contact page
function whatsapp() {
    const whatsappUrl = 'https://wa.me/593727250/?text=Hello%20there!%20Please%20I%20would%20like%20to%20request%20for%20a%20Website';
    let link = document.createElement('a');
    link.target = 'blank';
    link.href = whatsappUrl;
    link.click()
}

function email() {
    const emailAddress = 'mailto:mayakay257@gmail.com?subject=Request%20a%20Website&body=Hello%20there!%20Please%20I%20would%20like%20to%20request%20for%20a%20Website'
    let link = document.createElement('a')
    link.target = 'blank'
    link.href = emailAddress;
    link.click()
}



//For Project page
let videos = document.querySelectorAll('video')
let projects = document.getElementById('projects')

// // let right = projects.clientLeft
// // console.log(right)

// let videoID;
let currentVideoIndex = 0;
// let Sliding;

// // function playNextVideo() {
// //     videos[currentVideoIndex].pause();
// //     // videos[currentVideoIndex].classList.remove('activeSlide');
// //     // if(videos[currentVideoIndex].paused){
// //     //     projects.style.width = `(${right} - 400)px`
// //     // }
// //     // projects.style.paddingLeft = `(${right} - 400)px`
// //     // let left;
// //     // for(let i=0; i<videos.length; i++){
// //     //     if(videos[i].paused){
// //     //         left = projects.style.paddingLeft= '-400'
// //     //         console.log(left)
// //     //     }
// //     // }
// //     currentVideoIndex = (currentVideoIndex + 1) % videos.length;
// //     videos[currentVideoIndex].style.display = 'block';
// //     startSlideshow()

// //     videos.forEach((video)=>{
// //         const newpost = (currentVideoIndex - 1 + videos.length) % videos.length;
// //         video.style.transform = `translateX(-${100 * newpost}%)`
// //     })
// // }


// function playNextVideo() {
//     videos[currentVideoIndex].pause();
//     videos[currentVideoIndex].style.width = '400px'

//     // if(currentVideoIndex < videos.length){
//     //     videos[currentVideoIndex].pause();
//     //     currentVideoIndex = currentVideoIndex + 1;
//     //     videos[currentVideoIndex].play()
//     //     // Sliding = setTimeout(playNextVideo, 5000);
//     //     currentVideoIndex++
//     //     startSlideshow()
//     // }
//     // else{
//     //     currentVideoIndex = 0
//     // }


//     // currentVideoIndex
// }

// function startSlideshow() {
//     if(currentVideoIndex < videos.length){
//         videos[currentVideoIndex].play()
        
//         if(videos[currentVideoIndex].pause()){
//             videos[currentVideoIndex].style.width = '600px'
//         }
//         else{
//             videos[currentVideoIndex].style.width = '400px'
//         }
//         // videos[currentVideoIndex].classList.add('activeSlide');
//         // videos[currentVideoIndex].classList.remove('inactiveSlide');
//         // setTimeout(()=>{
//         //     videos[currentVideoIndex].pause()
//         // }, 3000)
//         // setInterval(playNextVideo, 5000);
//         currentVideoIndex++
//     }
//     else{
//         currentVideoIndex = 0
//     }

    

//     // videos[currentVideoIndex].play();
//     // videos[currentVideoIndex].classList.add('activeSlide');
//     // Sliding = setTimeout(playNextVideo, 5000);
// }
// startSlideshow()

// Sliding = setInterval(startSlideshow, 5600);






function playNextVideo() {
    const currentVideo = videos[currentVideoIndex];
    currentVideo.pause();
    currentVideo.classList.remove('activeSlide');

    currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Move to the next video

    const nextVideo = videos[currentVideoIndex];
    nextVideo.play();
    nextVideo.classList.add('activeSlide');
}

// Play the first video initially
// videos[currentVideoIndex].play();
// videos[currentVideoIndex].classList.add('activeSlide');

// Set interval to play next video every 5 seconds
// setInterval(playNextVideo, 5700);

// Add event listener to pause and remove class when video is paused
videos.forEach(video => {
    video.addEventListener('pause', () => {
        video.classList.remove('activeSlide');
    });
});




// function showSlide() {
//     for( var i = 0; i < videos.length; i++){
//         videos[i].pause();
//     }

    
//     videos[currentVideoIndex].play();
//     currentVideoIndex++

//     if(currentVideoIndex >= videos.length){
//         currentVideoIndex = 0
//     }
    
//     setTimeout(showSlide,5600)
// }
// showSlide()

function autoScroll() {
    setInterval(() => {
        const currentScroll = projects.scrollLeft;
        const containerWidth = 600; // Width of visible area
        const maxScroll = projects.scrollWidth - containerWidth;

        console.log(projects.scrollWidth)
        console.log(containerWidth)
        console.log(maxScroll)
        console.log(currentScroll)

        // if (currentScroll < maxScroll) {
        //     projects.scrollTo({
        //         left: currentScroll + containerWidth,
        //         behavior: 'smooth'
        //     });
        // } 
        // else {
        //     // Reset to start when reaching the end
        //     projects.scrollTo({
        //         left: 0,
        //         behavior: 'smooth'
        //     });
        // }
        videos.forEach((video)=>{
            video.addEventListener('pause', ()=>{
                if(video.id < videos.length){
                    projects.scrollTo({
                        left: currentScroll + containerWidth,
                        behavior: 'smooth'
                    });
                }
                else {
                    // Reset to start when reaching the end
                    projects.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                }
            })
        })
    }, 5800); // Auto-scroll every 3 seconds (3000 milliseconds)
}

// autoScroll(); 




// // Runner.prototype.gamerOver = function() {}
