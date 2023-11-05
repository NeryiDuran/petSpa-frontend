import {useEffect, useState} from 'react'
import './TablaReserva.css'
import {Link, useNavigate} from 'react-router-dom';
import {eliminarReserva, obtenerReservaPorMascotas} from '../../services/reserva';

function TablaReserva(props) {
    const navigate = useNavigate();

    const [reservas, setReservas] = useState([]);

    useEffect(() => { /* eslint-disable react/prop-types */
        obtenerReservaPorMascotas(props.mascotas).then(response => {
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

    return (
        <>
            <fieldset>
                <legend>Reservas</legend>
                <div>
                    <Link to="/reservar">Realizar reserva</Link>
                    <table>
                        <thead>
                            <tr>
                                <th>Servicio</th>
                                <th>Mascota</th>
                                <th>Fecha y hora</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>{
                            reservas.length ? reservas.map((reserva) => {
                                return (
                                    <tr key={
                                        'reserva' + reserva.id
                                    }>
                                        <td key={
                                            'reserva-servicio' + reserva.id
                                        }>
                                            {
                                            reserva.servicio
                                        }</td>
                                        <td key={
                                            'reserva-mascota' + reserva.id
                                        }>
                                            {
                                            reserva.mascota
                                        }</td>
                                        <td key={
                                            'reserva-fecha' + reserva.id
                                        }>
                                            {
                                            new Date(reserva.fecha_hora).toLocaleString()
                                        }</td>
                                        <th key={
                                            'reserva-acciones' + reserva.id
                                        }>
                                            <button key={
                                                    'reserva-acciones-eliminar' + reserva.id
                                                }
                                                onClick={
                                                    () => eliminar(reserva.id)
                                            }>Eliminar reserva</button>
                                        </th>
                                    </tr>
                                )
                            })
                            : (<tr>
                                <th colSpan={4}>Añade una reserva.</th>
                            </tr>)
                        }</tbody>
                    </table>
                </div>
            </fieldset>
        </>
    )
}

export default TablaReserva;
