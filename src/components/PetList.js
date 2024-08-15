import Pet from "./Pet";

import { useOutletContext } from "react-router-dom";

function PetList(){

    const {pets, deletePet, updatePet} = useOutletContext()

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet} updatePet={updatePet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;