import './styles.css';
import { useState } from 'react';

const PureCss = () => {

    const [animationActive, setAnimationActive] = useState(false);

    const animationToggle = () => {
        setAnimationActive(!animationActive);
    }

    const changeColor = () => {
        if(animationActive) {
            return 'main-container main-container--active'
        } else {
            return 'main-container'
        }
    }

    const moveSwitch = () => {
        if(animationActive) {
            return 'switch switch--active'
        } else {
            return 'switch'
        }
    }

    return (
        <div onClick={animationToggle} className={changeColor()}>
            <div className='switch-container'>
                <div className={moveSwitch()}/>
            </div>
        </div>
    )
}

export default PureCss;