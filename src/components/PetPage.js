import PetList from "./PetList";
import pets from "../data/pets";

import {useState} from "react";

console.log(pets)

function PetPage(){

    const [searchText, setSearchText] = useState("")

    function handleChange(event){
        setSearchText(event.target.value)
    }

    const filteredPets = pets.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    return (
        <main>
            <div className="searchbar">
                <label htmlFor="search">Search Pets:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Type a name to search..."
                    onChange={handleChange}
                />
            </div>
            <PetList pets={filteredPets}/>
        </main>
    );
}

export default PetPage;