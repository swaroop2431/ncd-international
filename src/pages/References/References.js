import React from 'react'
import './References.css'
import image1 from '../../assets/references1.png'

export default function References() {
  return (
    <div className='references'>
        <div className='container'>
          <div className='sub-container'>
              <div>
                <h2>REFERENCES</h2>
                <p>
                “I have known Hashim Naqui for over 20 years; as a professional colleague and as a friend. He is smart, talented and skilled at his trade. He has been keenly instrumental as a consulting architect in assisting O
                </p>
              </div>
          </div>
          <div className='image-sub-container'>
             <img src={image1} alt=''/>
          </div>
        </div>
    </div>
  )
}
