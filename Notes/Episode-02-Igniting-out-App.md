1. Difference between dev and prod code is that prod code is highly optimized. 
Be it libraries, photos, bundling, etc

2. NPM (NPM manages packages but it does not stand as Node Package Manager)
NPM is a standard repository for all the packages, libraries and utilities. 

3. When we create a basic react app with boiler plate code, npm is added to it by default.

4. package.json consists the configuration for npm. It keeps track of what version of package is installed
in the app. package-lock.json keeps the record of the exact version of the package/dependency.

5. Bundler is important dependency. It helps to bundle the .html, .css, .js, etc files 
This helps to ship the code to Production.
Examples - webpack , parcel, wheat

6. There are 2 type of dependencies. Dev dependencies and Normal dpendencies. 
Dev dependiencies are required in Dev environment. Normal are required in all environments including Production.

7. Carat (^) in fornt of dependency version implies that if a minor version a.b.(x+1) is available, then it will upgrade to it.
However, it will not upgrade major version (a+1).b.x. With tilde (~), it will upgrade major version automatically if it is 
available. Major version upgrades can break the app. It is safe to keep ^ and u[grade minor versions.]

8. The node_modules contain all the code fetched by npm when we run the npm install parcel. 
Along with parcel, we see many folders (represending node packages) in node_modules. This is because these are parcel dependencies or the dependecies of parcel dependencies. This is also known as parcel dependencies. 

9. If we have package.json and package-lock.json, we can re-create node modules in case they are deleted. 
This can be done using npm install command. Hence, we do not need to push it to GitHub. 
The principle is what ever we can regenrate on the server, we don't need to add it on GitHub. 

10. Similar to npm, we have npx. 
npm is used to install a package
npx means executing a package

11. Adding CDN links is not a good way to bring React and ReactDOM into your project. 
Fetching from CDN is costly operation due to a netwoek call. 
Instead, it is better to install React as a package. 

npm install react
npm install react-dom

12. Adding type=module in script tag in index.html tells the browser
that this is a not a normal JS file. It is a module. 

13. Building production ready app
npx parcel build index.html






