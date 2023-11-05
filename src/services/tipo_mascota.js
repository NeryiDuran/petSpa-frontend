import { instanceAPI } from "./api"

export const obtenerTiposMascota = () => {
    return instanceAPI.get('/tipo-mascota')
}