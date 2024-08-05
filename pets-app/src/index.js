import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {greetings, fruits} from './data/greetingsData'

// Here's the old way we used to add elements via Vanilla JavaScript

// const h1Elements = []

// for(const greeting of greetings){
//   const h1Element = document.createElement('h1')
//   h1Element.textContent = greeting
//   h1Elements.push(h1Element)
// }

// console.log(greetings)
// console.log(fruits)

const h1Elements = greetings.map(greeting => {
  return <h1 key={greeting}>{greeting}</h1>
})

// console.log(h1Elements)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div>{h1Elements}</div>
  <>
    <App/>
    {/* <h1>Hello Flatiron!</h1>
    <App/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
