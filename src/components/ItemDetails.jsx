

import { Link } from "react-router-dom"
import { ItemCount } from "./ItemCount"


export const ItemDetails = ({ id, imagen, nuevo, nombre, descripcion, precio, envioGratis, stock}) => {
    return (

        <>
            <article
                className="flex flex-col sm:flex-row justify-center min-h-full gap-[2rem] bg-white rounded-lg text-[clamp(0.1rem,5vw,1rem)]">
                <figure className="overflow-hidden col-span-1 w-[40%]">
                    <img src={imagen} alt="" className="hover:scale-[1.2] transition duration-500 ease-in-out" />
                </figure>
                <div className="flex flex-col justify-center gap-3 col-span-2 w-[50%]">
                    <div className="flex flex-col gap-[10px]">
                        <span className="text-amber-700 flex items-center">{envioGratis ? 'Envio gratis' : nuevo}</span>
                        <h2 className="font-medium text-[1.3rem]">{nombre}</h2>
                        <p className="text-gray-600">{descripcion}</p>
                        <p>$ {precio}</p>
                        <div className="flex gap-2  ">
                            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('su cantidad es ', quantity) } />
                        </div>
                    </div>
                    {/* <Link className="text-white bg-black w-full py-2 px-3 rounded-[1.8rem] cursor-pointer text-center">Agregar al carrito</Link> */}

                </div>
            </article>
        </>

    )

}