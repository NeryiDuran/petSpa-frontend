import {useState} from 'react'
import './Reserva.css'

function Reserva() {
    const [servicio, setServicio] = useState('');
    const [fecha, setFecha] = useState('');

    function reservar(event) {
        event.preventDefault();
        // alert(`correo ${correo} contraseña ${contrasena}`);
    }

    return (
        <>
            <h1>Reservar</h1>
            <div>
                <form onSubmit={reservar}>
                    <label htmlFor='servicio'>Servicios:</label>
                    <select id='servicio'
                        required={true}
                        value={servicio}
                        onChange={
                            event => setServicio(event.target.value)
                    }>
                        <option value="CC">Servicio 1</option>
                        <option value="CE">Servicio 2</option>
                    </select>
                    <label htmlFor='fecha'>Fecha y hora:</label>
                    <input id='fecha' type='datetime-local'
                        step={900}
                        required={true}
                        value={fecha}
                        onChange={
                            event => setFecha(event.target.value)
                        }/>
                    <input type='submit' value='Reservar'/>
                </form>
            </div>
        </>
    )
}

export default Reserva;
