import {useState} from 'react'
import './Ingresar.css'

function Ingresar() {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    function enviar(event) {
        event.preventDefault();
        alert(`correo ${correo} contraseña ${contrasena}`);
    }

    return (
        <>
            <h1>Ingresar</h1>
            <div>
                <form onSubmit={enviar}>
                    <label htmlFor='correo'>Correo electronico:</label>
                    <input id='correo' type='email' placeholder='Correo electronico' required={true}
                        value={correo}
                        onChange={
                            event => setCorreo(event.target.value)
                        }/>
                    <label htmlFor='contrasena'>Contraseña:</label>
                    <input id='contrasena' type='password' placeholder='Contraseña' required={true}
                        value={contrasena}
                        onChange={
                            event => setContrasena(event.target.value)
                        }/>
                    <input type='submit' value='Ingresar'/>
                </form>
            </div>
        </>
    )
}

export default Ingresar
