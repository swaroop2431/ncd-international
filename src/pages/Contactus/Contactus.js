import React from 'react'
import './Contactus.css'

export default function Contactus() {
  return (
    <div className='contactus'>
      <div className='container'>
        <div className='sub-container'>
          <div>
            <h2 className='section-titile'>Contact</h2>
            <p>+19194008271</p>
              <p>hnaqui@ncdinternational.com</p>
              <p>
                6300 Creedmoor Road, 170-272
              </p>
              <p>Raleigh, NC 27612</p>
          </div>
           
            
        </div>
        <div className='image-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.770052359748!2d-78.68114807150778!3d35.87220932727673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acf83d32aedcbb%3A0xb8b679e274d0e825!2s6300%20Creedmoor%20Rd%20170%20272%2C%20Raleigh%2C%20NC%2027612%2C%20USA!5e0!3m2!1sen!2sin!4v1716275510992!5m2!1sen!2sin" style={{border:0,width:800, height:600 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}
