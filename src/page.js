// sections
const sections = [
    document.getElementById("about"),
    document.getElementById("tools"),
    document.getElementById("projects")
];

// sidebar ids
let aboutbar = document.getElementById("about-bar");
let toolbar = document.getElementById("tools-bar");
let projectbar = document.getElementById("projects-bar");

const show = function (s) {
    sections.forEach(e => {
        e.style.display = "none";
    }); 
    sections[s].style.display = "block";
    document.querySelectorAll(".nav-link2").forEach(e => {
        e.style.color = "#fff";
    });
    
}


show(0)
aboutbar.style.color = "rgb(54, 86, 255)";
aboutbar.addEventListener("click", function() {
    show(0)
    aboutbar.style.color = "rgb(54, 86, 255)";
})

toolbar.addEventListener("click", function() {
    show(1)
    toolbar.style.color = "rgb(54, 86, 255)";
})

projectbar.addEventListener("click", function() {
    show(2)
    projectbar.style.color = "rgb(54, 86, 255)";
})
const songs = [
    {
        name: "Resonance",
        artists: "Home",
        album: "./assets/img/album/resonance.jpg",
        song: "./assets/songs/resonance.mp3"
    },
    {
        name: "We're Finally Landing",
        artists: "Home",
        album: "./assets/img/album/landing.jpg",
        song: "./assets/songs/landing.mp3"
    },
    {
        name: "aquatic ambience",
        artists: "Scizzle",
        album: "./assets/img/album/aqua.png",
        song: "./assets/songs/aqua.mp3"
    },
    {
        name: "Hex",
        artists: "80purppp",
        album: "./assets/img/album/hex.png",
        song: "./assets/songs/hex.mp3"
    },
    {
        name: "Honest",
        artists: "Baby Keem",
        album: "./assets/img/album/honest.png",
        song: "./assets/songs/honest.mp3"
    },
    {
        name: "You Get Me So High",
        artists: "The Neighborhood",
        album: "./assets/img/album/high.png",
        song: "./assets/songs/high.mp3"
    },
    {
        name: "Yes Indeed",
        artists: "Lil Baby, Drake",
        album: "./assets/img/album/indeed.png",
        song: "./assets/songs/indeed.mp3"
    },
    {
        name: "505",
        artists: "Arctic Monkeys",
        album: "./assets/img/album/505.png",
        song: "./assets/songs/505.mp3"
    }
    
];

let toggle = false;
let audio = new Audio(); 
let current = Math.floor(Math.random() * songs.length); 

function loadSong(index) {
    audio.src = songs[index].song;
    document.querySelector(".player-image").src = songs[index].album;
    document.querySelector(".song-name").textContent = songs[index].name;
    document.querySelector(".song-author").textContent = `Artist(s): ${songs[index].artists}`;
}

function skip () {
    pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    if (current < songs.length - 1) {
        current++; 
    } else {
        current = 0;
    }
}
loadSong(current);

pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click", function () {
    if (toggle) {
        audio.pause(); 
        pauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        audio.play();
        pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    toggle = !toggle; 
});

audio.addEventListener("ended", function () {
    skip()
    loadSong(current); 
    audio.play();

})

document.getElementById("skip").addEventListener("click", function () {
    skip()
    loadSong(current); 
    audio.play();
});

