function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse("Hello World"));
function finnabci(n) {
    if (n <= 1)
        return n;
    return n = finnabci(n - 1) + finnabci(n - 2);
}
console.log(finnabci(6));
function fibonnaci(n) {
    if (n <= 1)
        return n;
    var a = 0;
    var b = 1;
    var c = 0;
    for (var i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fibonnaci(6));
function largestArrayNumber(arr) {
    return Math.max.apply(Math, arr);
}
console.log(largestArrayNumber([2, 5, 7, 9, 3]));
function isPalindrome(str) {
    var cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedString === cleanedString.split('').reverse().join('');
}
console.log(isPalindrome("noon"));
// function reverse(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (str: string) {
//       const reversedInput = str.split('').reverse().join('');
//       return originalMethod.apply(str, [reversedInput]);
//     };
//     return descriptor;
//   }
//   class StringManipulator {
//     @reverse
//     processedString(str: string): void {
//       return console.log({ str });
//     }
//   }
//   const manipulator = new StringManipulator();
//   manipulator.processedString('Hamza');
function sumofArray(arr) {
    return arr.reduce(function (x, y) { return (x + y); }, 0);
}
console.log(sumofArray([1, 2, 3, 4, 5]));
function sumofArray2(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumofArray2([1, 2, 3, 4, 5]));
function anagram(str1, str2) {
    var sortedStr1 = str1.split('').sort().join('');
    var sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
console.log(anagram('listen', 'silent'));
