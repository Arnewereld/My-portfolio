import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/3d-a-letter-design-vector-33122342.png' 
import './index.scss';

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi I'm
                {/* <img src={LogoS} alt="developer" /> */}
                <br />
                Arne
                <br />
                Meevis
                </h1>
                <h2>Student ROC Midden Nederland / Lerning React / Gamer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    );

}

export default Home