import httpInstance from "../httpInstance";
import { IInsight } from "./types";

export const getInsightsByStatus = async (status: string): Promise<IInsight[]> => {
    try {
        const response = await httpInstance.get<IInsight[]>(`/api/threshold-breach-insights/by-status`);
        return response.data;
    } catch (error) {
        // console.error("Error fetching insights:", error);
        throw error;
    }
};
