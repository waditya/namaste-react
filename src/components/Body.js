import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    
    let listofRestaurants = [
        {
            uuid: 1,
            name: "Aroma Foods",
            cuisine: "Maharashtrian snacks, North Indian",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uzvhmhkohovrploo4x3y",
            rating: "4.4",
            ETAinMins: "30"
        },
        {
            uuid: 2,
            name: "Ganesh Bhel House",
            cuisine: "Savoury snacks (Chat)",
            imgSrc: "https://ganeshbhel.com/wp-content/uploads/2021/09/6-326x170-1.jpg",
            rating: "4",
            ETAinMins: "25"
        },
        {
            uuid: 3,
            name: "Katakir Misal",
            cuisine: "Maharashtrian",
            imgSrc: "https://b.zmtcdn.com/data/pictures/chains/4/13004/3001549d95106b79794bf1d5222770ca.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            rating: "4.5",
            ETAinMins: "30"
        },
        {
            uuid: 4,
            name: "Maskawala & Co.",
            cuisine: "Snacks, Bakery and Biryani",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jklhqvl4kyvishuidtw3",
            rating: "4.4",
            ETAinMins: "22"
        },
        {
            uuid: 5,
            name: "Gokhales Kitchen",
            cuisine: "Thali, Street Food",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aokllwrug5o5w4as5wqq",
            rating: "4.0",
            ETAinMins: "27"
        },
        {
            uuid: 6,
            name: "Burger King",
            cuisine: "American, Snacks",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
            rating: "4.2",
            ETAinMins: "21"
        },
        {
            uuid: 7,
            name: "Irani Cafe",
            cuisine: "Bakery, Snacks, Deserts",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gprevswsanojqseht2ic",
            rating: "4.6",
            ETAinMins: "17"
        },
        {
            uuid: 8,
            name: "Mad Momos",
            cuisine: "Chinese, Tibetan",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qvts5oqwkc1up13mjzr9",
            rating: "4",
            ETAinMins: "28"
        },
        {
            uuid: 9,
            name: "Atithi Veg",
            cuisine: "South Indian",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f7b258fd856001f9d660ac4b233aa34a",
            rating: "4.4",
            ETAinMins: "31"
        },
        {
            uuid: 10,
            name: "Lassi Wassi",
            cuisine: "Lebanese",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qt0fjw61mfp0uf6yincv",
            rating: "4.5",
            ETAinMins: "19"
        },
        {
            uuid: 11,
            name: "Kunafa Bytes",
            cuisine: "",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mkutyceeuqi6zcevuah6",
            rating: "4.5",
            ETAinMins: "19"
        },
        {
            uuid: 12,
            name: "Wholesome Meals",
            cuisine: "North Indian",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mp1ameqpxmd5bp3vm5f1",
            rating: "4.1",
            ETAinMins: "24"
        },
        {
            uuid: 13,
            name: "Girija",
            cuisine: "North Indian, Maharashtrian",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sepkzqzgz7zfgicikaqq",
            rating: "4",
            ETAinMins: "25"
        },
        {
            uuid: 14,
            name: "Vernekar`s - Goan Fish Currry",
            cuisine: "Seafood",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bjkwhn4sknaprwsb4sjb",
            rating: "4.5",
            ETAinMins: "23"
        },
        {
            uuid: 15,
            name: "Nisarg",
            cuisine: "Coastal",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kqldoyhvqgq48g5iuqgn",
            rating: "4.4",
            ETAinMins: "29"
        },
        {
            uuid: 16,
            name: "Mad Over Bowls (MOB)",
            cuisine: "Chinese, Tibetan",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/abzhzo9hxudxiwgegmtq",
            rating: "4.1",
            ETAinMins: "23"
        },
        {
            uuid: 17,
            name: "KFC",
            cuisine: "American Snacks",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
            rating: "4.2",
            ETAinMins: "26"
        },
        {
            uuid: 18,
            name: "McDonald's",
            cuisine: "Burgers, Cafe",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6",
            rating: "4.4",
            ETAinMins: "18"
        },
        {
            uuid: 19,
            name: "Cakeman",
            cuisine: "Bakery, Desserts",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0f3277256bd187ac77998656a101ecc5",
            rating: "4.5",
            ETAinMins: "15"
        },
        {
            uuid: 20,
            name: "Domino's Pizza",
            cuisine: "",
            imgSrc: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oaiyzbasnpmhiuailzb3",
            rating: "4.4",
            ETAinMins: "25"
        },
    ];

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => 
                    {   restaurantList = restaurantList.filter(
                        (res) => res.rating > 4.5
                    );
                        // Filter Logic Here
                        listofRestaurants = listofRestaurants.filter(
                            (res) => res.rating > 4.4
                        );
                        console.log(listofRestaurants);
                        // alert("Filter Button Clicked!")
                    }}

                    
                    > 
                    Top Rated restaurants 
                </button>
            </div>
            <div className="restaurant-container">
                {
                    listofRestaurants.map(i => <RestaurantCard key= {i.uuid} restaurantData= { i }/>)
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