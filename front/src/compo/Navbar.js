import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    const auth = localStorage.getItem('user');
    const Navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        Navigate('/Signup')
    }
    return (
        <>

            <div>
                {
                    auth ?
                        <ul className="Nav-ul">
                            <img alt="logo"
                            className="logo"
                             src="https://cdn-icons-png.flaticon.com/512/7053/7053443.png"/>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Products">Products</Link></li>
                            <li><Link to="/Add">Add product</Link></li>
                    
                            <li><Link onClick={logout} to="/Signup">Logout ({JSON.parse(auth).name})</Link></li>
                        </ul>
                        :
                        <ul className="Nav-ul nav-right">
                            <li><Link to="/Signup">Signup</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </ul>
                }
            </div>

        </>
    )
}
export default Navbar;