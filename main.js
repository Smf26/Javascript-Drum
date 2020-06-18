'use strict';
// Global Variables
const DRUM_PADS = [ 'q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c' ]; // Keyboard buttons targetted
const display = document.getElementById('drumPadType');
const drumPads = document.querySelectorAll('.drum-pad');

// Looping through drumpads and adding an eventListener.
drumPads.forEach((pad) => {
	pad.addEventListener('click', () => playPad(pad));
});
// Linking drumpads to keyboard buttonsqq
document.addEventListener('keydown', (e) => {
	if (e.repeat) return;
	const keys = e.key;
	const drumpadIndex = DRUM_PADS.indexOf(keys);
	if (drumpadIndex > -1) playPad(drumPads[drumpadIndex]);
});
// Function to play the sound when drumpad is pressed
const playPad = (pad) => {
	const padAudio = document.getElementById(pad.dataset.note);
	padAudio.currentTime = 0;
	padAudio.play();
	pad.classList.add('active'); // Adding effects to the button when clicked
	display.innerHTML = pad.id;
	display.style.fontSize = '4vw';
	display.style.textAlign = 'center';
	// Removing the effect after button realese
	padAudio.addEventListener('ended', () => {
		pad.classList.remove('active');
		display.innerHTML = '';
	});
};
