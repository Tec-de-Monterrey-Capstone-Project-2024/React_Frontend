import httpInstance from "../httpInstance";
import { IInsights } from "./types";

export const getAgentInsights = async (id: string) => {
    const mockInsightsData: IInsights[] = [
        { id: 1,title: "Prueba1", description1: "Descripcion corta 1", description2: "", color: "red", borderColor: "yellow", showBoxBorder: true  },
        { id: 2,title: "Prueba2", description1: "Descripcion corta 2", description2: "", color: "green", borderColor: "red", showBoxBorder: true  },
        { id: 3,title: "Prueba3", description1: "Descripcion corta 3", description2: "", color: "yellow", borderColor: "green", showBoxBorder: true  },
        { id: 4,title: "Prueba4", description1: "Descripcion corta 4", description2: "", color: "red", borderColor: "red", showBoxBorder: true  },
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