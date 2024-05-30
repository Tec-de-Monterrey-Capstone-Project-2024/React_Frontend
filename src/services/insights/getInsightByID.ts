import httpInstance from "../httpInstance";
import { IInsight } from "./types";

export const getInsightByID = async (id: number): Promise<IInsight> => {
    try {
        const response = await httpInstance.get<IInsight>(`/api/threshold-breach-insights/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching insight:", error);
        throw error;
    }
};
