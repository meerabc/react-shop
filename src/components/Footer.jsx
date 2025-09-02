import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa"; 

const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='main-container'>
          <div className='left-div'>
              <p>Terms</p><span>.</span><p>Privacy Policy</p>
          </div>
          <div className="main-content">
              <div className="div-1">
                  <div className="products">
                      <p className="heading">Products</p>
                      <p>Web Studio</p>
                      <p>DynamicBox Flex</p>
                      <p>Programming Forms</p>
                      <p>Integrations</p> 
                      <p>Command-line</p>  
                  </div> 
                  <div className="resources">
                      <p className="heading">Resources</p>
                      <p>Documentation</p> 
                      <p>Tutorials & Guides</p>
                      <p>Blog</p>
                      <p>Support Center</p>
                      <p>Partners</p>  
                  </div>   
              </div>
              <div className="div-2">
                  <div className="company">
                      <p className="heading">Company</p>
                      <p>Home</p>
                      <p>About us</p>
                      <p>Company values</p>
                      <p>Pricing</p> 
                      <p>Privacy Policy</p>  
                  </div>  
                  <div className="subscribe">
                      <p className="heading">Subscribe</p>
                      <p>Get the latest news and articles to your inbox every month.</p>
                      <div className="email-div">
                          <div className="input-div">
                              <input type="email" placeholder='Your email' />
                          </div>
                          <div className="arrow-icon-div">
                            <FaArrowRight />
                          </div>
                      </div> 
                  </div>  
              </div>
          </div>
        </div>
        <div className='made-by-container'>
          <p>Made with <FaHeart /> by <span>Meerab</span></p>
          <div className="icon-container">
            <a
              href="https://github.com/meerabc/react-shop.git"
              target="_blank"
              rel="noopener noreferrer"
             >
                <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
