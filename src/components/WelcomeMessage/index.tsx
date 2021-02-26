import "./style.css";
import Logo from "../logo";
import {PropsWithText as Props} from "../../helpers/interfaces";

const WelcomeMessage = ({text}: Props) => {
    return (
        <div className="main-component first-tab">
            <div className="welcome-header  welcome-animate">
                {text.map((line:string, index:number) => {
                    if(index === text.length-1) return (<h2 key={index}>{line}</h2>)
                    return(<h1 key={index}>{line}</h1>)
                })}
            </div>
            <div className="welcome-outer-logo">
                <Logo rotate={false} animate={true} />
            </div>
        </div>
  );
};

export default WelcomeMessage;