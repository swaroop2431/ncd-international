// import React, { useState } from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import pathConstants from '../../routes/pathConstants';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse,faBars } from '@fortawesome/free-solid-svg-icons';

// export default function Navbar() {
  
//   const [selectedItem, setSelectedItem] = useState('');
//   const [selectedService, setSelectedService] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showMenu, setShowMenu] = useState(false); // State to control mobile menu visibility

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//     setSelectedService(''); 
//     setShowDropdown(true); 
//   };

//   const handleServiceClick = (service) => {
//     setSelectedService(service);
//     setSelectedItem('services');
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   return (
//     <div className='navbar'>
//       <div className='navbar-container'>
//         <span>
//           <ul className='left-ul'>
//             <li className={selectedItem === 'projects' ? 'selected' : ''}>
//               <Link to={pathConstants.projects} onClick={() => handleItemClick('projects')}>
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
//                 <span className={selectedItem === 'services' ? 'selected' : ''}>{selectedService || 'Services'}</span>
//                 {showDropdown && (
//                   <ul className="dropdown-content">
//                     <li>
//                       <Link to={pathConstants.buildings} onClick={() => handleServiceClick('Building')}>
//                         Building 
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to={pathConstants.interior} onClick={() => handleServiceClick('Interior')}>
//                         Interior
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to={pathConstants.masterplan} onClick={() => handleServiceClick('MasterPlan')}>
//                         MasterPlan
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to={pathConstants.services} onClick={() => handleServiceClick('General Services')}>
//                       General Services
//                       </Link>
//                     </li>
                    
//                   </ul>
//                 )}
//               </div>
//             </li>

//             <li className={selectedItem === 'firmPrinciples' ? 'selected' : ''}>
//               <Link to={pathConstants.firmprincipals} onClick={() => handleItemClick('firmPrinciples')}>
//                 Firm Principles
//               </Link>
//             </li>
//           </ul>
//         </span>
//         <span>
//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <FontAwesomeIcon icon={faHouse} className='home-icon' />
//           </div>

//           <p className='site-title'>NCD International</p>
//         </span>
//         <span>
//           <ul className='right-ul'>
//             <li className={selectedItem === 'about' ? 'selected' : ''}>
//               <Link to={pathConstants.about} onClick={() => handleItemClick('about')}>
//                 About
//               </Link>
//             </li>
//             <li className={selectedItem === 'contact' ? 'selected' : ''}>
//               <Link to={pathConstants.contact} onClick={() => handleItemClick('contact')}>
//                 Contact
//               </Link>
//             </li>
//             <li className={selectedItem === 'references' ? 'selected' : ''}>
//               <Link to={pathConstants.references} onClick={() => handleItemClick('references')}>
//                 References
//               </Link>
//             </li>
//           </ul>
//         </span>
//       </div>

//       <div className="burger-menu" onClick={toggleMenu}> 
//         <FontAwesomeIcon icon={faBars} />
//       </div>
//       <span className={`menu-items ${showMenu ? 'show' : ''}`}> 
//         <span className="brand">
//             <div className="home-icon">
//               <FontAwesomeIcon icon={faHouse} />
//             </div>
//             <p className='site-title'>NCD International</p>
//           </span>
//         <ul className='left-ul'>
//           <li className={selectedItem === 'projects' ? 'selected' : ''}>
//             <Link to={pathConstants.projects} onClick={() => handleItemClick('projects')}>
//               Projects
//             </Link>
//           </li>
//           <li>
//             <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
//               <span className={selectedItem === 'services' ? 'selected' : ''}>{selectedService || 'Services'}</span>
//               {showDropdown && (
//                 <ul className="dropdown-content">
//                   <li>
//                     <Link to={pathConstants.buildings} onClick={() => handleServiceClick('Building')}>
//                       Building 
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to={pathConstants.interior} onClick={() => handleServiceClick('Interior')}>
//                       Interior
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to={pathConstants.masterplan} onClick={() => handleServiceClick('MasterPlan')}>
//                       MasterPlan
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to={pathConstants.services} onClick={() => handleServiceClick('General Services')}>
//                      General Services
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </div>
//           </li>
//           <li className={selectedItem === 'firmPrinciples' ? 'selected' : ''}>
//             <Link to={pathConstants.firmprincipals} onClick={() => handleItemClick('firmPrinciples')}>
//               Firm Principles
//             </Link>
//           </li>
//           <li className={selectedItem === 'about' ? 'selected' : ''}>
//             <Link to={pathConstants.about} onClick={() => handleItemClick('about')}>
//               About
//             </Link>
//           </li>
//           <li className={selectedItem === 'contact' ? 'selected' : ''}>
//             <Link to={pathConstants.contact} onClick={() => handleItemClick('contact')}>
//               Contact
//             </Link>
//           </li>
//           <li className={selectedItem === 'references' ? 'selected' : ''}>
//             <Link to={pathConstants.references} onClick={() => handleItemClick('references')}>
//               References
//             </Link>
//           </li>
//         </ul>
        
       
//       </span>

//     </div>
//   );
// }


import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import pathConstants from '../../routes/pathConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State to control mobile menu visibility

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSelectedService(''); 
    setShowDropdown(true); 
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setSelectedItem('services');
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navbar'>
      {/* Navbar Container */}
      <div className='navbar-container'>
        <span>
          <ul className='left-ul'>
            <li className={selectedItem === 'projects' ? 'selected' : ''}>
              <Link to={pathConstants.projects} onClick={() => handleItemClick('projects')}>
                Projects
              </Link>
            </li>
            <li>
              <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <span className={selectedItem === 'services' ? 'selected' : ''}>{selectedService || 'Services'}</span>
                {showDropdown && (
                  <ul className="dropdown-content">
                    <li>
                      <Link to={pathConstants.buildings} onClick={() => handleServiceClick('Building')}>
                        Building 
                      </Link>
                    </li>
                    <li>
                      <Link to={pathConstants.interior} onClick={() => handleServiceClick('Interior')}>
                        Interior
                      </Link>
                    </li>
                    <li>
                      <Link to={pathConstants.masterplan} onClick={() => handleServiceClick('MasterPlan')}>
                        MasterPlan
                      </Link>
                    </li>
                    <li>
                      <Link to={pathConstants.services} onClick={() => handleServiceClick('General Services')}>
                      General Services
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className={selectedItem === 'firmPrinciples' ? 'selected' : ''}>
              <Link to={pathConstants.firmprincipals} onClick={() => handleItemClick('firmPrinciples')}>
                Firm Principles
              </Link>
            </li>
          </ul>
        </span>
        <span>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to={pathConstants.home}><FontAwesomeIcon icon={faHouse} className='home-icon' /></Link>
          </div>
          <Link to={pathConstants.home}><p className='site-title'>NCD International</p></Link>
        </span>
        <span>
          <ul className='right-ul'>
            <li className={selectedItem === 'about' ? 'selected' : ''}>
              <Link to={pathConstants.about} onClick={() => handleItemClick('about')}>
                About
              </Link>
            </li>
            <li className={selectedItem === 'contact' ? 'selected' : ''}>
              <Link to={pathConstants.contact} onClick={() => handleItemClick('contact')}>
                Contact
              </Link>
            </li>
            <li className={selectedItem === 'references' ? 'selected' : ''}>
              <Link to={pathConstants.references} onClick={() => handleItemClick('references')}>
                References
              </Link>
            </li>
          </ul>
        </span>
      </div>
      
      {/* Burger Menu for Mobile */}
      <div className="burger-menu" onClick={toggleMenu}> 
        <span>
        <FontAwesomeIcon icon={faBars} className='menu-icon' />
        </span>
      
        
        <span className="brand">
            <div className="home-icon">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <p className='site-title'>NCD International</p>
        </span>
      </div>
      
      {/* Mobile Menu */}
      <span className={`menu-items ${showMenu ? 'show' : ''}`}> 
       
        <ul className='left-ul' >
          <li className={selectedItem === 'projects' ? 'selected' : ''}>
            <Link to={pathConstants.projects} onClick={() => handleItemClick('projects')}>
              Projects
            </Link>
          </li>
          <li>
            <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              <span className={selectedItem === 'services' ? 'selected' : ''}>{selectedService || 'Services'}</span>
              {showDropdown && (
                <ul className="dropdown-content">
                  <li>
                    <Link to={pathConstants.buildings} onClick={() => handleServiceClick('Building')}>
                      Building 
                    </Link>
                  </li>
                  <li>
                    <Link to={pathConstants.interior} onClick={() => handleServiceClick('Interior')}>
                      Interior
                    </Link>
                  </li>
                  <li>
                    <Link to={pathConstants.masterplan} onClick={() => handleServiceClick('MasterPlan')}>
                      MasterPlan
                    </Link>
                  </li>
                  <li>
                    <Link to={pathConstants.services} onClick={() => handleServiceClick('General Services')}>
                     General Services
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className={selectedItem === 'firmPrinciples' ? 'selected' : ''}>
            <Link to={pathConstants.firmprincipals} onClick={() => handleItemClick('firmPrinciples')}>
              Firm Principles
            </Link>
          </li>
          <li className={selectedItem === 'about' ? 'selected' : ''}>
            <Link to={pathConstants.about} onClick={() => handleItemClick('about')}>
              About
            </Link>
          </li>
          <li className={selectedItem === 'contact' ? 'selected' : ''}>
            <Link to={pathConstants.contact} onClick={() => handleItemClick('contact')}>
              Contact
            </Link>
          </li>
          <li className={selectedItem === 'references' ? 'selected' : ''}>
            <Link to={pathConstants.references} onClick={() => handleItemClick('references')}>
              References
            </Link>
          </li>
        </ul>
      </span>
    </div>
  );
}
