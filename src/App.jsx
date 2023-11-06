import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Inicio from './components/inicio/Inicio';
import Servicios from './components/servicios/Servicios';
import Ingresar from './components/ingresar/Ingresar';
import Registrar from './components/registrar/Registrar';
import Perfil from './components/perfil/Perfil';
import Mascota from './components/mascota/Mascota';
import Reserva from './components/reseva/Reserva';

function App() {

    return (<Router>
        <Routes>
            <Route exact path='/'
                element={<Inicio/>}/>
            <Route exact path='/servicios'
                element={<Servicios/>}/>
            <Route exact path='/ingresar'
                element={<Ingresar/>}/>
            <Route exact path='/registro'
                element={<Registrar/>}/>
            <Route exact path='/perfil'
                element={<Perfil/>}/>
            <Route exact path='/agregar-mascota'
                element={<Mascota/>}/>
            <Route exact path='/reservar'
                element={<Reserva/>}/>
        </Routes>
    </Router>)
}

export default App;
