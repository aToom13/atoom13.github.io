document.addEventListener('DOMContentLoaded', () => {
  const images = [
        'foto2.jpg',
        'foto3.jpg',
        'foto4.jpg',
        'foto5.jpg',
        'foto6.jpg',
        'foto8.jpg'
    ];

  const photoGrid = document.getElementById('photoGrid');
  const captions = [
        "İlk Buluşmamız 🌸",
        "Gülen Anılarımız 😊",
        "Mutluluk Dolu Bir Gün ☀️",
        "Birlikte Keşiflerimiz 🗺️",
        "Unutulmaz Anlarımız 💖"
    ];

  images.forEach((img, index) => {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.innerHTML = `
            <img src="../assets/${img}" alt="Anımız ${index + 1}">
            <div class="photo-overlay">
                <div class="overlay-text">${captions[index] || "Özel Anımız"}</div>
            </div>
        `;
    photoGrid.appendChild(photoItem);
  });
});