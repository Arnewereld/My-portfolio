import { Link, NavLink} from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/3d-a-letter-design-vector-33122342.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' tp='/'>
            <img src={LogoS} alt='Logo' />
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
            <li>
                <a 
                target='_blank' 
                rel='noroferrer'
                href='https://github.com/Arnewereld'
                >
                <FontAwesomeIcon icon={faGithub} color='4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' 
                rel='noroferrer'
                href='discordapp.com/users/706063393630584916'
                >
                <FontAwesomeIcon icon={faDiscord} color='4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
         </ul>
    </div>
)

export default Sidebar;
