import './style.css';
import {useState} from 'react';
import { isPropertyAccessExpression } from 'typescript';
import { checkPropTypes } from 'prop-types';


function useForceUpdate(){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const shuffle = (array: Array<any>) => {
   for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  } 

const colors: Array<string> = ['highlight1-color', 'highlight2-color', 'highlight3-color', 'background-color', 'font-color'];

interface Props {
    rotate: boolean,
    animate: boolean,
}

const Logo = ({rotate, animate}: Props) => {
    const forceUpdate = useForceUpdate();
    const style = () => {
        if(rotate){
            return {transform: 'rotate(45deg) scale(1.2) translateY(0.3em)',
                    transition: '2.1s'};
        }
        return {transition: '1.2s'};
    }

    let actualColors: Array<any> = colors;
    
    return (
        <div className={animate?"logo-container animate": "logo-container"} style={style()}>
            <div className={"small-square "+actualColors[1]} onClick={() => {shuffle(colors); forceUpdate()}}/>
            <div className={"small-square "+actualColors[2]}/>
            <div className={"small-square "+actualColors[0]}/>

            <div className={"small-square "+actualColors[3]}/>
            <div className={"small-square "+actualColors[4]}/>
            <div className={"small-square "+actualColors[1]}/>

            <div className={"small-square "+actualColors[2]}/>
            <div className={"small-square "+actualColors[0]}/>
            <div className={"small-square "+actualColors[3]}/>
        </div>
    )
};


export default Logo;