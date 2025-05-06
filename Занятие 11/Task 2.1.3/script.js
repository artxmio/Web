function calculateSum() {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;

    const sum = num1 + num2;

    document.getElementById("result").textContent = sum;
}