import './style.css';
import PhotoDisplay from '../PhotoDisplay';
import react from './graphics/react.svg';
import js from './graphics/javascript.svg';
import html from './graphics/html.svg';
import php from './graphics/php.svg';
import css from './graphics/css.svg';
import java from './graphics/java.svg';
import ts from './graphics/typescript.svg';

const TechIcons = () => {
    return (
        <div className="tech-icons">
                    <div className='grid-layout'>
                            <PhotoDisplay images={[react]} round={true} transitionTime={null} />
                            <PhotoDisplay images={[js]} round={true}  transitionTime={null} />
                            <PhotoDisplay images={[html]} round={true} transitionTime={null} />
                            <PhotoDisplay images={[php]} round={true} transitionTime={null} />
                            <PhotoDisplay images={[css]} round={true} transitionTime={null} />
                            <PhotoDisplay images={[java]} round={true} transitionTime={null} />
                            <PhotoDisplay images={[ts]} round={true} transitionTime={null} />
                            <PhotoDisplay images={[]} round={true} transitionTime={null} />
                            <PhotoDisplay images={[]} round={true} transitionTime={null} />
                        
                    </div>
        </div>
    );
}

export default TechIcons;