let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    let dotContainer = document.getElementById('dot-container');
    
    // Si le pointeur est en dehors des limites, réinitialiser
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Cacher toutes les slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Ajouter les points (dots)
    let dotsHTML = '';
    for (let i = 1; i <= slides.length; i++) {
        if(i == slideIndex) {
            dotsHTML += `<span class="dot slider-active" onclick="currentSlide(${i})"></span>`;
        } else {
            dotsHTML += `<span class="dot" onclick="currentSlide(${i})"></span>`;
        }
    }
    dotContainer.innerHTML = dotsHTML;

    // Afficher la slide demandée
    slides[slideIndex - 1].style.display = 'block';
}