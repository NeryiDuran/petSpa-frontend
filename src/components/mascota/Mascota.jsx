import {useState} from 'react'
import './Mascota.css'
import {useNavigate} from 'react-router-dom';

function Mascota() {
    const [nombre, setNombre] = useState('');
    const [raza, setRaza] = useState('');
    const [tipoMascota, setTipoMascota] = useState('');
    const navigate = useNavigate();

    function crear(event) {
        event.preventDefault();
        // alert(`correo ${correo} contraseña ${contrasena}`);
        navigate('/perfil');
    }

    return (
        <>
            <h1>Crear mascota</h1>
            <div>
                <form onSubmit={crear}>
                    <label htmlFor='nombre'>Nombre:</label>
                    <input id='nombre' type='text' placeholder='Nombre'
                        required={true}
                        value={nombre}
                        onChange={
                            event => setNombre(event.target.value)
                        }/>
                    <label htmlFor='raza'>Raza:</label>
                    <input id='raza' type='text' placeholder='Raza'
                        required={true}
                        value={raza}
                        onChange={
                            event => setRaza(event.target.value)
                        }/>
                    <label htmlFor='tipo-mascota'>Tipo de mascota:</label>
                    <select id='tipo-mascota'
                        required={true}
                        value={tipoMascota}
                        onChange={
                            event => setTipoMascota(event.target.value)
                    }>
                        <option value="CC">Gato</option>
                        <option value="CE">Perro</option>
                    </select>
                    <input type='submit' value='Crear'/>
                </form>
            </div>
        </>
    )
}

export default Mascota;
