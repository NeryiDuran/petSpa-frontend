import {useEffect, useState} from 'react'
import './TablaReserva.css'
import {Link, useNavigate} from 'react-router-dom';
import {eliminarReserva, obtenerReservaPorMascotas} from '../../services/reserva';

function TablaReserva(props) {
    const navigate = useNavigate();

    const [reservas, setReservas] = useState([]);

    useEffect(() => { /* eslint-disable react/prop-types */
        const mascotas = props.mascotas !== '' ? props.mascotas : '0';
        obtenerReservaPorMascotas(mascotas).then(response => {
            setReservas(response.data);
        }).catch(e => {
            console.log(e);
        });
    }, [props.mascotas]);

    function eliminar(reserva) {
        eliminarReserva(reserva).then(response => {
            if (response.data == 'Eliminado') {
                alert('La reserva ha sido eliminada.');
                navigate(0);
            }
        }).catch(e => {
            console.log(e);
        });
    }

    return (<>
        <fieldset className='tablareservas'>
            <legend className='mascotas'>Reservas</legend>
            <div>
                <Link to="/reservar" className='reservasmas'>Realizar reserva</Link>
                <table className='tablamasco'>
                    <thead>
                        <tr>
                            <th className='dato'  >Servicio</th>
                            <th className='dato' >Mascota</th>
                            <th className='dato' >Fecha y hora</th>
                            <th className='dato' >Acción</th>
                        </tr>
                    </thead>
                    <tbody>{
                        reservas.length ? reservas.map((reserva) => {
                            return (<tr key={
                                'reserva' + reserva.id
                            }>
                                <td className='dato' key={
                                    'reserva-servicio' + reserva.id
                                }> {
                                    reserva.servicio
                                }</td>
                                <td className='dato' key={
                                    'reserva-mascota' + reserva.id
                                }> {
                                    reserva.mascota
                                }</td>
                                <td className='dato' key={
                                    'reserva-fecha' + reserva.id
                                }> {
                                    new Date(reserva.fecha_hora).toLocaleString()
                                }</td>
                                <th className='dato' key={
                                    'reserva-acciones' + reserva.id
                                }>
                                    <button className='bottoneliminar' key={
                                            'reserva-acciones-eliminar' + reserva.id
                                        }
                                        onClick={
                                            () => eliminar(reserva.id)
                                    }>Eliminar reserva</button>
                                </th>
                            </tr>)
                        }) : (<tr>
                            <th colSpan={4}>Añade una reserva.</th>
                        </tr>)
                    }</tbody>
                </table>
            </div>
        </fieldset>
    </>)
}

export default TablaReserva;
