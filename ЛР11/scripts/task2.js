function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/\s/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}
console.log(isPalindrome("А роза упала на лапу Азора")); // true
