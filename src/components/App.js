import Header from "./Header"
import PetList from "./PetList"

function App() {

    // function sum(num1, num2){
    //     console.log(num1 + num2)
    // }
    // sum()

  const pets = [
    {
        id: 1,
        name: "Fido",
        image: "./images/dog.jpeg"
    },
    {
        id: 2,
        name: "Kitty",
        image: "./images/cat.png"
    },
    {
        id: 3,
        name: "Hammy",
        image: "./images/hamster.jpeg"
    },
    {
        id: 4,
        name: "Polly",
        image: "./images/parrot.jpeg"
    },
    {
        id: 5,
        name: "Angel",
        image: "./images/horse.jpeg"
    },
    {
        id: 6,
        name: "Fluffy",
        image: "./images/guinea-pig.jpeg"
    },
    {
        id: 7,
        name: "Goldie",
        image: "./images/fish.jpeg"
    }
  ]

  return (
    // <div>
    //     <h1>Welcome to React!</h1>
    //     <div>
    //         <img/>
    //         <h2>Goodbye</h2>
    //         <h3>
    //             <span>Flatiron School is the best!</span>
    //         </h3>
    //     </div>
    // </div>
    <div className="app">
        {/* <Header name="Sally" age={23} />
        <Header phoneNumber="1234567890"/> */}
        <Header animalName="Cat" animalEmoji="🐈" />
        <Header animalName="Dog" animalEmoji="🐶" />
        <PetList pets={pets} />
    </div>
  );
}

export default App;