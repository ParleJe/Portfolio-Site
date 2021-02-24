import "./style.css";
import TechIcons from "../TechIcons";
import {PropsWithText as Props} from "../../helpers/interfaces";


const Technologies = ({refLink, text}:Props) => {
    return (
        <div ref={refLink} className="main-component">
            <h1 className="segment-title">Technologies</h1>
            <div className="smaller-panel first-panel">
                
                    {text.map((line:string) => {
                        return(<p>{line}</p>)
                    })}        

            </div>
            <div className="bigger-panel">
                <TechIcons />
            </div>
        </div>
    )
}

export default Technologies;