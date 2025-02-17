
import { GrCart } from "react-icons/gr";

function CartWidget() {
    const contador = 20;

    return (
        <button className="relative flex cursor-pointer">
    <GrCart className="cart-icon text-[3rem]" />
    <div className="absolute bg-red-500 py-1 px-2 rounded-full text-white w-[30px] h-[30px] flex items-center justify-center top-0 right-0 translate-x-[50%] -translate-y-[50%]">
        {contador}
    </div>
</button>
    )
}

export default CartWidget;