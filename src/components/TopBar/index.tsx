import './style.css';
import Logo from './../logo';
import {useIsComponentScrolled} from './hooks';
import { useState } from 'react';

const TopBar = () => {
    const isScrolled: boolean = useIsComponentScrolled(window.screen.height*0.01);
    const [clicked, setClicked] = useState(false);
    const isMenuVisible = clicked || !isScrolled;
    
    const visibilityStyle = () => {
        return {
            opacity: isMenuVisible?1:0,
            transition: '0.2s'
        }
    }

    return (
        <div className="top-bar">
            <ol className="top-list">
                <li className="item with-text" style={visibilityStyle()}>
                    <a href="*">About</a>
                </li>
                <li className="item with-text" style={visibilityStyle()}>
                    <a href="*">Technologies</a>
                </li>
                <li className="item" onClick={() => {
                    if(isScrolled) setClicked(!clicked)}}>
                    <Logo rotate={!isMenuVisible} />
                </li>
                <li className="item with-text" style={visibilityStyle()}>
                    <a href="*">Projects</a>
                </li>
                <li className="item with-text" style={visibilityStyle()}>
                    <a href="*">Contact</a>
                </li>
            </ol>
            {/* <div className='line' style={{width: isMenuVisible?'90%':'0%'}}/>*/}
            <svg width='100%'>
                <line className={isMenuVisible?'see':'no-see'} x1="5%" x2='95%' stroke='black'/>
            </svg>
        </div>
    )
};

export default TopBar;