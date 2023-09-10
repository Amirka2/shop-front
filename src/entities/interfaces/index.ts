export interface IProduct {
    id: number;
    price: number;
    name: string;
    inStock: boolean;
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

export interface ICategoryCard {
    id: number;
    photo: string;
    name: string;
    subCategoryCount: number;
}

export interface ISubCategoryCard {
    id: number;
    photo: string;
    name: string;
    productCount: number;
}
