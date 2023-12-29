import React from "react"; // Import React from the react package in the node_modules
import ReactDOM from "react-dom/client"; 

/* React Element. It is an object. This is not a HTML element.
After Rendering the element on the DOM, it becomes HTML element */
// Below syntax creates React element using Core React

const heading = React.createElement("h1", {id: "heading"}, "Namaste React! 🙏🚀");
console.log(heading);
/* In order to render the above React element inside the root div in index.html, we 
will need to create root inside react which references the root div*/

//JSX
// Define react element using JSX for easily describing HTML objects
const jsxHeading = <h1 id="heading" className="head" tabIndex="1">Namaste React using JSX! 🙏🚀</h1>;

console.log(jsxHeading);
// The JSX element is transpiled to React.createElement element by Parcel which in-turn is done by babel.
// Babel is a open-source JavaScript compiler
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);