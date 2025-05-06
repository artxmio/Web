function showAlert() {
    var alertInput = document.getElementById("alert-input").value;
    alert("Input contains: " + alertInput);
}

function swapContent() {
    var input1 = document.getElementById("swap-input-1");
    var input2 = document.getElementById("swap-input-2");

    // Обмен значениями
    var temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}

function changeButtonText() {
    var button = document.getElementById("text-button");
    button.textContent = button.textContent === "Click to Change Text"
        ? "Text Changed!"
        : "Click to Change Text";
}
