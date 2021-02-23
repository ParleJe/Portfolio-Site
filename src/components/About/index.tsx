import "./style.css";
import Graphic1 from "../../projectGraphics/graph-1.jpg";
import Graphic2 from "../../projectGraphics/graph-2.jpg";
import PhotoDisplay from "../PhotoDisplay";
import {AboutProps as Props} from "../../helpers/interfaces"

const images: Array<string> = [Graphic1, Graphic2];


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
        <p>Hi again, currently I'm full time IT student on Cracow University of Technology, in my third year. <br/><br/>
Until now I have developed crucial programming skills in various fields, but I have fell in love especially with front-end and back-end programming.<br/><br/>
Well-organised person with heart of prefectionist, problem solver, independent in work with high attention to detail. Fan of tech, sports (especially tenis and skiing) and, recently, philosophical books.
        </p>
      </div>
    </div>
  );
}

export default About;
