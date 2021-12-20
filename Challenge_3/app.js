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
  setTimeout(keyHover(keyIndex), 1000);
  //   keyHover(keyIndex);
});

function keyHover(keyindex) {
  console.log(keys[keyindex].childNodes[1]);

  keys[keyindex].childNodes[1].style.fill = "#ffd200";
}

function keyHoverRemove(keyindex) {
  console.log(keys[keyindex].childNodes[1]);
  keys[keyindex].childNodes[1].style.fill = "white";
}
