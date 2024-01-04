import React from "react"; // Import React from the react package in the node_modules
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body.js";


// Define component RestaurantCard

// Define style for the restaurant Card as JS object
const styleCard = {
    backgroundColor : "darkkhaki"
};

const RestaurantCard = (props) => {
    console.log(props);
    const { restaurantData }  = props;
    console.log("Logging restValues :: "+restaurantData);
    // Perform de-structuring using Optional Chaining
    const { 
        name, 
        imgSrc, 
        cuisine, 
        rating, 
        ETAinMins
    } = restaurantData;


    return (
        <div className="restaurant-card" style={styleCard}>
            <img
            className="restaurant-logo"
            alt= { name }
            src = { imgSrc } />
            <h3> { name }</h3>
            <h4> { cuisine }</h4>
            <h4> { rating } stars</h4>
            <h4> { ETAinMins} minutes</h4>
        </div>
    )
}

const restaurantList = [
    {
        uuid: 1,
        name: "Aroma Foods",
        cuisine: "Maharashtrian snacks, North Indian",
        imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uzvhmhkohovrploo4x3y",
        rating: "4.4",
        ETAinMins: "30"
    },
    {
        uuid: 2,
        name: "Ganesh Bhel House",
        cuisine: "Savoury snacks (Chat)",
        imgSrc: "https://ganeshbhel.com/wp-content/uploads/2021/09/6-326x170-1.jpg",
        rating: "4",
        ETAinMins: "25"
    },
    {
        uuid: 3,
        name: "Katakir Misal",
        cuisine: "Maharashtrian",
        imgSrc: "https://b.zmtcdn.com/data/pictures/chains/4/13004/3001549d95106b79794bf1d5222770ca.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        rating: "4.5",
        ETAinMins: "30"
    },
    {
        uuid: 4,
        name: "Maskawala & Co.",
        cuisine: "Snacks, Bakery and Biryani",
        imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jklhqvl4kyvishuidtw3",
        rating: "4.4",
        ETAinMins: "22"
    },
    {
        uuid: 5,
        name: "Gokhales Kitchen",
        cuisine: "Thali, Street Food",
        imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aokllwrug5o5w4as5wqq",
        rating: "4.3",
        ETAinMins: "27"
    },
    {
        uuid: 6,
        name: "Burger King",
        cuisine: "Thali, Street Food",
        imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        rating: "4.2",
        ETAinMins: "21"
    },
];



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