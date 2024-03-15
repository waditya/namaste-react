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
        <div className="restaurant-card m-4 p-4 w-[300px] h-[472px] rounded-xl" style={styleCard}>
            <img
            className="restaurant-logo rounded-xl w-48"
            alt= { name }
            src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId } />
            <h3 className="font-bold py-4 text-lg"> { name }</h3>
            <h5 className="italic">{ cuisines.join(", ") }</h5>
            <h4 className="font-bold py-4"> { avgRating } stars</h4>
            <h4 className="italic"> { costForTwo }</h4>
            <h4 className="italic"> { sla?.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;