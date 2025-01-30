// Haritayı başlat
const map = L.map('loveMap').setView([39.9191711, 32.6154940], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; Akif&Ela Aşk Haritası'
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
    title: "İlk Buluşma",
    coords: [39.9528, 32.6155],
    description: "Cezeri Lisesi - İlk tanıştığımız yer 💘",
    icon: 'star'
    },
  {
    title: "İlk Sarılma",
    coords: [39.9191711, 32.6154940],
    description: "Bu koordinatlarda ilk kez sarıldık 🥰",
    icon: 'heart'
    },
  {
    title: "Uzun Buluşma",
    coords: [40.8028, 29.4306],
    description: "Gebze Yurdu - İlk uzun buluşmamız ❤️",
    icon: 'heart'
    }
];

// Marker'ları ekle ve liste oluştur
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