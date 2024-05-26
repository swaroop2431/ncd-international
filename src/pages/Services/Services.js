import React from 'react'
import './Services.css'
import images1 from '../../assets/projects/project1/25.jpg'
import image2 from '../../assets/interiors/57.jpg'
import imgaes3 from '../../assets/interiors/69.jpg'
import pathConstants from '../../routes/pathConstants'
import {Link} from 'react-router-dom'

export default function Services() {
  
  return (
    <div className='Services'>
      <div className='services-container'>
         <div className='services-sub-container'>

            <div className='service-image-container' >
              <img src={images1} alt ='' />
            </div>

            <div className='service-text-container'>
              <h3>Buildings Architectures</h3>
              <p>
                <Link to ={pathConstants.buildings}>
                   View Building Architecture Services
                </Link>
              </p>
            </div>
         </div>

         <div className='services-sub-container'>
            
            <div className='service-image-container' >
              <img src={image2} alt =''/>
            </div>
            <div className='service-text-container'>
              <h3>
                 Interiors
              </h3>
              <p>
                <Link to ={pathConstants.interior}>
                  View Interior Services
                </Link>
              </p>
            </div>

           
         </div>
         
         <div className='services-sub-container'>
            <div className='service-text-container'>
              <h3>
                Master Plans
              </h3>
              <p>
                <Link to={pathConstants.masterplan}>
                  view services
                </Link>
              </p>
              
            </div>

            <div className='service-image-container' >
              <img src={imgaes3} alt=''/>
            </div>
         </div>

         <div className='services-sub-container'>
            
            <div className='service-text-container'>
              <h3>General Services</h3>
            </div>

            <div className='service-image-container' >
              
            </div>
         </div>
       

         
      </div>
    </div>
  )
}
