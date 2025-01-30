function updateTimer() {
    const startDate = new Date('2024-09-26T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Türkçe formatlama
    const formatNumber = num => num.toString().padStart(2, '0');
    const labels = {
        days: 'Gün',
        hours: 'Saat',
        minutes: 'Dakika',
        seconds: 'Saniye'
    };

    document.getElementById('loveTimer').innerHTML = `
        <div class="timer-grid">
            ${Object.entries({days, hours, minutes, seconds}).map(([key, value]) => `
                <div class="timer-box">
                    <div>${formatNumber(value)}</div>
                    <div>${labels[key]}</div>
                </div>
            `).join('')}
        </div>
        <div class="timer-text">Birlikte Mutlulukla Geçen Süremiz ❤️</div>
    `;
}

class MusicPlayer {
  constructor() {
    this.audio = new Audio();
    this.playlist = [];
    this.currentTrack = 0;
    this.isPlaying = false;

    // Elementler
    this.playPauseBtn = document.getElementById('playPauseBtn');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.progressBar = document.getElementById('progressBar');
    this.currentSongElement = document.getElementById('currentSong');
    this.playlistElement = document.getElementById('playlist');
    this.currentTimeElement = document.getElementById('currentTime');
    this.durationElement = document.getElementById('duration');

    // Event Listeners
    this.playPauseBtn.addEventListener('click', () => this.togglePlay());
    this.prevBtn.addEventListener('click', () => this.prevTrack());
    this.nextBtn.addEventListener('click', () => this.nextTrack());
    this.progressBar.addEventListener('input', (e) => this.seek(e.target.value));
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.nextTrack());

    // Playlist'i yükle
    this.loadPlaylist();
  }

  async loadPlaylist() {
    try {
      const response = await fetch('songs/list.json');
      this.playlist = await response.json();
      this.renderPlaylist();
      this.loadTrack(0);
    } catch (error) {
      console.error('Playlist yüklenemedi:', error);
    }
  }

  renderPlaylist() {
    this.playlistElement.innerHTML = this.playlist.map((song, index) => `
            <div class="playlist-item ${index === 0 ? 'playing' : ''}" 
                 data-index="${index}" 
                 onclick="player.loadTrack(${index})">
                ${song.title}
            </div>
        `).join('');
  }

  loadTrack(index) {
    this.currentTrack = index;
    this.audio.src = `songs/${this.playlist[index].file}`;
    this.currentSongElement.textContent = this.playlist[index].title;

    // Playlist highlight
    document.querySelectorAll('.playlist-item').forEach(item => {
      item.classList.remove('playing');
    });
    document.querySelector(`.playlist-item[data-index="${index}"]`).classList.add('playing');

    if (this.isPlaying) this.audio.play();
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    this.playPauseBtn.textContent = this.isPlaying ? '⏸' : '▶';
    this.isPlaying ? this.audio.play() : this.audio.pause();
  }

  prevTrack() {
    this.currentTrack = (this.currentTrack - 1 + this.playlist.length) % this.playlist.length;
    this.loadTrack(this.currentTrack);
    if (this.isPlaying) this.audio.play();
  }

  nextTrack() {
    this.currentTrack = (this.currentTrack + 1) % this.playlist.length;
    this.loadTrack(this.currentTrack);
    if (this.isPlaying) this.audio.play();
  }

  seek(value) {
    const time = (value / 100) * this.audio.duration;
    this.audio.currentTime = time;
  }

  updateProgress() {
    const progress = (this.audio.currentTime / this.audio.duration) * 100;
    this.progressBar.value = progress || 0;

    // Zaman gösterimi
    this.currentTimeElement.textContent = this.formatTime(this.audio.currentTime);
    this.durationElement.textContent = this.formatTime(this.audio.duration);
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}

const player = new MusicPlayer();

// 250ms'de bir güncelle (daha akıcı görünsün)
setInterval(updateTimer, 250);

// İlk çalıştırma
updateTimer();