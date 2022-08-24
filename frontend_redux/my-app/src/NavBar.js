import React from 'react'
import { Outlet, Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div className="w3-top">
                <div className="w3-row w3-padding w3-black">
                    <div className="w3-col s3">

                        <a href="#" className="w3-button w3-block w3-black">HOME</a>
                    </div>
                    <div className="w3-col s3">
                    {/* <Link className="w3-button w3-block w3-black" to="/about">ABOUT</Link> */}
                        <a href="/about" className="w3-button w3-block w3-black">ABOUT</a>
                    </div>
                    <div className="w3-col s3">
                        <a href="#menu" className="w3-button w3-block w3-black">MENU</a>
                    </div>
                    <div className="w3-col s3">
                        <Link className="w3-button w3-block w3-black" to="/login">Login\Register</Link>
                        {/* <a href="/login" className="w3-button w3-block w3-black">Login\Register</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar