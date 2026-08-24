// Entry point — runs once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  console.log('App initialized');

  // DOM elements
  const prompt = document.getElementById("hidden-input");

  // variables for typing logic
  let sampleText = "the quick brown fox jumps over the lazy dog";
  let inputText = "";

  console.log(sampleText);

  function render() {

  }

  function handleInput(e) {
    let text = e.target.value;
    let char = text[text.length - 1];

    inputText += char

    console.log(inputText);
  }

  prompt.addEventListener("input", handleInput);
  
}