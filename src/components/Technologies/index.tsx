import './style.css';
import TechIcons from '../TechIcons';

const Technologies = () => {
    return (
        <div className="main-component">
            <div className="left-panel">
                <h1 className="segment-title">Technologies</h1>
            </div>

            <div className="right-panel">
                <TechIcons />
            </div>
        </div>
    )
}

export default Technologies;