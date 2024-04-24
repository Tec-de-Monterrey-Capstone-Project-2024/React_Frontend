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
        "rounded-xl text-xs font-semibold pl-3": true,
        "bg-lime-600 h-8 w-40": color === "green",
        "bg-slate-300 h-9 w-96": color === "gray",
       
    });

    return (
        <select className={selectClass}>
            <option value="" disabled selected>{placeholder}</option>
        </select>
    );
};

export default Select;
