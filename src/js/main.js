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
  let index = 0;

  function render() {
    for (let char of targetText) {
    }
    display.innerHTML = targetText;
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