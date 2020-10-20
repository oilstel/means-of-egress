let video = document.getElementsByTagName('video')[0];
let video_container = document.querySelector('.video-container');
let button = document.querySelector('#start-video');
let desktop = document.querySelector('.desktop');

function startVideo() {
  desktop.style.visibility = 'hidden';
  video_container.style.visibility = 'visible';
  video.play();
}

// On button click start video
button.addEventListener('click', () => startVideo());

// Loop when video ends
video.addEventListener('ended', e => {
  console.log(event.target.currentTime);
  e.target.currentTime = 3;
  e.target.muted = false;
  e.target.play();
});

// When video is clicked reset playback and hide
video.addEventListener('click', e => {
  e.target.pause();
  e.target.currentTime = 0;
  video_container.style.visibility = 'hidden';
  desktop.style.visibility = 'visible';
});

// Button hover states
button.addEventListener('mouseover', e => {
  desktop.style.backgroundImage = 'url(assets/images/bgmergedhover.png)';
});
button.addEventListener('mouseout', e => {
  desktop.style.backgroundImage = 'url(assets/images/bgmerged.png)';
});
