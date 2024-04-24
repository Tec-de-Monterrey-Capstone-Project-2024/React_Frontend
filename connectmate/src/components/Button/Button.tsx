import React from 'react';
import './Button.css';
import {IButton} from "./types";
import classNames from "classnames";

// TODO: Update all Button files when team's Button component is ready.
const Button: React.FC<IButton> = ({
                                         title,
                                         color,
                                     }) => {
    const buttonClass = classNames({
        "button-box": true,
        "blue-bg": color === 'blue'
    });
    return (
        <div className = {buttonClass}>
            <div>
                {title}
            </div>
        </div>
    )
};

export default Button;