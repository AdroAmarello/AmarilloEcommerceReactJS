export const createAdaptedCategories = (doc) => {
    const fields = doc.data()
    
    return {
        id: doc.id,
        name: fields.name,
        order: fields.order,
        slug: fields.slug,        
    }
}