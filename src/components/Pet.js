import {useState} from "react"

function Pet({pet}){

    // let numberOfLikes = 0
    const [numberOfLikes, setNumberOfLikes] = useState(0)
    // console.log(numberOfLikes)
    // console.log(setNumberOfLikes)

    const [displayAnimalType, setDisplayAnimalType] = useState(false)
    console.log(displayAnimalType)

    function handleClick(){
        setNumberOfLikes(numberOfLikes + 1)
        // setNumberOfLikes((numberOfLikes) => numberOfLikes + 1)
    }

    function toggleDisplayAnimalType(){
        setDisplayAnimalType((displayAnimalType) => !displayAnimalType)
        // setDisplayAnimalType((displayAnimalType) => !displayAnimalType)
    }

    // console.log(pet)

    // function updatePetTextValue(){
    //     if(!displayAnimalType){
    //         return pet.name
    //     }
    //     else if(displayAnimalType){
    //         return pet.animal_type
    //     }
    // }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={!displayAnimalType ? "" : "display-animal-type"}>
                {
                !displayAnimalType
                ?
                pet.name
                :
                pet.animal_type
                }
            </h4>
            <button onClick={handleClick} className="like-button">{numberOfLikes} Likes</button>
        </li>
    );
}

export default Pet;