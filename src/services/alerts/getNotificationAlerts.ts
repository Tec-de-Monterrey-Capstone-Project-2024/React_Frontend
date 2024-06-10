import httpInstance from "../httpInstance";
import { IAlertNotification } from "./types";

export const getNotificationAlerts = async (): Promise<IAlertNotification[]> => {
    try {
        const response = await httpInstance.get<IAlertNotification[]>('/api/threshold-breach-insights/notification-alerts');
        return response.data;
    } catch (error) {
        // console.error('Error fetching alerts:', error);
        throw error;
    }
};

export {};
