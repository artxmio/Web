let arr7 = [5, 9, 21, , , 9, 78, , , , 6];
let emptyCount = arr7.filter(item => item === undefined).length;
console.log("Количество пустых элементов:", emptyCount);
