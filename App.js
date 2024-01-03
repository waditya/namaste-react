import React from "react"; // Import React from the react package in the node_modules
import ReactDOM from "react-dom/client"; 

/*
* Header
* - Logo
* - Nav Items
* Body
*  - Search
*  - Restaurant Container
*     - Restaurant Card
*       - Image
*       - Name of Restaurant, Star Rating, Cuisine, ETA
* Footer
*  - Copyrights
*  - Links
*  - Address
*  - Contact
*/
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-letuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// Define component RestaurantCard

// Define style for the restaurant Card as JS object
const styleCard = {
    backgroundColor : "darkkhaki"
};

const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="restaurant-card" style={styleCard}>
            <img
            className="restaurant-logo"
            alt="Aroma Foods"
            src = { props.imgSrc } />
            <h3> { props.restaurantName }</h3>
            <h4> { props.cuisine }</h4>
            <h4> 4.4 stars</h4>
            <h4> 38 minutes</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="Search">
            Search
            </div>
            <div className="restaurant-container">
                <RestaurantCard restaurantName = "Aroma Foods" cuisine="Poha, Upma, Wada-Pav" imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uzvhmhkohovrploo4x3y"/>
                <RestaurantCard restaurantName = "Ganesh Bhel House" cuisine="Chat, Pani Puri, Ragda Patis" imgSrc="https://ganeshbhel.com/wp-content/uploads/2021/09/6-326x170-1.jpg"/>
                <RestaurantCard restaurantName = "Katakir Misal" cuisine="Misal Pav" imgSrc="https://b.zmtcdn.com/data/pictures/chains/4/13004/3001549d95106b79794bf1d5222770ca.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"/>
            </div>
        </div>
    )
}

// AppLayout component is function which returns JSX code (which is a <div>)
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);