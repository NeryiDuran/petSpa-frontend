import {useEffect, useState} from 'react'
import './Perfil.css'
import {useNavigate} from 'react-router-dom';
import {actualizarCliente, obtenerCliente, obtenerClienteId} from '../../services/cliente';
import {obtenerTiposDocumentos} from '../../services/tipo_documentos';
import TablaMascota from '../tabla-mascota/TablaMascota';
import TablaReserva from '../tabla-reserva/TablaReserva';

function Perfil() {
    const navigate = useNavigate();

    const [id, setId] = useState(0);
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [documento, setDocumento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [tipoDocumentos, setTipoDocumentos] = useState([]);

    function actualizar(event) {
        event.preventDefault();

        const data = {
            nombre: nombres,
            apellido: apellidos,
            documento: documento,
            telefono: telefono,
            direccion: direccion,
            correo_electronico: correo,
            contrasena: contrasena,
            tipo_documento_id: tipoDocumento
        };

        actualizarCliente(id, data).then(response => {
            if (response.data == 'Actualizado') {
                alert('La información se ha actualizado correctamente.');
                navigate('/perfil');
            }
        }).catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        const clienteId = obtenerClienteId();
        if (clienteId !== null) {
            obtenerCliente(clienteId).then(response => {
                setId(response.data.id);
                setNombres(response.data.nombre);
                setApellidos(response.data.apellido);
                setDocumento(response.data.documento);
                setTelefono(response.data.telefono);
                setDireccion(response.data.direccion);
                setCorreo(response.data.correo_electronico);
                setTipoDocumento(response.data.tipo_documento_id);
                setContrasena(response.data.contrasena);
            }).catch(e => {
                console.log(e);
            });
        } else {
            navigate('/');
        }

    }, [navigate]);

    useEffect(() => {
        obtenerTiposDocumentos().then(response => {
            setTipoDocumentos(response.data);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    return (<>
        <h1>Perfil</h1>
        <div>
            <form onSubmit={actualizar}>
                <label htmlFor='nombres'>Nombres:</label>
                <input id='nombres' type='text' placeholder='Nombres'
                    required={true}
                    value={nombres}
                    onChange={
                        event => setNombres(event.target.value)
                    }/>
                <label htmlFor='apellidos'>Apellidos:</label>
                <input id='apellidos' type='text' placeholder='Apellidos'
                    required={true}
                    value={apellidos}
                    onChange={
                        event => setApellidos(event.target.value)
                    }/>
                <label htmlFor='tipo-documento'>Tipo de documento:</label>
                <select id='tipo-documento'
                    disabled={true}
                    value={tipoDocumento}
                    onChange={
                        event => setTipoDocumento(event.target.value)
                }>
                    <option value=''>-- Seleccione --</option>
                    {
                    tipoDocumentos.map((documento) => {
                        return (<option value={
                                documento.id
                            }
                            key={
                                documento.id
                        }> {
                            documento.tipo
                        }</option>);
                    })
                } </select>
                <label htmlFor='documento'>Número de documento:</label>
                <input id='documento' type='number' placeholder='Número de documento'
                    disabled={true}
                    value={documento}/>
                <label htmlFor='telefono'>Telefono:</label>
                <input id='telefono' type='number' placeholder='Telefono'
                    required={true}
                    value={telefono}
                    onChange={
                        event => setTelefono(event.target.value)
                    }/>

                <label htmlFor='direccion'>Dirección:</label>
                <input id='direccion' type='text' placeholder='Dirección'
                    value={direccion}
                    onChange={
                        event => setDireccion(event.target.value)
                    }/>
                <label htmlFor='correo'>Correo electronico:</label>
                <input id='correo' type='email' placeholder='Correo electronico'
                    disabled={true}
                    value={correo}/>
                <input type='submit' value='Actualizar'/>
            </form>
        </div>
        <TablaMascota cliente={obtenerClienteId()}/>
        <TablaReserva mascotas={`14, 1`}/>
    </>)
}
export default Perfil;
