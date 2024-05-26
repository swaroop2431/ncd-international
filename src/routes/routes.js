import pathConstants from './pathConstants'
import AboutUs from "../pages/About/AboutUs";
import Contactus from "../pages/Contactus/Contactus";
import Homepage from "../pages/Homepage/Homepage";
import FirmPrincipals from '../pages/FirmPrincipals';
import Projects from '../pages/Projects/Projects';
import Services from '../pages/Services/Services';
import References from '../pages/References/References';
import Buildings from '../pages/Services/Buildings';
import Interiors from '../pages/Services/Interiors'
import Masterplan from '../pages/Services/Masterplan';

const routes=[
    {path:pathConstants.home,element:<Homepage/>},
    {path:pathConstants.about,element:<AboutUs/>},
    {path:pathConstants.contact,element:<Contactus/>},
    {path:pathConstants.firmprincipals,element:<FirmPrincipals/>},
    {path:pathConstants.projects,element:<Projects/>},
    {path:pathConstants.services,element:<Services/>},
    {path:pathConstants.references,element:<References/>},
    {path:pathConstants.buildings,element:<Buildings/>},
    {path:pathConstants.interior,element:<Interiors/>},
    {path:pathConstants.masterplan,element:<Masterplan/>}
]

export default routes