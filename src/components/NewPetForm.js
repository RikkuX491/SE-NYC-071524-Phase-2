import { v4 as uuid } from "uuid";

import {useState} from "react";

function NewPetForm({addPet}) {

    // Deliverable # 1 solution code
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [animalType, setAnimalType] = useState("")

    function handleSubmit(event){
      event.preventDefault()

      const newPet = {
        id: uuid(),
        name: name,
        image: image,
        animal_type: animalType
      }

      addPet(newPet)
    }

    function handleNameChange(event){
      setName(event.target.value)
    }

    function handleImageChange(event){
      setImage(event.target.value)
    }

    function handleAnimalTypeChange(event){
      setAnimalType(event.target.value)
    }

    return (
      <div className="new-pet-form">
        <h2>New Pet</h2>

        {/* Deliverable # 1 solution code */}
        <form onSubmit={handleSubmit}>
          <input onChange={handleNameChange} type="text" name="name" placeholder="Pet name" value={name}/>
          <input onChange={handleImageChange} type="text" name="image" placeholder="Image URL" value={image} />
          <input onChange={handleAnimalTypeChange} type="text" name="animal_type" placeholder="Animal type" value={animalType}/>
          <button type="submit">Add Pet</button>
        </form>

      </div>
    );
  }
  
  export default NewPetForm;