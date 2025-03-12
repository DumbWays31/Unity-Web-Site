document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('heroVideo');
    var playPauseButton = document.getElementById('playPauseButton');
    var playIcon = document.getElementById('playIcon');

    playPauseButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        togglePlayPauseIcon();
    });

    function togglePlayPauseIcon() {
        if (video.paused) {
            playIcon.src = 'img/play.svg';
        } else {
            playIcon.src = 'img/pause.svg';
        }
    }
});