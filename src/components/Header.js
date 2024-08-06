function Header({animalName, animalEmoji}){

    // console.log(animalName)
    console.log(animalEmoji)

    // console.log(name)
    // console.log(age)
    // console.log(phoneNumber)

    // console.log(person)
    // console.log(person.name)
    // console.log(person.age)

    // const {name, age, phoneNumber} = person
    // console.log(name)
    // console.log(age)
    // console.log(person.phoneNumber)

    return (
        <header>
            <h1>
                {animalName}
                <span className="logo">{animalEmoji}</span>
            </h1>
        </header>
    )
}

export default Header;