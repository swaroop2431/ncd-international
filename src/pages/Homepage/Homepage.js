import React from 'react'
import './Homepage.css'
import image1 from '../../assets/projects/112.jpeg'
import image2 from '../../assets/projects/113.jpeg'
import image3 from '../../assets/projects/114.jpeg'
import image4 from '../../assets/projects/115.jpeg'
import image5 from '../../assets/projects/116.jpeg'
import image6 from '../../assets/projects/117.jpeg'
import image7 from '../../assets/projects/118.jpeg'
import image8 from '../../assets/projects/120.jpg'
import image9 from '../../assets/interiors/51.jpg'


export default function Homepage() {
  return (
    <div className='home'>
    <div className='grid-item'>
      <img src={image1} alt=''/>
    </div>
    <div className='grid-item'>
      <img src={image2} alt=''/>
    </div>
    <div className='grid-item'>
      <img src={image3} alt=''/>
    </div>
    <div className='grid-item'>
      <img src={image4} alt=''/>
    </div>
    <div className='grid-item'>
      <img src={image5} alt=''/>
    </div>
    <div className='grid-item'>
      <img src={image6} alt=''/>
    </div>
    <div className='grid-item'>
      <img src={image7} alt=''/>
    </div>
    <div className='grid-item'>
      <img src={image8} alt=''/>
    </div>
    {/* <div className='grid-item'>
      <img src={image9} alt=''/>
    </div> */}

  </div>
  
  )
}
