import React from "react"; // Import React from the react package in the node_modules
import ReactDOM from "react-dom/client"; 


const parent = React.createElement(
    "div", {id:"parent"}, 
    [ React.createElement(
        "div", {id:"child"},[
            React.createElement("h1", { older:"yes"}, "This is Namaste React 🙏🚀"), 
            React.createElement("h2", { younger:"yes"}, "I am an H2 Tag"), 
    ]
            ),
            React.createElement(
                "div", {id:"child2"},[
                    React.createElement("h3", { older:"yes"}, "I am an H3 Tag"), 
                    React.createElement("h4", { younger:"yes"}, "I am an H4 Tag"), 
            ]
                    )
        ]
    );

const heading = React.createElement("h1", 
{id : "chandu"}, 
"Hello World from React!!"
); /* {} is used to provide attributes to the tags */ 

console.log(parent);

console.log(heading); //object

//Create a root inside react library
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// root.render(heading); // Take the object and convert it into H1 tag and put it on browser