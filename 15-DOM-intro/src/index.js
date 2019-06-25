console.log('%c Hello, World!', 'color: orange')


// add and IMG to the HTmL using POWERFUL javscript


// add HTML to HTML

// create an img tag
const imgTag = document.createElement('img')

// add the src or actual link to the img
imgTag.src = "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10676315_10203656694270611_6060927043296061113_n.jpg?_nc_cat=106&_nc_oc=AQlOwd-CIepa7sIKr-zawHCOySNs8BjQ5tprvc4SuzkOmtQ15QygVe2goPrmiZOaz-E&_nc_ht=scontent-lga3-1.xx&oh=3ee3b9bb3042ec24c75978262d3dfc4d&oe=5D887C63"

// WHERE do i add this image? 🤔
const imgContainer = document.getElementById('unique')

// SLAP that on the DOM
imgContainer.appendChild(imgTag)



dankMemes.forEach(

  function(meme) {
  const memeImg = document.createElement('img')
  memeImg.src = meme
  imgContainer.appendChild(memeImg)
}



)


function addToDom(url) {
  const memeImg = document.createElement('img')
  memeImg.src = meme
  imgContainer.appendChild(memeImg)
}

addToDom(dankMemes[0])
addToDom(dankMemes[1])
addToDom(dankMemes[2])


// console.log(dankMemes)




// rugrats netflix adaptation
"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10676315_10203656694270611_6060927043296061113_n.jpg?_nc_cat=106&_nc_oc=AQlOwd-CIepa7sIKr-zawHCOySNs8BjQ5tprvc4SuzkOmtQ15QygVe2goPrmiZOaz-E&_nc_ht=scontent-lga3-1.xx&oh=3ee3b9bb3042ec24c75978262d3dfc4d&oe=5D887C63"
