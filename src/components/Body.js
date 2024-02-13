import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect} from "react"; // useState is imported as named import from react

const Body = () => {

    // Local State Variable

    const [listofRestaurants, setlistofRestaurants] = useState(restaurantList);

    useEffect(()=>{
        // console.log('useEffect called!');
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.516726&lng=73.856255&page_type=DESKTOP_WEB_LISTING"
            );

        const json = await data.json();
        console.log(json);
    };

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => 
                    {   
                        const filteredList  = listofRestaurants.filter(
                        (res) => res.rating > 4.2
                    );

                    setlistofRestaurants(filteredList);
                        
                        // console.log(listofRestaurants);
                        // alert("Filter Button Clicked!")
                    }}

                    
                    > 
                    Top Rated restaurants 
                </button>
            </div>
            <div className="restaurant-container">
                {
                    listofRestaurants.map(i => <RestaurantCard key= {i.uuid} restaurantData= { i }/>)
                }
                {/* {
                    restaurantList.map(jsonObject => <RestaurantCard key= {jsonObject.uuid} restaurantData= { jsonObject }/>)
                }
                {
                    restaurantList.map(restaurant => <RestaurantCard key= {restaurant.uuid} restaurantData= { restaurant }/>)
                }
                <RestaurantCard  restaurantData={restaurantList[0]} />
                <RestaurantCard  restaurantData={restaurantList[1]} />
                <RestaurantCard  restaurantData={restaurantList[2]} /> */}
            </div>
        </div>
    )
}

export default Body;