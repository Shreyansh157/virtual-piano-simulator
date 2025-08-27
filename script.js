// Define the white and black keys of the piano
const WHITE_KEYS = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const BLACK_KEYS = ["2", "3", "5", "6", "7", "9", "0"];

// Select all the keys, white keys, and black keys from the DOM
const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

// Event listener for clicking on a key
keys.forEach(function (key) {
  key.addEventListener("click", function () {
    playNote(key);
  });
});

// Event listener for keyboard key presses
document.addEventListener("keydown", function (e) {
  if (e.repeat) return; // Skip repeated keydown events
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key.toLowerCase());
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  // Play the corresponding note audio when a key is pressed
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

// Function to play a note and highlight the pressed key
function playNote(key) {
  // Get the HTML element with an 'id' attribute matching the value stored in the 'data-note' attribute of the 'key' element.
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0; // Rewind the audio to the beginning
  noteAudio.play(); // Play the note's audio
  key.classList.add("active"); // Highlight the pressed key

  // Remove the highlight after a short delay
  setTimeout(function () {
    key.classList.remove("active");
  }, 100);
}
