import InsightDescription from '../../components/Cards/InsightCardDescription/InsightDescription';
export interface IAlert{ 
    id: number;
    metricCode: string;
    insightCategory: string;
    connectItemType: string;
    ocurredAt: string;
}

export interface IAlertNotification{
    id: number;
    insightName: string;
    InsightDescription: string;
}