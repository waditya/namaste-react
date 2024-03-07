import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    // console.log(resId);
    // console.log(typeof(resId));

    const resInfo = useRestaurantMenu(resId); // useRestaurantMenu is a custom hook
    

    // Until we get the data from fetch API, the resInfo will be empty as intial value is null. Till we get data, display placeholders using Shimmer component
    if(resInfo === null) {
        <Shimmer />; 
    }
    // const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    console.log(resInfo);

    const name = 
        resInfo?.cards[0]?.card?.card?.info?.name;
    
    const costForTwoMessage = 
        resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage;

    const cuisines= 
        resInfo?.cards[0]?.card?.card?.info?.cuisines; 
    
    const card = 
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    
    console.log(card);
    
    // Destructure the input data
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{ cuisines }</h3>
            {/* <h3>{ cuisines.join(", ") }</h3> */}
            <h3>{costForTwoMessage}</h3>
            <h2>Menu </h2>
            <ul>
                {card?.itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - ₹ {item.card.info.price/100}/-</li>)}

                {/* <li>{card?.itemCards[0]?.card?.info?.name}</li>
                <li>{card?.itemCards[1]?.card?.info?.name}</li>
                <li>{card?.itemCards[2]?.card?.info?.name}</li>
                <li>{card?.itemCards[3]?.card?.info?.name}</li>
                <li>{card?.itemCards[4]?.card?.info?.name}</li>
                <li>{card?.itemCards[5]?.card?.info?.name}</li> */}

            </ul>
        </div>
    );
};

export default RestaurantMenu;