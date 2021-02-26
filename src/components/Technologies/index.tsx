import "./style.css";
import TechIcons from "../TechIcons";
import {PropsWithText as Props} from "../../helpers/interfaces";
import { useInView } from "react-intersection-observer";


const Technologies = ({refLink, text}:Props) => {
    const { ref, inView } = useInView({
        threshold: [0.5],
    })
    
    return (
        <div ref={refLink} className="main-component" style={{opacity: inView?1:0.1 , transition: "1s"}}>
            <h1 className="segment-title">Technologies</h1>
            <div ref={ref} className="smaller-panel first-panel">
                <p>
                    {text.map((line:string, index:number) => {
                        return(<span key={index}>{line}<br/></span>)
                    })}        
                </p>
            </div>
            <div className="bigger-panel">
                <TechIcons />
            </div>
        </div>
    )
}

export default Technologies;