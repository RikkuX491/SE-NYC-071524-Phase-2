import { useState } from "react";

function Pet({pet, deletePet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    // function deletePet(){
        // event.target.remove()
        // event.target.parentNode.remove()

        // console.log(pet.id)

        // const updatedPetsData = pets.filter(p => {
        //     return p.id !== pet.id
        // })
        // setPets(updatedPetsData)

        // setPets(currentPetsData => {
        //     const updatedPetsData = currentPetsData.filter(p => {
        //         return p.id !== pet.id
        //     })
        //     return updatedPetsData
        // })
    // }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            <button onClick={() => deletePet(pet.id)} className="adopt-button">Adopt</button>
        </li>
    );
}

export default Pet;