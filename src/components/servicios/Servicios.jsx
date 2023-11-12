import Layout from './../layout/Layout';
import './Servicios.css'
import perro2 from "./../../assets/perro2.png";
import perro3 from "./../../assets/perro3.jpg";
import perro4 from "./../../assets/perro4.jpg";


function Servicios() {
    return (<>
        <Layout>
            <p className='tituloreserva'>Planes</p>
                <div className='servicios'>
                    <div className='cajaservicio'>
                    <img src={perro2} className="imagenservicio" />
                        <p className='tituloservicio plan1'>Plan Basico</p>
                        <p className='textoservicio plan3'>Este plan es ideal para aquellos peludos que requieren de un baño sencillo con corte. Incluye:
                        <br></br>
- Baño con Shampoo de limpieza profunda y acondicionador hidratante de pelo
<br></br>
- Masaje capilar
<br></br>
- Corte comercial de acuerdo a la raza
<br></br>
- Corte higiénico
<br></br>
- Corte o limado de uñas
<br></br>
- Limpieza de oídos
<br></br>
- Limpieza de dientes con solución antiséptica oral
<br></br>
- Colonia
<br></br>
- Pañoleta</p>
                    </div>
                    <div className='cajaservicio'>
                    <img src={perro3} className="imagenservicio" />
                    <p className='tituloservicio plan2'>Plan Premium</p>
                    <p className='textoservicio plan1'>
                    Baño profundo con tratamientos capilares y tipo de manto, con corte. Incluye:
                    <br></br>
- Baño con shampoo de limpieza profunda y acondicionador hidratante de pelo
<br></br>
- Shampoo de volumen o para mantos lisos, totalizador de color, mascarilla sedosa reparación intensa o mascarilla volumen
<br></br>
- Masaje capilar
<br></br>
- Corte comercial de acuerdo a la raza o deslanado
<br></br>
- Corte o limado de uñas
<br></br>
- Limpieza de oídos
<br></br>
- Limpieza de dientes con solución antiséptica oral
<br></br>
- Hidratación de pulpejos y nariz
<br></br>
- Colonia
<br></br>
- Pañoleta
                    </p>
                    </div>
                    <div className='cajaservicio'>
                    <img src={perro4} className="imagenservicio" />
                    <p className='tituloservicio plan3'>Plan Mellow</p>
                    <p className='textoservicio plan2'>
                        
                    Baño con tratamiento capilar, corte y spa. Incluye:
                    <br></br>
- Baño con Shampoo de limpieza profunda y acondicionador hidratante de pelo
<br></br>
- Shampoo de volumen o para mantos lisos, totalizador de color, mascarilla sedosa reparación intensa o mascarilla volumen
<br></br>
- Masaje capilar
<br></br>
- Hidromasaje con ozonoterapia
<br></br>
- Corte de acuerdo a la raza o deslanado
<br></br>
- Corte o limado de uñas
<br></br>
- Limpieza de oídos
<br></br>
- Limpieza de dientes con solución antiséptica oral
<br></br>
- Hidratación de pulpejos y nariz
<br></br>
- Colonia
<br></br>
- Pañoleta
                    </p>
                    </div>
                </div>
        </Layout>
    </>)
}

export default Servicios
