import axios from "axios";
import { ICar, ICarData } from "../types/car.interface";

const SERVER_URL = 'http://localhost:4200/cars';

export const CarService = {
    async getAll() {
        const response = await axios.get<ICar[]>(SERVER_URL)

        return response.data;
    },

    async getById(id: string) {
        const response = await axios.get<ICar[]>(`${SERVER_URL}?id=${id}`)

        return response.data[0];
    },

    async create(data: ICarData) {
        return axios.post(SERVER_URL, data)
    }
}
