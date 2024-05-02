import React from "react";
import { IPieChart } from "./types";
import { PieChart } from '@mui/x-charts/PieChart';

const Pie: React.FC<IPieChart> = ({ value, metric }) => {
    const remainingValue = 100 - value; // Calculate the remaining percentage

    const series = [{
        data: [
            { value, label: `${metric} (${value}%)`, color:'#3a83c8' }, // Display the metric with its percentage
            { value: remainingValue, label: `Remaining (${remainingValue}%)`, color:'#a1c14f' } // Display the remaining percentage
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
