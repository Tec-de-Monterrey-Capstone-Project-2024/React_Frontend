export type MetricData = {
    name: string;
    min: number;
    max: number;
    positive_upside: boolean;
    graph: 'Pie' | 'Gauge';
};

const MetricsData: Record<string, MetricData> = {
    "SL": {
        name: "Service Level",
        min: 70,
        max: 100,
        positive_upside: true,
        graph: 'Pie'
    },
    "ACR": {
        name: "Abandonment Call Rate",
        min: 0,
        max: 30,
        positive_upside: false,
        graph: 'Pie'
    },
    "FCR": {
        name: "First Contact Resolution",
        min: 70,
        max: 100,
        positive_upside: true,
        graph: 'Pie'
    },
    "OCC": {
        name: "Occupancy",
        min: 0,
        max: 30,
        positive_upside: false,
        graph: 'Pie'
    },
    "SA": {
        name: "Schedule Adherence",
        min: 70,
        max: 90,
        positive_upside: true,
        graph: 'Pie'
    },
    "ASA": {
        name: "Average Speed Answer",
        min: 0,
        max: 60,
        positive_upside: false,
        graph: 'Gauge'
    },
    "AHT": {
        name: "Average Handle Time",
        min: 5,
        max: 20,
        positive_upside: false,
        graph: 'Gauge'
    },
    "VFR": {
        name: "Virtual Floor Reconfiguration",
        min: 0.5,
        max: 2,
        positive_upside: false,
        graph: 'Pie'
    }
}

export default MetricsData;
