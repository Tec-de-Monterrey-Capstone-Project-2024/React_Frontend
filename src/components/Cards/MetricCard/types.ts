export interface IMetricCard {
    title: string,
    subtitle: string,
    minValue: number,
    maxValue: number,
    value: number,
    unit: null | '%' | 's',
    positive_upside: boolean,
    onClick: (() => void) | null,
}
