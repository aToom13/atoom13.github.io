document.addEventListener('DOMContentLoaded', () => {
  const images = [
        'foto1.jpg'
        'foto2.jpg',
        'foto3.jpg',
        'foto4.jpg',
        'foto5.jpg',
        'foto6.jpg',
        'foto7.jpg',
        'foto8.jpg',
        'foto9.jpg',
        'foto10.jpg',
        'foto11.jpg',
        'foto12.jpg'
    ];

  const photoGrid = document.getElementById('photoGrid');
  const captions = [
        "Bunların hepsine",
        "Başlık atmam lazım",
        "Ama",
        "Atamam sevgilimm",
        "Çünkü bu anılar",
        "Bir kaç",
        "İle anlatılamicak",
        "Kadar muhteşem anılar",
        "Bu anılarda",
        "Bana eşlik ettiğin için",
        "Teşekkürlerrr",
        "Yenilerini eklemeye ne dersinn sevgilimm ❤️"
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
