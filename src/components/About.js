import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/about.css'
import profilePic from '../images/profileImage.jpg'
function About(props){
    console.log("<<<<<<<", props);
    if(props.about){
        return (
            <div className='about'>
              <ul className='listStyle'>
                  <li>2019</li>
                  <li>2020</li>
                  <li>2021</li>
                  <li>2022</li>
              </ul>
            </div>
        )
    }else{
        return(
            <></>
        )
    }
    
}

export default About
