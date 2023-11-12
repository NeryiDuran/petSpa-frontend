import {useEffect, useState} from 'react'
import './Ingresar.css'
import {guardarClienteId, ingresar, obtenerClienteId} from '../../services/cliente';
import {useNavigate} from 'react-router-dom';
import Layout from './../layout/Layout';

function Ingresar() {
    const navigate = useNavigate();

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    function enviar(event) {
        event.preventDefault();

        const data = {
            correo_electronico: correo,
            contrasena: contrasena
        };

        ingresar(data).then(response => {
            guardarClienteId(response.data.id);
            navigate('/perfil');
        }).catch(() => {
            alert('El correo electronico o la contraseña no son validos verifique e intentelo de nuevo');
            setContrasena('');
            setCorreo('');
        });
    }

    useEffect(() => {
        if (obtenerClienteId() !== null) {
            navigate('/perfil');
        }
    }, [navigate]);

    return (<>
        <Layout>
            <h1 className='ingresar'>Ingresar</h1>
            <div className='formularioIngresar'>
                <form className='formulario' onSubmit={enviar}>
                    <label className='tituloFormulario' htmlFor='correo'>Correo Electronico:</label>
                    <input className='cajaFormulario colorcaja1' id='correo' type='email' placeholder='Correo electronico'
                        required={true}
                        value={correo}
                        onChange={
                            event => setCorreo(event.target.value)
                        }/>
                        <br></br>
                    <label className='tituloFormulario' htmlFor='contrasena'>Contraseña:</label>
                    <input className='cajaFormulario colorcaja2' id='contrasena' type='password' placeholder='Contraseña' autoComplete='on'
                        required={true}
                        value={contrasena}
                        onChange={
                            event => setContrasena(event.target.value)
                        }/>
                        <br></br>
                    <input className='botton' type='submit' value='Ingresar'/>
                </form>
            </div>
        </Layout>
    </>)
}

export default Ingresar;
