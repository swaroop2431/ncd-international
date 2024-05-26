import React from 'react'
import './About.css'
import image1 from '../../assets/about1.jpg'

export default function AboutUs() {
  return (
    <div className='about'>
      <div className='about-container'>
        <div className='about-box'>
          <div >
            <h3>About</h3>
            <p>NCD International | Interiors | Construction is a full-service, custom architecture, construction and interior design provider. The firm’s unwavering mission is to deliver the ultimate design-build experience for their clients, and every team member is committed to inspire their clients to live their dreams.</p>
            <p>
            For over 20 years, husband-and-wife founder, Anthony Wilder, and President, Elizabeth Wilder, have led the team at ANTHONY WILDER creating award-winning projects in and around the Washington DC metropolitan and tri-state area.
            </p>
            <p>
            We are pleased to be members of The American Institute of Architects, American Society of Interior Designers, LEED, National Association of the Remodeling Industry, and National Kitchen & Bath Association.
            </p>
          </div>
          
        </div>
        <div className="about-img-container">
          <img src={image1} alt =''/>
        </div>
        
      </div>
      
      
    </div>
  )
}
