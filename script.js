var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content");
}
//flèche haut de page

  const backToTopButton = document.getElementById('back-to-top');

  // Afficher le bouton lorsque l'utilisateur fait défiler vers le bas
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Montrer après avoir fait défiler 300px
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Revenir en haut de la page lorsqu'on clique sur le bouton
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Défilement fluide
    });
  });

var sidemen = document.getElementById("sidemenu");
function openmenu(){
    sidemen.style.right = "0";  
}
function closemenu(){
    sidemen.style.right = "-200px";  
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzRA0zKq74n-iVrNJ1JtO4wnOAE2gVDP2-XDOROz556w0wFOcQRr3DF8A5uHxijVjg_/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})