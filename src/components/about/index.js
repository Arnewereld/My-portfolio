import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                        />

                </h1>
                <p>Ik ben een tweedejaars student aan het ROC Midden Nederland en momenteel bezig met het leren 
                    van React. Ik vind het leuk om nieuwe dingen te leren op het gebied van IT en technologie, 
                    en probeer mijn vaardigheden stap voor stap te verbeteren.
                </p>
                <p>
                In mijn vrije tijd speel ik graag games en ben ik altijd nieuwsgierig naar de nieuwste 
                technologische ontwikkelingen. Het ontdekken van nieuwe programmeeruitdagingen motiveert
                 me om mezelf verder te ontwikkelen.
                </p>
                <p>
                Als ik mezelf in één zin zou moeten omschrijven, dan ben ik een rustige student die graag 
                gamet en nieuwsgierig is naar de wereld van IT!
                </p>
            </div>
        </div>
    )
}

export default  About;
