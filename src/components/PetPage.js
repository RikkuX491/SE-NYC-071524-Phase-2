import PetList from "./PetList";
import { useState, useEffect } from "react";
import Search from './Search';
import NewPetForm from "./NewPetForm";

function PetPage(){

    const [pets, setPets] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetch('http://localhost:4000/pets')
        .then(response => response.json())
        .then(petsData => setPets(petsData))
    }, [])

    const filteredPets = pets.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    function deletePet(id){
        // Optimistic rendering approach for DELETE request
        // setPets((pets) => pets.filter(pet => {
        //     return pet.id !== id
        // }))

        // console.log(id)

        // fetch(`http://localhost:4000/pets/${id}`, {
        //     method: "DELETE"
        // })

        // Pessimistic rendering approach for DELETE request
        fetch(`http://localhost:4000/pets/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                setPets((pets) => pets.filter(pet => {
                    return pet.id !== id
                }))
            }
            else{
                alert("Error: Unable to delete pet!")
            }
        })
    }

    function addPet(newPet){
        fetch('http://localhost:4000/pets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...newPet, likes: 0})
        })
        .then(response => response.json())
        .then(newPetData => setPets([...pets, newPetData]))
    }

    function updatePet(updatedPetData, id){

        // Optimistic rendering approach for PATCH request
        // console.log(updatedPetData)
        // console.log(id)

        // const updatedPets = pets.map(pet => {
        //     if(pet.id === id){

                // console.log(pet)
                // console.log(updatedPetData)
                // console.log({...pet, ...updatedPetData})

                // return {...pet, ...updatedPetData}

                // return updatedPetData
        //     }
        //     else{
        //         return pet
        //     }
        // })

        // setPets(updatedPets)

        // console.log(updatedPetData)

        // fetch(`http://localhost:4000/pets/${id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(updatedPetData)
        // })

        // Pessimistic rendering approach for PATCH request
        fetch(`http://localhost:4000/pets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPetData)
        })
        .then(response => response.json())
        .then(updatedPet => {
            const updatedPetsArray = pets.map(pet => {
                if(pet.id === id){
                    return updatedPet
                }
                else{
                    return pet
                }
            })
            setPets(updatedPetsArray)
        })
    }

    // console.log(updatePet)

    return (
        <main>
            <NewPetForm addPet={addPet}/>
            <Search updateSearchText={updateSearchText} searchText={searchText}/>
            <PetList pets={filteredPets} deletePet={deletePet} updatePet={updatePet}/>
        </main>
    );
}

export default PetPage;