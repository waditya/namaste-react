import { LOGO_URL } from "../utils/constants";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import  { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    console.log("Header Rendered");

    const onlineStatus = useOnlineStatus();
    
    const { loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);


    useEffect(() => {
        console.log("useEffect hook called");
    }, []);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg mb sm:bg-yellow-50 lg:bg-green-400">
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
                    <li className="px-4 font-medium">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
