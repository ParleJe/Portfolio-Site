import React, {useState, useEffect, useRef, RefObject} from 'react';
import TopBar from '../TopBar';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Technologies from '../Technologies';
import LandingSite from '../LandingSite';
import WelcomeMessage from '../WelcomeMessage';

export interface refObj {
        about: RefObject<any>,
        project: RefObject<any>,
        technologies: RefObject<any>,
        contact: RefObject<any>,
}

const Site = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const projectRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const technologiesRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<RefObject<any>>(null);

    const refs: refObj = {
            about: aboutRef,
            project: projectRef,
            technologies: technologiesRef,
            contact: contactRef,

    }

    const scrollHandler = (refLink: RefObject<any>) => {
            refLink!.current.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }

    useEffect(() => {
            setTimeout(()=> setIsLoaded(state => !state), 3000)
    },[])

    return !isLoaded
    ?   (<div>
            <LandingSite />
        </div>)
    :   (<div>
            <TopBar handler={scrollHandler} refs={refs} />
            <WelcomeMessage />
            <About refLink={aboutRef} />
            <Technologies refLink={technologiesRef} />
            <Projects refLink={projectRef} />
            <Contact refLink={contactRef} />
        </div>);
}

export default Site;