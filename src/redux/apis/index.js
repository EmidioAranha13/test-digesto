import axios from "axios";

const instance = axios.create({
    baseURL: 'https://op.digesto.com.br/api/',
    url: 'https://op.digesto.com.br/api/',
    method: "GET",
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 5af8ba4c-43e3-4361-9e9c-f73458ab6a5b',
    },
})
export const apiGetProcess = async (id) => {
    return await instance.get(`/tribproc/${id}?tipo_numero=5`).then((res) => res.data);
}