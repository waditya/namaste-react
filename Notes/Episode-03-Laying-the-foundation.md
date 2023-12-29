## Episode-03-Laying-the-foundation

1. npx parcel index.html

- npx means execute package named parcel and use index.html as source (starting point)

2. Interview question => 
- You go to a company and you want to start an application.
How can you figure out the command ?
=> Take  a look at the scripts section in the package.json. You will find start, build commands. 
npm run start | npm start
npm run build

3. JSX is not HTML inside Java Script. JSX is different than HTML.
JSX is an HTML-like syntax

4. In order to specify attributes inside JSX, you need to use camelCase.
It will get eventually converted to smallcase in your HTML code.

5. Multiline JSX code should be wrapped up in round brackets.
It will help Babel understand where JSX is starting and its endpoint.

6. React Component - 
Class Based components => Old way of writing component | uses JS classes
 Functional Component => New way of writing component | uses JS functions => Normal JS function 

 React Functional Component is a normal JS function which returns some JSX element.

 7. Within JSX, we can write any piece of JS script or JS expression  within curly braces{}

 8. JSX automatically sanitizes for cross-site scripting before executing a JS in curly braces {}