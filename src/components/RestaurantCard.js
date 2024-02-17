import { styleCard } from "./styleCard"; // Named import is imported in curly braces.

// Define component RestaurantCard

const RestaurantCard = (props) => {
    // console.log(props);
    const { restaurantData }  = props;
    // console.log("Logging restValues :: "+restaurantData);
    // Perform de-structuring using Optional Chaining
    const { 
        name, 
        cloudinaryImageId, 
        cuisines, 
        avgRating, 
        costForTwo,
        sla
    } = restaurantData?.info


    return (
        <div className="restaurant-card" style={styleCard}>
            <img
            className="restaurant-logo"
            alt= { name }
            src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId } />
            <h3> { name }</h3>
            <h5>{ cuisines.join(", ") }</h5>
            <h4> { avgRating } stars</h4>
            <h4> { costForTwo }</h4>
            <h4> { sla?.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;