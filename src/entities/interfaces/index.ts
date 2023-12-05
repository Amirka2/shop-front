export interface IProduct {
    id: number;
    subCategoryId: number;
    price: number;
    name: string;
    inStock: boolean;
    shortDescription: string;
    description?: IDescriptionData[];
    photos?: string[];
}

export interface ICreateProduct {

}

export interface IChangeProduct extends IProduct {}

export enum PRODUCT_KEYS {
    ID = 'id',
    NAME = 'name',
    PRICE = 'price',
    IN_STOCK = 'inStock',
    SHORT_DESCRIPTION = 'shortDescription',
    DESCRIPTION = 'description',
    PHOTOS = 'photos',
}

export enum PRODUCT_PHOTO_KEYS {
    NAME= 'name',
    UID = 'uid',
}

export enum PRODUCT_DESCRIPTION_KEYS {
    ID = 'id',
    NAME = 'name',
    BODY = 'body',
}

export interface IPhoto {
    name: string;
    uid: string;
}

export interface IDescriptionData {
    id: number;
    name?: string;
    body?: string;
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
