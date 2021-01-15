










const painters = [
    { name: 'Pablo', lastName: 'Picasso', born: 1881, passed: 1973 },
    { name: 'Salvador', lastName: 'Dali', born: 1904, passed: 1989 },
    { name: 'Frida', lastName: 'Kahlo', born: 1907, passed: 1954 },
    { name: 'Henri', lastName: 'Matisse', born: 1869, passed: 1954 },
    { name: 'Gustav', lastName: 'Klimt', born: 1862, passed: 1918 },
    { name: 'Jackson', lastName: 'Pollock', born: 1912, passed: 1956 },
    { name: 'Judy', lastName: 'Chicago', born: 1939, passed: null },
    { name: 'Kara', lastName: 'Walker', born: 1969, passed: null },
    { name: 'Wassily', lastName: 'Kandinsky', born: 1866, passed: 1944 },
  ];
  //+  1. give list of painters that were born in the 19 century
  
  //+  2. give list of painters names and last names 
  
  //+  3. sort painters alphabetically by last names
  
  //+  4. give list of painters that names or last names start with K?
  
  //+   5. print names of painters that that are still alive
  // and their current age
  
  //+  6. give list of painters that contain 'li' in their name 
  
  // 7. sort painters by birth date, from oldest to youngest

  //works #1
  let the19century = painters.filter(artist => artist.born < 1900)
        console.log('Challenge #1', the19century)

//works #2   
   
  painters.forEach (artist => console.log ('#2',artist.name, artist.lastName))
//or using .map
  let FullNameList = painters.map(artist => {
    return {name : artist.name, familyname: artist.lastName }   
  })
    console.log("Challenge #2 artist full name:", FullNameList)

 // works  #3
 let sortedArray = painters.sort((a,b) => (a.lastName > b.lastName) ? 1 : -1) //ternary
 console.log("Challenge #3", sortedArray)

 // works #4  
let startsWaK = painters.filter(artist => artist.name.startsWith("K",0) 
                                ||  artist.lastName.startsWith("K",0) )                                      
    console.log( "Challenge #4: Names starting w K ", startsWaK )

// works #5  
    console.log( 'challenge #5' )
    let aLiveArtists = painters.filter(artist => (artist.passed == null) );
    aLiveArtists.forEach (artist1 => 
                          console.log ('#2',artist1.name, artist1.lastName, 'age is ', 2021 - artist1.born ) ) 

// #6  works
    let includesLi = painters.filter(artist => artist.lastName.includes("li",0))
    console.log("Challenge #6: Last Names w li ", includesLi)

   // works  #7
 let artistByAge = painters.sort((a,b) => (a.born > b.born) ? 1 : -1) //ternary
 console.log("Challenge #7 OldestToYoungest", artistByAge)







// //let newFam = family.map(member => {
//   let born = 2020 - member.age
//   return {
//       name:member.name,
//       born: born
//   }
// })
  
// 

//tbd #5
//let result = painters.filter(artist => artist.born < 1900)
//console.log(result)

  // let Centure1800Artists = painters.filter(artist => {
  //   // age = artist.passed - artist.born
  //   (artist.born < 1900)
  //   console.log(artist.lastName)
  //   return Century1800Artists
 // })

  
 // console.log(Centure1800Artists)





  // if (painters[2].passed === 1973) {
  //   console.log('truth')
  // } else {
  //   console.log('false')
  // }

// 

  // let livingArtists = painters.filters(artist => artist.passed = null)
    //  return 

  //}) painters.filter(
  //  console.log(living)
  //)


// const result = painters.filter(lastN => . > 6);

// const result = painters.every(painter => painter.passed)
// console.log(result)

// let alphaList = painters.sort(painters)  )




  


  // console.log(painters)


// for (let i = 0; i < painters.length; i++){
//   console.log(painters[i].name, painters[i].lastName)}

//   console.log(' ')




 




//   let  array1 = ['sausage', 'cheese', 'sauce', 'spices', 7, 200, 4, 'mushrooms'];
// let array2 = [ 22,  40, 7, 9, 100, 3]
// console.log(array1.pop())
// console.log(array1.push("onion"))
// console.log(array1)
// console.log('-------------')
// console.log(array2.sort())





