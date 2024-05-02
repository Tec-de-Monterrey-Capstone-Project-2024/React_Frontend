import React, { useState, useEffect} from "react";

import { IPieChart } from "./types";
import { PieChart } from '@mui/x-charts/PieChart';

const Pie: React.FC<IPieChart> = ({ id, value, metric }) => {

    const series = [{
        data: [{
            id: id,
            value: value,
            label: metric
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



