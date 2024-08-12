import PetList from "./PetList";
import { useState, useEffect } from "react";
import Search from './Search';
import NewPetForm from "./NewPetForm";

function PetPage(){

    const [pets, setPets] = useState([])
    const [searchText, setSearchText] = useState("")

    // console.log("Here's some code written before the useEffect code...")

    useEffect(() => {

        // console.log('useEffect code!')

        // setPets([
        //     {
        //         id: 1,
        //         name: "Fido",
        //         image: "./images/dog.jpeg",
        //         animal_type: "Dog"
        //     }
        // ])

        fetch("http://localhost:4000/pets")
        .then(response => response.json())
        .then(petsData => setPets(petsData))
    }, [])

    // Using useEffect to handle a different side effect that occurs upon initial component render and whenever the pets state updates
    useEffect(() => {
        console.log("You've updated the pets state")
    }, [pets])

    // console.log("Here's some code written after the useEffect code...")

    // setPets([
    //     {
    //         id: 1,
    //         name: "Fido",
    //         image: "./images/dog.jpeg",
    //         animal_type: "Dog"
    //     }
    // ])

    const filteredPets = pets.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    function deletePet(id){
        setPets((pets) => pets.filter(pet => {
            return pet.id !== id
        }))
    }

    function addPet(newPet){
        // Optimistic rendering approach with POST request
        // setPets([...pets, newPet])
        
        // console.log(newPet)

        // fetch('http://localhost:4000/pets', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(newPet)
        // })

        // Pessimistic rendering approach with POST request
        fetch('http://localhost:4000/pets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPet)
        })
        .then(response => response.json())
        .then(newPetData => setPets([...pets, newPetData]))
    }

    return (
        <main>
            <NewPetForm addPet={addPet}/>
            <Search updateSearchText={updateSearchText} searchText={searchText}/>
            <PetList pets={filteredPets} deletePet={deletePet}/>
        </main>
    );
}

export default PetPage;