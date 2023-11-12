import {useEffect, useState} from 'react'
import './Reserva.css'
import {obtenerMascotasPorCliente} from '../../services/mascota';
import {obtenerServicios} from '../../services/servicios';
import {crearReserva} from '../../services/reserva';
import {useNavigate} from 'react-router-dom';
import {obtenerClienteId} from '../../services/cliente';
import Layout from './../layout/Layout';

function Reserva() {
    const navigate = useNavigate();

    const [servicio, setServicio] = useState('');
    const [mascota, setMascota] = useState('');
    const [fecha, setFecha] = useState('');
    const [mascotas, setMascotas] = useState([]);
    const [servicios, setServicios] = useState([]);

    function reservar(event) {
        event.preventDefault();

        const data = {
            fecha_hora: new Date(fecha).toUTCString(),
            servicio_id: servicio,
            mascota_id: mascota
        };

        crearReserva(data).then(response => {
            if (response.data == 'Creado') {
                alert('La reserva se registro correctamente.');
                navigate('/perfil');
            }
        }).catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        obtenerMascotasPorCliente(obtenerClienteId()).then(response => {
            setMascotas(response.data);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    useEffect(() => {
        obtenerServicios().then(response => {
            setServicios(response.data);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    useEffect(() => {
        if (obtenerClienteId() === null) {
            navigate('/');
        }

    }, [navigate]);

    return (<>
        <Layout>
            <h1 className='tituloreserva'>Reservar</h1>
            <div className='reserva'>
                <form onSubmit={reservar}>
                    <label className='datosPerfil' htmlFor='servicio'>Servicios:</label>
                    <select className='cajaPerfil colorcaja1' id='servicio'
                        required={true}
                        value={servicio}
                        onChange={
                            event => setServicio(event.target.value)
                    }>
                        <option value='' key='no-servicio'>-- Seleccione --</option>
                        {
                        servicios.map((servicio) => {
                            return (<option value={
                                    servicio.id
                                }
                                key={
                                    'servicio-' + servicio.id
                            }> {
                                servicio.nombre
                            }</option>);
                        })
                    } </select>
                    <label className='datosPerfil' htmlFor='mascota'>Mascota:</label>
                    <select className='cajaPerfil colorcaja2' id='mascota'
                        required={true}
                        value={mascota}
                        onChange={
                            event => setMascota(event.target.value)
                    }>
                        <option value='' key='no-mascota'>-- Seleccione --</option>
                        {
                        mascotas.map((mascota) => {
                            return (<option value={
                                    mascota.id
                                }
                                key={
                                    'mascota-' + mascota.id
                            }> {
                                mascota.nombre
                            }</option>);
                        })
                    } </select>
                    <label className='datosPerfil' htmlFor='fecha'>Fecha y hora:</label>
                    <input className='cajaPerfil colorcaja3' id='fecha' type='datetime-local'
                        step={900}
                        required={true}
                        value={fecha}
                        onChange={
                            event => setFecha(event.target.value)
                        }/>
                    <input className='botonactualizar' type='submit' value='Reservar'/>
                </form>
            </div>
        </Layout>
    </>)
}

export default Reserva;
