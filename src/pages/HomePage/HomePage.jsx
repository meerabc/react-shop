import React, { useState, useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import { MdOutlineElectricBolt } from "react-icons/md";
import { IoIosSend, IoIosMoon } from "react-icons/io";
import card1Img from '../../assets/images/card1_img.svg';
import card2Img from '../../assets/images/card2_img.svg';
import card3Img from '../../assets/images/card3_img.svg';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import TinderIcon from '../../assets/icons/TinderIcon';
import AirbnbIcon from '../../assets/icons/AirbnbIcon';
import HubspotIcon from '../../assets/icons/HubspotIcon';
import AmazonIcon from '../../assets/icons/AmazonIcon';
import { IoShuffleSharp } from "react-icons/io5";
import { GrTarget } from "react-icons/gr";
import { FaRegHandshake } from "react-icons/fa";
import { PiSignOutFill } from "react-icons/pi";
import { VscEditorLayout } from "react-icons/vsc";
import { HiOutlineSparkles } from "react-icons/hi2";
import profileImg from '../../assets/images/profile_image.png';
import contactImg from '../../assets/images/contact_img.png';
import './HomePage.css'

const HomePage = () => {

  const {theme} = useContext(ThemeContext)

  const [selectedCard, setSelectedCard] = useState(1)

  // Maps cards to their images
  const cardImages = {
    1: card1Img,
    2: card2Img,
    3: card3Img,
  }

  return (
    <div className='home-page container'>
      <div className='hero'>
        <div className='circle circle1'></div> 
        <div className='circle circle2'></div>
        <div className='line'></div>
        <div className='main-content'>
          <h1>Make your Outfit <span>wonderful</span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere soluta iusto expedita
             veniam asperiores, cumque id, tempora numquam voluptatibus.</p>
          <div className="buttons-container">
            <button className="start-shopping">Start Shopping</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div> 
      </div>

      <div className="feature-section">
        <div className="top-div">
          <p className="heading">Explore the solutions</p>
          <p className='para'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur excepteur sint occaecat cupidatat.</p>
        </div>

        <div className='bottom-div'>
          <div className='features-div'>
            <p className="heading">Powerful suite of tools</p>
            <p className='para'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
            
            <div className="feature-cards">
              {/* Card 1 */}
              <div 
                className={`card card1 ${selectedCard === 1 ? "selected" : ""}`}
                onClick={() => setSelectedCard(1)}
              >
                <div className="content">
                  <h3>Simple shopping ecosystem</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque sit culpa distinctio.</p>
                </div>
                <div className="icon-container">
                  <MdOutlineElectricBolt />
                </div>
              </div>

              {/* Card 2 */}
              <div 
                className={`card card2 ${selectedCard === 2 ? "selected" : ""}`}
                onClick={() => setSelectedCard(2)}
              >
                <div className="content">
                  <h3>Fast & Reliable</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque sit culpa distinctio.</p>
                </div>
                <div className="icon-container">
                  <IoIosSend />
                </div>
              </div>

              {/* Card 3 */}
              <div 
                className={`card card3 ${selectedCard === 3 ? "selected" : ""}`}
                onClick={() => setSelectedCard(3)}
              >
                <div className="content">
                  <h3>Smart & Efficient</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque sit culpa distinctio.</p>
                </div>
                <div className="icon-container">
                  <IoIosMoon />
                </div>
              </div>
            </div>
          </div>

          <div className="img-container">
            {selectedCard ? (
              <img src={cardImages[selectedCard]} alt={`card${selectedCard}`} />
            ) : (
              <p>Select a card to view image</p>
            )}
          </div>
        </div>
      </div>
      <div className="procedure-section">
        <div className='line'></div>
        <div className="top-div">
          <p className="heading">Explore the solutions</p>
          <p className='para'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur excepteur sint occaecat cupidatat.</p>
        </div>
        <div className="procedure-card-container">
          <div className="procedure-card">
            <div className='icon-container'>
               <IoShuffleSharp />
            </div>
            <h2>Initial Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="procedure-card">
            <div className='icon-container'>
              <GrTarget />  
            </div>
            <h2>Initial Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="procedure-card">
            <div className='icon-container'>
              <FaRegHandshake />                 
            </div>
            <h2>Initial Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="procedure-card">
            <div className='icon-container'>
              <PiSignOutFill />
            </div>
            <h2>Initial Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="procedure-card">
            <div className='icon-container'>
              <VscEditorLayout />
            </div>
            <h2>Initial Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="procedure-card">
            <div className='icon-container'>
              <HiOutlineSparkles />
            </div>
            <h2>Initial Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className="end-section">
        <div className="top-div">
          <p className="heading">Explore the solutions</p>
          <p className='para'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur excepteur sint occaecat cupidatat.</p>
        </div>
        <div className='icons-container'>
          <FacebookIcon color={theme==='dark' ? '#ffffff' : '#4D4D4D'} />
          <TinderIcon color={theme==='dark' ? '#ffffff' : '#4D4D4D'} />
          <AirbnbIcon color={theme==='dark' ? '#ffffff' : '#4D4D4D'} />
          <HubspotIcon color={theme==='dark' ? '#ffffff' : '#4D4D4D'} />
          <AmazonIcon color={theme==='dark' ? '#ffffff' : '#4D4D4D'} />
        </div>
        <div className="comment-container">
          <img src={profileImg} alt='profile-img' />
          <p className="comment">“ I love this product and would recommend it to anyone. Could be not
             easier to use, and our multiple Branch are doing wonderful. We get nice comments all 
             the time. “ </p>
          <h2 className="name">Darya Finger</h2>
          <p className="info">CEO & Co-Founder <span>@Ashon</span></p>
        </div>
        <div className="contact-container">
          <div className="content">
            <p className="heading">Powering your business</p>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita 
              voluptas culpa sapiente.</p>
            <form>
              <input type='email' placeholder='Your email...'></input>
              <button type='button'>Subscribe</button>
            </form>
          </div>
          <div className="img-container">
            <img src={contactImg} alt='side-image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage