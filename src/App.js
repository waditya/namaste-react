import React, { lazy, Suspense } from "react"; // Import React from the react package in the node_modules
import ReactDOM from "react-dom/client"; 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body.js";
// import About from "./components/About.js";

import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js";

// AppLayout component is function which returns JSX code (which is a <div>)

// Import Grocery as a lazy loading. 
const Grocery = lazy( () => import ("./components/Grocery.js"));
const About = lazy( () => import ("./components/About.js"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
// createBrowserRouter creates routing configuration.Configuration is information that will tell browser router when you click on a certain path

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body/>
            }
            ,
            {
                path : "/about",
                element : <Suspense fallback = {
                    <div>
                        <h1>About component will be loading shortly .. </h1>
                        <h2> You can also use Shimmer here</h2>
                    </div>
                }>
                    <About/>
                </Suspense>,
            },
            {
                path : "/contact",
                element : <Contact/>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback ={
                        <div> Grocery is loading.. </div>
                }>
                    <Grocery/>
                </Suspense>
            }
        ],
        errorElement : <Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);