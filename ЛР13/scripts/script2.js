function processNumbers() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(",").map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const avg = numbers.length ? (sum / numbers.length).toFixed(2) : 0;
    const sorted = [...numbers].sort((a, b) => a - b);

    document.getElementById("arrayResult").innerHTML = `
      <p>Сумма: ${sum}</p>
      <p>Среднее: ${avg}</p>
      <p>Сортировка: ${sorted.join(", ")}</p>
    `;
}