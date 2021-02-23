import "./style.css";
import TechIcons from "../TechIcons";
import {DefaultProps as Props} from "../../helpers/interfaces";


const Technologies = ({refLink}:Props) => {
    return (
        <div ref={refLink} className="main-component">
            <h1 className="segment-title">Technologies</h1>
            <div className="smaller-panel first-panel">
                <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
            <div className="bigger-panel">
                <TechIcons />
            </div>
        </div>
    )
}

export default Technologies;