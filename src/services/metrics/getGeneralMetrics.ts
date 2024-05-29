import dummyGeneralMetrics from "../../config/GeneralMetricsData";

export const getGeneralMetrics = async () => {
    const res = {
        data: dummyGeneralMetrics
    }

    return res;
}
