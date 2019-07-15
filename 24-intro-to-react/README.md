Intro to React
=============================

## SWBATs
- [x] Visualize/identify Components on any website
- [x] Explain what a Component is conceptually in the UI
- [x] Briefly explain Babel's purpose in React
- [x] Explain what a React Component actually is in code
- [x] Use JSX to build custom components and render them in the browser
- [x] See how props are to components as arguments are to functions

## Notes

### Declarative vs Imperative Programming

#### Imperative

```js
const el = document.createElement("div")
el.textContent = "Hello!"
const body = document.getElementById("container")

body.append(el)

const el = document.createElement("div")
el.textContent = "Goodbye!"
const body = document.getElementById("container")

body.append(el)
```

How do you make a burrito:
Heat up tortilla
Cook your rice
Cook your beans
Cook your protein
Cut up veggies
Sautee your peppers/onions
Ensure purchase of salsa, hot sauce (condiments)
Throw ingredients inside tortilla
Wrap it up
Enjoy!

#### Declarative
```js
function appendDiv(text){
  const el = document.createElement("div")
  el.textContent = text
  const body = document.getElementById("container")

  body.append(el)
}

appendDiv("Hello!")
appendDiv("Goodbye!")
```
How Chipotle Works:
What type of purveyor of burrito stuff
What type of rice
What type of beans
What type of protein
Veggies?
Which condiments
Chips?
Guac?

### Absatractions to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```


Second form: *Dynamic, reusable components using regular functions and arguments*
```jsx
function Greeting(phrase,name){
  return <h1>Hello {phrase}! - {name}</h1>
}

ReactDOM.render(
  <div>
    {Greeting("world", "Alex")}
    {Greeting("beef", "Peter")}
    {Greeting("squid", "Katarina")}
  </div>, 
  document.getElementById('root')
)
```

THIRD FORM: *Static components using JSX*
```jsx
function Greeting(){
  return <h1>Hello world!</h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>, 
  document.getElementById('root')
)
```

FINAL FORM: *Dynamic, reusable components using JSX and props*
```jsx
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}

ReactDOM.render(
  <div>
    <Greeting phrase="world" name="Alex"/>
    <Greeting phrase="beef" name="Peter"/>
    <Greeting phrase="squid" name="Katarina"/>
  </div>, 
  document.getElementById('root')
)
```

## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)
