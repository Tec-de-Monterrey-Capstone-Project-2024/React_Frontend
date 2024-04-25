import { ISelect } from './types';
import classNames from 'classnames';
import React from 'react';
import './Select.css';

const Select: React.FC<ISelect> = ({
    placeholder = "",
    values = [],
    color,
}) => {
    const selectClass = classNames({
        "drop-box": true,
        "green-drop-box": color === "green",
        "gray-drop-box h-9": color === "gray",
       
    });

    return (
        <select className={selectClass}>
            <option value="" disabled selected>{placeholder}</option>
        </select>
    );
};

export default Select;
