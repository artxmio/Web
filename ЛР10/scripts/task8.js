let arr6 = [12, false, "Текст", 4, 2, -5, 0];
let reversedArr = [];
let index = arr6.length - 1;
while (index >= 0) {
    reversedArr.push(arr6[index]);
    index--;
}
console.log("С помощью while:", reversedArr);
console.log("С помощью reverse:", arr6.reverse());
