import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig'

export const getCategories = () => {
    const categoriesRef = collection(db, 'categories')

    return getDocs(categoriesRef)
        .then(querySapshot => {
            const categoriesAdapted = querySapshot.docs.map(documentSnapshot => {
                const fields = documentSnapshot.data()
                return { id: documentSnapshot.id, ...fields }
            })

            return categoriesAdapted
        })
        .catch(error => {
            reject(error)
        })

}