## CSS styles
Normall CSS
Sass and Scss
Sass : Syntactically Awesome Style Sheets
Scss : 
These do not scale well with size. Industry do not use it 

Style compnents is another way to write css in component. There are below frameworks - 
Frameworks and Libraries :- 
    - MaterialUI
    - AntDesign 
    - Bootstrap
     - Chakra UI

You get pre-built components. You just have to import and use it. 

Another way is to use Tailwind CSS (Latest)

## Tailwind CSS

Because our project uses Parcel, we will see how to Install Tailwind CSS wiht Parcel. 

npm install -D tailwindcss postcss

The above command installs tailwindcss and postcss
postcss is a package to transform CSS with JavaScript. 

tailwindcss uses postcss behind the scenes. 

Initialzie tailwindcss into our repository 

It will create a config file tailwind.config.js

### Tailwind css automatically gives you classname for every CSS that ypu would want to write into app

- Tailwind CSS frameworks

You can hardcode tailwindclasses. Example to specify hardcoded value of 2--px width,
you can specify w-[200px]

### Advantages of Tailwind CSS--

1. Faster development
2. Lightweight framework  - Parcel will use only those css classes which are used in the JS and which are absolutely required in the prject. It will not ship unused CSS.
3. Build complex classes.

### Disadvantages

2. Ugly code when lot of classes are used

