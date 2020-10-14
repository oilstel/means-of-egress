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
    button.style.left = desktop.clientWidth / 5.4 + 'px';

    button.style.width = desktop.clientWidth / 2.7 + 'px';
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
