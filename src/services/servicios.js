import {instanceAPI} from "./api"

export const obtenerServicios = () => {
    return instanceAPI.get('/servicios')
}
