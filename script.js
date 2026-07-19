const songs = [
    {
        title: "Song One",
        url: "https://sgp.cloud.appwrite.io/v1/storage/buckets/6a5b396c000135854042/files/6a5b398c001c0fb4b070/view?project=6a5b392400378bf45266&impersonateuserid=&mode=admin"
    },
    {
        title: "Song Two",
        url: "https://sgp.cloud.appwrite.io/v1/storage/buckets/6a5b396c000135854042/files/6a5b398c001c0fb4b070/view?project=6a5b392400378bf45266&impersonateuserid=&mode=admin"
    },
    {
        title: "Song Three",
        url: "https://sgp.cloud.appwrite.io/v1/storage/buckets/6a5b396c000135854042/files/6a5b398c001c0fb4b070/view?project=6a5b392400378bf45266&impersonateuserid=&mode=admin"
    }
];


const wallpapers = [
    "https://cdna.artstation.com/p/assets/images/images/001/394/260/large/wl-op-11s.jpg?1445677999",
    "https://cdna.artstation.com/p/assets/images/images/001/337/630/large/wl-op-7s.jpg?1444639378",
    "https://cdna.artstation.com/p/assets/images/images/001/218/830/large/wl-op-12s.jpg?1443928242"
];


const player = document.getElementById("player");
const overlay = document.getElementById("overlay");
const transition = document.getElementById("transition");
const title = document.getElementById("songTitle");

const backgrounds = [
    document.getElementById("bg1"),
    document.getElementById("bg2")
];


let activeBackground = 0;

let currentSong = -1;
let currentWallpaper = -1;



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function randomSong() {

    let next;

    do {
        next = Math.floor(Math.random() * songs.length);
    }
    while (
        songs.length > 1 &&
        next === currentSong
    );

    currentSong = next;

    return songs[next];
}



function randomWallpaper() {

    let next;

    do {
        next = Math.floor(Math.random() * wallpapers.length);
    }
    while (
        wallpapers.length > 1 &&
        next === currentWallpaper
    );

    currentWallpaper = next;

    return wallpapers[next];
}



function preloadImage(url) {

    return new Promise((resolve, reject) => {

        const img = new Image();

        img.onload = () => resolve();

        img.onerror = reject;

        img.src = url;

    });

}



async function setWallpaper(url) {

    const nextBackground =
        backgrounds[1 - activeBackground];


    await preloadImage(url);


    nextBackground.classList.remove("zoom");


    nextBackground.src = url;


    // restart animation
    void nextBackground.offsetWidth;


    nextBackground.classList.add("zoom");


    backgrounds[activeBackground]
        .classList.remove("active");


    nextBackground.classList.add("active");


    activeBackground =
        1 - activeBackground;

}



function showTitle(text) {

    title.textContent = text;


    title.style.opacity = 1;


    setTimeout(() => {

        title.style.opacity = 0;

    }, 6000);

}



async function playExperience() {

    const song = randomSong();

    const wallpaper = randomWallpaper();


    transition.classList.add("show");


    await sleep(1000);


    await setWallpaper(wallpaper);


    player.src = song.url;


    await player.play();


    showTitle(song.title);


    transition.classList.remove("show");

}



overlay.addEventListener(
    "click",
    async () => {

        overlay.classList.add("hidden");

        await playExperience();

    }
);



player.addEventListener(
    "loadedmetadata",
    () => {

        const duration =
            Math.max(player.duration, 20);


        backgrounds[activeBackground]
            .style.animationDuration =
            `${duration}s`;

    }
);



player.addEventListener(
    "ended",
    async () => {

        await playExperience();

    }
);