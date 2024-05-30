import httpInstance from "../../services/httpInstance";

export const updateInsightStatus = async (id: number, status: "TO_DO" | "IN_PROGRESS" | "DONE") => {
    let res: any;
    const endpoint = `api/insights/${id}`;

    await httpInstance.patch(endpoint, { status }).then((response) => {
        res = response;
    }).catch((err) => {
        res = err.response;
    });
    return res;
};
