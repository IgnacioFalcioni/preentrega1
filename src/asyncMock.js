const products = [
    {
        id: '1',
        name: 'Advance Adulto 20kg',
        price: 9800,
        category: 'perros',
        img: 'https://lucila.centzon.com.ar/wp-content/uploads/2023/04/calcos-advance-large-1-1-800x1532.png',
        stock: 30,
        description: 'Descripcion advance adulto'
    },
    {
        id: '2',
        name: 'Advance gato 8kg',
        price: 8000,
        category: 'gatos',
        img: 'https://lucila.centzon.com.ar/wp-content/uploads/2023/04/gato-advance-frente-1.png',
        stock: 30,
        description: 'Descripcion advance gato'
    },

];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 1000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category));
        }, 1000);
    });
};