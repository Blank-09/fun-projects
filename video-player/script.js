// Selecting the required elements
const video = document.getElementById("video");
const title = document.getElementById("title");
const playlist = document.getElementById("playlist");

// Put the path of the folder which has the video
// Make sure to escape the backslash (\) by (\\)
const videoPath = "D:\\Anime\\Boku no Hero Academia 6th Season (Dub)\\";

// Put video names from that folder
const videolist = [
  "EP.1.v0.360p.mp4",
  "EP.2.v0.360p.mp4",
  "EP.3.v0.360p.mp4",
  "EP.4.v0.360p.mp4",
  "EP.5.v0.360p.mp4",
  "EP.6.v0.360p.mp4",
  "EP.7.v0.360p.mp4",
  "EP.8.v0.1670125534.360p.mp4",
  "EP.9.v0.1670902525.360p.mp4",
  "EP.10.v1.1671759620.360p.mp4",
  "EP.11.v0.1671930636.360p.mp4",
  "EP.12.v0.1673126433.360p.mp4",
  "EP.13.v0.360p.mp4",
  "EP.14.v0.360p.mp4",
  "EP.15.v0.360p.mp4",
  "EP.16.v0.360p.mp4",
  "EP.17.v0.360p.mp4",
  "EP.18.v0.360p.mp4",
  "EP.19.v0.360p.mp4",
  "EP.20.v0.360p.mp4",
  "EP.21.v0.1678590023.360p.mp4",
  "EP.22.v0.1679204721.360p.mp4",
  "EP.23.v2.1678534516.360p.mp4",
  "EP.24.v0.1679133913.480p.mp4",
];

// Setting the source and title; And playing it!
function setSource(src) {
  video.src = videoPath + src;
  title.innerText = src;
  video.play();
}

// Creating playlist Template
function playlistTemplate(link) {
  return `<li onclick="setSource('${link}')">${link}</li>`;
}

// Adding playlist items (<li></li>)
for (var i = 0; i < videolist.length; i++) {
  playlist.innerHTML += playlistTemplate(videolist[i]);
}

// Error Handling
video.onerror = (e) => {
  alert("Invalid Path! src: " + decodeURI(e.target.src));
};

// Initializing the video element
setSource(videolist[0]);
