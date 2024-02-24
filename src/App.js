import React from "react"; // Import React from the react package in the node_modules
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body.js";
import About from "./components/About.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";

// AppLayout component is function which returns JSX code (which is a <div>)
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
// createBrowserRouter creates routing configuration.Configuration is information that will tell browser router when you click on a certain path

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement : <Error/>,
    },
    {
        path : "/about",
        element : <About/>,
    },
    {
        path : "/contact",
        element : <Contact/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);