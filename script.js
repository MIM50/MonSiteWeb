document.addEventListener('DOMContentLoaded', (event) => {
    const navigateToGTA5Button = document.getElementById('navigateToGTA5');
    const navigateToGTA6Button = document.getElementById('navigateToGTA6');

    if (navigateToGTA5Button) {
        navigateToGTA5Button.addEventListener('click', function() {
            window.location.href = 'gta.html';
        });
    }

    if (navigateToGTA6Button) {
        navigateToGTA6Button.addEventListener('click', function() {
            window.location.href = 'index.html'; // Assurez-vous que le nom du fichier de la première page est 'index.html'
        });
    }
});
