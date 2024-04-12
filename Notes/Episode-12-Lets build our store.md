# Let's build our store

## Implementing Redux toolkit for state management

Topics Covered:
- Redux Toolkit
- React-Redux
- Actions , Reducers

## Purpose - How do we build a Redux store ?

* How do we manage state and data of our application using Redux
* UI layer and Data layer 
* Redux works in the data layer
* UI Layer and Data layer work in sync for the app to function
* How do we handle data effectively using Redux 

## Major mistakes about Redux 

* Start using from Day-01. 
 - Redux is not mandatory. One should evaluate if Redux is necessary. Use it wisely.
* When application has grown huge and there are lot of data transfers happening in the application, there Redux is useful. 
* For a small-app with few components, Redux is not needed. 
* Redux is seperate library and React is a different library 
* Redux is not the only library used for managing the state. There is a library known as Zustand. 
  Zustand is becoming popular these days.

## Redux - Advantages

* Application debug becomes easier using Redux related dev tools

## Redux

Redux is a predicatble state container for JS Apps.
Redux team offers 2 libraries : 
1. React-Redux - It is like bridge between react and redux
2. Redux toolkit (RTK) - The Redux toolkit is intended to be the standard way to write Redux logic.
3. Vanilla Redux (Older Redux library)

## Architecture of Redux Toolkit (RTK)

### How does Redux store look like ?
Redux store is like a big JS object kept centrally and any component can access it.
Redux store consists of slices which together make a Redux store. These are logical partitions.

Example - 
User Slice will consist of login info
Cart Slice will consist of Cart info.

We cannot directly modify the data on a slice.

### Workflow for modifying the data on a slice

Step-01 : When we click on Add button for a restaurant menu item, it dispatches an action.
Step-02 : Upon dispatch, the action will call  a function. 
Step-03 : This function will internally modify the cart. 

### Terminologies 

This function is know as Reducer aka reducer function.
Reducer function modifies/ updates the slice of the Redux store. 

### Reading data from the Cart Slice in Redux Store

We use selector to read data from the Redux store
Selector will give the data.
The phenomenon of using Selector is known as subscribing to the store. 

For example - If Header Component display the number of items in the cart by Subscribing to the Redux store
using the Selector, any change in the data of Redux store will result in change of data in the Header component. 










