import {instanceAPI} from "./api"

export const crearMascota = (data) => {
    return instanceAPI.post('/mascotas', data)
}

export const obtenerMascotasPorCliente = (clienteId) => {
    return instanceAPI.get('/mascotas?cliente=' + clienteId)
}

export const eliminarMascota = (id) => {
    return instanceAPI.delete('/mascotas/' + id)
}
