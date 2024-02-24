import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                        className="login" 
                        onClick={()=> {
                        btnName==="Logout"? setbtnName("Login"): setbtnName("Logout");
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
