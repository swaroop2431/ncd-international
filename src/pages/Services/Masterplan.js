import images1 from '../../assets/interiors/66.jpg'
import imgaes2 from '../../assets/interiors/67.jpg'
import imgaes3 from '../../assets/interiors/68.jpg'

export default function Masterplan() {
  return (
    <div  className='services-container'>
        <div className='services-sub-container'>
            
            <div className='service-text-container'>
              <h3>Preliminary Studies</h3>
            </div>

            <div className='service-image-container' >
              <img src={images1} alt='' />
            </div>
        </div>
        <div className='services-sub-container'>
            
            <div className='service-text-container'>
              <h3>Site Analysis</h3>
            </div>

            <div className='service-image-container' >
              <img src={imgaes2} alt='' />
            </div>
        </div>
        <div className='services-sub-container'>
            <div className='service-image-container' >
              <img src={imgaes3} alt='' />
            </div>
            <div className='service-text-container'>
              <h3>Utilities</h3>
            </div>

            
         </div>

      
    </div>
  )
}
