let video = document.getElementsByTagName('video')[0];
let video_container = document.querySelector('.video-container');
let button = document.querySelector('#start-video');
let desktop = document.querySelector('.desktop');

// window.onload = e => {
//     window.muted = false;
// }

function startVideo() {
    desktop.style.visibility = 'hidden';
    video_container.style.visibility = 'visible';
    video.play();
}

button.addEventListener('click', () => startVideo());
// setTimeout(() => startVideo(), 3000);

video.addEventListener('ended', e => {
    console.log('Video stopped either because 1) it was over, ' + 'or 2) no further data is available.');
    console.log(event.target.currentTime);
    e.target.currentTime = 3;
    e.target.muted = false;
    e.target.play();
});

video.addEventListener('click', e => {
    e.target.pause();
    e.target.currentTime = 0;
    video_container.style.visibility = 'hidden';
    desktop.style.visibility = 'visible';
});

function resize() {
    console.log(desktop.clientHeight);
    console.log('h: ' + window.innerHeight);

    // if (desktop.clientHeight >= window.innerHeight) {
    //     console.log('reached max height');
    //     desktop.style.height = window.innerHeight + 'px';
    // }

    button.style.top = desktop.clientHeight / 3.1 + 'px';
    button.style.left = desktop.clientWidth / 3.8 + 'px';

    button.style.width = desktop.clientWidth / 4.5 + 'px';
    button.style.height = desktop.clientHeight / 2.7 + 'px';
    // console.log('w: ' + window.innerWidth);
    // console.log('h: ' + window.innerHeight);

    // desktop.style.width = window.innerWidth + 'px';
    // desktop.style.height = window.innerWidth - 300 + 'px';
    // console.log(desktop.style.width);
}

window.onload = resize;
window.onresize = resize;
// window.onresize = e => {
//     console.log('w: ' + window.innerWidth);
//     console.log('h: ' + window.innerHeight);

//     desktop.style.width = window.innerWidth + 'px';
//     desktop.style.height = window.innerHeight / 2 + 'px';
//     console.log(desktop.style.width);
// }


// Preloader

// function preloadImages(urls, allImagesLoadedCallback){
//   var loadedCounter = 0;
//   var toBeLoadedNumber = urls.length;
//   urls.forEach(function(url){
//     preloadImage(url, function(){
//         loadedCounter++;
//             console.log('Number of loaded images: ' + loadedCounter);
//       if(loadedCounter == toBeLoadedNumber){
//         allImagesLoadedCallback();
//       }
//     });
//   });
//   function preloadImage(url, anImageLoadedCallback){
//       var img = new Image();
//       img.onload = anImageLoadedCallback;
//       img.src = url;
//   }
// }

// // Let's call it:
// preloadImages([
//   '../assets/images/bgmerged.png',
//   '../assets/images/bgmergedhover.png'
// ], function(){
//   console.log('All images were loaded');
//   desktop.style.visibility = 'visible';
//   desktop.style.backgroundImage = 'url(../assets/images/bgmerged.png)';
// });

button.addEventListener('mouseover', e => {
  desktop.style.backgroundImage = 'url(../assets/images/bgmergedhover.png)';
});
button.addEventListener('mouseout', e => {
  desktop.style.backgroundImage = 'url(../assets/images/bgmerged.png)';
});
