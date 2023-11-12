import {useEffect, useState} from 'react'
import './TablaMascota.css'
import {Link, useNavigate} from 'react-router-dom';
import {eliminarMascota, obtenerMascotasPorCliente} from '../../services/mascota';
import {obtenerTiposMascota} from '../../services/tipo_mascota';

function TablaMascota(props) {
    const navigate = useNavigate();

    const [mascotas, setMascotas] = useState([]);
    const [tiposMascota, setTiposMascota] = useState([]);

    useEffect(() => { /* eslint-disable react/prop-types */
        obtenerMascotasPorCliente(props.cliente).then(response => {
            setMascotas(response.data);
        }).catch(e => {
            console.log(e);
        });
    }, [props.cliente]);

    useEffect(() => {
        let tipos = {};
        obtenerTiposMascota().then(response => {
            response.data.forEach((item) => {
                tipos[item.id] = item.tipo;
            });

            setTiposMascota(tipos);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    function eliminar(mascota) {
        eliminarMascota(mascota).then(response => {
            if (response.data == 'Eliminado') {
                alert('La mascota ha sido eliminada.');
                navigate(0);
            }
        }).catch(e => {
            alert('La mascota no ha podido ser eliminada. Recuerde que si la mascota tiene reservas asociadas, no podra ser eliminada.');
            console.log(e);
        });
    }

    return (<>
        <fieldset className='tablamascotas'>
            <legend className='mascotas'>Mascotas</legend>
            <div >
                <Link to="/agregar-mascota" className='agregarmasco' >Agregar mascota</Link>
                <table className='tablamasco'>
                    <thead>
                        <tr>
                            <th className='dato'>Mascota</th>
                            <th className='dato'>Raza</th>
                            <th className='dato'>Tipo</th>
                            <th className='dato'>Acción</th>
                        </tr>
                    </thead>
                    <tbody>{
                        mascotas.length ? mascotas.map((mascota) => {
                            return (<tr key={
                                'mascota' + mascota.id
                            }>
                                <td className='dato' key={
                                    'mascota-nombre' + mascota.id
                                }> {
                                    mascota.nombre
                                }</td>
                                <td className='dato' key={
                                    'mascota-raza' + mascota.id
                                }> {
                                    mascota.raza
                                }</td>
                                <td className='dato' key={
                                    'mascota-tipo' + mascota.id
                                }> {
                                    tiposMascota[mascota.tipo_mascota_id]
                                }</td>
                                <th className='dato' key={
                                    'mascota-acciones' + mascota.id
                                }>
                                    <button className='bottoneliminar' key={
                                            'mascota-acciones-eliminar' + mascota.id
                                        }
                                        onClick={
                                            () => eliminar(mascota.id)
                                    }>Eliminar mascota</button>
                                </th>
                            </tr>)
                        }) : (<tr>
                            <th colSpan={4}>Añade una mascota.</th>
                        </tr>)
                    }</tbody>
                </table>
            </div>
        </fieldset>
    </>)
}

export default TablaMascota;
