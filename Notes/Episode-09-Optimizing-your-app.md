# Episode-09 Optimizing your App

## Single Responsibility Principle

For example : The only responsibility of RestaurantMenu component is to display Restaurant Menu. 
The only responsibility of RestaurantCard is to display restaurant card
Header.js has responsibility of displaying header in the application.

Adhering to this principle helps us to a reusable, maintainable, and testeable code.

Keep your componentas light as possible. It helps to make code readable.

## Custom Hooks

Hooks are special Java Script functions given to us by React
UseState, useEffect, useParams (from react-router-dom) library.

Hooks are like utility/helper function. The best place is to create it in utils folder. Always name a custom hook by prefixing it with "use".
It tells React that this is a hook and not a component. 

We are going create a custom hook for RestaurantMenu compoent by offloading some of its responsibility into the custom hook.
The RestaurantMenu component has 2 responsibilities : 
1. Fetching the data
2. Displaying the data on the restaurant menu

The RestaurantMenu should not worry about how and from where the data is to be fetched. 

Example - useParams hook gives the restaurant ID paraneter to the RestaurantMenu hook.
We don't bother what useParams hook does under the hood.

Similarly, the job of gettng the data should be abstracted from RestaurantMenu using a custom hook. 

1. useRestaurantMenu(resId) is a custom hook which fetches the data and provides it to the restaurantMenu.  
2. The contract of the hook consists of getting the restaurantId from the calling component and returning the resInfo to the caller.

## How to plan a custom hook

Step-01 : Finalize the contract  
What is the input of the hook and what is it returning back to the caller (output).

## Building large scale application

Break application into small pieces. 

App Chunking (aka code splitting)
Dynamic bundling
Lazy loading 
