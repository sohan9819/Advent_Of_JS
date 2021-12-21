const keys = Array.from(document.querySelectorAll(".key"));
const scoreDisplay = document.querySelector(".score");
let activeKey;
let score = 0;
let randomIndex;

keys.map((key) => {
  key.classList.remove("jiggle");
});

randomIndex = keyActivation();

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    // console.log(e.target.dataset.key);
    keys[randomIndex].dataset.key === e.target.dataset.key
      ? rightAns()
      : wrongAns();
  });
});

keys.forEach((key) => {
  key.addEventListener("transitionend", () => {
    key.classList.remove("rightAns");
    key.classList.remove("wrongAns");
  });
});

function keyActivation() {
  randomIndex = Math.floor(Math.random() * 52);
  keys[randomIndex].classList.add("jiggle");
  return randomIndex;
}

function gameChecker(e) {
  console.log(e.key);
  keys[randomIndex].dataset.key === e.key.toUpperCase()
    ? rightAns()
    : wrongAns();
}

function rightAns() {
  keys[randomIndex].classList.add("rightAns");

  keys[randomIndex].classList.remove("jiggle");
  score++;
  scoreDisplay.innerText = score;
  randomIndex = keyActivation();
}
function wrongAns() {
  keys[randomIndex].classList.add("wrongAns");
  keys[randomIndex].classList.remove("jiggle");
  randomIndex = keyActivation();
}

document.addEventListener("keydown", gameChecker);
