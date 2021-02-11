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

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map(s => {return s.name})
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(s => {return s.grade})
// Create an array peopleSex and store the value of sex key from persons array
  let peopleSex = persons.map(s => {return s.sex})
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
peopleName.filter(s => {
  if(s.startsWith(`J`) ||
  s.startsWith(`P`)){
    console.log(s)
  }
})
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
peopleName.filter(s => {
  if(s.startsWith(`A`) ||
  s.startsWith(`C`)){
    console.log(s.length)
  }
})
// Log all the filtered male ('M') in persons array
persons.filter(w =>{
  if(w.sex =="M"){
    console.log(w)
  }
})
// Log all the filtered female ('F') in persons array
persons.filter(w =>{
  if(w.sex =="F")
  {
    console.log(w)
  }
})
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
persons.filter(w =>{
  if(w.sex =="F" &&
  (w.name.startsWith("C") || w.name.startsWith("J")
  )){
    console.log(w)
  }
})
// Log all the even numbers from peopleGrade array
peopleGrade.filter(x => {
  if(x % 2 == 0){
    console.log(x)
  }
})
// Find the first name that starts with 'J' in persons array and log the object
var found = persons.find(x => x.name.startsWith("J"))
console.log(found.name)
// Find the first name that starts with 'P' in persons array and log the object
var found = persons.find(x => x.name.startsWith("P"))
console.log(found.name)
// Find the first name that starts with 'J', grade is greater than 10 and is a female
var found = persons.find(x => x.name.startsWith("J") && (x.grade > 10) && x.sex =="F")
console.log(found.name)
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(x=> x.sex =="F")
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(x=> x.sex =="M")
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cv) => {
  acc = acc + cv
  return acc
})
// Find the average grade
let avgGrade = gradeTotal / (persons.length)
// Find the average grade of male
maleGrade = malePersons.map(x => x.grade)
avgM = (maleGrade.reduce((acc, cv) => {
  acc = acc + cv
  return acc
}))/ maleGrade.length
// Find the average grade of female
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
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
asc = peopleGrade.sort((a, b) => a-b)
peopleGrade.map(x => console.log(x))
// Sort the peopleGrade in descending order
desc = peopleGrade.sort((a, b) => b-a)
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
descending = [...peopleGrade].sort((a, b) => b-a)
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort()
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let ra = [...peopleName].sort()