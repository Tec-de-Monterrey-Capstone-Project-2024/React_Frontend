import { IMetricCard } from "./types";

import './styles.css'
import React from "react";

const MetricCard: React.FC<IMetricCard> = ({ title, subtitle, minValue, maxValue, value, unit, positive_upside }) => {
    const range = maxValue - minValue;
    const fThreshold = (range / 3) * 2;
    const sThreshold = range / 3;

    let unitColorClass = "";

    // positive_upside: true (entre mas alto mejor)
    if (value > fThreshold) {
        unitColorClass = positive_upside ? "text-green-500" : "text-red-500";
    } else if (value > sThreshold && value < fThreshold) {
        unitColorClass = "text-yellow-500";
    } else {
        unitColorClass = positive_upside ? "text-red-500" : "text-green-500";
    }

    return (
        <div className="metric-card">
            <div className="top">
                <h4>{title}</h4>
                <p className={`${unitColorClass}`}>{value}{unit}</p>
            </div>
            <div className="bottom">
                <p>{subtitle}</p>
                <button>+</button>
            </div>
        </div>
    );
};

export default MetricCard;
