import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/pets">View Pets</NavLink> */}
            <NavLink to="/add_pet">Add Pet</NavLink>
          {/* <a className={route === "/" ? "active" : ""} onClick={navigate} href="/">Home</a>
          <a className={route === "/add_pet" ? "active" : ""} onClick={navigate} href="/add_pet">Add Pet</a> */}
        </nav>
    )
}

export default NavBar;