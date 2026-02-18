const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu li a');

// Otevření/zavření menu po kliknutí na hamburger
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Automatické zavření menu po kliknutí na jakýkoliv odkaz (aby nezavazelo)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// --- SEKCE GALERIE ---
// Návod pro tým: Nové fotky nahrajte do složky "galerie".
// Poté sem NAHORU do seznamu připište přesný název souboru.
const naseFotky = [
    "fotka1.jpg",
    "fotka2.jpg",
    "fotka3.jpg",
    "fotka4.jpg",
    "fotka5.jpg",
    "fotka6.jpg",
    "fotka7.jpg",
    "fotka8.jpg",
    "fotka9.jpg",
    "fotka10.jpg",
    "fotka11.jpg",
    "fotka12.jpg",
    "fotka13.jpg",
    "fotka14.jpg",
    "fotka15.jpg",
    "fotka16.jpg",
    "fotka17.jpg"
];

const galleryContainer = document.getElementById('gallery-container');

// Modal elements
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');

if (galleryContainer) {
    naseFotky.forEach(nazevSouboru => {
        const obrazek = document.createElement('img');
        obrazek.src = `galerie/${nazevSouboru}`;
        obrazek.alt = "Fotografie z akce Autis.My.Ty";
        obrazek.loading = "lazy";
        obrazek.style.cursor = "zoom-in"; // Changes mouse to a plus magnifying glass
        
        // ADDED: Click event to open the full picture
        obrazek.addEventListener('click', () => {
            modalImage.src = obrazek.src; // Copies the image source
            imageModal.classList.add('active'); // Shows the dark background
        });

        galleryContainer.appendChild(obrazek);
    });
}

// ADDED: Close the modal when clicking the "X" or the dark background
if (imageModal) {
    imageModal.addEventListener('click', (e) => {
        // Only close if they click outside the actual image
        if (e.target !== modalImage) {
            imageModal.classList.remove('active');
        }
    });
}
