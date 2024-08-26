function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const audio = document.getElementById('invitationSong');

    // Open the envelope flap
    envelope.querySelector('.envelope-flap').style.transform = 'rotateX(-180deg)';
    
    // Rotate the envelope body and reveal the letter with correct orientation
    setTimeout(() => {
        envelope.style.transform = 'rotateX(180deg)';
        letter.style.transform = 'rotateX(180deg)'; // Ensure letter is right-side up
        letter.style.opacity = '1';

        // Play the audio
        audio.play();
    }, 500); // Adjust delay to sync with envelope flap
}
