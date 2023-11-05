import { instanceAPI } from "./api"

export const crearCliente = (data) => {
    return instanceAPI.post('/clientes', data)
}

export const obtenerCliente = (id) => {
    return instanceAPI.get('/clientes/' + id)
}