const keys = Array.from(document.querySelectorAll("a"));
const notes = Array.from(document.querySelectorAll("audio"));

// notes.forEach((note, index) => {
//   console.log(note, index);
// });

const playAudio = (index) => {
  notes[index].currentTime = 0;
  notes[index].play();
};

keys.forEach((key, index) => {
  key.addEventListener("click", (e) => {
    playAudio(index);
  });
});

keyBoardList = [
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
];

window.addEventListener("keypress", (e) => {
  let keyIndex = keyBoardList.indexOf(e.code);
  0 <= keyIndex < 23 ? playAudio(keyIndex) : console.log("key not registered");
  console.log(keyIndex, typeof keyIndex);
  keyBlock = keys[keyIndex].childNodes[1];
  //   console.dir(keyBlock);
  if (0 <= keyIndex && keyIndex < 14) {
    keyBlock.style.fill = "#ffd200";
    // keyBlock.focus();
  } else if (14 <= keyIndex && keyIndex < 23) {
    keyBlock.style.fill = "#f40082";
  }
  keyHoverRemove(keyIndex, keyBlock);
});

function keyHoverRemove(keyIndex, keyBlock) {
  keys.forEach((element) => {
    element.childNodes[1].addEventListener("transitionend", (e) => {
      if (0 <= keyIndex && keyIndex < 14) {
        keyBlock.style.fill = "white";
      } else if (14 <= keyIndex && keyIndex < 23) {
        keyBlock.style.fill = "black";
      }
    });
  });
}
