import React from "react";
import web from './images/aboutus.jpg';
// import { NavLink } from "react-router-dom";
import Common from "./Common";
const MyAbout = () => {
    return (
        <>
            <Common name='Welcome to About page' imgsrc={web} visit='/contact' btname='Contact Now' />
        </>
    )
}

export default MyAbout;