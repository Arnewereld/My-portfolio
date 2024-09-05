import { Link, NavLink} from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/nordic_A.jpeg' 
import LogoSubtitle from '../../assets/images/logo_sub.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' tp='/'>
            <img src={LogoS} alt='Logo' />
           <img className="sub-logo" src={LogoSubtitle} alt='Arne' />   {/*  afbelding veranderen  Naar Arne Meevis of Arne wereld*/}
         </Link>
         <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
         </nav>
         <ul>
            <li>
                <a target='_blank' 
                rel='noroferrer'
                href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEeHBLsBFJ7D9RXp1U_JkcGef80VrAZl18s&keywords=arne%20meevis&origin=RICH_QUERY_SUGGESTION&position=0&searchId=c15eaecc-7fa2-4610-aeed-f18d3c230ed8&sid=0qc&spellCorrectionEnabled=false'
                >
                <FontAwesomeIcon icon={faLinkedin} color='4d4d4e'></FontAwesomeIcon>

                </a>
            </li>
         </ul>
    </div>
)

export default Sidebar;
