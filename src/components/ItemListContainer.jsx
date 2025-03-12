import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ItemList } from "./ItemList";
import Spinner from "./Spinner";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { generoId } = useParams(); // Capturamos el parámetro de la URL

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log("Parametro generoId:", generoId); // Depuración

                const collectionRef = generoId
                    ? query(collection(db, "items"), where("genero", "==", generoId.toLowerCase()))
                    : collection(db, "items");

                const response = await getDocs(collectionRef);
                const productsAdapted = response.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProducts(productsAdapted);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        fetchProducts();
    }, [generoId]);

    return (
        <>
        {products.length ? <ItemList products={products} /> : <Spinner />}
        
        </>
    );
}

export default ItemListContainer;
