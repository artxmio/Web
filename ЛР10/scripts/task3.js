let arr3 = [];
for (let i = 23; i <= 57; i++) {
    arr3.push(i);
}
console.log(arr3);

let arr4 = [];
let i = 23;
while (i <= 57) {
    arr4.push(i);
    i++;
}
console.log(arr4);

let result = 0;
for (let num of arr3) {
    result += num;
}
console.log("Сумма элементов:", result);
