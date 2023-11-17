import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const Checkout = () =>{
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const createOrder = async (userData) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: {
                    
                }
            }
        }
}
