import { createAdaptedCategories } from '../../../adapters/createAdaptedCategories'
import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig'

export const getCategories = () => {
    
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))
        
        getDocs(categoriesRef)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(documentSnapshot => {
                    return createAdaptedCategories(documentSnapshot)
                })
                return (categoriesAdapted)
            })
            .catch(error => {
                reject(error)
            })
}
