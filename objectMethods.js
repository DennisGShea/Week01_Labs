let family = 
    [
    { name:'Sage', gender: 'female', age: 20 },
    { name:'Noah', gender: 'male', age: 17 },
    { name:'Henry', gender: 'male', age: 11 },
    { name:'Todd', gender: 'male', age: 45 },
    { name:'Meghann', gender: 'female', age: 43 },
    ]


    let sortedArray = family.sort((a,b) => (a.name > b.name) ? -1 : 1) //ternary
    
    console.log("andTheAnswerIsForTheSortedArray", sortedArray)

// console.log(kids.filter(kid => kid.age <18 ))


// let sortedArray = family.sort((a, b) =>  (a.name > b.name) ? 1 : ~1)
//  console.log(sortedArray)   

// family
//   .filter(person => person.age < 21)
//   .forEach(member => {
//     let prefix = (member.gender === 'male') ? 'Sir' : 'Madam'
//     let greeting = `Hello ${prefix} ${member.name}.`
//     console.log(greeting)
//   })  

// let newFam = family.map(member => {
//     let born = 2020 - member.age
//     return {
//         name:member.name,
//         born: born
//     }
// })

// console.log(newFam)

// let dennisArray = []
//  family.forEach(member => {
//      let born = 2020 - member.age
//      dennisArray.push({name: member.name, born:born})
//  })
//  console.log (dennisArray)

// family.forEach(member => {
//     if(member.age < 21) {
//     let prefix = (member.gender === 'male') ? 'Sirrr' : 'Madam'
//     let greeting = `Hello ${prefix} ${member.name}.`
//     console.log(greeting)
//     }
// })


 








// let dog = { 
//     name: 'Scully',
//     age: 6,
//     type: 'corgil',
//     size: 'small',
//     speak() {console.log ('Grrrrr...') }
// }
        
//     (person)
//         ? console.log( `Woof! ${person} is here! ` ) 
//         : console.log( 'Woooofffff' )          



// dog.growl()
// dog.speak('Becca')


// function crazy() {
//         throw 'What now?'
// }

// function awesome(){
//     return true
// }

// try {
//     let plop = crazy()
//     let fizz = awesome()
// }
// catch(error) {
//     console.log('We got an error', msg)
// }

