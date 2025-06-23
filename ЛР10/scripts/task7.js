let userNumbers = [];
let userInput;
while ((userInput = prompt("Введите число")) !== "") {
    userNumbers.push(Number(userInput));
}
console.log("Введенные числа:", userNumbers);
console.log("Отсортированные числа:", userNumbers.sort((a, b) => a - b));
