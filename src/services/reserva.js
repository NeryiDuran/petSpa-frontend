import {instanceAPI} from "./api"

export const crearReserva = (data) => {
    return instanceAPI.post('/reservas', data)
}

export const obtenerReservaPorMascotas = (mascotas) => {
    return instanceAPI.get('/reservas?mascotas=' + mascotas)
}

export const eliminarReserva = (id) => {
    return instanceAPI.delete('/reservas/' + id)
}
