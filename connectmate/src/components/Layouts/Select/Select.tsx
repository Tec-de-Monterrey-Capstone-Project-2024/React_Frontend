import { ISelect } from './types';
import classNames from 'classnames';
import React from 'react';
import './Select.css';

const Select: React.FC<ISelect> = ({
    placeholder,
    color
}) => {
    const selectClass = classNames({

    });

    return (
        <select>
            <option value="" disabled selected>{placeholder}</option>
        </select>
    );
};

export default Select;
