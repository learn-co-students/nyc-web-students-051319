
console.log('%c Hello lol', 'color:goldenrod')



document.addEventListener("DOMContentLoaded", function(){
  console.log('LOAD THAT DOM')
  // const alertButton = document.querySelector('#alert')
  //
  // alertButton.addEventListener('click',function(e) {
  //   // console.log(e.target)
  //   alert('bwahahah lolz ya clicked me :)')
  // })
  const commentContainer = document.querySelector("#comments-container")
  console.log(commentContainer)

  const form = document.querySelector('#comment-form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()

    const comment = document.querySelector("#new-comment").value
    const p = document.createElement('p')
    commentContainer.innerText = comment
    // commentContainer.appendChild(p)

    form.reset()
    console.log(e.target)
  })



  const buttonParent = document.querySelector("#parent")

  buttonParent.addEventListener('click', function(e){
    console.log(e.target)
    if (e.target.id === "alert"){
      alert("ha its me yaboix alert")
    }
    if (e.target.id === "log"){
      console.log('yeeeets for cheats')
    }
    if (e.target.id === "error"){
      console.error('ya done goofed')
    }
  })

})
