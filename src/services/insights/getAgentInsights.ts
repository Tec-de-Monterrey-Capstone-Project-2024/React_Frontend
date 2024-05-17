import httpInstance from "../httpInstance";
import { IInsights } from "./types";

export const getAgentInsights = async (id: string) => {
    const mockInsightsData: IInsights[] = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },

    ];
    await new Promise(resolve => setTimeout(resolve, 1000));

    
    // Simulate an HTTP status code (200 for success)
    const status = 200;

    // Return mock data with axios-like structure
    return { data: mockInsightsData, status };

    // let res: any;
    // const endpoint = `api/metrics/agents/${id}`;

    // await httpInstance.get(endpoint).then((response) => {
    //     res = response;
    // }).catch((err) => {
    //     res = err.response
    // });
    // return res;
}