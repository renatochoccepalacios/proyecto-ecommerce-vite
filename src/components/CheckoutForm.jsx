import React, { useState } from 'react'

export const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('');
    const [numero, setNumero] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            nombre,
            numero,
            email
        }

        onConfirm(userData);
    }

    return (

        <div className=''>
            <form action="" className='flex gap-[2rem] flex-col ' onSubmit={handleConfirm}>
                <div className='flex gap-3.5'>
                    <label htmlFor="" className='flex gap-3.5 flex-row'>
                        Nombre
                        <input type="text" value={nombre} onChange={({ target }) => setNombre(target.value)} className='border border-gray-600 p-1 rounded-md'/>
                    </label>
                    <label htmlFor="" className='flex gap-3.5 flex-row'>
                        Numero
                        <input type="number" value={numero} onChange={({ target }) => setNumero(target.value)} className='border border-gray-600 p-1 rounded-md'/>
                    </label>
                    <label htmlFor="" className='flex gap-3.5 flex-row'>
                        Email
                        <input type="email" value={email} onChange={({ target }) => setEmail(target.value)} className='border border-gray-600 p-1 rounded-md '/>
                    </label>
                </div>

                <div className='text-right'>
                    <button type="submit" className='bg-black text-white py-[0.5rem] px-[1rem] cursor-pointer'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}
