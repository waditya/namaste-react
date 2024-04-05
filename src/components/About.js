import User from "./User";
import UserClass from "./UserClass";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {

    const { loggedInUser } = useContext(UserContext);

    return (
        <div>
            <h1>About Us</h1>
            <h2> This company was formed in February 2024</h2>
            <h2> Meet the team </h2>
            <div>
                <User name = {"Aditya W (Functional)"} location = {"US"} contact = {"myemail@mymail.com"}/>  
                <UserClass name = {"Aditya D W (Class)"} location = {"USA"} contact = {"email@gmail.com"}/>  
                <UserClass name = {"Dhananjay A W (Class)"} location = {"India"} contact = {"email2@gmail.com"}/> 
            </div>
            <h3>Hey {loggedInUser} ..! welcome to the team 😊</h3>
        </div>
    )
}

export default About;