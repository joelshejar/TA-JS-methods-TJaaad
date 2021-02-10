let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];
function findLongestWord(arr){
  var longest = arr.sort(
  function (a, b) {
      return b.length - a.length;
  }
)[0];
return longest
}
findLongestWord(strings)
// - Convert the above array "words" into an array of length of word instead of word.
let stringLength = words.map(word => word.length)
// - Create a new array that only contains word with atleast one vowel.
let vowelArray = words.filter(word => {
  if(word.includes("a") ||
  word.includes("e") ||
  word.includes("i") ||
  word.includes("o") ||
  word.includes("u") ){
    return word
  }
})
// - Find the index of the word "rhythm"
words.indexOf("rhythm")
// - Create a new array that contians words not starting with vowel.
let vowelArray = words.filter(word => {
  if(word.startsWith("a") ||
  word.startsWith("e") ||
  word.startsWith("i") ||
  word.startsWith("o") ||
  word.startsWith("u") ){
    
  }else{
    return word
  }
})
vowelArray
// - Create a new array that contianse words not ending with vowel
let vowelArray = words.filter(word => {
  if(word.endsWith("a") ||
  word.endsWith("e") ||
  word.endsWith("i") ||
  word.endsWith("o") ||
  word.endsWith("u") ){
    
  }else{
    return word
  }
})
vowelArray

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr){
  var some = arr.reduce((acc,cv) => {
  acc = acc + cv
  return acc;
}, 0)
return some
}
sumArray(numbers)
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let threeArray = numbers.map(number => {return number*3})
// - Create a new array that contains only even numbers
let evenArray = numbers.filter(number => {
  if(number % 2 == 0){
    return number
  }
})
// - Create  a new array that contains only odd numbers.
let oddArray = numbers.filter(number => {
  if(number % 2 == 0){
  } else{
    return number
  }
})
// - Create a new array that should have true for even number and false for odd numbers.
let difArray = numbers.filter(number => {
  if(number % 2 == 0){
    return true
  } else{
    return false
  }
})
// - Sort the above number in assending order.
let sortArray = numbers.sort((a, b) => {
  return a - b
})
// - Does sort mutate the original array?
console.log(`Yes, sort mutates the original array`)
// - Find the sum of the numbers in the array.

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function avgArray(arr){
  var some = arr.reduce((acc,cv) => {
  acc = acc + cv
  return acc;
}, 0)
return (some/arr.length)
}
avgArray(numbers)
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(arr){
  var some = arr.reduce((acc,cv) => {
  acc = acc + cv.length
  return acc;
}, 0)
return (some/arr.length)
}
averageWordLength(strings)
