

const dataBtn = document.querySelector("#get-the-data-btn")

dataBtn.addEventListener("click", function(e){
  // console.log(e.target)
  fetch('http://localhost:3000/api/v1/drinks/1')
	.then(function(res) { return res.json()})
	.then(function(fryObjs){
      console.log(fryObjs)

})

})
