const RestaurantCategory = ({data}) => {
    /** return Accordian in JSX */
    console.log(data);
    return (
    <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 flex justify-between">
        {/** Accordian Header */}
        <span className="font-bold text-lg"> { data.title } ({data.itemCards.length}) </span>
        <span> 🔽 </span>
        {/** Accordian Body */}
    </div>
    );
};

export default RestaurantCategory;