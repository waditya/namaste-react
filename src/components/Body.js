import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="Search">
            Search
            </div>
            <div className="restaurant-container">
                {
                    restaurantList.map(i => <RestaurantCard key= {i.uuid} restaurantData= { i }/>)
                }
                {
                    restaurantList.map(jsonObject => <RestaurantCard key= {jsonObject.uuid} restaurantData= { jsonObject }/>)
                }
                {
                    restaurantList.map(restaurant => <RestaurantCard key= {restaurant.uuid} restaurantData= { restaurant }/>)
                }
                <RestaurantCard  restaurantData={restaurantList[0]} />
                <RestaurantCard  restaurantData={restaurantList[1]} />
                <RestaurantCard  restaurantData={restaurantList[2]} />
            </div>
        </div>
    )
}

export default Body;