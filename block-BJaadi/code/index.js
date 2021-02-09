// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

// - Find the index of `101` in numbers
numbers.indexOf(101)
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9)
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ")
// - Add two new words in the strings array "called" and "sentance"
strings.push("called")
strings.push("sentence")
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ")
// - Remove the first word in the array (strings)
strings.shift()
// - Find all the words that contain 'is' use string method 'includes'
let random = strings.map(string => string.includes("is"))
// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(x => {
  x % 3==0
})
// -  Sort Array from smallest to largest
numbers.sort((a, b) => a-b)
// - Remove the last word in strings
strings.pop()
// - Find largest number in numbers
Math.max(numbers)
// - Find longest string in strings
var longest = strings.sort(
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
// - Place a new word at the start of the array use (upshift)
strings.unshift("more")
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7)
// - Make a subset of strings array ['a','collection']
strings.slice(2,4)
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(numbers.indexOf(12), 1, 1221)
numbers.splice(numbers.indexOf(18), 1, 1881)
// - Replace words in strings array with the length of the word
let stringsLength = strings.map(
  (string) => string.length
)
// - Find the sum of the length of words using above question
stringsLength.reduce((acc,cv) => {
  acc = acc + cv
  return acc;
}, 0)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filteredCustomer = customers.filter((customer) =>
  customers.firstname.startsWith("J")
)
// - Create new array with only first name
let firstnameCustomer = customers.map((customer) =>
  customer.firstname
)
// - Create new array with all the full names (ex: "Joe Blogs")
let fullnameCustomer = customers.map((customer) =>
  {`${customer.firstname} ${customer.lastname}`}
)
// - Sort the array created above alphabetically
fullnameCustomer.sort()
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel = customer.filter(customer => {
  if(customer.firstname.toLowerCase == "a" ||
  customer.firstname.toLowerCase == "e" ||
  customer.firstname.toLowerCase == "i" ||
  customer.firstname.toLowerCase == "o" ||
  customer.firstname.toLowerCase == "u" 
  ) {
    return true
  } else {
    return false
  }
})









