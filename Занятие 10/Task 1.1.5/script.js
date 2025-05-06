function Click() {
    var text1 = document.getElementById("text_1");
    var text2 = document.getElementById("text_2");

    console.log(text1.value);
    console.log(text2.value);

    var temp = text1.value;
    text1.value = text2.value;
    text2.value = temp;

    console.log("switched...");
}