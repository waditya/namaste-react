import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    // console.log(resId);
    // console.log(typeof(resId));

    const resInfo = useRestaurantMenu(resId); // useRestaurantMenu is a custom hook
    

    // Until we get the data from fetch API, the resInfo will be empty as intial value is null. Till we get data, display placeholders using Shimmer component
    if(resInfo === null) {
        return <ShimmerMenu />; 
    }
    // const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    console.log(resInfo);

    const name = 
        resInfo?.cards[0]?.card?.card?.info?.name;
    
    const costForTwoMessage = 
        resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage;

    const cuisines= 
        resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", "); 
    
    const card = 
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    
    console.log(card);
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c)=> c.card?.["card"]?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ); 
        //Map-filter-reduce
    
        // console.log("Logging categories below : ");
        // console.log(categories);

    return (
        <div className="menu bg-pink-400 w-9/12 bg-opacity-60 pb-5 ms-4 text-center">
            <h1 className="font-extrabold py-1 m-4 text-2xl">{name}</h1>
            <h3 className="italic ml-1 mr-4 p-4">{ cuisines }</h3>
            {/* <h3 className="italic ml-1 mr-4 p-4">{ cuisines.join(", ") }</h3> */}
            <h3 className="italic  ml-1 mr-4 pb-2 pl-4">{costForTwoMessage}</h3>

            <h2 className="font-bold pl-4 pb-2">Menu </h2>
            {/** categories accordians */}
            
            { categories.map( (category) => (
                <RestaurantCategory key = {category?.card?.card.title} data = { category?.card?.card } />
                ))
            }
            
            
            {/* <ul>
                {card?.itemCards.map(item => <li className="m-4 p-0 bg-gray-200" key={item.card.info.id}>{item.card.info.name} - ₹ {item.card.info.price/100}/-</li>)}
            </ul> */}
        </div>
    );
};

export default RestaurantMenu;