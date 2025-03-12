const animationPath = 'json/multijoueur.json';

const animationOptions = {
    container: document.getElementById('lottie-container'),
    renderer: 'svg',  // ou 'canvas' selon vos préférences
    loop: true,
    autoplay: true,
    path: animationPath,
};

const anim = lottie.loadAnimation(animationOptions);