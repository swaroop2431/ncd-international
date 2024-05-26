import image1 from '../../assets/interiors/58.jpg'
import image2 from '../../assets/interiors/59.jpg'
import image3 from '../../assets/interiors/60.jpg'
import images4 from '../../assets/interiors/61.jpg'
import images5 from '../../assets/interiors/62.jpg'
import images6 from '../../assets/interiors/63.jpg'
import images7 from '../../assets/interiors/64.jpg'
import images8 from '../../assets/interiors/65.jpg'


export default function Interiors() {
  return (
    <div  className='services-container'>
        <div className='services-sub-container'>
            
            <div className='service-text-container'>
              <h3>Building Shell Analysis</h3>
            </div>

            <div className='service-image-container' >
              <img src={image1} alt='' />
            </div>
        </div>
        <div className='services-sub-container'>
            
            <div className='service-text-container'>
              <h3>Test Fits</h3>
            </div>

            <div className='service-image-container' >
              <img src={image2} alt='' />
            </div>
        </div>
        <div className='services-sub-container'>
            <div className='service-image-container' >
              <img src={image3} alt='' />
            </div>
            <div className='service-text-container'>
              <h3>Space Planning</h3>
            </div>

           
        </div>
        <div className='services-sub-container'>

            <div className='service-image-container' >
              <img src={images4} alt='' />
            </div>

            <div className='service-text-container'>
              <h3>Fit-Up Permits & Documents</h3>
            </div>
        </div>
        <div className='services-sub-container'>
            
            <div className='service-text-container'>
              <h3>Coordination with engineering</h3>
            </div>

            <div className='service-image-container' >
              <img src={images5} alt='' />
            </div>
        </div>
        <div className='services-sub-container'>
            
            <div className='service-text-container'>
              <h3>Finish Selection</h3>
            </div>

            <div className='service-image-container' >
              <img src={images6} alt='' />
            </div>
        </div>
        <div className='services-sub-container'>
            <div className='service-image-container' >
              <img src={images7} alt='' />
            </div>

            <div className='service-text-container'>
              <h3>Furniture Selection</h3>
            </div>

            
        </div>
        <div className='services-sub-container'>
            <div className='service-image-container' >
              <img src={images8} alt='' />
            </div>

            <div className='service-text-container'>
              <h3>Contract Planning</h3>
            </div>

           
        </div>
    </div>
  )
}
