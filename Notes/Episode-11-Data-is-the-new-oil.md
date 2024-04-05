# Episode-11 : Data is the new oil

## Higher order components

It is a Java Script function which takes a component as an input and enhances the component to returns a component. 

## Controlled and Un-controlled components

All React apps have 2 layers- UI layer and Data layer
UI layer is powered by data layer. It consists of JSX
Data layer consists state, props ,local variables, etc.

Building sections on Restaurant Menu 

Accordian is a type of UI where list can be collapsed and expanded...
There are 2 things - 
1. Accordian Header
2. Accordian data (body)

Controlled and Uncontrolled component

RestaurantCategory is a controlled component and is controlled by RestaurantMenu.
RC relies on its parent on what to do. 

Lifting state up in React 

Reference - https://react.dev/learn/sharing-state-between-components

## Use Context 

React context API

### Concept of Props relay

Passing data from one component to other is challenging.

React has one way data flow.
Parents to child. 

Props drilling - The problem with passing props.

React Context - It is a super power given by React to allow components lower down the hierarchy to
access props data in a higher layer data. 

Example - Logged In user info
Theme : light theme / dark theme 

This info is needed any where in app. Hence, this information should be used in Context
and can be accessible from any where in the app. 

### React Context
**Context** is a global thing. It should not be kept inside a component.
Rather, in a global/central place. 

Example - UserCOntext.js within utils will keep the user login/logout context 

React has a library known as createContext which can be used to create objects of
"createContext" type. 

### Props versus Context 

Data which is needed in multiple components is an ideal candidate to be put 
in Context. Data which is passed from one component for a specific child component to consume
is suitable to props.

You can wrap the entire app within <UserContext.Provider> and pass value to the UserContextProvider
as done in App.js