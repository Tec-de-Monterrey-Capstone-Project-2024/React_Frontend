export interface MetricOption {
    /*
    * value: identificador único de la métrica
    */
    value: string;
    /*
    * label: etiqueta descriptiva de la métrica
    */
    label: string;
}

export interface AlertFormData {
    /*
    * metric: métrica seleccionada
    */
    metric: string;
    /*
    * minThreshold: umbral mínimo
    */
    minThreshold: string;
    /*
    * maxThreshold: umbral máximo
    */
    maxThreshold: string;
    /*
    * targetValue: valor objetivo para la alerta
    */
    targetValue: string;
}
