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

const RestaurantCard = () => {
    return (
        <div className="restaurant-card" style={styleCard}>
            <img
            className="restaurant-logo"
            alt="Aroma Foods"
            src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uzvhmhkohovrploo4x3y"/>
            <h3> Aroma Foods</h3>
            <h4> Poha, Upma, Wada-Pav</h4>
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
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
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