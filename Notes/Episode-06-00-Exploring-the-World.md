# Episode-06 : Exploring the World

## Monolith and Microservice Architecture

**Monolith Architure**

* Huge Bug Project
* Code consisting of APIs in same project
* Authentication code in same project
* UI code in same project
* Database code in same project
* Notification (example - Amazon SNS) code in same project 

All the code resides in same project. Even to make a small change - say like color of a button ,
the entire code needs to compiled, built and deploy the whole project. This is Monolith architecture.

**Microservices Architecture**

* Different service for different job
    - APIs
    - Authentication
    - UI
    - Notification
    - Database
    - Backend logic

* All these micro-services combine together to form a big app
* Seperate project for a seperate service
* This is known as Seperation of concerns based on Single Responsibility. 
* All teams work on their own Gut repos

* Service interact with each other. They are connected.
* All the individual services run on their individual port. 
* These services are connected using an API 

* Example : /, /api, /ui, /sns 

**Approcahes to fetch data**

**A. Approach-I** <br>
Step-01 : Page Loads<br>
Step-02 : API calls is made. Say, it takes 500 ms to get the data<br>
Step-03 : The Page is rendered<br>

**B. Approach-II**<br>
Step-01 : Page Loads<br>
Step-02 : The Page is rendered with whatever we have i.e. Render the skeleton<br>
Step-03 : API calls is made. Say, it takes 500 ms to get the data<br>
Step-04 : The Page is rendered again with the data fetched<br>


*React always uses 2nd approach*
This is a better approach and gives a good UX. 
In approach-I, the page is frozen and 500 ms which is a bad UX. 
Uses sees a lot of lag/jitteriness. 
React has one of the faster rendering mechanism, hence 2 render cycles will be handled good by React. 

### UseEfect hook in React

Hook at the end of the day, is a normal JavaScript function for a specific purpose. 
UseState hook is to create React state variables. Similarly, useEffect hook comes from 
React library and is brought in as a Named import.

useEffect takes 2 arguments. First argument is the callback function and the
secidn one is dependency array.

useEffect(()=> {}, []);

Sample usage : 

useEffect(()=> {
    console.log('Arrow function within useEffect Invoked!')
}, []);


#### Purpose of useEffect
useEffect is a React Hook that lets you synchronize a component with an external system.

https://react.dev/reference/react/useEffect

**The useEffect callback function is called after your component renders.**
When the Body component is rendered, as soon as the component is rendered, 
callback function is called and the the callback function will be executed. 

In order to use the 2nd apprach of fetching data, after the component is rendered, we will be using the 
useEffect hook. When you load the page, the body compone is rendered with whatever data (or no data) is available.
During the rendering of this body fucntion, <ins>React will read the callback function within the useEffect hook 
and park it aside.</ins> Once the body is rendered, React will go back to the callback function and execute it.

This enables us to have a fetchData function, which will fetch data from external system by making an
API call to the external system. <ins>Once the data is received, React will re-render the Body component
with the newly available data.</ins> 


### Fetching data in React

Data is fetched in React in same way as it is done in JavaScript.
It used the superpower aka, the fetch() function call. This superpower is given to us , <ins>not by JS or React, but by the <b>browsers</b></ins>
So, a JS engine will natively have capability to use the fetch() 

## Optional Chaining in Java Script


The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining


## Shimmer UI

A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear.