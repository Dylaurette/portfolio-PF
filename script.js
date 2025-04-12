// Gestion des onglets
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname, event) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-content");
}

// Flèche haut de page
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Afficher après 300px défilés
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Défilement fluide
  });
});

// Menu latéral
var sidemen = document.getElementById("sidemenu");
function openmenu() {
  sidemen.style.right = "0";
}
function closemenu() {
  sidemen.style.right = "-200px";
}

// Envoi du formulaire via Google Script
const scriptURL = 'https://script.google.com/macros/s/AKfycbzRA0zKq74n-iVrNJ1JtO4wnOAE2gVDP2-XDOROz556w0wFOcQRr3DF8A5uHxijVjg_/exec';
const form = document.forms['submit-to-google-sheet'];
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});

// Déroulante pour la section "Mes projets"
document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-accordion');
  toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Sélectionne l'élément suivant (la liste de liens)
      const dropdownContent = this.nextElementSibling;
      // Ajoute ou retire la classe "show" pour afficher/cacher le contenu
      dropdownContent.classList.toggle("show");
    });
  });
});
