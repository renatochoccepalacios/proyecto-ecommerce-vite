import React, { useState } from 'react'

export const CheckoutForm = ({onConfirm}) => {
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

        <div>
            <form action="" onSubmit={handleConfirm}>
                <label htmlFor="">
                    Nombre
                    <input type="text" value={nombre} onChange={ ( { target}) => setNombre(target.value)} />
                </label>
                <label htmlFor="">
                    Numero
                    <input type="number" value={numero} onChange={ ( { target}) => setNumero(target.value)} />
                </label>
                <label htmlFor="">
                    Email
                    <input type="email" value={email} onChange={ ( { target}) => setEmail(target.value)} />
                </label>

                <div>
                    <button type="submit">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}
