import { useParams } from "react-router-dom";
import { getProducts, getProductsByGenero } from "../AsyncMock";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";

function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const { greeting } = props;

    // en algun momento vendra el parametro y en otro no
    const { generoId } = useParams(); // capturamos el parametro

    useEffect(() => {
        // si llego un genero llamamos a getProductsByGenero
        const asynFun = generoId ? getProductsByGenero : getProducts;

        asynFun(generoId)
            .then((resp) => {
                setProducts(resp)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [generoId])

    return (
        
            <>
            {/* <h1>{greeting}</h1> */}
            <ItemList products={products} />
            </>
    )
}

export default ItemListContainer;