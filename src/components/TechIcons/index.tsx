import './style.css';
import PhotoDisplay from '../PhotoDisplay';
import react from '../../technologyIcons/react.svg';
import js from '../../technologyIcons/javascript.svg';
import html from '../../technologyIcons/html.svg';
import php from '../../technologyIcons/php.svg';
import css from '../../technologyIcons/css.svg';
import java from '../../technologyIcons/java.svg';
import ts from '../../technologyIcons/typescript.svg';

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