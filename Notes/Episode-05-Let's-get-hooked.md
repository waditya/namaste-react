# Episode-05-Let's-get-hooked Notes

- The beauty of using a framework or library (example - React) is that it makes develop experience easy. 
You can write less code and do more work using these frameworks. React makes coding experience good and
also optimizes the code in its backend.

- Best practice in industry is to make sperate file for seperate React component

- Have a folder structure. All main code in React project is kept in "src" folder.
You can have a project without a src folder but it is an industry practice.

- It is a best practice to create a component folder inside the src folder.
It is not mandatory but an industry convention.

- React file/folder structure : https://legacy.reactjs.org/docs/faq-structure.html

- Never keep hardcoded data (eg - restaurantList) in components folder. This is an industry standard.
These could be your urls. Generally referred as common or utils. 

- There are 2 types of ways of export
  1. Default export example : export default <ComponentName>; In a single file, you can only have 1 default export.
  2. Named export : This is used when in a single file we have to export many things.
  Example : In constants.js, we have to export CDN_URL as well as LOGO_URL.

- Similarly, there are 2 types of import - 
    1. defualt import : import Component from "<path/ComponentFileName>"
    2. Named import : import {Componet} from "<path/ComponentFileName>"

- Can we have default component and named component in same file ?
=> Yes, a dummyComponent is added in styleCard.js


