import PetList from "./PetList";
import Search from "./Search";

import pets from "../data/pets";

import { useState } from "react";

console.log(pets)

function PetPage(){

    const [searchText, setSearchText] = useState("")

    // Deliverable # 3 solution code
    const [petsState, setPetsState] = useState(pets)

    const filteredPets = petsState.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    // Deliverable # 1 solution code
    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    // Deliverable # 4 solution code
    function deletePet(id){

        const filteredPetsState = petsState.filter(p => {
            return p.id !== id
        })

        setPetsState(filteredPetsState)
    }

    return (
        <main>

            {/* Deliverable # 2 solution code */}
            <Search updateSearchText={updateSearchText}/>
            
            {/* Deliverable # 5 solution code */}
            <PetList pets={filteredPets} deletePet={deletePet}/>
        </main>
    );
}

export default PetPage;