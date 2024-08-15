import { useState } from "react";
import { Link } from "react-router-dom";

function Pet({pet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>

            {/* Add link to visit Pet Profile */}
            <Link to={`/pets/${pet.id}`}>View {pet.name}'s Profile</Link>
        </li>
    );
}

export default Pet;