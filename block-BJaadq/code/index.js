// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  // your code goes here
  let i=0
  got.houses.forEach(x => x.people.forEach(y => {
    i+=1
    return i
  }))
}

function peopleByHouses() {
  // your code goes here
  got.houses.filter(x=>{
    if(x.name =="Starks"){
      return x.people.length
    }
    else if(x.name =="Lannisters"){
      return x.people.length
    }
    else if(x.name =="Baratheons"){
      return x.people.length
    }
    else if(x.name =="Targaryens"){
      return x.people.length
    }
    else if(x.name =="Greyjoys"){
      return x.people.length
    }
    else if(x.name =="Tyrells"){
      return x.people.length
    }
    else if(x.name =="Tullys"){
      return x.people.length
    }
    else if(x.name =="Redwyne"){
      return x.people.length
    }
    else if(x.name =="Freys"){
      return x.people.length
    }
    else if(x.name =="Arryns"){
      return x.people.length
    }
    else if(x.name =="Dothrakis"){
      return x.people.length
    }
  })
}

function everyone() {
  // your code goes here
  let arr = []
  got.houses.map(x => {
    return x.people.map(y => {
      
      arr.push(y.name)
    })
  })
  console.log(arr)
}

function nameWithS() {
  // your code goes here
  let arr = []
  got.houses.map(x => {
    return x.people.filter(y => {
      if(y.name.includes("S") || y.name.includes("s")){
        arr.push(y.name)
      }      
    })
  })
  console.log(arr)
}

function nameWithA() {
  // your code goes here
  let arr = []
  got.houses.map(x => {
    return x.people.filter(y => {
      if(y.name.includes("A") || y.name.includes("a")){
        arr.push(y.name)
      }      
    })
  })
  console.log(arr)
}

function surnameWithS() {
  // your code goes here
  let arr = []
  got.houses.filter(x => {
    if(x.name.startsWith("S")){
      return x.people.map(y => {
        arr.push(y.name)
      })
    }
    
  })
  console.log(arr)
}

function surnameWithA() {
  // your code goes here
  let arr = []
  got.houses.filter(x => {
    if(x.name.startsWith("A")){
      return x.people.map(y => {
        arr.push(y.name)
      })
    }
    
  })
  console.log(arr)
}

function peopleNameOfAllHouses() {
  // your code goes here
  let obj = {}
  
  got.houses.map(x => {
    obj[x.name] = x.people.map(y => {
      return y.name
    })
  })
  console.log(obj)
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
