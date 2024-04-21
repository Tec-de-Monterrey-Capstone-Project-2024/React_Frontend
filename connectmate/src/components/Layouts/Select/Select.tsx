import { ISelect } from './types';
import classNames from 'classnames';
import React from 'react';
import './Select.css';

const Select: React.FC<ISelect> = ({
    placeholder = "",
    color,
    values
}) => {
    const selectClass = classNames({
        "drop-box h-9": true,
        "bg-gray-500": color === "gray",
    });

    return (
        <select className={selectClass}>
            <option value="" disabled selected>{placeholder}</option>
        </select>
    );
};

export default Select;
