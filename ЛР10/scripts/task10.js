let arr8 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
let firstZero = arr8.indexOf(0);
let lastZero = arr8.lastIndexOf(0);
if (firstZero !== -1 && lastZero !== -1 && firstZero !== lastZero) {
    let sum = arr8.slice(firstZero + 1, lastZero).reduce((a, b) => a + b, 0);
    console.log("Сумма между нулями:", sum);
} else {
    console.log(0);
}
