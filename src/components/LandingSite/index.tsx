import './style.css'
import Logo from './../logo';


const LandingSite = () => {
    return (
    <div className="main-container">
        <div className="outer-logo-container">
            <Logo rotate={false} animate={true}/>
        </div>
    </div>
    );
}

export default LandingSite;