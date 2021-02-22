import './style.css';
import Graphic1 from './graph-1.jpg';
import Graphic2 from './graph-2.jpg';
import PhotoDisplay from '../PhotoDisplay';

const images: Array<string> = [Graphic1, Graphic2];

const About = () => {
  
  return (
    <div className="main-component first-tab">
      <div className="left-panel">
        <div className="photo-container">
          <PhotoDisplay images={images} transitionTime={10000} />
        </div>
      </div>
      <div className="right-panel">
        <div className="text-container">
        <h1>Title Title Title</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto 
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
            dolores eos qui ratione voluptatem sequi nesciunt. 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
            consectetur, adipisci velit, sed quia non numquam eius modi tempora 
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse</p>
        <h2>Sed ut perspiciatis unde omnis iste
           natus error sit voluptatem accusantium 
           doloremque laudantium, totam rem aperiam, 
           eaque ipsa quae ab illo inventore veritatis et quasi </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
