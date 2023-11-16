const products = [
    { 
        id: '1', 
        name: 'Te verde x 100g', 
        price: 2755, 
        category: 'hierbas', 
        img:'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/t/e/te-verde-china.jpg', 
        stock: 25, 
        description:'Variedad de té verde proveniente de la planta Camellia Sinensis. Sus hojas se recogen frescas y después de someterse al secado, se prensan, enrollan, trituran y finalmente se secan.'
    },
    { 
        id: '2', 
        name: 'Granola Patagónica x 500g', 
        price: 2900, 
        category: 'cereales', 
        img:'https://cdn.newgarden.com.ar/media/catalog/product/cache/02bceca3fdafc6c016b45da9776eeadf/g/r/granola-crunchy-patagonica-x-500-g.jpg', 
        stock: 16, 
        description:'Mezcla de cereales crunchy con cranberry.'
    },
    { 
        id: '3', 
        name: 'Poroto colorado x 1kg', 
        price: 1400, 
        category: 'legumbres', 
        img:'https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/p/o/poroto-colorado_2.jpg', 
        stock: 5, 
        description:'El Poroto Colorado es originario del continente americano y se destaca por ser rica en proteínas y carbohidratos. Es una leguminosa roja en forma de riñon, de textura y sabor suaves.'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
