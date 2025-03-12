const animationPath = 'json/map.json';

const animationOptions = {
    container: document.getElementById('lottie-container'),
    renderer: 'svg',  // ou 'canvas' selon vos préférences
    loop: true,
    autoplay: true,
    path: animationPath,
};

const anim = lottie.loadAnimation(animationOptions);