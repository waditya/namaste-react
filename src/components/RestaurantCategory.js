import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    /** return Accordian in JSX */
    console.log(data);

    return (
    <div>
        {/** Accordian Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4">
            <div className="flex justify-between">
                <span className="font-bold text-lg"> 
                    { data.title } ({data.itemCards.length}) 
                </span>
                <span> 🔽 </span>
            </div>
            
            {/** Accordian Body */}
            <ItemList items = {data.itemCards} />
        </div>
        
    </div>
    );
};

export default RestaurantCategory;