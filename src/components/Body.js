import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect} from "react"; // useState is imported as named import from react
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    // Local State Variable

    const [listofRestaurants, setlistofRestaurants] = useState([/* restaurantList */]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([/* restaurantList */]);
    const [searchText, setsearchText] = useState(""); // Local state variable for tracking seach text

    console.log("Body component rendering");
    useEffect(()=>{
        // console.log('useEffect called!');
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

        const json = await data.json();
        console.log(json);

        // Optional chaining (Java Script feature) implemented in next line
        console.log(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setlistofRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };
    
    // Conditional rendering
    // User ternary operator for return 
    return listofRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value = {searchText} 
                        onChange={(event) => {
                            setsearchText(event.target.value);
                    }}
                    />
                    <button 
                        onClick= { ()=> {
                            // Filter the restaurant cards and update the UI
                            // searchText (content of the input box)
                            console.log("Search query is : "+searchText);

                            // Use Filter method from - Map Filter and Reduce in JS
                            const filteredRestaurant = listofRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setfilteredRestaurants(filteredRestaurant);
                            
                        } 
                    }> Search </button>
                </div>
                <div>
                <button 
                    className="filter-btn" 
                    onClick={() => 
                    {   
                        const filteredList  = listofRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );

                    setfilteredRestaurants(filteredList);
                        
                        // console.log(listofRestaurants);
                        // alert("Filter Button Clicked!")
                    }}
                > 
                Top Rated restaurants 
                </button>
                </div>
            </div>
            <div className="restaurant-container">
                {
                    filteredRestaurants.map(i => 
                    <Link 
                        key= {i.info.id}
                        to={"/restaurants/"+i.info.id}
                    >
                        <RestaurantCard restaurantData= { i }/>
                    </Link>)
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