let wordBank = null; // module-level cache — starts empty

async function loadWords() {
    try {
        const response = await fetch("../assets/word-bank.txt");

        if (!response.ok) {
            throw new Error(`Failed to load word bank: ${response.status}`);
        }

        const text = await response.text();
        return text.split("\n").map(word => word.trim()).filter(Boolean);

    } catch (err) {
        console.error("Could not load words:", err);
        return [];
    }
}

async function ensureWordBankLoaded() {
    if (wordBank === null) {
        wordBank = await loadWords(); // only fetches the very first time
    }
}

async function makeTest(length) {
    await ensureWordBankLoaded(); // no-op after the first call

    let targetWords = [];
    for (let i = 0; i < length; ++i) {
        let randomNum = Math.floor(Math.random() * wordBank.length);
        targetWords.push(wordBank[randomNum]);
    }

    return targetWords.join(" ");
}