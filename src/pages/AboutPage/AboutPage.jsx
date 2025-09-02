import React from 'react'
import './AboutPage.css'
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { DiNpm } from "react-icons/di";
import { DiResponsive } from "react-icons/di";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";

const AboutPage = () => {

  return (
    <div className='about-page container'>
      <div className="main-content">
        <h1>About Developer</h1>
        <p>Hello there! I'm <span>Meerab Chaudhary</span>, a passionate frontend developer who crafted this modern 
          e-commerce platform from the ground up. With a keen eye for detail and a love for creating
          intuitive user interfaces, I set out to build a comprehensive online shopping experience that 
          demonstrates advanced React development skills. Every component, interaction, and visual element
          has been carefully designed to showcase modern frontend architecture while delivering a 
          seamless user experience.</p>
        <h1>Frontend Technologies & Architecture</h1>
        <p>This single-page application (SPA) is built using React 18 with modern hooks, functional 
          components, and the Context API for state management. I've implemented Redux Toolkit for complex 
          cart operations, React Router DOM for seamless navigation with protected routes, and a
          comprehensive theming system supporting dark/light modes using CSS3 custom properties. 
          The project features responsive design with CSS Grid and Flexbox, custom form validation
          with real-time feedback, local storage integration for user preferences, and smooth loading 
          states throughout the application. Advanced concepts like custom hooks, dynamic routing, and 
          efficient component rendering showcase my expertise in modern React development patterns.</p>
          <div className="icons-container">
            <FaReact style={{color:'#4D4D4D'}}/>
            <SiRedux style={{color:'#4D4D4D'}}/>
            <TbBrandCss3 style={{color:'#4D4D4D'}}/>
            <SiReactrouter style={{color:'#4D4D4D'}}/>
          </div>
        <h1>Development Approach & Features</h1>
        <p>My development philosophy centers around creating scalable, maintainable code with exceptional
          user experience. This project implements a complete shopping cart system with quantity
          management, user authentication with protected routes, real-time search and filtering
          capabilities, and responsive design that works flawlessly across all devices. I've
          utilized modern ES6+ JavaScript features, implemented custom validation helpers, and 
          created reusable components that demonstrate clean code principles and best practices 
          in React development.</p>
          <div className="icons-container">
            <DiNpm style={{color:'#4D4D4D'}}/>
            <DiResponsive style={{color:'#4D4D4D'}}/>
          </div>
        <h1>Let's Connect</h1>
        <p>Dive into this shopping experience and witness the culmination of modern frontend development 
          practices. Every line of code reflects my commitment to quality, performance, and user 
          satisfaction. Feel free to explore the features, test the responsiveness, and if you have any
          questions about the implementation or would like to collaborate on future projects, I'm here 
          to connect. Your journey through this platform is as important to me as the code that powers 
          it!</p>
          <div className="icons-container links">
            <div className='link-container'>
              <a
                href="https://www.linkedin.com/in/meerab-chaudhary-01028b2a6/"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FaLinkedin style={{color:'#4D4D4D'}}/>
              </a>
            </div>
              <a
                href="https://github.com/meerabc/react-shop.git"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FaGithub style={{color:'#4D4D4D'}}/>
              </a>
          </div>
      </div>
    </div>
  )
}

export default AboutPage
