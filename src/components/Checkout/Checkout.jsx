import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { notifyOutOfStock } from '../../context/notificationCart/notificationCart'


const Checkout = () =>{
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const createOrder = async ({firstName, lastName, email, phone}) => {
                
        try {
            setLoading(true)

            const objOrder = {
                buyer: {
                    name: firstName, 
                    lastName: lastName, 
                    email: email, 
                    phone:phone
                },
                items: cart,
                total,
                
            }
            
            const batch = writeBatch(db)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
                        
            const { docs } = await getDocs(productsRef)
                
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
                                
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
                    
                if(stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                }
    
                if(outOfStock.length === 0) {
                    const ordersRef = collection(db, 'orders')
    
                    const { id } = await addDoc(ordersRef, objOrder)
                    batch.commit()
                    clearCart()
                    setOrderId(id)
                    console.log(`El id de su orden es ${id}`)
                } else {
                    notifyOutOfStock()
                    console.log('No hay stock de algun producto')
                }
            })
        } catch (error) {
            console.error('Hubo un error generando la orden')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se está generando su orden...</h1>
    }

    if(orderId) {
        return <h1>El código de su orden de compra es: {orderId}</h1>
    }

    return (
        <>
            <h1>Crear orden de compra</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </>
    )

}

export default Checkout
