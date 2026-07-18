// --- 1. Data Setup ---
const playlist = [
    { name: "Lost in the City Lights", artist: "Cosmo Sheldrake", art: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { name: "Lost in the City Lights", artist: "Cosmo Sheldrake", art: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", url: "https://sgp.cloud.appwrite.io/v1/storage/buckets/6a5b396c000135854042/files/6a5b398c001c0fb4b070/view?project=6a5b392400378bf45266&impersonateuserid=&mode=admin" },
    { name: "Forest Whisper", artist: "Nature Digital", art: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { name: "Neon Dreams", artist: "RetroSynth", art: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { name: "Acoustic Breeze", artist: "Benjamin Tissot", art: "https://images.unsplash.com/photo-1460036521480-c1baf2728f32?w=800&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { name: "Midnight Vibes", artist: "Chillhop", art: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?w=800&q=80", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
];

const audio = new Audio();
let isPlaying = false, isShuffle = false, isRepeat = false, trackIndex = 0;

// --- 2. DOM Elements ---
const el = {
    bgBlur: document.getElementById('bg-blur'),
    art: document.getElementById('album-art'),
    title: document.getElementById('song-title'),
    artist: document.getElementById('song-artist'),
    playPauseBtn: document.getElementById('play-pause-btn'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    shuffleBtn: document.getElementById('shuffle-btn'),
    repeatBtn: document.getElementById('repeat-btn'),
    progress: document.getElementById('progress-bar'),
    current: document.getElementById('current-time'),
    duration: document.getElementById('total-duration'),
    list: document.getElementById('playlist-list'),
    search: document.getElementById('search-input'),
    count: document.getElementById('track-count'),
    themeToggle: document.getElementById('theme-toggle')
};

// --- 3. Core Functions ---
function loadTrack(index) {
    const track = playlist[index];
    el.title.textContent = track.name;
    el.artist.textContent = track.artist;
    el.art.src = track.art;
    el.bgBlur.style.backgroundImage = `url('${track.art}')`;
    audio.src = track.url;
    
    el.progress.value = 0;
    el.current.textContent = "0:00";
    
    renderPlaylist(el.search.value);
}

function playTrack() {
    isPlaying = true;
    audio.play();
    el.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    renderPlaylist(el.search.value); // Update icon in list
}

function pauseTrack() {
    isPlaying = false;
    audio.pause();
    el.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    renderPlaylist(el.search.value);
}

function togglePlay() { isPlaying ? pauseTrack() : playTrack(); }

function nextTrack() {
    if (isShuffle) {
        let newIndex = trackIndex;
        while(newIndex === trackIndex) newIndex = Math.floor(Math.random() * playlist.length);
        trackIndex = newIndex;
    } else {
        trackIndex = (trackIndex + 1) % playlist.length;
    }
    loadTrack(trackIndex);
    playTrack();
}

function prevTrack() {
    trackIndex = (trackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(trackIndex);
    playTrack();
}

// --- 4. Progress & Scrubber ---
function updateProgress() {
    if (audio.duration) {
        el.progress.value = (audio.currentTime / audio.duration) * 100;
        el.current.textContent = formatTime(audio.currentTime);
        el.duration.textContent = formatTime(audio.duration);
        
        // Dynamic track background for the range slider
        const val = el.progress.value;
        el.progress.style.background = `linear-gradient(to right, var(--accent) ${val}%, var(--card-border) ${val}%)`;
    }
}

function setProgress(e) {
    audio.currentTime = (e.target.value / 100) * audio.duration;
}

function formatTime(sec) {
    const min = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${min}:${secs}`;
}

// --- 5. Playlist & Search ---
function renderPlaylist(filter = "") {
    el.list.innerHTML = "";
    let visibleCount = 0;
    
    playlist.forEach((track, originalIndex) => {
        if (track.name.toLowerCase().includes(filter.toLowerCase()) || 
            track.artist.toLowerCase().includes(filter.toLowerCase())) {
            
            visibleCount++;
            const isCurrent = originalIndex === trackIndex;
            const li = document.createElement("li");
            li.className = `playlist-item ${isCurrent ? 'playing' : ''}`;
            
            li.innerHTML = `
                <img src="${track.art}" class="item-art" alt="art">
                <div class="item-info">
                    <div class="item-title">${track.name}</div>
                    <div class="item-artist">${track.artist}</div>
                </div>
                ${isCurrent && isPlaying ? '<i class="fas fa-chart-bar item-playing-icon"></i>' : ''}
            `;

            li.addEventListener("click", () => {
                trackIndex = originalIndex;
                loadTrack(trackIndex);
                playTrack();
            });

            el.list.appendChild(li);
        }
    });
    
    el.count.textContent = `${visibleCount} Track${visibleCount !== 1 ? 's' : ''}`;
}

// --- 6. Event Listeners ---
el.playPauseBtn.addEventListener('click', togglePlay);
el.nextBtn.addEventListener('click', nextTrack);
el.prevBtn.addEventListener('click', prevTrack);
el.progress.addEventListener('input', setProgress);
audio.addEventListener('timeupdate', updateProgress);

audio.addEventListener('ended', () => {
    if (isRepeat) { audio.currentTime = 0; playTrack(); } 
    else { nextTrack(); }
});

el.shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    el.shuffleBtn.classList.toggle('active', isShuffle);
});

el.repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    el.repeatBtn.classList.toggle('active', isRepeat);
});

el.search.addEventListener("input", (e) => renderPlaylist(e.target.value));

// Theme Toggle
el.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    el.themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// --- Initialize ---
loadTrack(trackIndex);
