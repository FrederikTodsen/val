const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');

heart.addEventListener('click', () => {
    // Hvis den er åben, lukker den. Hvis den er lukket, åbner den.
    envelope.classList.toggle('flap');
});