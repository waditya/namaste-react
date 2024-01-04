# Chapter-04 : Talk is Cheap, Show Me the Code 

## Build food ordering app 

- Though process for building a food ordering app. 
- Start with a good planning. A visual picture helps in writing the code

### High-level Planning : 
- Step-01 : Know what your are going to build [UI Design]
- Step-02 : Name the App
- Step-03 : Draw how app will look like. 
- Step-04 : Header, logo within header, hyper links like Home, About, Cart, etc
- Step-04 : Have body for the app
- Step-05 : Have footer
- Step-06: Add search bar in body with search button
- Step-07: Have cards for restaurants 

### Components (Low-level Planning)
- Three basic components. Header, Footer and Body component
- Header will have Logo, Navigation Bar (NavItem consisting of various navigational menus)
- Body component will have search input, Card (Restaurant Container) container component containing Restaurant card component
- Footer will have Copyright, Links, Address, and Contact components. 

### Props (Properties)
- Used to dynamically pass values to a component
- Props are normal arguments to component (Component is like JS function)
- Props are like passing values dynamically through function arguments
- When you have to pass values dynamically to a component, you can use props

### Config Driven UI (Important for Frontend UI Interview)

- You build a config driven UI. The data from the backend determines the configuration on frontend.
- Example - Carousal (showing offers) for a food delivery app will display different data on UI in Delhi, Pune, Mumbai, etc
- Use Java Script Map function to iterate over an Array 
- In React project, a good way to use is Map Filter and Reduce
- Map, Filter and Reduce YouTube Reference : https://www.youtube.com/watch?v=zdp0zrpKzIE&ab_channel=AkshaySaini
- Best Practice Avoid React Warnings relatred Key while iterating Maps. ALWAYS GIVE A KEY!
- Why we Need Keys ?
- The index of the map can also be used as keys. However, this should be avoided.
React documentation mentions using indexes for keys.