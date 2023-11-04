import { instanceAPI } from "./api"

export const obtenerTiposDocumentos = () => {
    return instanceAPI.get('tipo-documentos')
}