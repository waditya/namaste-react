const ItemList = ({items}) => {
    console.log("Printing items in the category");
    console.log(items);
    return (
        <div>
            {items.map(item => 
                <div key={item.card.info.id} className="p-2 m-2 border-grey-100 border-b-black text-left">
                    <img src= { !item.card.info.hasOwnProperty('imageId') ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId} className="w-14 float-right"/>
                    <div className="py-2"> 
                        <span>
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