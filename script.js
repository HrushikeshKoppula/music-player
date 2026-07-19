const tracks = [
    {
        title: "Song One",
        audio: "https://sgp.cloud.appwrite.io/v1/storage/buckets/6a5b396c000135854042/files/6a5b398c001c0fb4b070/view?project=6a5b392400378bf45266&impersonateuserid=&mode=admin",
        image: "https://cdna.artstation.com/p/assets/images/images/003/252/982/large/wl-op-7ss.jpg?1471661590"
    },
    {
        title: "Song Two",
        audio: "https://sgp.cloud.appwrite.io/v1/storage/buckets/6a5b396c000135854042/files/6a5b398c001c0fb4b070/view?project=6a5b392400378bf45266&impersonateuserid=&mode=admin",
        image: "https://cdnb.artstation.com/p/assets/images/images/001/959/839/large/wl-op-15m.jpg?1455181085"
    },
    {
        title: "Song Three",
        audio: "https://sgp.cloud.appwrite.io/v1/storage/buckets/6a5b396c000135854042/files/6a5b398c001c0fb4b070/view?project=6a5b392400378bf45266&impersonateuserid=&mode=admin",
        image: "https://cdna.artstation.com/p/assets/images/images/001/218/830/large/wl-op-12s.jpg?1443928242"
    }
];

const player = document.getElementById("player");
const overlay = document.getElementById("overlay");
const transition = document.getElementById("transition");
const title = document.getElementById("songTitle");

const backgrounds = [
    document.getElementById("bg1"),
    document.getElementById("bg2")
];

let active = 0;
let current = -1;

/* -------------------------- */

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomTrack() {

    let next;

    do {
        next = Math.floor(Math.random() * tracks.length);
    } while (tracks.length > 1 && next === current);

    current = next;

    return tracks[next];
}

function preloadImage(url) {

    return new Promise((resolve, reject) => {

        const img = new Image();

        img.onload = () => resolve(url);

        img.onerror = reject;

        img.src = url;

    });

}

async function setWallpaper(url) {

    const hidden = backgrounds[1 - active];

    await preloadImage(url);

    hidden.classList.remove("zoom");
    hidden.src = url;

    // restart animation
    void hidden.offsetWidth;

    hidden.classList.add("zoom");

    backgrounds[active].classList.remove("active");

    hidden.classList.add("active");

    active = 1 - active;
}

function showTitle(text) {

    title.textContent = text;

    title.style.opacity = 1;

    setTimeout(() => {

        title.style.opacity = 0;

    }, 6000);

}

async function transitionTo(track) {

    transition.classList.add("show");

    await sleep(1000);

    await setWallpaper(track.image);

    player.src = track.audio;

    await player.play();

    showTitle(track.title);

    transition.classList.remove("show");

}

async function nextSong() {

    const track = randomTrack();

    await transitionTo(track);

}

/* -------------------------- */

overlay.addEventListener("click", async () => {

    overlay.classList.add("hidden");

    await nextSong();

});

/* -------------------------- */

player.addEventListener("loadedmetadata", () => {

    backgrounds[active].style.animationDuration =
        `${Math.max(player.duration, 20)}s`;

});

player.addEventListener("ended", async () => {

    await nextSong();

});