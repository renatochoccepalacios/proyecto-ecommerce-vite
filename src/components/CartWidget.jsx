
import { useContext } from "react";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";

function CartWidget() {

    const {totalCantidad} = useContext(CartContext);

    console.log(totalCantidad)

    return (
        <Link to="/cart" className="relative flex cursor-pointer">
            <GrCart className="cart-icon text-[3rem]" />
            <div className="absolute bg-red-500 py-1 px-2 rounded-full text-white w-[30px] h-[30px] flex items-center justify-center top-0 right-0 translate-x-[50%] -translate-y-[50%]">
                {totalCantidad}
            </div>
        </Link>
    )
}

export default CartWidget;