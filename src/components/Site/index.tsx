import React, {useState, useEffect} from 'react';
import TopBar from '../TopBar';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Technologies from '../Technologies';
import LandingSite from '../LandingSite';
import WelcomeMessage from '../WelcomeMessage';

const Site = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
            setTimeout(()=> setIsLoaded(state => !state), 3000)
            //setIsLoaded(!isLoaded);
    },[])

    return !isLoaded
    ?   (<div>
            <LandingSite />
        </div>)
    :   (<div>
            <TopBar />
            <WelcomeMessage />
            <About />
            <Technologies />
            <Projects />
            <Contact />
        </div>);
}

export default Site;