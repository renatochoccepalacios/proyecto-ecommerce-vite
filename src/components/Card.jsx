


function Card() {
    return (
        <section className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] py-[3rem] px-[2rem]">
            <article
                className="grid grid-rows-[auto_1fr_auto]  gap-[0.5rem] bg-white rounded-lg text-[clamp(0.1rem,5vw,1rem)]">
                <figure className="overflow-hidden ">
                    <img src="img/jordan-1.jpg" alt="" className="hover:scale-[1.2] transition duration-500 ease-in-out" />
                </figure>
                <span className="text-amber-700">Lo nuevo</span>
                <h2 className="font-medium text-[1.3rem]">Air Jordan 1 Low</h2>
                <p className="text-gray-600">Zapatillas Jordan para Hombre</p>
                <p>219.999</p>
                <button className="text-white bg-black w-full py-2 px-3 rounded-[1.4rem] cursor-pointer">Agregar al
                    carrito</button>
            </article>

            

        </section>
    )
}

export default Card;