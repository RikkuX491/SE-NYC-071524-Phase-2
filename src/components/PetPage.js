import PetList from "./PetList";
import Search from "./Search";

import pets from "../data/pets";

import { useState } from "react";

console.log(pets)

function PetPage(){

    const [petsArray, setPetsArray] = useState(pets)
    const [searchText, setSearchText] = useState("")

    const filteredPets = petsArray.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function deletePet(id){

        const updatedPetsData = petsArray.filter(p => {
            return p.id !== id
        })

        setPetsArray(updatedPetsData)
    }

    return (
        <main>
            <Search setSearchText={setSearchText}/>
            <PetList pets={filteredPets} deletePet={deletePet}/>
        </main>
    );
}

export default PetPage;