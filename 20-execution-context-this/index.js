this.name = 'window object :)'

function sayThis() {
  return this
}
sayThis()

const dog = {
  name: "cooksters",
  whatIsMyNAme: function() {
    return `${this.name} is a good boi`
  }
}


const doggofunction1 = {
  name: 'winfield',
  favSnacks: ['cabbage', 'carrots', 'bones'],
  eatSnacks: function() {
    this.favSnacks.forEach(aCallBack)
  },
  eatSnacksBind: function() {
    this.favSnacks.forEach(aCallBack.bind(this))
  },
  eatSnacksArrow: function() {
    this.favSnacks.forEach((snack) => {
      console.log(`${this.name} is eating ${snack}`)
    })
  }
}



const cat = {
   name: 'meowzilla',
   favSnacks: ['hair', 'fish', 'mice'],
   insideObj: function() {
     console.log('original')
   },
   eatSnacks: function()  {
     this.favSnacks.forEach(function(snack) {
       console.log(`${this.name} is eating ${snack}`)
     })
   }
}


var newVariable = cat.insideObj



function aCallBack(snack) {
    console.log(`${this.name} is eating ${snack}`)
}


function cool(arg1) {

}


const coolio = (res) =>  {
  debugger;
  return res.json()
  debugger;
}


/************ Function Called with New Keyword ***********/


/********************************************************/

/************ Bind Call Apply ****************************/
//
// const koala = {
//   name: 'quicken loans™',
//   favSnacks: ['bamboo', 'eucalyptus', 'human', 'assorted trash'],
//   sayName: function () {
//     return `My name is ${this.name}`
//   },
//   eatSnacks: function() {
//     console.log('%c THIS IS ', 'color: purple', this)
//     this.favSnacks.forEach(function logSnack(snack) {
//       console.log(`${this.name} is eating ${snack}`)
//     })
//   },
//   eatSnacksBound: function() {
//     console.log('%c THIS IS ', 'color: purple', this)
//     this.favSnacks.forEach(function logSnack(snack) {
//       console.log(`${this.name} is eating ${snack}`)
//     }.bind(this /*this is koala here*/))
//     console.log('%c THIS IS ', 'color: teal', this)
//   }
// }
// //
// // function myForEach(arr, callback) {
// //   for (let i = 0; i < arr.length; i++) {
// //     callback(arr[i])
// //   }
// // }
// //
// // function eatNachos(friend1, friend2) {
// //   return `${this.name} loves 2 eat nachos with ${friend1} and ${friend2}`
// // }
//
// // bind returns a COPY of our fn with `this` fixed to whatever obj was passed as an arg
// const bound2 = eatNachos.bind({ name: 'kimye' })
//
// const bradPitt = { name: 'bradley pittington' }
// const friends = ['jennifer anniston', 'george clooney']
//
// eatNachos.call({ name: 'lebron' }, 'dwayne wade', 'jr smith')
// eatNachos.apply({ name: 'lebron' }, ['dwayne wade', 'jr smith'])
//
// eatNachos.apply(bradPitt, friends)
// /********************************************************/
//
// /************ Function called on an Object ***************/
//
// const person = {
//   name: 'evans',
//   sayName: function() {
//     return (`I am ${this.name} nice 2 meet u!`)
//   },
//   whatIsThis: function() {
//     return ('%c THIS IS ', 'color: red', this)
//   }
// }
//
// //create another reference to the fn
// const alsoSayName = person.sayName
// const alsoWhatIsThis = person.whatIsThis
//
// console.log(alsoSayName === person.sayName) //true
// console.log(alsoWhatIsThis === person.whatIsThis) //true
//
// // console.log(person.whatIsThis())
// // console.log(alsoWhatIsThis())
//
//
// /********************************************************/
//
// /************ Simple Function Call ***********************/
//
// function makeSando() {
//   return `${this.name} likes 2 eat sandwiches`
// }
//
//
// /********************************************************/
//
// /************ Arrow Functions ****************************/
//
// const chuck = {
//   name: 'Charles Entertainment Cheese',
//   band: ['guitar', 'drums', 'another guitar', 'triangle', 'recorder'],
//   playInstrumentsFnKeyword: function() {
//     console.log('%c THIS IS ', 'color: green', this)
//     this.band.forEach((instrument) => {
//       console.log(`${this.name} likes to play the ${instrument}`)
//     })
//   },
//   playInstrumentsArrow: () => {
//     console.log('%c THIS IS ', 'color: green', this)
//     this.band.forEach((instrument) => {
//       console.log(`${this.name} likes to play the ${instrument}`)
//     })
//   }
// }
//
// /********************************************************/
