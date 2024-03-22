document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.usermenu__info-name');
    if (element && element.textContent === 'Demo') {
        element.textContent = 'Viver';
    }
});
