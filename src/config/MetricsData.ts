export type MetricData = {
    name: string;
    min: number;
    max: number;
    positive_upside: boolean;
    unit: null | '%' | 's';
    graph: 'Pie' | 'Gauge';
};

const MetricsData: Record<string, MetricData> = {
    "serviceLevel": {
        name: "Service Level",
        min: 70,
        max: 100,
        positive_upside: true,
        unit: '%',
        graph: 'Pie'
    },
    "abandonmentRate": {
        name: "Abandonment Call Rate",
        min: 0,
        max: 30,
        positive_upside: false,
        unit: '%',
        graph: 'Pie'
    },
    "agentOccupancy": {
        name: "Occupancy",
        min: 0,
        max: 30,
        positive_upside: false,
        unit: '%',
        graph: 'Pie'
    },
    "avgHandleTime": {
        name: "Average Handle Time",
        min: 5,
        max: 20,
        positive_upside: false,
        unit: 's',
        graph: 'Gauge'
    },
    "VFR": {
        name: "Virtual Floor Reconfiguration",
        min: 0.5,
        max: 2,
        positive_upside: false,
        unit: '%',
        graph: 'Pie'
    },
    "avgAfterContactWorkTime": {
        name: "Average After Contact Work Time",
        min: 2,
        max: 20,
        positive_upside: false,
        unit: 's',
        graph: 'Gauge'
    },
    "avgQueueAnswerTime": {
        name: "Average Queue Answer Time",
        min: 0,
        max: 5,
        positive_upside: false,
        unit: 's',
        graph: 'Gauge'
    }
}

export default MetricsData;
