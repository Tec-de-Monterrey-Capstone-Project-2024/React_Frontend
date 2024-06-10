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
        max: 10,
        positive_upside: false,
        unit: '%',
        graph: 'Pie'
    },
    "avgResolutionTime": {
        name: "Average Resolution Time",
        min: 120,
        max: 600,
        positive_upside: false,
        unit: 's',
        graph: 'Pie'
    },
    "agentOccupancy": {
        name: "Occupancy",
        min: 80,
        max: 90,
        positive_upside: true,
        unit: '%',
        graph: 'Pie'
    },
    "SA": {
        name: "Schedule Adherence",
        min: 70,
        max: 90,
        positive_upside: true,
        unit: '%',
        graph: 'Pie'
    },
    "avgAfterContactWorkTime": {
        name: "Average After Contact Work Time",
        min: 10,
        max: 50,
        positive_upside: false,
        unit: 's',
        graph: 'Gauge'
    },
    "avgHandleTime": {
        name: "Average Handle Time",
        min: 120,
        max: 360,
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
