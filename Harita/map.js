// Haritayı başlat
const map = L.map('loveMap').setView([39.9191711, 32.6154940], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; Akif❤️Ela Aşk Haritası'
}).addTo(map);

// Özel Marker İkonları
const markerIcons = {
  heart: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41]
  }),
  star: L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    iconSize: [25, 41]
  })
};

// Özel Konumlar
const specialLocations = [
  {
    title: "O An",
    coords: [39.991119, 32.622279],
    description: "Hangi an bilmiyorum ama 4 yıl boyunca başıma gelen en iyi şeysin 💘",
    icon: 'star'
    },
  {
    title: "Önemli Bir Yer",
    coords: [39.979302, 32.615463],
    description: "Bil bakalım burası neresi? Tabiki de ilk kez sarıldığımız yer 🥰",
    icon: 'heart'
    },
  {
    title: "Gebze",
    coords: [40.789500, 29.490631],
    description: "Bur da sabaha kadar oturup sohbet etmek var ya tadından yenmez ❤️",
    icon: 'heart'
    },
  {
    title: "Kütüphane",
    coords: [39.976861, 32.638385],
    description: "Dersler ne kadar sıkıcı olsa da senleyken dersler bile kolaylaşıyor işte hayatı böyle kolaylaştırıyorsun 📖",
    icon: 'heart'
    },
  {
    title: "O yurt",
    coords: [39.93798, 41.27626],
    description: "Nasıl bir tramva anlatamam aklım çıkmıştı orda kalıcağınızı duyunca 🤯",
    icon: 'heart'
    }

];

// Marker'ları ekle ve li oluştur
const locationsList = document.getElementById('locationsList');
specialLocations.forEach((loc, index) => {
  // Haritaya marker ekle
  const marker = L.marker(loc.coords, {
    icon: markerIcons[loc.icon]
  }).addTo(map);

  marker.bindPopup(`
        <h3 style="margin:0;color:#e74c3c">${loc.title}</h3>
        <p style="margin:5px 0">${loc.description}</p>
    `);

  // Listeye öğe ekle
  const listItem = document.createElement('div');
  listItem.className = 'location-item';
  listItem.innerHTML = `
        <strong>${loc.title}</strong>
        <p style="margin:5px 0;font-size:0.9em">${loc.description}</p>
    `;

  listItem.addEventListener('click', () => {
    map.flyTo(loc.coords, 16);
    marker.openPopup();
  });

  locationsList.appendChild(listItem);
});

// Dropdown etkileşimi
document.querySelector('.dropdown-btn').addEventListener('click', () => {
  document.querySelector('.dropdown-content').classList.toggle('show');
});

// Harita dışına tıklama
window.addEventListener('click', (e) => {
  if (!e.target.matches('.dropdown-btn')) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(drop => drop.classList.remove('show'));
  }
});
