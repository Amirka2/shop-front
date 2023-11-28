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

export interface ICreateProduct {

}

export interface IChangeProduct {
    name?: string;
    price?: number;
    photos?: string[];
    shortDescription?: string;
    description?: any;
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
