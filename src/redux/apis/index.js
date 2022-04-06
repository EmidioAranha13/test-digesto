import axios from "axios";

//Add a token here.
const token = "";

const instance = axios.create({
    baseURL: 'https://op.digesto.com.br/api/',
    url: 'https://op.digesto.com.br/api/',
    method: "GET",
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token,
    },
})
export const apiGetProcess = async (id) => {
    return await instance.get(`/tribproc/${id}?tipo_numero=5`).then((res) => res.data);
}