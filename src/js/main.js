// Entry point — runs once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  init();
});

async function init() {
  console.log('App initialized');

  // DOM elements
  const gameScreen = document.getElementById("state--game");
  const winScreen = document.getElementById("state--win");
  const errorScreen = document.getElementById("state--error");

  const prompt = document.getElementById("hidden-input");
  const display = document.getElementById("display");
  const clickZone = document.getElementById("click-zone");
  const restartButton = document.getElementById("button--restart");

  // variables for typing logic
  const testLength = 20;
  let programState = "game";

  let targetText;
  let inputText;
  let index;

  function clearDisplay() {
    gameScreen.style.display = "none";
    winScreen.style.display = "none";
    errorScreen.style.display = "none";
  }

  function updateDisplay() {
    clearDisplay();

    switch (programState) {
      case "game":
        gameScreen.style.display = "flex";
        break;
      case "win":
        winScreen.style.display = "flex";
        break;
      default:
        errorScreen.style.display = "flex";
    }
  }

  async function resetGame() {
    index = 0;
    inputText = "";
    // TODO: update targetText to something new
    targetText = await makeTest(testLength);

    prompt.value = "";
    render();
  }

  function render() {
    let correctChars = targetText.slice(0, index);
    let wrongChars = targetText.slice(index, inputText.length);
    let upcomingChars = "";
    let currentChar = "";
    if (wrongChars === "" && index !== targetText.length) {
      currentChar = targetText[index];
      upcomingChars = targetText.slice(index + 1, targetText.length);
    } else {
      upcomingChars = targetText.slice(inputText.length, targetText.length);
    }

    display.innerHTML = `<span class="text--correct">${correctChars}</span><span class="text--current">${currentChar}</span><span class="text--wrong">${wrongChars}</span><span class="text--upcoming">${upcomingChars}</span>`;
  }

  function handleInput(e) {
    inputText = e.target.value;

    if (inputText.slice(0, index + 1) === targetText.slice(0, index + 1)) {
      ++index;
    }

    // while also catches ctrl + backspace case
    while (index > inputText.length) {
      --index;
    }

    if (index >= targetText.length) {
      programState = "win";
      updateDisplay();
      // TODO: make sure the program is terminating properly
    }

    console.log(index, inputText);

    render();
  }

  restartButton.addEventListener("click", async () => {
    programState = "game";
    await resetGame();
    updateDisplay();
    // TODO: make sure the program is restarting properly
  });

  clickZone.addEventListener("click", () => prompt.focus());
  prompt.addEventListener("input", handleInput);

  await resetGame();
  updateDisplay();
}