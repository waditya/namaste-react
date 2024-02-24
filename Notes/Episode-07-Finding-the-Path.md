# Finding the Path

## useEffect Hook

### How is useEffectv called ?
useEffect hook in React is called with two arguments - 
1. A callback function - Mandatory
2. A dependency array  - Optional

`useEffect(() => {}, [])`

### When is useEffect called ?
Every time the component is rendered, useEffect() hook will be called.
The contents of the dependency array determines the behaviour of useEffect 
during rendering.


If there is no dependency array specified, useEffect is called on every component render.

When there is empty dependency array, then useEffect is called on intial render only.

When the dependency array consists of "something", the useEffect will be called initially and only when 
there update in the "something".

**NOTE** : Whenever using useState, never create state variables outside the component. 
The purpos eof useState hook is to create local state variables inside the finctional component. 

As a convention, declare useState variables using useState hook within the top orinitial part
of your functional component. React is a single thread synchronous language. Declaring the hooks
some where at the middle or bottom can create issues while using the state variables or updating them. 

Never create/declare useState variables within conditional statements like if-else condition.

