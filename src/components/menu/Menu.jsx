import {Link} from 'react-router-dom';
import './Menu.css'
import inicio from './../../assets/logo.png'
import {eliminarClienteId, obtenerClienteId} from './../../services/cliente';

function Menu() {

    return (<ul className="app-header">
        <li>
            <img src={inicio} className="logo" />
        </li>
        <li>
            <Link to="/" className='menu1'>Inicio</Link>
        </li>
        {
        obtenerClienteId() === null && (<li>
            <Link to="/ingresar" className='menu2'>Ingresar</Link>
        </li>)
    }
        {
        obtenerClienteId() === null && (<li>
            <Link to="/registro" className='menu3' >Registro</Link>
        </li>)
    }
        <li>
            <Link to="/servicios" className='menu4'>Servicios</Link>
        </li>
        {
        obtenerClienteId() !== null && (<li>
            <Link to="/perfil" className='menu2' >Perfil</Link>
        </li>)
    }
        {
        obtenerClienteId() !== null && (<li>
            <Link to="/" className='menu3'
                onClick={eliminarClienteId}>Salir</Link>
        </li>)
    } </ul>)
}

export default Menu;
