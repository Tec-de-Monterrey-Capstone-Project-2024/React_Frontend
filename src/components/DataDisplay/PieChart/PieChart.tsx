import React, { useState, useEffect} from "react";

import { IPieChart } from "./types";
import { PieChart } from '@mui/x-charts/PieChart';

const Pie: React.FC<IPieChart> = ({ value, metric }) => {

    const series = [{
        data: [{
            id: 0,
            value: value,
            label: metric
        },
        {
            id: 1,
            value: 100 - value,
            label: "No"
        }]
    }];

    return (
        <PieChart
            series= {series}
            width={400}
            height={200}
        />
    )
}

export default Pie;



