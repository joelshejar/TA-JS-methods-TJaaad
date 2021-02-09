// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101)
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9)
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ")
// - Add two new words in the strings array "called" and "sentance"
let something = [...strings]
something.push("called")
something.push("sentence")
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
something.join(" ")
// - Remove the first word in the array (strings)
something.shift()
// - Find all the words that contain 'is' use string method 'includes'
something.includes("is")
// - Find all the words that contain 'is' use string method 'indexOf'
something.indexOf("is")
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(x => {
  x % 3==0
})
// -  Sort Array from smallest to largest
var someNumbers = [...numbers]
someNumbers.sort((a, b) => a-b)
// - Remove the last word in strings
something.pop()
// - Find largest number in numbers
Math.max(...numbers)
// - Find longest string in strings
var longest = [...strings].sort(
  function (a, b) {
      return b.length - a.length;
  }
)[0];
console.log(longest)
// - Find all the even numbers
let clock = numbers.filter(x => {
  if(x%2==0){
    return x}
  
})
console.log(clock)


// - Find all the odd numbers
let clock = numbers.filter(x => {
  if(x%2!==0){
    return x}
  
})
console.log(clock)
// - Place a new word at the start of the array use (unshift)
something.unshift("more")
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7)
// - Make a subset of strings array ['a','collection']
strings.slice(2,4)
// - Replace 12 & 18 with 1221 and 1881
let indexReturn = someNumbers.findIndex(isTwelve)
function isTwelve(num){
  if(num == 12){
    return num
  }
}
someNumbers[indexReturn] = 1221
function isEighteen(num){
  if(num == 18){
    return num
  }
}
let ret = someNumbers.findIndex(isEighteen)
someNumbers[ret] = 1881
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
