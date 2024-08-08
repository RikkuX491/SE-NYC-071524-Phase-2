// import {useState} from "react"

function Search({setSearchText}){

    // const [pets, setPets] = useState(props.pets)

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Pets:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={(event) => setSearchText(event.target.value)}
            />
        </div>
    )
}

export default Search;