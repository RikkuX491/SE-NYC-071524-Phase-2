import PetList from "./PetList";
import pets from "../data/pets";
import { useState } from "react";
import Search from './Search';
import NewPetForm from "./NewPetForm";

console.log(pets)

function PetPage(){

    const [petsState, setPetsState] = useState(pets)
    const [searchText, setSearchText] = useState("")

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

    // Deliverable # 1 solution code
    function addPet(newPet){
        const updatedPets = [...petsState, newPet]
        setPetsState(updatedPets)
    }

    return (
        <main>
            <NewPetForm addPet={addPet}/>
            <Search updateSearchText={updateSearchText}/>
            <PetList pets={filteredPets} deletePet={deletePet}/>
        </main>
    );
}

export default PetPage;