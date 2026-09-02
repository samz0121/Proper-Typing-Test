async function loadWords() {
    const response = await fetch("../assets/word-bank.txt");
    const text = await response.text();
    console.log(text);
    return text.split("\n").map(w => w.trim()).filter(Boolean);
}