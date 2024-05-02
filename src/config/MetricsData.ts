export type MetricData = {
    metric_info_code: string;
    name: string;
    min: number;
    max: number;
    positive_upside: boolean;
    graph: 'Pie' | 'Gauge';
};

const MetricsData: Record<number, MetricData> = {
    1: {
        metric_info_code: "SL",
        name: "Service Level",
        min: 70,
        max: 100,
        positive_upside: true,
        graph: 'Gauge'
    },
    2: {
        metric_info_code: "ACR",
        name: "Abandonment Call Rate",
        min: 0,
        max: 30,
        positive_upside: false,
        graph: 'Gauge'
    },
    3: {
        metric_info_code: "FCR",
        name: "First Contact Resolution",
        min: 70,
        max: 100,
        positive_upside: true,
        graph: 'Gauge'
    },
    4: {
        metric_info_code: "OCC",
        name: "Occupancy",
        min: 0,
        max: 30,
        positive_upside: false,
        graph: 'Gauge'
    },
    5: {
        metric_info_code: "SA",
        name: "Schedule Adherence",
        min: 70,
        max: 90,
        positive_upside: true,
        graph: 'Gauge'
    },
    6: {
        metric_info_code: "ASA",
        name: "Average Speed Answer",
        min: 0,
        max: 60,
        positive_upside: false,
        graph: 'Gauge'
    },
    7: {
        metric_info_code: "AHT",
        name: "Average Handle Time",
        min: 5,
        max: 20,
        positive_upside: false,
        graph: 'Gauge'
    },
    8: {
        metric_info_code: "VFR",
        name: "Virtual Floor Reconfiguration",
        min: 0.5,
        max: 2,
        positive_upside: false,
        graph: 'Gauge'
    }
}

export default MetricsData;
