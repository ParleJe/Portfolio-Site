import './style.css';
import Logo from './../logo';
import About from './graphics/name.svg'
import Technologies from './graphics/settings.svg'
import Projects from './graphics/visibility.svg'
import Contact from './graphics/envelope.svg'
import {useIsComponentScrolled} from './hooks';
import { useState, RefObject } from 'react';
import {refObj} from '../Site'
interface Props {
    refs: refObj,
    handler: Function
}

const TopBar = ({refs, handler}: Props) => {
    const isScrolled: boolean = useIsComponentScrolled(window.screen.height*0.01);
    const [clicked, setClicked] = useState(false);
    const isMenuVisible = clicked || !isScrolled;
    
    const visibilityStyle = () => {
        return {
            opacity: isMenuVisible?1:0,
            transition: '0.2s'
        }
    }

    const background = () => {
        return {
            background: isMenuVisible?'#FFFBF580':'transparent'
        }
    }

    const fullStyle = {...visibilityStyle(),...background()};
    return (
        <div className="top-bar">
            <ol className="top-list">
                <li className="item with-text" style={fullStyle}>
                    <div className="link" onClick={()=> handler(refs.about)}>
                    <pre>About</pre>
                    <img src={About}/>
                    </div>
                </li>
                <li className="item with-text" style={fullStyle}>
                    <div className="link" onClick={()=> handler(refs.technologies)}>
                        <pre>Technologies</pre>
                        <img src={Technologies}/>
                    </div>
                </li>
                <li className="item" style={background()} onClick={() => setClicked(!clicked)}>
                    <div className="topbar-outer-logo-container">
                        <Logo rotate={!isMenuVisible} animate={false} />
                    </div>
                </li>
                <li className="item with-text" style={fullStyle}>
                    <div className="link" onClick={()=> handler(refs.project)}>
                        <pre>Projects</pre>
                        <img src={Projects}/>
                    </div>
                </li>
                <li className="item with-text" style={fullStyle}>
                    <div className="link" onClick={()=> handler(refs.contact)}>
                        <pre>Contact</pre>
                        <img src={Contact}/>
                    </div>
                </li>

            </ol>
            <div className='line' style={{width: isMenuVisible?'100%':'0'}}/>
        </div>
    )
};

export default TopBar;