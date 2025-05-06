function Click() {
    var paragraphs = document.querySelectorAll("p");

    paragraphs.forEach((paragraph, index) => {
        paragraph.textContent = `Абзац номер ${index + 1}`;
    });
}