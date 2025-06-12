document.getElementById("addButton").addEventListener("click", function () {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Новый элемент";
    document.getElementById("container").appendChild(newParagraph);
});
