function reverse(str: String) {
    return str.split('').reverse().join('')
}

console.log(reverse("Hello"))


function fibonnaci(n: number): number {
    if (n <= 1) return n;
    return fibonnaci(n-1) + fibonnaci (n-2)
}

console.log(fibonnaci(6))

function fibonnaciIterate(n: number) {
    if (n <= 1) return n;
    let a = 0; let b = 1; let c
    for (let i = 2; i <= n; i++ ) {
        c = a + b;
        a = b;
        b = c;
    }
    return b
}

console.log(fibonnaciIterate(6))


function largetArrayNumber(arr: number[]): number {
    return Math.max(...arr)
    
}

console.log(largetArrayNumber([1, 2, 5, 6, 9,3]))


function isPalindrome(str: String): boolean {
    const cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedString === cleanedString.split('').reverse().join('');

}

console.log(isPalindrome("noon"))

function reverseDecorator(target: any, propertyKey: String, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(str: String) {
        const reveredInput = str.split('').reverse().join('');
        originalMethod.apply(str, [reveredInput])
    }
    return descriptor
}

class StringManipulator{
    @reverseDecorator
    procccedString(str: String) {
        console.log(str)
    }
}
const manipulator = new StringManipulator();

manipulator.procccedString("Hamza")


function isPrime(n: number): boolean { 

    return (n % 2 === 0 )
     }

     console.log(isPrime(5))


     function sumofArray(arr: number[]){

        return  arr.reduce((a, b) => ( a + b), 0)

     }

     console.log(sumofArray([1,2,3,4,5]))

     function sumofArray2(arr: number[]): number {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
     }
     console.log(sumofArray2([1,2,3,4,5]))


     function anagram(str1: String, str2: String): boolean {
        const sortedString1 = str1.split('').sort().join()
        const sortedString2 = str2.split('').sort().join()
        return sortedString1 === sortedString2;
     }

     console.log(anagram('silent', 'listen'))

     function isSorted (arr: number[]) {
        const sortedArray = [...arr].sort((a, b) => a -b)
        return arr.join() === sortedArray.join()
     }

     console.log(isSorted([1,4,3,2,7]))