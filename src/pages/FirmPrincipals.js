import React from 'react'
import image1 from '../assets/firm1.png'
export default function FirmPrincipals() {
  return (
    <div className='firm-principals'>
      <div className='container'>
        <div className='sub-container'>
          <div>
            <h2 className='section-title'>About the Principals</h2>
            <p>The Principals of NCD International PLLC have been serving the Raleigh area since 1994,
            and have worked on high profile projects in North Carolina and several other states in the US.</p>
            <p>
              Before North Carolina, they were in the Washington Metro Area for seven years, and in Dallas before that.
            </p>
            <p>
            Projects were also designed in India, Doha, Qatar and Saudi Arabia. There are some projects being done in India.
            </p>
            <p>Hashim Naqui, the President & CEO of this firm has been working as a registered architect in the United States since 1986 starting in Dallas, Texas, and later in Washington Metro area before moving to Raleigh, North Carolina in 1993. He consistently topped his undergraduate B. Arch. degree from Osmania University, Hyderabad, India and was the Valedictorian in the final year in 1978.</p>
          </div>
        </div>
        <div className='image-sub-container'>
           <img src={image1} alt=''/>
        </div>
      </div>
    </div>
  )
}
