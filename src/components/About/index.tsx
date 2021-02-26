import "./style.css";
import Graphic1 from "../../projectGraphics/graph-1.jpg";
import Graphic2 from "../../projectGraphics/graph-2.jpg";
import PhotoDisplay from "../PhotoDisplay";
import {AboutProps as Props} from "../../helpers/interfaces"

const images: Array<string> = [Graphic1, Graphic2];


const About = ({refLink, text}: Props) => {
  
  return (
    <div ref={refLink} className="main-component">
      <h1 className="segment-title">About me</h1>
      <div className="smaller-panel first-panel">
        <div className="photo-container">
          <PhotoDisplay images={images} transitionTime={10000} />
        </div>
      </div>
      <div className="bigger-panel">
        <p>{text.map((line,index) => {
          return (<span key={index}>{line}<br/><br/></span>)
        })}
        </p>
      </div>
    </div>
  );
}

export default About;
