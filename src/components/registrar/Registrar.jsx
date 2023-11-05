import {useEffect, useState} from 'react'
import './Registrar.css'
import {obtenerTiposDocumentos} from '../../services/tipo_documentos';
import {crearCliente} from '../../services/cliente';
import {useNavigate} from 'react-router-dom';

function Registrar() {
    const navigate = useNavigate();

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [documento, setDocumento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [tipoDocumentos, setTipoDocumentos] = useState([]);

    function enviar(event) {
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

        crearCliente(data).then(response => {
            if (response.data == 'Creado') {
                alert('La información se ha registrado correctamente.');
                navigate('/');
            }
        }).catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        obtenerTiposDocumentos().then(response => {
            setTipoDocumentos(response.data);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    return (
        <>
            <h1>Registro</h1>
            <div>
                <form onSubmit={enviar}>
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
                        required={true}
                        value={tipoDocumento}
                        onChange={
                            event => setTipoDocumento(event.target.value)
                    }>
                        <option value=''>-- Seleccione --</option>
                        {
                        tipoDocumentos.map((documento) => {
                            return (
                                <option value={
                                        documento.id
                                    }
                                    key={
                                        documento.id
                                }>
                                    {
                                    documento.tipo
                                }</option>
                            );
                        })
                    } </select>
                    <label htmlFor='documento'>Número de documento:</label>
                    <input id='documento' type='number' placeholder='Número de documento'
                        required={true}
                        value={documento}
                        onChange={
                            event => setDocumento(event.target.value)
                        }/>
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
                        required={true}
                        value={correo}
                        onChange={
                            event => setCorreo(event.target.value)
                        }/>
                    <label htmlFor='contrasena'>Contraseña:</label>
                    <input id='contrasena' type='password' placeholder='Contraseña' autoComplete="on"
                        required={true}
                        value={contrasena}
                        onChange={
                            event => setContrasena(event.target.value)
                        }/>
                    <input type='submit' value='Registrar'/>
                </form>
            </div>
        </>
    )
}

export default Registrar;
