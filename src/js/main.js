// Entry point — runs once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  console.log('App initialized');

  // DOM elements
  const prompt = document.getElementById("hidden-input");
  const display = document.getElementById("display");
  const clickZone = document.getElementById("click-zone");
  const testWin = document.getElementById("test--win");

  // variables for typing logic
  let sampleText = "the quick brown fox jumps over the lazy dog";
  let targetText = sampleText;
  let inputText = "";

  let programState = "game";
  let slow = 0;
  let fast = 0;

  function render() {
    let correctChars = targetText.slice(0, slow);
    let wrongChars = inputText.slice(slow, inputText.length);
    let upcomingChars = targetText.slice(slow + 1, targetText.length);
    let currentChar = "";
    if (wrongChars === "" && slow !== targetText.length) {
      currentChar = targetText[slow];
    }
    console.log(currentChar);
    
    display.innerHTML = `<span class="text--correct">${correctChars}</span><span class="text--current">${currentChar}</span><span class="text--wrong">${wrongChars}</span><span class="text--upcoming">${upcomingChars}</span>`;
  }

  function handleInput(e) {
    inputText = e.target.value;

    if (e.inputType === "deleteContentBackward") {
      fast -= 2;
    }

    if (inputText.slice(0, slow + 1) === targetText.slice(0, slow + 1)) {
      ++slow;
    }
    ++fast;

    if (slow > fast) {
      --slow;
    }

    if (slow >= targetText.length) {
      console.log("You win");
      testWin.style.visibility = "visible";
      // TODO: terminate program
    }

    console.log(slow, fast, inputText);

    render();
  }

  clickZone.addEventListener("click", () => prompt.focus());
  prompt.addEventListener("input", handleInput);

  render();
}