import httpInstance from "../httpInstance";

export const loginUser = async (firebaseId: string) => {
    let res: any;
    const endpoint = `/api/auth/users/login/${firebaseId}`;

    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => {
        res = err.response
    });
    return res;
}
