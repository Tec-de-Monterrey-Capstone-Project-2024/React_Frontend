import React from "react";
import { IMetricCard } from "./types";

import plusIcon from './../../../assets/icons/plus.svg';

import './styles.css';

const MetricCard: React.FC<IMetricCard> = ({ title, subtitle, minValue, maxValue, value, unit, positive_upside, onClick }) => {
    const range = maxValue - minValue;
    const fThreshold = (range / 3) * 2;
    const sThreshold = range / 3;

    let state = "";

    // positive_upside: true (entre mas alto mejor)
    if (value > fThreshold) {
        state = positive_upside ? "success" : "danger";
    } else if (value > sThreshold && value < fThreshold) {
        state = "warning";
    } else {
        state = positive_upside ? "danger" : "success";
    }

    return (
        <div className="metric-card">
            <div className="top">
                <h4>{title}</h4>
                <p className={`unit ${state}`}>{value}{unit}</p>
            </div>
            <div className="bottom">
                <p>{subtitle}</p>
                {onClick && (
                    <button onClick={onClick} type="button" className="btn-type-3">
                        <img src={plusIcon} alt="Go" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default MetricCard;
