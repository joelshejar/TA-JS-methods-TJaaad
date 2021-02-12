let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let peopleGrade = persons.map(s => {return s.grade})
let gradeTotal = peopleGrade.reduce((acc, cv) => {
  acc = acc + cv
  return acc
})
let avgGrade = gradeTotal / (persons.length)
// Find the average grade of male
let malePersons = persons.filter(x=> x.sex =="M")
maleGrade = malePersons.map(x => x.grade)
avgM = (maleGrade.reduce((acc, cv) => {
  acc = acc + cv
  return acc
}))/ maleGrade.length
// Find the average grade of female
let femalePersons = persons.filter(x=> x.sex =="F")
femaleGrade = femalePersons.map(x => x.grade)
avgM = (femaleGrade.reduce((acc, cv) => {
  acc = acc + cv
  return acc
}))/ femaleGrade.length
// Find the highest grade
let kick = peopleGrade.sort((a, b) => b-a)[0]
// Find the highest grade in male
let highestMale = maleGrade.sort((a, b) => b-a)[0]
// Find the highest grade in female
let highestFemale = femaleGrade.sort((a, b) => b-a)[0]
// Find the highest grade for people whose name starts with 'J' or 'P'
let random = peopleName.filter(s => {
  if(s.startsWith(`J`) ||
  s.startsWith(`P`)){
    return s.grade
  }
})
let highestRandom = random.sort((a, b) => b-a)[0]
const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = {banana: 0, cherry: 0, orange: 0, apple: 0, fig: 0}
fruitBasket.forEach(x => {
  if(x == "banana"){
    fruitsObj.banana += 1
  }
  else if(x == "cherry"){
    fruitsObj.cherry += 1
  }
  else if(x == "orange"){
    fruitsObj.orange += 1
  }
  else if(x == "apple"){
    fruitsObj.apple += 1
  }
  else if(x == "fig"){
    fruitsObj.fig += 1
  }
})
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
var flattened = data.reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
var flattenedTwo = dataTwo.reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
let increment = (num) => {
  return num + 1
}
let double = (num) => {
  return num * 2
}
let decrement = (num) => {
  return num - 1
}
let triple = (num) => {
  return num * 3
}
let half = (num) => {
  return Math.round(num/2)
}
let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
pipeline.reduce((acc, cv) => {
  acc = cv(acc)
  return acc;
}, 3)

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
pipeline2.reduce((acc, cv) => {
  acc = cv(acc)
  return acc;
}, 8)