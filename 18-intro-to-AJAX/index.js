// nothing


function sleep(n) {
  let i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}
//
// 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
//

//
// console.log('Starting the sleep function')
// sleep(10)
// console.log('Wow that sleep function took forever to run. 1 Star 🌟')

const quotesContainer = document.querySelector("#quotes")
document.getElementById('click-button').addEventListener('click', function() { console.log('whoop there it is!')})

// how do we make requests in JS?

console.log(" WAY before the FETCH :)")

fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes', {method: "GET"})
  .then(function(response){
    return response.json()
  })
  .then(function(jsonDerulo){
    // I can see that the ARRAY is finally there
    //1. create an element
    // 1a.  change the innerText = the text i WANT jsonDerulo[0]
    // 1b. 🤚 on the DOM  quotesContainer.appendChild(newlyCreatedElement)
    //   ORRRRRRRRRRRR
    // 2. add to the HTML of the quotesContainer
    quotesContainer.innerHTML += `
      <p> ${jsonDerulo[0]} </p>
    `
    console.log(" IN SIDE THE FETCH 🤔")
  })












console.log("DEFINITELY after the fetch")



function fun1() {
  fun2()
}

function fun2() {
  fun3()
}

function fun3() {
  return "ya done got me"
}

function fun4() {
  return " i've been waiting for loong"
}

fun1()
fun4()
