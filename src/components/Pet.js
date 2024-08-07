// Deliverable # 1 solution code
import {useState} from "react"

function Pet({pet}){

    // Deliverable # 1 solution code
    const [count, setCount] = useState(0)

    // Deliverable # 3 solution code
    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    // Deliverable # 2 solution code
    function handleClick(){
        setCount(count + 1)
    }

    // Deliverable # 6 solution code
    function toggleDisplayAnimalType(){
        setDisplayAnimalType(!displayAnimalType)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            {/* Deliverable # 5 & 6 solution code */}
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>
                {
                displayAnimalType
                ?
                pet.animal_type
                :
                pet.name
                }
            </h4>
            {/* Deliverable # 1 & 2 solution code */}
            <button onClick={handleClick} className="like-button">{count} Likes</button>
        </li>
    );
}

export default Pet;