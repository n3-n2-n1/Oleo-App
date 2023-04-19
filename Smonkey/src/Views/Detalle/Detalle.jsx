import style from "./index.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../features/apiPeticion";
import img from "../../Assents/Frame1.png"


const Detalle = ( titulo, precio, imgUrl ) => {
    
    
    // const products = [
    //     { titulo: 'Sustrato Growers Super Soil (25lt.)',  precio: 120, imgUrl: `${img}` },
    //     { titulo: 'Top Crop - Veg 250mL.',  precio: 320, imgUrl: `${img}` },
    //     { titulo: 'Clipper - Lighter',  precio: 420, imgUrl: `${img}` },
    //     { titulo: 'Skogbio - Alga Delta Bioestimulante 100mL.',  precio: 1220, imgUrl: `${img}` },
    //     { titulo: 'Raw - Challenge Cone - 33oz.',  precio: 1520, imgUrl: `${img}` },
    //     { titulo: 'Forestal - Bandeja 4090 (40 celdas, 90cc)',  precio: 1120, imgUrl: `${img}` },
    //   ];
    

    const [producto, setProducto ] = useState();
    const {id} = useParams();
    useEffect( () => {
        getProductsById(setProducto, id)
    }, []
    );
    console.log(producto);

    return(
    <div className = {style.container}>
        <div className = {style.titulo}>
            {producto?.titulo}
        </div>
        <div className = {style.prodimg}>
            <img src={producto?.imagen.URL} alt="" />
        </div>
        
        <div className = {style.detalles}>
            {producto?.detalle}
        </div>

        <div className = {style.precio}>
            {producto?.precio}
        </div>
        <div className = {style.ventabtn}>
            
            <button>Agregar</button>
        </div>
    </div>

    )
}


export default Detalle;