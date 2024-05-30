import httpInstance from "../httpInstance";
import { IAlert } from "./types";

export const getAlerts = async (): Promise<IAlert[]> => {
    try {
        const response = await httpInstance.get<IAlert[]>('/api/threshold-breach-insights/alerts');
        return response.data;
    } catch (error) {
        console.error('Error fetching alerts:', error);
        throw error;
    }
};

export {};
