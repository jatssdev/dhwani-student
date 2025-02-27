import { NavLink } from "react-router-dom"
function Navbar() {

    return (
        <div className="navbar">
            <h2>Navbar</h2>
            <div className="links">
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/service'>
                    Service
                </NavLink>
                <NavLink to='/state'>
                    useState
                </NavLink>
            </div>
        </div>
    )
}


export default Navbar