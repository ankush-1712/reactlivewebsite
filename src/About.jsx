import React from "react";
import Common from "./Common";
import logo from './3d-2.jpeg'

const About=()=>{
    return (
    <>
    <Common name="Welcome to About Page" 
    imgsrc={logo} 
    visit='/contact' 
    btnname="Contact Now"></Common>
    </>
    )
}

export default About
