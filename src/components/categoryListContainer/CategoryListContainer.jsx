import "./categoryListContainer.css";
import { useEffect, useState } from "react";
import CategoryList from "../categoryList/CategoryList";
import { Link, useParams } from "react-router-dom";
import {  getDocs,  collection,  query,  where} from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const CategoryListContainer = ({ greeting }) => {
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
            <CategoryList products={products} />            
        </div>
      )}
    </div>
  );
};

export default CategoryListContainer;
