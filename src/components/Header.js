import { LOGO_URL } from "../utils/constants";
import React, { useState, useEffect } from "react";
import  { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    console.log("Header Rendered");

    useEffect(() => {
        console.log("useEffect hook called");
    }, []);

    return(
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src= {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/">Cart</Link>
                    </li>
                    <button 
                        className="login" 
                        onClick={()=> {
                        btnName==="Logout"
                        ? setbtnName("Login")
                        : setbtnName("Logout");
                    }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;
