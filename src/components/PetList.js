import Pet from "./Pet";

function PetList({pets, deletePet}){

    const petComponents = pets.map(pet => {
        
        // Deliverable # 5 solution code
        return <Pet key={pet.id} pet={pet} deletePet={deletePet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;