import {useEffect, useState} from 'react'
import './Mascota.css'
import {useNavigate} from 'react-router-dom';
import {obtenerTiposMascota} from '../../services/tipo_mascota';
import {crearMascota} from '../../services/mascota';
import {obtenerClienteId} from '../../services/cliente';
import Layout from './../layout/Layout';

function Mascota() {
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [raza, setRaza] = useState('');
    const [tipoMascota, setTipoMascota] = useState('');
    const [tiposMascota, setTiposMascota] = useState([]);

    function crear(event) {
        event.preventDefault();

        const data = {
            nombre: nombre,
            raza: raza,
            tipo_mascota_id: tipoMascota,
            propietario_id: obtenerClienteId()
        };

        crearMascota(data).then(response => {
            if (response.data == 'Creado') {
                alert('Se ha registrado correctamente la mascota.');
                navigate('/perfil');
            }
        }).catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        obtenerTiposMascota().then(response => {
            setTiposMascota(response.data);
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
                        <option value=''>-- Seleccione --</option>
                        {
                        tiposMascota.map((mascota) => {
                            return (<option value={
                                    mascota.id
                                }
                                key={
                                    mascota.id
                            }> {
                                mascota.tipo
                            }</option>);
                        })
                    } </select>
                    <input type='submit' value='Crear'/>
                </form>
            </div>
        </Layout>
    </>)
}

export default Mascota;
