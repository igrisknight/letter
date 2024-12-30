function openLetter() {
    const flap = document.querySelector('.flap');
    const letter = document.querySelector('.letter');

    // Open the envelope flap
    flap.style.transform = 'rotateX(-180deg)';

    // Show the letter after the animation completes
    setTimeout(() => {
        letter.classList.add('visible');
    }, 1000);
}
