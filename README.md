# Lecture # 8 - Client-Side Routing

## Lecture Topics

- Refactor code to include client-side routing using React Router V6
- Handle nested client-side routes

## Setup

Please make sure that you are inside the folder for this repository which contains the `package.json` file before following these instructions for setup:

1. Run `npm install` in your terminal to install the dependencies from the `package.json` file.
2. Run `npm install react-router-dom@6` to install react-router-dom so you can start using React Router version 6 (the curriculum covers React Router version 6, so make sure to include @6 at the end of the install command to install React Router version 6).
3. Run `npm run server`. This will run your backend on port `4000`.
4. In a new terminal, run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Introduction

We've been asked to build a website for a new pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center.

Today we will be using React Router to organize our single-page app into separate routes that will allow us to display different pages in this single-page app.