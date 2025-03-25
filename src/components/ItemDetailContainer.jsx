import { useEffect, useState } from "react";
import { getProductsById } from "../AsyncMock";
import { ItemDetails } from "./ItemDetails";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import Spinner from "./Spinner";

function ItemDetailContainer() {

    const [products, setProducts] = useState(null);

    const { itemId } = useParams(); // capturamos el parametro

    useEffect(() => {

        const docRef = doc(db, 'items', itemId)
        getDoc(docRef)
            .then(response => {
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { id: response.id, ...data };
                    setProducts(productAdapted);
                } else {
                    console.error('Producto no encontrado');
                }
            })

            .catch(error => {
                console.log(error);
            })

    }, [itemId])

    console.log(products)

    

    return (
        <section className=" py-[7rem] px-[2rem] flex justify-center  m-auto min-h-[100dvh] w-full gap-[2rem] bg-[#ededed]">

            {products ? <ItemDetails {...products} /> : <Spinner />}
        </section>
    )
}

export default ItemDetailContainer;