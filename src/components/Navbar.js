import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import About from './About';
function Navbar(props){
    console.log("<<<<<<<", props);
    return (
        <>
        <div className='navbar'>
            <div className='navLinks' onClick={() => {props.setResume(false); props.setAbout(false)}}>
                Home
            </div>
            <div className='navLinks' onClick={() => {props.setResume(true); props.setAbout(false)}}>
                Resume
            </div>
            <div className='navLinks' onClick={() => {props.setResume(false); props.setAbout(true)}}>
                About
            </div>
        </div>
        <About about={props.about}/>
        </>
    )
}

export default Navbar
