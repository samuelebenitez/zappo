import React, { useState, useEffect, useRef } from "react";
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function useFetchProducts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        //     const docRef = doc(db, "products");
        //     const docSnap = await getDoc(docRef);
        const colRef = collection(db, "zproducts");
        const snapshot = await getDocs(colRef);

        const productList = snapshot.docs.map((doc) => doc.data());

        setProducts(productList);
        return productList;
        // if (docSnap.exists()) {
        //   setProducts(docSnap.data().products);
        //   // setProducts('products' in docSnap.data() ? docSnap.data().products : {})
        // } else {
        //   setProducts({});
        // }
      } catch (err) {
        setError("Failed to load products");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { loading, error, products, setProducts };
}
