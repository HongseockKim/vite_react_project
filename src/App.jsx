import './App.css'
import React, {useContext, useDebugValue, useEffect} from "react";
import {ThemeContext} from "./main.jsx";
import {Container} from "@mui/material";
import DefaultLayout from "./layout/DefaultLayout.jsx";
import HeaderCom from "./componet/HeaderCom.jsx";

function MenuIcon() {
    return null;
}

function App() {
    const value = useContext(ThemeContext)
    useDebugValue(value)
    useEffect(() => {
        console.log(value)
        if(value.them === 'dark'){
            document.body.style.background = value.bg ?? '#fff';
            document.body.style.color = value.color ?? '#000';
        }

    }, []);
  return (
    <>
        <HeaderCom/>
        <Container maxWidth='xl' fixed >
            <DefaultLayout/>
        </Container >
    </>
  )
}

export default App
