import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

/** The contract  of the hook consists of getting the restaurantId from the calling component and returning the resInfo to the caller.*/
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    console.log("Inside useRestaurantMenu custom hook");
    console.log(resId);

    // fetchdata
    
    useEffect( () => {
        console.log("Inside useEffect of useRestaurantMenu custom hook");
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log("Complete URL"+ MENU_API + resId);
        const data = await fetch(MENU_API + resId); // "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=585360&catalog_qa=undefined&submitAction=ENTER"
        const json = await data.json(); // Convert the data received from fetch API to JSON format
        setResInfo(json.data); // Set the state variable for resInfo state variable
        console.log("Logging the Custom hook data");
        console.log(json);
        console.log(resInfo);
    };

    return resInfo;
};

export default useRestaurantMenu;