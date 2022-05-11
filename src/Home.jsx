import React from "react";
import { NavLink } from "react-router-dom";
import logo from './3d-2.jpeg'
import Common from './Common'
const Home=()=>{
    return (
    <>
    <Common name="Grow your business with"
      imgsrc={logo} 
      visit='/services' 
    btnname="Get Started"></Common>
    </>
    )
}

export default Home
