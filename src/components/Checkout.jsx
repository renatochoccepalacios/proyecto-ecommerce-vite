import React, { useContext, useState } from 'react'
import { CartContext } from './Context/CartContext';
import { addDoc, collection, doc, documentId, getDocs, query, Timestamp, where, writeBatch } from 'firebase/firestore';
import { db } from '../config/firebase';
import { CheckoutForm } from './CheckoutForm';

export const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, clearCart, total } = useContext(CartContext);

    const createOrder = async ({ nombre, numero, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    nombre, numero, email
                },

                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);
            const outOfStock = [];

            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'items');

            const productsAddedFromFireStore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const {docs} = productsAddedFromFireStore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodCantidad = productAddedToCart?.cantidad;

                if (stockDb >= prodCantidad) {
                    batch.update(doc.ref, { stock: stockDb - prodCantidad });
                    
                } else {
                    outOfStock.push({ ...dataDoc, id: doc.id });
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            }else {
                console.error('No hay stock suficiente para los siguientes productos:', outOfStock);
            }
        } catch (error){
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h1>Se esta generando la orden...</h1>
    }

    if (orderId) {
        return <h1>el id de su orden es: {orderId}</h1>
    }
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}
