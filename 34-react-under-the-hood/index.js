document.addEventListener("DOMContentLoaded", () => {

  // old DOM
  const htmlObj = {
    tagName: "div", 
    props: {id: "beef", className: "header"}, 
    children: [
      "Hello steak!",
      {
        tagName: "h1", 
        props: {}, 
        children: ["Wat"]
      },
      {
        tagName: "div",
        props: {className: "container"},
        children: [
          {
            tagName: "h4",
            props: {className: "sub-header"},
            children: ["ausyvdasiuyhdjoasmndghfvadyfvabsidj"]
          },
          {
            tagName: "p",
            props: {key: 0},
            children: ["What's the best food in the world?", "asiuydgasidasiudh"]
          },
          {
            tagName: "p",
            props: {key: 1},
            children: ["Beefy"]
          },
          {
            tagName: "p",
            props: {key: 2},
            children: ["Mendel"]
          },
          {
            tagName: "p",
            props: {key: 3},
            children: ["Kevin's drunk text part 4"]
          }
        ]
      }
    ]
  }

  function render(data){
    // use tag name to create element
    const element = document.createElement(data.tagName)

    // assign attributes
    for(let key in data.props){
      element[key] = data.props[key]
    }

    // render the content inside this element
    data.children.forEach(child => {
      if(typeof child === "string"){
        element.append(child)
      } else {
        element.append(render(child))
      }
    })

    console.log("FINISHING", data.tagName)
    return element
  }

  document.getElementById('root').append(render(htmlObj))

  console.log(htmlObj)
})