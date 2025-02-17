import { useEffect, useState } from "react";    
import { getProductsById } from "../AsyncMock";
import { ItemDetails } from "./ItemDetails";
import { useParams } from "react-router-dom";

function ItemDetailContainer () {
    
    const [products, setProducts] = useState([]);

    const { itemId } = useParams(); // capturamos el parametro

    useEffect(() => {

        console.log('item recibido',itemId)
        getProductsById(itemId)
            .then((resp) => {
                setProducts(resp)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [itemId])

    console.log(products)
    
    return (
        <section className=" py-[2rem] px-[2rem] m-auto">

            <ItemDetails {...products} />
        </section>
    )
}

export default ItemDetailContainer;