import React, { useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export default function TestConsulta() {

useEffect(() => {
    const db = getFirestore();
    const bombas = doc(db, 'products', 'FMhsfdDYURvWYIe7rWan');
    getDoc(bombas).then((res) => {
        console.log(res);
    });

}, [])


  return (
    <div>TestConsulta</div>
  )
}
