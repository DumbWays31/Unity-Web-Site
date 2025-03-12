function filterTeam(category) {
    // Show all team sections if 'Tout' is selected
    if (category === 'all') {
        document.querySelectorAll('.team-section').forEach(function (section) {
            section.classList.add('active');
        });
    } else {
        // Hide all team sections
        document.querySelectorAll('.team-section').forEach(function (section) {
            section.classList.remove('active');
        });

        // Show the selected team section
        document.querySelector('.team-section.' + category).classList.add('active');
    }
}