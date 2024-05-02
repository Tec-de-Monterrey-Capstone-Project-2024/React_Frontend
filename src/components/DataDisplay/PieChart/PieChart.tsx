import React from "react";
import { IPieChart } from "./types";
import { PieChart } from '@mui/x-charts/PieChart';

const Pie: React.FC<IPieChart> = ({ id, value, metric }) => {
    const remainingValue = 100 - value;

    const series = [{
        data: [
            { id, value, label: `${metric} (${value}%)` },
            { id: `${id}-remainder`, value: remainingValue }
        ]
    }];

    return (
        <PieChart
            series={series}
            width={400}
            height={200}
        />
    );
}

export default Pie;



