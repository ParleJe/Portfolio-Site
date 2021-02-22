
import './style.css';
import {useState, useEffect} from 'react';

interface Props {
    images: Array<any>,
    round?: boolean,
    transitionTime: number|null
}


const PhotoDisplay = ({images, round, transitionTime}: Props) => {
    const [index, setIndex] = useState(0);
    const [style, setStyle] = useState({
        opacity: images.length === 0?0:1 ,
        filter: 'unset',
    });
    
    useEffect(
        () => {
            if(images.length > 1 && transitionTime !== null){
                const fadeOut = setTimeout(() => setStyle({opacity: 0.4, filter: 'brightness(0) blur(2px)'}),transitionTime);
                const fadeIn = setTimeout(() => setStyle({opacity:1, filter: 'unset'}),transitionTime*1.15);
                const changePhoto = setTimeout(() => setIndex((index+1)%images.length),transitionTime*1.15);

                return () => {
                    clearTimeout(fadeOut);
                    clearTimeout(fadeIn);
                    clearTimeout(changePhoto);
                }
            }
    
    },[index, images.length, transitionTime]);

    return (
    <div className="img-container">
          <div className={round?"back-shadow round": "back-shadow"} />
          <img onClick={() => setIndex((index+1)%images.length)} src={images[index]} style={style} alt='Computer Graphic'/>
    </div>
);

};

export default PhotoDisplay;