//Créer les slides avec js
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];


const banner = document.querySelector("#banner");

// Créer et ajouter les slides dynamiquement
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  const img = document.createElement("img");
  img.classList.add("banner-img");
  img.src = `./assets/images/slideshow/${slide.image}`;
  img.alt = slide.tagLine;
  img.style.display = i === 0 ? "block" : "none"; // Afficher le premier slide, cacher les autres
  banner.appendChild(img);
}

let currentIndex = 0; //garde l'indice du slide actuellement affiché
const bannerText = document.querySelector(".banner-text");

function updateSlide(index) {
  const bannerImgs = document.querySelectorAll(".banner-img");
  bannerImgs.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
  bannerText.innerHTML = slides[index].tagLine;
}
updateSlide(currentIndex);

// Créer les bullet points
const dotsContainer = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
}

// Mettre en surbrillance le point correspondant à slide actuelle
function updateDots(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("dot_selected", i === index);
  });
}

// mettre en surbrillance le point initial
updateDots(currentIndex);

// Écouteur d'événements pour la flèche droite
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
  // Mise à jour de l'indice et affichage du slide suivant
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateSlide(currentIndex);
  updateDots(currentIndex)
});

// Écouteur d'événements pour la flèche gauche
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
  // Mise à jour de l'indice et affichage du slide précédent
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateSlide(currentIndex);
  updateDots(currentIndex)
});


