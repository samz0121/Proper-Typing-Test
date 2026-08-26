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

  // variables for typing logic
  let sampleText = "the quick brown fox jumps over the lazy dog";
  let targetText = sampleText;
  let inputText = "";
  let displayText = "";
  let index = 0;

  function render() {
    let correctChars = targetText.slice(0, index);
    let wrongChars = inputText.slice(index, inputText.length);
    let upcomingChars = targetText.slice(index + 1, targetText.length);
    let currentChar;
    if (wrongChars === "") {
      currentChar = targetText[index];
    }
    
    display.innerHTML = `<span class="text--correct">${correctChars}</span>
                          <span class="text--current">${currentChar}</span>
                          
                          <span class="text--upcoming">${upcomingChars}</span>`;
  }

  function handleInput(e) {
    inputText = e.target.value;

    if (inputText.slice(0, index + 1) === targetText.slice(0, index + 1)) {
      ++index;
    }

    if (index >= targetText.length) {
      console.log("You win");
      // TODO: terminate program
    }

    console.log(index, inputText);

    render();
  }

  clickZone.addEventListener("click", () => prompt.focus());
  prompt.addEventListener("input", handleInput);

  render();
}