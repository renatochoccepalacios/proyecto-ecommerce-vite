import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar(props) {

    const { imgBrand } = props;

    return (
        <nav className=" fixed top-0 w-full z-50 px-4 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] bg-white">
            <div className="grid max-w-[900px] m-auto grid-cols-[100px_400px_50px] justify-between items-center px-8 py-4 text-black min-h-[10vh] ">
                <Link to="/">
                    <img src={imgBrand} alt="" />
                </Link>
                <ul className="flex justify-center gap-8 uppercase font-[500]">

                    <li>
                        <NavLink to={`/`} className={({ isActive }) => `relative inline-block p-2 ${isActive ? 'active-button' : 'option'}`}>Todo</NavLink>
                    </li>

                    <li>
                        <NavLink to={`/genero/hombre`} className={({ isActive }) => `relative inline-block p-2 ${isActive ? 'active-button' : 'option'}`} >Hombres</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/genero/mujer`} className={({ isActive }) => `relative inline-block p-2 ${isActive ? 'active-button' : 'option'}`}>Mujeres</NavLink>

                    </li>

                </ul>


                <CartWidget />
            </div>


        </nav>
    )
}

export default NavBar;