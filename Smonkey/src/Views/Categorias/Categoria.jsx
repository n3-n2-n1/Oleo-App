// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Card } from "../../Components/Card/Card";
// import Filter from "../../Components/FilterAndSort/Filter";
// import Sort from "../../Components/FilterAndSort/Sort";
// // import { getProductsByCategoryAndBrand } from "../../features/apiPeticion";
// import style from "./index.module.css";
// import Pagination from "./pagination";
// import { productos } from "../../Assents/BASEFAKE";

// export default function Categorias() {
//   const { categoria } = useParams();
//   //Hook
//   const productos = useSelector(state => state.products.FiltroProducto)
//   const dispatch = useDispatch();
//   const [brand, setBrand] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);
//   const [prodPerPage, setProdPerPage] = useState(10);
//   const indexOfLastProd = currentPage * prodPerPage;
//   const indexOfFirstProd = indexOfLastProd - prodPerPage;
  
 
//   const currentProductos= productos?.slice(indexOfFirstProd, indexOfLastProd);
//   useEffect(() => {
//     productos(dispatch, categoria.toUpperCase(), brand);
//   }, [categoria, brand]);

//   return (
//     <div className={style.container}>
//       <div className={style.imgContainer}>
//         <h2> </h2>
//       </div>
//       <div className={style.filter}>
//         <div>
//           <Filter categoria={categoria} setBrand={setBrand} brand={brand} />
//         </div>
//         <div>
//           <Sort productos={productos}  />
//         </div>
//       </div>
    
//       {currentProductos?.map((e) => (
//         <div className={style.card} key={e.id}>
//           <Card producto={e} key={e.id} />
//         </div>
//       ))}
//        <div>
//           <Pagination
//             ProductosPerPage={prodPerPage}
//             allProductos={productos?.length}
//             currentPage={currentPage}
//             paginado={setCurrentPage}
//           />
//         </div>
//     </div>
//   );
// }

// import  Card  from "../../Components/Card/Card";
// import style from "./index.module.css";
// import style from "./index.module.css";
// import Pagination from "./pagination";
// import { productos } from "../../Assents/BASEFAKE";