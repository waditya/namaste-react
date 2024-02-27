import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);


    useEffect( () => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch (
            "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=585360&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await data.json();
        setresInfo(json.data);
        
    };

    
    // const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    console.log("Log the resInfo :"+resInfo);

    const name = 
        resInfo?.cards[2]?.card?.card?.info?.name;
    
    const costForTwoMessage = 
        resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;

    const cuisines= 
        resInfo?.cards[2]?.card?.card?.info?.cuisines; 
        
   

    // Destructure the input data
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{ cuisines.join(", ") } - {costForTwoMessage}</p>
            <h3></h3>
            <ul>
                <li>Biryanu</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;