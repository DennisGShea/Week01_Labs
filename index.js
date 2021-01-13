

// // let books =
//         [{ title: 'A Great Book',
//         author: 'byA_GreatAuthor',
//         alreadyRead: true }, 

//         {title: 'A 2nd Great Book',
//         author: 'A 2nd GreatAuthor',
//         alreadyRead: true },

//         {title: 'A 3rd Great Book',
//         author: 'A 3rd GreatAuthor',
//         alreadyRead: false }
// ]

// // console.log(books)

// for (let i = 0; i < books.length; i = i+1){
//      console.log(books[i].title)
// }

let a = 1;
leb b = 2:





// let recipe =  {
//     title: "Sausage Pizza", 
//     serves: 8, 
//     ingredients: [ "sause", "sausage", "cheese", "spices" ],
// }

// console.log(`Recipe for a ${recipe.title}`)
// console.log(`Ingredients are: ${recipe.ingredients}`)

// console.log (recipe.ingredients.length) 

// for (let i = 0; i < recipe.ingredients.length; i = i+1){
//     console.log(recipe.ingredients[i])
// } 



























let grade = "ZZZ" ;
function assignGrade(score){
    if (score >= 90) {
    grade = "A"
  } else {
    if (score >= 80) {
      grade = "B"
   } else {
    if (score >= 70) {
        grade = "C"
     } else {
        if (score >= 60) {
            grade = "D"
         } else {
            grade = "F"
             }
        }
    }
   }
   return(grade)
}  

console.log ("A score of 40 is assigned a grade of", assignGrade(40))
console.log ("A score of 92 is assigned a grade of", assignGrade(92))
console.log ("A score of 88 is assigned a grade of", assignGrade(88))
console.log ("A score of 100 is assigned a grade of", assignGrade(100))
console.log ("A score of 77 is assigned a grade of", assignGrade(77))
console.log ("A score of 66 is assigned a grade of", assignGrade(66))
console.log ("A score of 40 is assigned a grade of", assignGrade(-5))



// let score = 82

// function assignGrade(grade){
//     switch(Math.floor(grade/10)) {
//         case 10:
//         case  9:
//             return 'A'
//         case  8:
//             return 'B'
//         case  7:
//             return 'C'
//         case  6:
//              return 'D'
//         default: 
//             return 'F'
//     }
// }
            
// console.log('100 -> ', assignGrade(100))
// console.log(' 95 -> ', assignGrade(95))
// console.log(' 85 -> ', assignGrade(85))
// console.log(' 75 -> ', assignGrade(75))
// console.log(' 65 -> ', assignGrade(65))
// console.log(' 55 -> ', assignGrade(55))
// console.log(' 45 -> ', assignGrade(45))
// console.log(' 35 -> ', assignGrade(35))
         



// function GreaterNum(x, y) {
//   if (x > y) {
//     console.log(x);
//   } else if ((x = y)) {
//     console.log("equal", x);
//   } else {
//     console.log(y);
//   }
// }

// GreaterNum(9, 5);
// GreaterNum(6, 7);

// function helloWorld (lang = "es") {
//   if (lang === "de") {
//     console.log("Hellow World in DE");
//   } else if (lang === "esnod"){console.log("Hello World in ES")} else
//   console.log("HelloWorld in EN")
// }

// helloWorld("es")
// helloWorld("de")
// helloWorld("en")
// helloWorld()

//  //---------  objects and arrays ------
//  // destructuring

// function studentIntro(student){
// let fullName = student.fullName
// let school = student.school
// let hairColor = student.hairColor
// let {fullName,school,hairColnor} = student

// if (firstName === 'jon')   {
//     console.log('correct name')
//  } else if {
//     console.log('not my name')
// }else {
//     console.log('not my name')
// }

// (firstName === 'jon' ? 'correct name' : 'not my name' )

// // }
// let fruits = ['apple', 'banana', 'orange']
// console.log(fruits[3])

// //function factorial (n){
// //    n = n *
// //}

/*
// ---------  fun with Functionals  --------------------------------------------------

function tellFortune (numChildren, partName, loc, jobTitle){

    console.log(`You will be a ${jobTitle} in ${loc}, and married to ${partName} with ${numChildren} kids`)
}
// tellFortune (3, 'Jan', 'Georgia', 'programmer' )
// tellFortune (2, 'Beth', 'New York', 'mom' )
// tellFortune (0, 'Michelle', 'Georgia', 'manager' )


function calculateDogAge(pupAge){
return console.log(`Your doggie is ${7*pupAge} in dog years ‼️`)
}

calculateDogAge(13)
calculateDogAge(2)
calculateDogAge(5)

console.log(' ')

function calculateDogAgeVarRate(pupAge,humanToDog){
    return console.log(`Your doggie is ${humanToDog*pupAge} in dog years ‼️`)
    }

    calculateDogAgeVarRate(13,7);
    calculateDogAgeVarRate(13,6);
    calculateDogAgeVarRate(13,8);

    //console.log(caclulateDogAgeVarRate(13,7))



//----------------------------------------------------------

// // Function will calculate and output a customer receipt  

// const  salesTaxRate = 0.07
// let customerSubTotal = 200

// // Now we want to calc sales tax amount and display receipt

// function calculateSalesTax(subTotal, taxRate) {
//      let taxTotal = subTotal * taxRate 
//      return taxTotal 
// }

// // const calculateeSalesTax = function (subTotal, taxRate) => {
// //     return subTotal * taxRate
// // }
// // const calculateeSalesTax = (subTotal, taxRate) => {
// //     return subTotal * taxRate
// // }

// let customerTaxTotal = calculateSalesTax(customerSubTotal, salesTaxRate)
// let customerTotal = customerTaxTotal + customerSubTotal

// console.log(calculateSalesTax(200, .07))
// console.log(customerTaxTotal)

// console.log('Subtotal: ', customerSubTotal.toFixed(2))
// console.log('Subtotal: ', customerSubTotal.toFixed(2))
// console.log('---------------------')
// console.log('Total:    ', customerSubTotal.toFixed(2))
*/
