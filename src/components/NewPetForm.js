import { v4 as uuid } from "uuid";

import {useState} from "react";

function NewPetForm({pets, addPet}) {
    // console.log(pets)
    // console.log(addPet)

    // const [nameInput, setNameInput] = useState("")
    // console.log(nameInput)

    // const [imageInput, setImageInput] = useState("")
    // console.log(imageInput)

    // const [animalTypeInput, setAnimalTypeInput] = useState("")
    // console.log(animalTypeInput)

    const [formData, setFormData] = useState({
      name: "",
      image: "",
      animal_type: ""
    })

    function handleSubmit(event){
      event.preventDefault()
      // console.log(event.target.childNodes[0])
      // console.log("Name input is: " + nameInput)
      // console.log(`Image input is: ${imageInput}`)
      // console.log(`Animal Type input is: ${animalTypeInput}`)

      // let newId

      // if(pets.length > 0){
      //   newId = pets[pets.length - 1].id + 1
      // }
      // else{
      //   newId = 1;
      // }

      // console.log(uuid())

      // const newPet = {
        // id: newId,
      //   id: uuid(),
      //   name: nameInput,
      //   image: imageInput,
      //   animal_type: animalTypeInput
      // }

      const newPet = {
        id: uuid(),
        ...formData
      }

      addPet(newPet)

      // event.target.reset()

      // setNameInput("")
      // setImageInput("")
      // setAnimalTypeInput("")

      setFormData({
        name: "",
        image: "",
        animal_type: ""
      })
    }

    function handleChange(event){
      // console.log(event.target)
      // console.log(event.target.value)
      // setNameInput(event.target.value)
      // console.log(event.target.name)
      // if(event.target.name === 'name'){
      //   setNameInput(event.target.value)
      // }
      // else if(event.target.name === 'image'){
      //   setImageInput(event.target.value)
      // }
      // else if(event.target.name === 'animal_type'){
      //   setAnimalTypeInput(event.target.value)
      // }
      // console.log(event.target.name)
      // console.log(event.target.value)
      // console.log({[event.target.name]: event.target.value})
      setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
      <div className="new-pet-form">
        <h2>New Pet</h2>
        <form onSubmit={handleSubmit}>

          {/* The inputs are not controlled by state in this case */}
          {/* <input onChange={handleChange} type="text" name="name" placeholder="Pet name" />
          <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
          <input onChange={handleChange} type="text" name="animal_type" placeholder="Animal type"/> */}

          {/* The inputs are controlled by state in this case */}
          <input onChange={handleChange} type="text" name="name" placeholder="Pet name" value={formData.name}/>
          <input onChange={handleChange} type="text" name="image" placeholder="Image URL" value={formData.image} />
          <input onChange={handleChange} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type}/>

          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  }
  
  export default NewPetForm;