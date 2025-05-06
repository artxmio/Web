function replaceLinks() {
    const links = document.querySelectorAll(".link");
    const urls = ["https://www.google.com", "https://www.youtube.com", "https://www.wikipedia.org", "https://www.github.com", "https://www.stackoverflow.com"];
    links.forEach((link, index) => {
        link.setAttribute("href", urls[index % urls.length]);
        link.textContent = `Link ${index + 1}`;
    });
}

function updateParagraphs() {
    const paragraphs = document.querySelectorAll("li");
    paragraphs.forEach((paragraph, index) => {
        paragraph.textContent = `Абзац номер ${index + 1}`;
    });
}

function calculateSum() {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;
    const sum = num1 + num2;
    document.getElementById("result").textContent = sum;
}
