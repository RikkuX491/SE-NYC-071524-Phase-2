import logo from './logo.svg';
import './App.css';

import Header from "./components/Header"

import {pets} from "./data/petsData"

// function sum(num1, num2){
//   return num1 + num2
// }

// console.log(sum(3, 4))

// console.log(pets[1])

// Example code commented out
// const h1Elements = greetings.map(greeting => {
//   return <h1 key={greeting}>{greeting}</h1>
// })

const liElements = pets.map(pet => {
  // console.log(pet)
  return (
    <li key={pet.id} className="pet">
      <img src={pet.image} alt={pet.name}/>
      <h4>{pet.name}</h4>
    </li>
  )
})

function App() {
  return (
    <div className="app">
      <Header/>
      <ul className="pet-list">
        {/* <li className="pet">
          <img src={pets[1].image} alt={pets[1].name}/>
          <h4>{pets[1].name}</h4>
        </li> */}
        {liElements}
      </ul>
    </div>
  );
}

export default App;