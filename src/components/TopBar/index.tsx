import './style.css';
import logo from './logo.svg';

const TopBar = () => {
    return (
        <div className="top-bar">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
};

export default TopBar;