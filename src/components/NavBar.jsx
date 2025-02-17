import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar(props) {

    const { imgBrand } = props;

    return (
        <nav className=" w-full   px-4 shadow-[21px_-8px_79px_25px_rgb(86_104_131/50%),-2px_19px_59px_rgba(255,255,255,0.6)]">
            <div className="grid max-w-[900px] m-auto grid-cols-[100px_400px_50px] justify-between items-center px-8 py-4 text-black min-h-[10vh] ">
                <Link to="/">
                    <img src={imgBrand} alt="" />
                </Link>
                <ul className="flex justify-center gap-8 uppercase font-[500]">
                    <li>
                        <NavLink to={`/genero/hombre`} className={({isActive}) => `relative inline-block p-2 ${isActive ? 'active-button' : 'option'}`} >Hombres</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/genero/mujer`}  className={({isActive}) => `relative inline-block p-2 ${isActive ? 'active-button' : 'option'}`}>Mujeres</NavLink>

                    </li>
                </ul>


                <CartWidget />
            </div>


        </nav>
    )
}

export default NavBar;