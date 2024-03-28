const ItemList = (items) => {
    console.log("Printing items in the category");
    console.log(items);
    return (
        <div>
            {items.map(item => 
                <div key={item.card.info.id} className="p-2 m-2 border-grey-100 border-b-black text-left">
                    <div>
                        <span className="py-2">
                            {item.card.info.name}
                        </span>
                        <span className="p-2">
                        ₹{item.card.info.price/100}
                        </span>
                    </div>
                    <p className="text-xs"> {item.card.info.description} </p>
                </div>
            )}
        </div>
    );
};

export default ItemList;