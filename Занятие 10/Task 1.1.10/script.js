function Click() {
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");

    if (isNaN(text1.value)) {
        text2.value = "Введено не число!";
    }
    else {
        text2.value = (+text1.value) ** 2;
    }
}