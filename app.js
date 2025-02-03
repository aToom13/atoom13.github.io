// Aşk Kapısı Fonksiyonu
function checkLove() {
  const secretCode = document.getElementById('secretCode').value;
  const correctCode = 'Balkabağın';

  if (secretCode === correctCode) {
    // Oturum bilgisini kaydet
    sessionStorage.setItem('loveVerified', 'true');

    // Animasyonlu geçiş
    document.getElementById('loveGate').classList.add('gate-open');
    setTimeout(() => {
      document.getElementById('loveGate').style.display = 'none';
    }, 1000);

    // Ana içeriği göster
    document.querySelector('.love-container').style.opacity = '1';

    // Özel efektleri başlat
    createHeartsStorm();
    startHeartRain();
    updateGreeting();

    // Hoş geldin mesajı
    Swal.fire({
      title: `Hoş geldin aşkım! ${getRomanticEmoji()}`,
      html: '<div class="custom-swal">❤️ Seninle her an özel... ❤️</div>',
      timer: 2000,
      background: '#ffe6ee',
      showConfirmButton: false
    });
  } else {
    // Hata animasyonu
    showErrorAnimation();
  }
}

// Oturum Kontrolü
document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('loveVerified') === 'true') {
    document.getElementById('loveGate').style.display = 'none';
    document.querySelector('.love-container').style.opacity = '1';
    startHeartRain();
    updateGreeting();
  }
});

// Sayaç Fonksiyonu
function updateTimer() {
  const startDate = new Date('2024-09-26T00:00:00');
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const formatNumber = (num) => num.toString().padStart(2, '0');
  const labels = {
    days: 'Gün',
    hours: 'Saat',
    minutes: 'Dakika',
    seconds: 'Saniye',
  };

  document.getElementById('loveTimer').innerHTML = `
    <div class="timer-grid">
      ${Object.entries({ days, hours, minutes, seconds })
        .map(
          ([key, value]) => `
        <div class="timer-box">
          <div>${formatNumber(value)}</div>
          <div>${labels[key]}</div>
        </div>
      `
        )
        .join('')}
    </div>
    <div class="timer-text">Birlikte Mutlulukla Geçen Süremiz ❤️</div>
  `;
}

// Kalp Fırtınası Efekti
function createHeartsStorm() {
  const heartEmojis = ['❤️', '💖', '💘', '💕', '💓'];
  const stormDuration = 3000; // 3 saniye

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart-storm';
      heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = Math.random() * 100 + 'vh';
      heart.style.animation = `heartFloat ${Math.random() * 3 + 2}s ease-in-out`;
      document.body.appendChild(heart);

      // Animasyon bitiminde kalbi kaldır
      setTimeout(() => heart.remove(), stormDuration);
    }, Math.random() * 1000);
  }
}

// Kalp Yağmuru Efekti
function startHeartRain() {
  const emojis = ['❤️', '💖', '💘', '💝', '💑'];
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

// Selamlama Mesajı
function updateGreeting() {
  const hour = new Date().getHours();
  const messages = {
    morning: '🌞 Günaydın Bir Tanem',
    afternoon: '☀️ İyi Günler Canımın İçi',
    evening: '🌙 İyi Akşamlar Kalbimin Sahibi',
  };

  const greeting =
    hour < 12 ? messages.morning : hour < 18 ? messages.afternoon : messages.evening;

  document.getElementById('greeting').innerHTML = `
    <div class="greeting-box">
      ${greeting}<br>
      <span class="love-quote">"${getDailyLoveQuote()}"</span>
    </div>
  `;
}

// Günlük Aşk Sözü
function getDailyLoveQuote() {
  const quotes = [
    'Sen benim her şeyimsin...',
    'Aşkımız sonsuza kadar böyle devam etsin ❤️',
    'Seninle geçen her saniye bir hazine',
    'Kalbinin sesi benim için en güzel melodi 🎶',
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Romantik Emoji Seçimi
function getRomanticEmoji() {
  const emojis = ['💖', '🌹', '🎃', '🌸', '💑'];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

// Hata Animasyonu
function showErrorAnimation() {
  const gate = document.getElementById('loveGate');
  gate.classList.add('gate-shake');
  setTimeout(() => gate.classList.remove('gate-shake'), 500);

  Swal.fire({
    icon: 'error',
    title: 'Oh hayır!',
    html: `<p>Sanırım aşkımızın şifresini unuttun 😢</p>
          <p><i>"İlk kez ne zaman el ele tutuştuk?"</i></p>`,
    confirmButtonText: 'Tekrar Deneyeyim ❤️',
    background: '#fff0f3',
    confirmButtonColor: '#e84393',
  });
}

// Müzik Çalar Sınıfı
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
    this.playlistElement.innerHTML = this.playlist
      .map(
        (song, index) => `
        <div class="playlist-item ${index === 0 ? 'playing' : ''}" 
             data-index="${index}" 
             onclick="player.loadTrack(${index})">
            ${song.title}
        </div>
      `
      )
      .join('');
  }

  loadTrack(index) {
    this.currentTrack = index;
    this.audio.src = `songs/${this.playlist[index].file}`;
    this.currentSongElement.textContent = this.playlist[index].title;

    // Playlist highlight
    document.querySelectorAll('.playlist-item').forEach((item) => {
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

// Müzik Çaları Başlat
const player = new MusicPlayer();

// Sayaç Güncelleme
setInterval(updateTimer, 250);
updateTimer();
