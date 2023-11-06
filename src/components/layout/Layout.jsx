/* eslint-disable no-unused-vars */
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Layout.css'
import Menu from './../menu/Menu';

// eslint-disable-next-line react/prop-types
function Layout({children}) {

    return (<>
        <div className="app">
            <Menu/>
            <div className='app-body'> {children} </div>
        </div>
    </>)
}

export default Layout;
