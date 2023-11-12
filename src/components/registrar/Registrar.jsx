import {useEffect, useState} from 'react'
import './Registrar.css'
import {obtenerTiposDocumentos} from '../../services/tipo_documentos';
import {crearCliente} from '../../services/cliente';
import {useNavigate} from 'react-router-dom';
import Layout from './../layout/Layout';

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

    return (<>
        <Layout>
            <h1 className='registro'>Registro</h1>
            <div className='formularioIngresar'>
                <form className='formulario' onSubmit={enviar}>
                    <label className='tituloFormulario' htmlFor='nombres'>Nombres:</label>
                    <input className='cajaFormulario colorcaja1' id='nombres' type='text' placeholder='Nombres'
                        required={true}
                        value={nombres}
                        onChange={
                            event => setNombres(event.target.value)
                        }/>
                    <label className='tituloFormulario' htmlFor='apellidos'>Apellidos:</label>
                    <input className='cajaFormulario colorcaja2' id='apellidos' type='text' placeholder='Apellidos'
                        required={true}
                        value={apellidos}
                        onChange={
                            event => setApellidos(event.target.value)
                        }/>
                    <label className='tituloFormulario' htmlFor='tipo-documento'>Tipo de documento:</label>
                    <select className='cajaFormulario colorcaja3' id='tipo-documento'
                        required={true}
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
                    <label className='tituloFormulario' htmlFor='documento'>Número de documento:</label>
                    <input className='cajaFormulario colorcaja4' id='documento' type='number' placeholder='Número de documento'
                        required={true}
                        value={documento}
                        onChange={
                            event => setDocumento(event.target.value)
                        }/>
                    <label className='tituloFormulario' htmlFor='telefono'>Telefono:</label>
                    <input  className='cajaFormulario colorcaja5' id='telefono' type='number' placeholder='Telefono'
                        required={true}
                        value={telefono}
                        onChange={
                            event => setTelefono(event.target.value)
                        }/>

                    <label className='tituloFormulario' htmlFor='direccion'>Dirección:</label>
                    <input  className='cajaFormulario colorcaja1' id='direccion' type='text' placeholder='Dirección'
                        value={direccion}
                        onChange={
                            event => setDireccion(event.target.value)
                        }/>
                    <label className='tituloFormulario' htmlFor='correo'>Correo electronico:</label>
                    <input className='cajaFormulario colorcaja2' id='correo' type='email' placeholder='Correo electronico'
                        required={true}
                        value={correo}
                        onChange={
                            event => setCorreo(event.target.value)
                        }/>
                    <label className='tituloFormulario' htmlFor='contrasena'>Contraseña:</label>
                    <input className='cajaFormulario colorcaja3' id='contrasena' type='password' placeholder='Contraseña' autoComplete="on"
                        required={true}
                        value={contrasena}
                        onChange={
                            event => setContrasena(event.target.value)
                        }/>
                        <br></br>
                    <input className='botton' type='submit' value='Registrar'/>
                </form>
            </div>
        </Layout>
    </>)
}

export default Registrar;
