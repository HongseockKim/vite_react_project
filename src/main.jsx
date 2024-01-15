import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
        </Route>
    )
);
export const ThemeContext = React.createContext({
    them: 'dark',
    bg: '#3d3d3d',
    color: '#fff'
});
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
console.log(import.meta.env.VITE_APP_ENV);
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
