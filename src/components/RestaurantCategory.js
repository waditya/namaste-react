import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    /** return Accordian in JSX */
    
    const [showItems, setShowItems] = useState(false);

    console.log(data);
    
    const handleClick = () => {
        console.log("Accordian clicked");
        setShowItems(!showItems);
    }
    return (
    <div>
        {/** Accordian Headers */}
        <div className="w-9/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 cursor-pointer">
            <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold text-lg"> 
                    { data.title } ({data.itemCards.length}) 
                </span>
                <span> 🔽 </span>
            </div>
            
            {/** Accordian Body */}
            {showItems && <ItemList items = {data.itemCards} />}
        </div>
        
    </div>
    );
};

export default RestaurantCategory;