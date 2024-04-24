import { IMetricCard } from "./types";

import './styles.css'
import React from "react";

const MetricCard: React.FC<IMetricCard> = ({ title, subtitle, metricUnit }) => {

    let unitColorClass = " ";

    if (metricUnit > 80) {
        unitColorClass = "text-green-500";

    }else if (metricUnit > 60 && metricUnit < 80) { 
        unitColorClass = "text-yellow-500";
    }else { 
        unitColorClass = "text-red-500";
    }

    return (
        <div className="card">
            <div className="topPart">
                <h1>{title}</h1>
                <h1  className={`unit ${unitColorClass}`}>{metricUnit}</h1>
            </div>
            <div className="line"></div>
            <div className="downPart">
                {subtitle}
            </div>
        </div>
    );
};

export default MetricCard;
