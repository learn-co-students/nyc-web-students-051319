document.addEventListener("DOMContentLoaded", () => {

  // setState is called, new DOM
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
            children: ["Beefy"]
          },
          {
            tagName: "p",
            props: {key: 1},
            children: ["What's the best food in the world?", "asiuydgasidasiudh"]
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
})