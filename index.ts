 function reverse(str: String): String {
    return str.split('').reverse().join('');
}

console.log(reverse("Hello World"));




function finnabci(n: number): number {
    if (n <= 1) return n;
    return n = finnabci(n -1) + finnabci(n-2)
}

console.log(finnabci(6))



function fibonnaci(n: number): number{
    if (n <= 1) return n;

    let a = 0; let b = 1; let c = 0;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibonnaci(6));




function largestArrayNumber(arr: number[]): number {
    return Math.max(...arr);
}

console.log(largestArrayNumber([2,5,7,9,3]));




function isPalindrome(str: String): boolean {
    const cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedString === cleanedString.split('').reverse().join('');
}

console.log(isPalindrome("noon"));






// function reverseDecorator(
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
//     @reverseDecorator
//     processedString(str: string): void {
//       return console.log({ str });
//     }
//   }
  
//   const manipulator = new StringManipulator();
  
//   manipulator.processedString('Hamza');
  
  



function sumofArray(arr: number[]): number {
 return arr.reduce((x, y) => (x + y), 0)
}

console.log(sumofArray([1,2,3,4,5]))




function sumofArray2(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i ++)
{
    sum += arr[i];
} return sum;
}


console.log(sumofArray2([1,2,3,4,5]))





function anagram(str1: String, str2: String): boolean {
    const sortedStr1= str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2
}

console.log(anagram('listen','silent'));




function isSortedRecursive(arr: number[]): boolean{
    const sortedArray = [...arr].sort((a, b) => a - b)

    return arr.join() === sortedArray.join();
}

console.log(isSortedRecursive([1, 3, 2, 4, 5]))




function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i-1]) return false
    }
    return true
}

console.log(isSorted([1,2,3,4,5]))
console.log(isSorted([2,4,1,3,5]))


function fizbuzz (){
    for (let i = 1; i < 101; i++) {
        if (i % 15 == 0 ) {
            console.log('FizzBuzz')
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else if (i % 5 == 0 ) {
            console.log("Buzz")
        } else console.log(i)
    }
}

fizbuzz()


function removeDuplicate(arr: number[]) {
    
    return [...new Set(arr)]
}

console.log(removeDuplicate([1,3,3,5,5,4,3,5,2]))




function firtOccurance(arr: number[], element: number) {
    return arr.indexOf(element);
}

console.log(firtOccurance([1,3,3,5,5,4,3,5,2], 5))


function dupplicateArray(arr: number[]){

   const seen = new Set();
   const duplicate = [];
    for (let num of arr) {
        if (seen.has(num)) {
            duplicate.push(num)
        }
        seen.add(num);
    }
    return duplicate;
}

console.log(dupplicateArray([1,3,3,5,5,4,3,5,2]))


function firstDuplicate(arr: number[]) {
    const seen = new Set();
    for(let num of arr) {
        if(seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
}

console.log(firstDuplicate([1,3,3,5,5,4,3,5,2]))