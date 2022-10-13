import React from 'react'
import { Outlet, Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavBar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
                {/* <div className="container-fluid"> */}
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">HOME</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/menu">MENU</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/login">Login\Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/cart">MyCart</Link>
                    </li>
                </ul>
                {/* </div> */}
            </nav>
        </div>
    )
}

export default NavBar