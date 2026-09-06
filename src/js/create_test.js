async function loadWords() {    // add error handling here
    const response = await fetch("../assets/word-bank.txt");
    const text = await response.text();

    return text.split("\n").map(word => word.trim()).filter(Boolean);
}

async function makeTest(length) {
    let wordBank = await loadWords();
    let targetWords = [];

    for (let i = 0; i < length; ++i) {
        let randomNum = Math.floor(Math.random() * wordBank.length);
        targetWords.push(wordBank[randomNum]);
    }

    return targetWords.join(" ");
}