import axios from "axios";

const SERVER_URL = 'http://localhost:4200/cars';

export const CarService = {
    async getAll() {
        const response = await axios.get(SERVER_URL)

        return response.data;
    },

    async getById(id) {
        const response = await axios.get(`${SERVER_URL}?id=${id}`)

        return response.data[0];
    },

    async create(data) {
        return axios.post(SERVER_URL, data)
    }
}
