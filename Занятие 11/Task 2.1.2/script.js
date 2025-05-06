function changeContent() {
    var elements = document.querySelectorAll(".zzz");

    elements.forEach((element, index) => {
        element.textContent = `Элемент номер ${index + 1}`;
    });
}
