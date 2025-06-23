function sumArrays(arr1, arr2) {
    return arr1.map((num, index) => num + (arr2[index] || 0));
}
console.log(sumArrays([1, 2, 3], [4, 5, 6])); // [5, 7, 9]
