export interface IPaths {
    main: string;
    catalog: string;
    aboutUs: string;
    shipping: string;
    payment: string;
    cart: string;
    notFound: string;
    product: string;
}

export interface IProduct {
    id: number;
    price: number;
    name: string;
    inStock: boolean;
    description: string;
    shortDescription: string;
    specifications: ISpecifications;
    photos: Array<string>;
}

export interface ISpecifications {
    type: string;
    manufacturer: string;
    manufactureCountry: string;
}

export interface IContacts {
    whatsApp: string;
    telegram: string;
    viber: string;
    email: string;
    phone: string;
}

export interface IOrder {
    name: string;
    phoneNumber: string;
    productsAndCounts: Map<IProduct, number>;
}
