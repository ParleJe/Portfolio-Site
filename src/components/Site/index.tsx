import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import TopBar from '../TopBar';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Technologies from '../Technologies';
import LandingSite from '../LandingSite';

const Site = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
            setTimeout(()=> setIsLoaded(!isLoaded), 3000)
            //setIsLoaded(!isLoaded);
    },[])

    return !isLoaded
    ?   (<div>
            <LandingSite />
        </div>)
    :   (<div>
            <TopBar />
            <About />
            <Technologies />
            <Projects />
            <Contact />
        </div>);
}

export default Site;