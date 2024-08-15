import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/App';
import ErrorPage from './components/ErrorPage';

import PetList from './components/PetList';
import NewPetForm from './components/NewPetForm';
import PetProfile from './components/PetProfile';

import ExampleComponent from './components/ExampleComponent';

import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <PetList/>
            },
            {
                path: "/add_pet",
                element: <NewPetForm/>
            },
            {
                path: "/pets/:id",
                element: <PetProfile/>
            }
            // {
            //     path: "/:num1/:num2",
            //     element: <ExampleComponent/>
            // }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();