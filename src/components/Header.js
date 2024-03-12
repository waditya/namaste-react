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
        <div className="flex justify-between bg-pink-100 shadow-lg mb">
            <div className="logo-container">
                <img 
                className="w-56"
                src= {LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4" >
                    <li className="px-4"> 
                        Online Status: {onlineStatus ? "💚": "🔴" }
                    </li>
                    <li className="pr-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="pr-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="pr-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="pr-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="pr-4">
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
