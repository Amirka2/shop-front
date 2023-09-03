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
    photos: Array<string>;
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
