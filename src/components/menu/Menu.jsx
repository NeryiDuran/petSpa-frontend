import {Link} from 'react-router-dom';
import './Menu.css'
import {eliminarClienteId, obtenerClienteId} from './../../services/cliente';

function Menu() {

    return (<ul className="app-header">
        <li>
            <Link to="/">Inicio</Link>
        </li>
        {
        obtenerClienteId() === null && (<li>
            <Link to="/ingresar">Ingresar</Link>
        </li>)
    }
        {
        obtenerClienteId() === null && (<li>
            <Link to="/registro">Registro</Link>
        </li>)
    }
        <li>
            <Link to="/servicios">Servicios</Link>
        </li>
        {
        obtenerClienteId() !== null && (<li>
            <Link to="/perfil">Perfil</Link>
        </li>)
    }
        {
        obtenerClienteId() !== null && (<li>
            <Link to="/"
                onClick={eliminarClienteId}>Salir</Link>
        </li>)
    } </ul>)
}

export default Menu;
