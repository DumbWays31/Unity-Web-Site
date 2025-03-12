window.onload = function() {
    toggleButton(document.querySelector('.team-button button'));
}

function toggleButton(button) {
    // Remove 'selected' class from all buttons
    document.querySelectorAll('.team-button button').forEach(function(btn) {
        btn.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    button.classList.add('selected');

    // Call your filterTeam function here with the selected category
    filterTeam(button.dataset.category);
}