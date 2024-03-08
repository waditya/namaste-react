import { LOGO_URL } from "../utils/constants";
import React, { useState, useEffect } from "react";
import  { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    console.log("Header Rendered");

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        console.log("useEffect hook called");
    }, []);

    return(
        <div className="flex">
            <div className="logo-container">
                <img 
                className="w-56"
                src= {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "💚": "🔴" }
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
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
