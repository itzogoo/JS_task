// // write a JS program that ask students their name and five courses they take.
// //   use this information to generate a student tag that will be outputed in a 
// // console in this format
//    Name: 
//    Course1: 
//    course2: 
//    course3: 
//    course4: 
//    course5: 
   
let studentName = prompt("Student please enter your name");
let course1 = prompt("Enter your Course1");
let course2 = prompt("Enter your Course2");
let course3 = prompt("Enter your Course3");
let course4 = prompt("Enter your Course4");
let course5 = prompt("Enter your Course5");


console.log("Name:" + " " + + studentName)
console.log("Course1:" + course1)
console.log("Course2:" + course2)
console.log("Course3:" + course3)
console.log("Course4:" + course4)
console.log("Course5:" + course5)



// Create a function that takes a name as an argument and returns a greeting message with the name.
function greet(name) {
    return 'Hi, ${name}!';
}
 const userName = 'Cynthia';
 const greeting = greet(userName);
 console.log(greeting);

// function that takes two numbers as arguments and returns their sum
function add(a,b){
    return a+b;
}
console.log(add(4,6))

// Create a function that multiplies two numbers and returns the result,
function multiply(a,b){
    return a*b;
}
console.log(multiply(5,7))

// Write a function that takes a number as an argument and returns its square.
function squareNumber(number){
    return number * number;
}
const num = 7;
const result = squareNumber(num);
console.log('The square of ${num} is: ${result}')

// Create a function that takes a number as an argument and returns its cube
function cubeNumber(number){
    return number * number * number;
}
const num2 = 9;
const result2 = cubeNumber(num2)
console.log('The cube of ${num2} is: ${result2}') // output: 729

// Write a function that takes two strings as arguments and concatenates them together.
function concatenatesStrings(string1, string2){
    return string1 + string2;
}
const str1 = 'Goodmorning, ';
const str2 = 'world!';
const result3 = concatenateStrings(str1, str2);
console.log(result3); //Output: Goodmorning World!

// Create a function that calculates and returns the length of a given string.
function calculateStringLength(inputString){
    return inputString.length;
}
const text = 'Goodevening, Cynthia!';
const length = calculateStringlength(text);
console.log('The length of the the string is: ${length}'); // Output: The length of the string is 21

// Write a function that checks if a given string is a palindrome (reads the same text forward and backward).
function isPalindrome(inputString){
    //remove non-alphanumeric characters and convert to lowercase
    const cleanString = inputString.replace(/[^a-zA-z0-9]/g, ''). tolowerCase();

// compare the original string with its reverse
const reversedString = cleanString.split('').reverse().join('');
return cleanString === reversedString;
}
    const PalindromeString = 'kayak';
    const nonPalindromeString = 'hello';

console.log(isPalindrome(palindromeString)); // Output: true
console.log(isPalindrome(nonpalindromeString)); // Output: false

// Create a function that takes an array of numbers and returns the minimum value.
function findMinimumValue(numbers){
    return numbers;
}
const numberArray = [10, 7, 6, 1, 3, 5];
const minimumValue = findMinimumValue(numberArray);
console.log('The minimum value is: ${minimumValue}');

// Create a function that takes an array of numbers and returns the maximum value..
function findMinimumValue(numbers){
    return numbers;
}
const numberArray1 = [10, 7, 6, 1, 3, 5];
const maximumValue = findMaximumValue(numberArray);
console.log('The maximum value is: ${maximumValue}');