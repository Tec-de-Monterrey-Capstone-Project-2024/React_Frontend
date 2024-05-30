import httpInstance from "../../services/httpInstance";

export const updateInsightStatus = async (id: number, status: "TO_DO" | "IN_PROGRESS" | "DONE") => {
    try {
        const endpoint = `api/threshold-breach-insights/${id}/status`;
        const response = await httpInstance.patch(endpoint, null, {
            params: { newStatus: status },
        });
        console.log('Update response:', response);
        return response;
    } catch (err: any) {
        console.error('Error updating insight status:', err.response);
        return err.response;
    }
};
