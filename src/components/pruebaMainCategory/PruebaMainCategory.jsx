import "./pruebaMainCategory.css";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {  getDocs,  collection,  query,  where} from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const PruebaMainCategory = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
  setLoading(true);

  const collectionRef = categoryId
    ? query(collection(db, 'categories'), where('category', '==', categoryId))
    : collection(db, 'categories')

  setTimeout(() => {
    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, 500);

}, [categoryId]);

  return (
    <div className="">
      <div>
        <h1 className="titulo bounce-in-bck">{greeting}</h1>
      </div>
      {loading ? (
        <div className="Loading">Cargando categorias...</div>
      ) : (
        <div className="CategoryListContainer">
            <div className="menu">
        <div className="category">
          <img src="https://i.ibb.co/f0M3td9/modal-Nutricion.png" alt="" />
          <NavLink to='/nutricion' className="BtnCard">Nutricion</NavLink>
        </div>
        <div className="category">
          <img src="https://i.ibb.co/6ZQBgd5/Bombas-de-infusion.png" alt="" />
          <NavLink to='/bombas' className="BtnCard">Bombas de Infusión</NavLink>
        </div>
        <div className="category">
          <img src="https://i.ibb.co/gdkbXj9/articulos-descartables1.jpg" alt="" />
          <NavLink to='/descartables' className="BtnCard">Descartables</NavLink>
        </div>
        <div className="category">
          <img src="https://i.ibb.co/D84MZvq/us.jpg" alt="" />
          <NavLink to='/servicios' className="BtnCard">Servicios Profesionales</NavLink>
        </div>
      </div>
        </div>
      )}
    </div>
  );
};

export default PruebaMainCategory;
