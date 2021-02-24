import React, {useState, useEffect, useRef, RefObject} from "react";
import TopBar from "../TopBar";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Technologies from "../Technologies";
import LandingSite from "../LandingSite";
import WelcomeMessage from "../WelcomeMessage";
import {RefLinksObj, SiteProps} from "../../helpers/interfaces";

const Site = ({projects, about, techDesc, welcome, contact}: SiteProps) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const projectRef = useRef<RefObject<any>>(null);
    const aboutRef = useRef<RefObject<any>>(null);
    const technologiesRef = useRef<RefObject<any>>(null);
    const contactRef = useRef<RefObject<any>>(null);

    const refs: RefLinksObj = {
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
            <WelcomeMessage text={welcome} />
            <About text={about} images={[]} refLink={aboutRef} />
            <Technologies text={techDesc} refLink={technologiesRef} />
            <Projects projects={projects} refLink={projectRef} />
            <Contact data={contact} refLink={contactRef} />
        </div>);
}

export default Site;