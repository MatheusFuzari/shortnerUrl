import axios, { AxiosResponse } from "axios";

export const createUrl = async (url: string): Promise<AxiosResponse<{code: string}>> => {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    return await axios.post<AxiosResponse<{code: string}>>(`${process.env.SHORTNER_URL!}/create`, {
            originalUrl: url,
            expirationTime: date.getTime().toString()
        }).then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
}