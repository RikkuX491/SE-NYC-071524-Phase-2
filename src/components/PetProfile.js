import { useState, useEffect } from "react";

import { useOutletContext, useParams, useNavigate } from "react-router-dom";

function PetProfile(){

    const {deletePet, updatePet} = useOutletContext()
    const {id} = useParams()
    const navigate = useNavigate()

    const [pet, setPet] = useState(null)
    const [displayAnimalType, setDisplayAnimalType] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        animal_type: ""
    })

    useEffect(() => {
        // Make a GET request to find a specific pet whose info should be displayed in this component
        fetch(`http://localhost:4000/pets/${id}`)
        .then(response => {
            if(response.ok){
                response.json().then(petData => setPet(petData))
            }
        })
    }, [])

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    function handleAdoptButtonClick(){
        deletePet(pet.id)
        setPet(null)
        navigate('/')
    }

    function toggleDisplayForm(){
        setDisplayForm(displayForm => !displayForm)
    }

    function handleSubmit(event){
        event.preventDefault()

        updatePet(pet.id, formData)
        setPet({...pet, ...formData})

        toggleDisplayForm()
    }

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleLikeButtonClick(){
        const updatedLikesObject = {likes: pet.likes + 1}
        updatePet(pet.id, updatedLikesObject)
        setPet(pet => {
            return {...pet, likes: pet.likes + 1}
        })
    }

    return (
        <>
            {pet ?
            <div className="pet-profile">
                <img src={pet.image} alt={pet.name}/>
                <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
                { !displayForm ?
                <div className="button-div">
                    <button onClick={toggleDisplayForm} className="update-button">Update Pet</button>
                    <button onClick={handleLikeButtonClick} className="like-button">{pet.likes} Likes</button>
                    <br/>
                    <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
                </div> :
                <form onSubmit={handleSubmit} className="edit-pet">
                    <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} />
                    <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
                    <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} />
                    <button type="submit">Save Changes</button>
                </form>
                }
            </div> :
            <h1>Error: Pet # {id} was not found!</h1>
            }
        </>
    );
}

export default PetProfile;