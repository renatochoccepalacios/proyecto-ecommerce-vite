import { Link } from "react-router-dom"


export const Item = ({ id, imagen, nuevo, nombre, descripcion, precio, envioGratis }) => {
    return (

        <article
            className="grid grid-rows-[auto_1fr_auto] md:grid-rows-[350_auto_1fr_auto]  gap-[0.5rem] bg-white rounded-lg text-[clamp(0.1rem,5vw,1rem)]">
            <figure className="overflow-hidden cursor-pointer">
                <img src={imagen} alt="" className="hover:scale-[1.2] transition duration-500 ease-in-out" />
            </figure>
            <span className="text-amber-700 flex items-center">{envioGratis ? 'Envio gratis' : nuevo }</span>
            <h2 className="font-medium text-[1.3rem]">{nombre}</h2>
            <p className="text-gray-600">{descripcion}</p>
            <p>$ {precio}</p>
            <Link to={`/item/${id}`} className="text-white bg-black w-full py-2 px-3 rounded-[1.4rem] cursor-pointer text-center">Ver detalles</Link>
        </article>

    )

}