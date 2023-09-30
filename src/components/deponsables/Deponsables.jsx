import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../itemList/ItemList';

export default function Deponsables() {
  
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

        //TRAER TODA LA COLECCION
    //const collectionRef = collection(db, 'products');

        //TRAER PARTE DE LA COLECCION - FILTRADA
    const collectionRef = query(collection(db, 'products'), where('category', '==', 'deponsables')); // utilizamos el metodo query(); para "solicitar" la consulta y el metodo wherer(); para crear el "filtro".

    getDocs(collectionRef).then((res) => {
      console.log(res.docs);
      const myArray = res.docs.map((item) => ({ ...item.data(), id: item.id }));
      setProducts(myArray);
    });

}, [])

  return (
    <div className="">
        <div className="ItemListContainer">
            <ItemList products={products} />            
        </div>
    </div>
  );
};