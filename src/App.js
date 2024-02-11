import React from "react"; // Import React from the react package in the node_modules
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body.js";

// AppLayout component is function which returns JSX code (which is a <div>)
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);