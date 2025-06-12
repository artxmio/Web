let arr5 = ['10', '20', '30', '50', '235', '3000'];
for (let num of arr5) {
    if (['1', '2', '5'].includes(num[0])) {
        console.log(num);
    }
}
