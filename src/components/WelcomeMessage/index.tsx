import "./style.css";
import Logo from "../logo";
import {PropsWithText as Props} from "../../helpers/interfaces";

const WelcomeMessage = ({text}: Props) => {
    return (
        <div className="main-component first-tab">
            <div className="welcome-header">
                {text.map((line:string, index:number) => {
                    if(index === text.length-1) return (<h2>{line}</h2>)
                    return(<h1>{line}</h1>)
                })}
                
                {/* <h1>Hi,</h1>
                    <h1>I'm Robert</h1>
                <h2>
                    22 years old IT student
                </h2> */}
            </div>
            <div className="welcome-outer-logo">
                <Logo rotate={false} animate={true} />
            </div>
        </div>
  );
};

export default WelcomeMessage;