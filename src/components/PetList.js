import Pet from "./Pet";

// import {useState} from "react"

function PetList({pets, deletePet}){

    // const [pets, setPets] = useState(props.pets)

    // function deletePet(id){

    //     const updatedPetsData = pets.filter(p => {
    //         return p.id !== id
    //     })

    //     setPets(updatedPetsData)

        // setPets(currentPetsData => {
        //     const updatedPetsData = currentPetsData.filter(p => {
        //         return p.id !== id
        //     })
        //     return updatedPetsData
        // })
    // }

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;