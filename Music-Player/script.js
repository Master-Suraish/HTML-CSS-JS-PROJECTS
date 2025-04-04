let songName = document.querySelector(".Song-Name");
let artistName = document.querySelector(".Artist-Name");
let audio = document.querySelector("audio");
let img = document.querySelector("img");
let play = document.querySelector("#play");
let next = document.querySelector("#forward");
let back = document.querySelector("#backward");

let nowPlaying = false;

const playSong = () => {
  nowPlaying = true;
  play.classList.replace("fa-play", "fa-pause");
  audio.play();
  img.classList.add("Circle-Animation");
};

const pauseSong = () => {
  nowPlaying = false;
  play.classList.replace("fa-pause", "fa-play");
  audio.pause();
  img.classList.remove("Circle-Animation");
};

play.addEventListener("click", () => {
  if (nowPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

const Songs = [
  {
    name: "boyfriend",
    title: "MAI TERA BOYFRIEND",
    artist: "Arijit Singh, Meet Bros, and Neha Kakkar",
  },
  {
    name: "Rabba",
    title: "RABBA RABBA",
    artist: "Kausar Munir, Mohit Chauhan, and Wajid Ali",
  },
  {
    name: "Sanam-Re",
    title: "SANAM RE",
    artist: "Arijit Singh",
  },
  {
    name: "Tare-Galliya",
    title: "TARE GALLIYA",
    artist: "Ankit Tiwari",
  },
];

const loadSongsByData = (Songs) => {
  songName.textContent = Songs.title;
  artistName.textContent = Songs.artist;
  audio.src = "Songs/" + Songs.name + ".mp3";
  img.src = "Images/" + Songs.name + ".jpg";
};

let songIndex = 0;

back.addEventListener("click", () => {
  songIndex = (songIndex - 1 + Songs.length) % Songs.length;
  loadSongsByData(Songs[songIndex]);
  playSong();
});

next.addEventListener("click", () => {
  songIndex = (songIndex + 1) % Songs.length;
  loadSongsByData(Songs[songIndex]);
  playSong();
});
