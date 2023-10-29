export const getProductById = (id: number) => {
    console.log('got product ' + id);
    return {
        id: id,
        price: 1,
        name: 'product',
        inStock: false,
        description: {
            text: 'text',
            tableText: ['table text'],
        },
        shortDescription: 'description',
        photos: [''],
    }
}
