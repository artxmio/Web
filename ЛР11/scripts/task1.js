function factorial(n) {
    if (n < 0) return "Введите неотрицательное число!";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Выведет 120
