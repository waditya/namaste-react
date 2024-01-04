import { styleCard } from "./styleCard"; // Named import is imported in curly braces.

// Define component RestaurantCard

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

export default RestaurantCard;