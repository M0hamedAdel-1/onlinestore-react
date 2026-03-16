import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const About = () => {

  const aboutobj = [
    {id:0,title:"I design and implement responsive, accessible, and pixel-perfect user interfaces."},
    {id:1,title:"I translate design mockups into clean, efficient code using modern front-end technologies."},
    {id:2,title:"I crafting fast, interactive web experiences with a focus on performance and usability"},
    {id:3,title:"I turn complex requirements into simple, delightful user interfaces.."},
    {id:4,title:"Proficient in React, HTML5, CSS3, and JavaScript, with a passion for building scalable UI components."},
    {id:5,title:"I continuously optimize UI for speed and accessibility across devices."}

  ]


  return (
    <div className='about_me'> 
        <div className='container'>
            <h1>i am frontend developer my name is <span>mohamed adel</span></h1>
            <ul>
              {
                aboutobj.map((obj)=>(
                  <li className='about-title' key={obj.id}>{obj.title}</li>
                ))
              }
            </ul>
            
        </div>
    </div>
  )
}

export default About
