export interface MetricOption {
    value: string;
    label: string;
}

export interface AlertFormData {
    metric: string;
    minThreshold: string;
    maxThreshold: string;
}
