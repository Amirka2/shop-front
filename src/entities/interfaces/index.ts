export interface IProduct {
    id: number;
    price: number;
    isFixedPrice?: boolean;
    name: string;
    inStock: boolean;
    nextArrivalDate?: string;
    description: IDescriptionData;
    shortDescription: string;
    photos: Array<string>;
    specifications?: ISpecifications;
    examples?: IDescriptionData;
    usage?: IDescriptionData;
}

export interface IDescriptionData {
    text: string;
    tableText?: string[];
}

export interface ISpecifications {
    type: string;
    manufacturer: string;
    manufactureCountry: string;
}

export interface IContacts {
    whatsAppNumber: string;
    whatsAppLink: string;
    telegramLink: string;
    email: string;
    phone: string;
}

export interface IOrder {
    name: string;
    phoneNumber: string;
    mail?: string;
    products: IProductsToOrder[];
}

export interface IProductsToOrder {
    name: string;
    price: number;
    count: number;
}

export interface ICategory {
    id: number;
    photo: string;
    name: string;
    subCategoryCount: number;
}

export interface ISubCategory {
    id: number;
    photo: string;
    name: string;
    productCount: number;
}
