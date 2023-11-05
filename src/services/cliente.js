import {instanceAPI} from "./api"

const keyClienteId = 'clienteId';

export const crearCliente = (data) => {
    return instanceAPI.post('/clientes', data)
}

export const obtenerCliente = (id) => {
    return instanceAPI.get('/clientes/' + id)
}

export const actualizarCliente = (id, data) => {
    return instanceAPI.put('/clientes/' + id, data)
}

export const ingresar = (data) => {
    return instanceAPI.post('/ingresar', data)
}

export const guardarClienteId = (clienteId) => {
    localStorage.setItem(keyClienteId, clienteId);
}

export const obtenerClienteId = () => localStorage.getItem(keyClienteId);

export const eliminarClienteId = () => {
    localStorage.removeItem(keyClienteId);
}
