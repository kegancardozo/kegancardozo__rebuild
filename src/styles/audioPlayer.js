
const audioPlayer = document.getElementById("audioPlayer");
let playbackSpeed = 1;

function playAudio() {
  audioElement.play();

  }

document.getElementById('skipBackButton').addEventListener('click', function() {
  audioElement.currentTime = Math.max(0, audioElement.currentTime - 15);
});

document.getElementById('skipForwardButton').addEventListener('click', function() {
  audioElement.currentTime = Math.min(audioElement.duration, audioElement.currentTime + 15);
});

  function beginAudio() {
console.log("play")
  audioElement.play();
  audioPlayer.classList.add("show")
  
  }

const beginButton = document.getElementById("listenToButton"); // Replace "next-button" with the ID of your button element
beginButton.addEventListener("click", beginAudio);

const playButton = document.getElementById("playPauseAudio"); // Replace "next-button" with the ID of your button element
playButton.addEventListener("click", playAudio);

    
const audioElement = document.getElementById("audioFile");

var progressBar = document.getElementById("progressBar");

audioElement.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  // audioElement.playbackRate = playbackSpeed;
  var progress = (audioElement.currentTime / audioElement.duration) * 100;
  progressBar.style.visibility = "visible";
  progressBar.style.width = progress + "%";
  var currentMinutes = Math.floor(audioElement.currentTime / 60);
  var currentSeconds = Math.floor(audioElement.currentTime % 60);

  // Add leading zeros if needed
  currentMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
  currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

  currentDuration.textContent = currentMinutes + ":" + currentSeconds;
  // if (audioElement.currentTime <= .1) {
  //   timeoutId = setTimeout(function() {
  //     // Execute your desired code here when audio is at zero for greater than half a second
  //     loadingSpinner.style.opacity = "1";
  //   }, 500); // 500 milliseconds = half a second
  // }
  // else {
  //   clearTimeout(timeoutId); // Clear the timeout if volume changes before half a second
  //   loadingSpinner.style.opacity = "0";
  // }

}

var currentDuration = document.getElementById("currentDuration")
var durationElement = document.getElementById("totalDuration");

audioElement.addEventListener("loadedmetadata", function() {
var totalDuration = audioElement.duration;
durationElement.textContent = String(formatTime(totalDuration));
var volumeSlider = document.getElementById("volumeBar")
volumeSlider.addEventListener('input', function () {
  audioElement.volume = this.value / 100;
});
});


const speedControl = document.getElementById("speedControl");

speedControl.addEventListener('change', function() {
  changePlaybackSpeed(this.value);
});

function changePlaybackSpeed(speed) {
  playbackSpeed = speed;
  audioElement.playbackRate = playbackSpeed;
}

function formatTime(time) {
var minutes = Math.floor(time / 60);
var seconds = Math.floor(time % 60);
return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
