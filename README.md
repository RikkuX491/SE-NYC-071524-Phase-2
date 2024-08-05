# Lecture # 1 - Introduction to React

## Lecture Topics
- Learn how to create a React application and start it
- Learn about imports and exports in React
- Discuss the benefits of React over Vanilla JS
- Discuss the difference between HTML and JSX
- Discuss the importance of Components
- Learn how a Component is written
- Learn how to render a Component
- Observe how to render multiple elements from a list

## Setup
Please make sure that you are inside the folder for this repository (the `SE-NYC-071524-Phase-2` folder) before following these instructions for setup:

1. Run the following command in the terminal to create a new React application named `pets-app`:

```
npx create-react-app pets-app
```

2. Run the following command in the terminal to move inside of the directory for the React application:

```
cd pets-app
```

3. Run the following command in the terminal to install the dependencies from the `package.json` file:

```
npm install
```

4. Run the following command in the terminal to start the React application and run the React application in your browser:

```
npm start
```

If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Creating a React App

`create-react-app` will build a project folder for our application and install all the dependencies we need (via Node Package Manager).

To create a new React application and start it, run:

```
npx create-react-app app-name
cd app-name
npm start
```

In addition to React, it gives us:

- Webpack: a tool for bundling and minifying our code (along with a server for running our code in development)
- Babel: a transpiler that lets us write modern JavaScript and JSX

## Components

Components are the building blocks of React. A component is a function that:

- Takes in some raw data (props)
- Returns user interface (JSX)

There are some things you'll need to keep in mind:

- The name of your component function must be capitalized.
- A component can only return one element. That element can have children, like this:

``` javascript
function Card() {
  return (
    <div id="card1" className="card">
      <h1>Hello Flatiron!</h1>
      <p>Greetings!</p>
    </div>
  );
}
```

### Resources

- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Creating React Apps](https://reactjs.org/docs/create-a-new-react-app.html)
- [create-react-app](https://create-react-app.dev/docs/getting-started)
- [Webpack](https://webpack.js.org/)
- [Quick intro to Webpack](https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc)