import Pet from "./Pet"

function PetList({pets}){
    // console.log(pets)

    const petComponents = pets.map((pet, index) => {
        // console.log(pet)
        return (
            // <div key={pet.id}>
            //     <h1>Hello World</h1>
            //     <h2>Goodbye</h2>
            // </div>
            <Pet key={pet.id} pet={pet} />
        )
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
        // <Pet pet={{name: "Alice", image: "./images/horse.jpeg"}}/>
    )
}

export default PetList;