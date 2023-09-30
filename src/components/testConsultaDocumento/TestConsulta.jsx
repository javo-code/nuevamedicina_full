//@ts-check
import React, { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export default function TestConsulta() {
  
    const [item, setItem] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const bomba = doc(db, 'products', 'FMhsfdDYURvWYIe7rWan');
        getDoc(bomba).then((res) => {
          setItem({ ...res.data(), id: res.id });
          console.log(item);
        });

}, [])


  return (
    <div>
      {item && <>{JSON.stringify(item)}</>};
    </div>
  )
}
