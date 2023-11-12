import { useState } from "react";
import inicio from "./../../assets/inicio.png";
import "./Inicio.css";
import Layout from "./../layout/Layout";

function Inicio() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <div className="inicio">
          <img src={inicio} className="inicioImagen" />
        </div>
      </Layout>
    </>
  );
}

export default Inicio;
