import PetList from "./PetList";
import pets from "../data/pets";
import { useState } from "react";
import Search from './Search';
import NewPetForm from "./NewPetForm";

console.log(pets)

function PetPage(){

    const [petsState, setPetsState] = useState(pets)
    const [searchText, setSearchText] = useState("")

    console.log(petsState)

    const filteredPets = petsState.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    function deletePet(id){
        setPetsState((petsState) => petsState.filter(pet => {
            return pet.id !== id
        }))
    }

    function addPet(newPet){
        // console.log(petsState)
        // console.log(newPet)
        const updatedPetsStateArray = [...petsState, newPet]
        setPetsState(updatedPetsStateArray)
    }

    return (
        <main>
            <NewPetForm pets={petsState} addPet={addPet}/>
            <Search updateSearchText={updateSearchText}/>
            <PetList pets={filteredPets} deletePet={deletePet}/>
        </main>
    );
}

export default PetPage;