import './style.css';
import Logo from '../logo';

const WelcomeMessage = () => {
    return (
        <div className="main-component first-tab">
            <div className="welcome-header">
                <h1>Hi,</h1>
                    <h1>I'm Robert</h1>
                <h2>
                    22 years old IT student
                </h2>
            </div>
            <div className="welcome-outer-logo">
                <Logo rotate={false} animate={true} />
            </div>
        </div>
  );
};

export default WelcomeMessage;