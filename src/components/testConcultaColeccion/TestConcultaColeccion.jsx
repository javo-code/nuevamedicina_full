import React, { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import CategoryList from '../categoryList/CategoryList'

export default function Bombs() {
  
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

        //TRAER TODA LA COLECCION
    //const collectionRef = collection(db, 'products');

        //TRAER PARTE DE LA COLECCION - FILTRADA
    const collectionRef = query(collection(db, 'products'), where('category', '==', 'services') ); // utilizamos el metodo query(); para "solicitar" la consulta y el metodo wherer(); para crear el "filtro".

    getDocs(collectionRef).then((res) => {
      console.log(res.docs);
      const myArray = res.docs.map((item) => ({ ...item.data(), id: item.id }));
      setProducts(myArray);
    });

}, [])

  return (
    <div className="">
        <div className="CategoryListContainer">
            <CategoryList products={products} />            
        </div>
    </div>
  );
};