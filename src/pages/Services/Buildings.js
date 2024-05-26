import React from 'react'
import images from '../../assets/buildings/12.jpg'
import images2 from '../../assets/buildings/14.jpg'
import images3 from '../../assets/buildings/17.jpg'
import images4 from '../../assets/buildings/18.jpg'
import image5 from '../../assets/buildings/19.webp'
import image6 from '../../assets/buildings/20.jpg'
import images7 from '../../assets/buildings/20.jpg'
export default function Buildings() {
  return (
    <div  className='services-container'>
      <div className='services-sub-container'>
            
            <div className='service-text-container'>
              <h3>Site Selection</h3>
            </div>

            <div className='service-image-container' >
              <img src={images} alt='' />
            </div>
         </div>
         <div className='services-sub-container'>
            
            <div className='service-text-container'>
              <h3>Pre-Design & Programming</h3>
            </div>

            <div className='service-image-container' >
              <img src={images2} alt=''/>
            </div>
         </div>
         <div className='services-sub-container'>

            <div className='service-image-container' >
              <img src={images3} alt=''/>
            </div>

            <div className='service-text-container'>
              <h3>Schematic Design</h3>
            </div>
         </div>

         <div className='services-sub-container'>
            <div className='service-image-container' >
              <img src={images4} alt=''/>
            </div>

            <div className='service-text-container'>
              <h3>Design Development</h3>
            </div>

           
         </div>
         <div className='services-sub-container'>

            <div className='service-text-container'>
              <h3>Construction Document Preparation</h3>
            </div>

            <div className='service-image-container' >
              <img src={image5} alt=''/>
            </div>
            
         </div>
         <div className='services-sub-container'>
            <div className='service-text-container'>
              <h3>Coordination with engineering</h3>
            </div>


            <div className='service-image-container' >
              <img src={image6} alt=''/>

            </div>

           
         </div>
         <div className='services-sub-container'>
            
            

            <div className='service-image-container' >
              <img src={images7} alt=''/>
            </div>

            <div className='service-text-container'>
              <h3>Bidding</h3>
            </div>
         </div>
    </div>
  )
}
