import { IMetricCard } from "./types";

import './styles.css'
import React from "react";

const MetricCard: React.FC<IMetricCard> = ({ title, subtitle, metricUnit }) => {
    return (
        <div className="card">
            <div className="topPart">
                <h1>{title}</h1>
                <h1 className="unit">{metricUnit}</h1>
            </div>
            <div className="line"></div>
            <div className="downPart">
                {subtitle}
            </div>
        </div>
    );
};

export default MetricCard;
