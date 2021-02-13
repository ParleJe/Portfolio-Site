import './style.css';
import Icon from './Icon'
import react from './react.svg';
import js from './javascript.svg';
import html from './html.svg'
import php from './php.svg'
import css from './css.svg'
import java from './java.svg'

const TechIcons = () => {
    return (
        <div className="tech-icons">
                <Icon src={react} alt='react' size='big-img'/>
                <img className="big-img" src={js} alt='js'/>
                <img className="big-img" src={html} alt='html'/>
                <img className="small-img" src={php} alt='php'/>
                <img className="small-img" src={css} alt='css'/>
                <img className="small-img"src={java} alt='java'/>
        </div>
    )
}

export default TechIcons;