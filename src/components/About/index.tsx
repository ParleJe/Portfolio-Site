import './style.css';
import Graphic1 from './graph-1.jpg';
import Graphic2 from './graph-2.jpg';
import PhotoDisplay from '../PhotoDisplay';
import { RefObject } from 'react';

const images: Array<string> = [Graphic1, Graphic2];

interface Props {
  refLink: RefObject<any>
}

const About = ({refLink}: Props) => {
  
  return (
    <div ref={refLink} className="main-component">
      <h1 className="segment-title">About me</h1>
      <div className="smaller-panel first-panel">
        <div className="photo-container">
          <PhotoDisplay images={images} transitionTime={10000} />
        </div>
      </div>
      <div className="bigger-panel">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto 
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
            dolores eos qui ratione voluptatem sequi nesciunt. 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
            consectetur, adipisci velit, sed quia non numquam eius modi tempora 
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        </p>
      </div>
    </div>
  );
}

export default About;
