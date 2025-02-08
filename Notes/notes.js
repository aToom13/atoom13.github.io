let notes = JSON.parse(localStorage.getItem('loveNotes')) || [];
let deletedNotes = JSON.parse(localStorage.getItem('deletedNotes')) || [];

// Önceden tanımlı notları ekle (sadece ilk yüklemede)
if (notes.length === 0) {
    notes.push(
        { text: 'İlk Buluşmamız ❤️', date: new Date().toLocaleString('tr-TR'), completed: false },
        { text: 'İlk Sinema Keyfimiz 🎥', date: new Date().toLocaleString('tr-TR'), completed: false },
        { text: 'İlk Sarılmamız 👩‍❤️‍👨', date: new Date().toLocaleString('tr-TR'), completed: false },
        { text: 'İlklerimin seninle olmasını istiyorummm prensesimm ⬇️', date: new Date().toLocaleString('tr-TR'), completed: true },
        { text: 'Bu yolda bana eşlik eder misinn', date: new Date().toLocaleString('tr-TR'), completed: true },
						
        { text: 'Sevdam', date: new Date().toLocaleString('tr-TR'), completed: false },
						
        { text: 'Senin adınla titrer dilim,
		 Bir yangın gibi düşersin içime.
		 Gözlerin kahverengi bir deniz,
		 Boğulmak isterim her bir biçime.
		 ', date: new Date().toLocaleString('tr-TR'), completed: true },
						
	{ text: 'Saçların geceyi kıskandırır,
		 En karanlıklar bile ışıldar sende.
		 Bir rüzgâr esse, tenin kokar, 
		 Çiçekler bile soluk kalır bu tende.
		 ', date: new Date().toLocaleString('tr-TR'), completed: true },
						
	{ text: 'Ellerin değse, zaman durur, 
 	 	 Dünya susar, kalpler konuşur. 
		 Sen varsan bahar hiç bitmez, 
 		 Ömrüm seninle huzur dinmez.
		 ', date: new Date().toLocaleString('tr-TR'), completed: true }

    );
    saveNotes();
}

function saveNotes() {
    localStorage.setItem('loveNotes', JSON.stringify(notes));
    localStorage.setItem('deletedNotes', JSON.stringify(deletedNotes));
}

function addNote() {
    const input = document.getElementById('noteInput');
    if (input.value.trim()) {
        notes.push({
            text: input.value,
            date: new Date().toLocaleString('tr-TR'),
            completed: false
        });
        saveNotes();
        renderNotes();
        input.value = '';
        Swal.fire({
            icon: 'success',
            title: 'İşte yeni bir anı dahaa 🥰',
            text: 'Sonsuzluğa giden güzel bir anı dahaaa ❤️',
            timer: 2000,
            background: '#ffe6ee'
        });
    }
}

function toggleCompleted(index) {
    notes[index].completed = !notes[index].completed;
    saveNotes();
    renderNotes();
}

function deleteNote(index) {
    Swal.fire({
        title: 'Emin misin?',
        text: "Bu güzel anıyı silmek istediğine emin misin?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet, sil!',
        cancelButtonText: 'Vazgeç'
    }).then((result) => {
        if (result.isConfirmed) {
            deletedNotes.push(notes[index]);
            notes.splice(index, 1);
            saveNotes();
            renderNotes();
            Swal.fire(
                'Silindi!',
                'Anı başarıyla silindi.',
                'success'
            )
        }
    });
}

function restoreNote(index) {
    notes.push(deletedNotes[index]);
    deletedNotes.splice(index, 1);
    saveNotes();
    closeRecycleBin();
    Swal.fire('Başarılı!', 'Anı başarıyla geri yüklendi.', 'success');
    renderNotes();
}

function permanentDelete(index) {
    Swal.fire({
        title: 'Kalıcı olarak silinsin mi?',
        text: "Bu işlem geri alınamaz!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Evet, kalıcı olarak sil!',
        cancelButtonText: 'Vazgeç'
    }).then((result) => {
        if (result.isConfirmed) {
            deletedNotes.splice(index, 1);
            saveNotes();
            showRecycleBin();
            Swal.fire(
                'Kalıcı olarak silindi!',
                'Anı geri dönüşüm kutusundan kaldırıldı.',
                'success'
            )
        }
    });
}

function showRecycleBin() {
    const modalContent = `
        <h2>🔄 Geri Dönüşüm Kutusu (${deletedNotes.length})</h2>
        <div class="deleted-notes-list">
            ${deletedNotes.map((note, index) => `
                <div class="note-item deleted-note">
                    <span>💔 ${note.text}<br><small>📅 ${note.date}</small></span>
                    <div class="note-actions">
                        <button class="restore-btn" onclick="restoreNote(${index})">♻️ Geri Yükle</button>
                        <button class="permanent-delete-btn" onclick="permanentDelete(${index})">␡ Kalıcı Sil</button>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="home-btn" style="margin-top:1rem" onclick="closeRecycleBin()">Kapat</button>
    `;
    
    const modal = document.createElement('div');
    modal.className = 'recycle-modal';
    modal.innerHTML = modalContent;
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

function closeRecycleBin() {
    document.querySelector('.recycle-modal').remove();
}

function renderNotes() {
    const list = document.getElementById('notesList');
    list.innerHTML = notes.map((note, index) => `
        <div class="note-item ${note.completed ? 'completed' : ''}">
            <span>💌 ${note.text}<br><small>📅 ${note.date}</small></span>
            <div class="note-actions">
                <button class="complete-btn" onclick="toggleCompleted(${index})">
                    ${note.completed ? '❌ Geri Al' : '✅ Tamamla'}
                </button>
                <button class="delete-btn" onclick="deleteNote(${index})">🗑️ Sil</button>
            </div>
        </div>
    `).join('');
}

// İlk yüklemede notları göster
renderNotes();

// Enter tuşu desteği
document.getElementById('noteInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addNote();
});
