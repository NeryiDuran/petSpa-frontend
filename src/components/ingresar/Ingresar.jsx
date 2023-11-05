import {useEffect, useState} from 'react'
import './Ingresar.css'
import {guardarClienteId, ingresar, obtenerClienteId} from '../../services/cliente';
import {useNavigate} from 'react-router-dom';

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
        <h1>Ingresar</h1>
        <div>
            <form onSubmit={enviar}>
                <label htmlFor='correo'>Correo electronico:</label>
                <input id='correo' type='email' placeholder='Correo electronico'
                    required={true}
                    value={correo}
                    onChange={
                        event => setCorreo(event.target.value)
                    }/>
                <label htmlFor='contrasena'>Contraseña:</label>
                <input id='contrasena' type='password' placeholder='Contraseña' autoComplete='on'
                    required={true}
                    value={contrasena}
                    onChange={
                        event => setContrasena(event.target.value)
                    }/>
                <input type='submit' value='Ingresar'/>
            </form>
        </div>
    </>)
}

export default Ingresar;
