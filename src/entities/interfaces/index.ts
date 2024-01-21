export interface IProduct {
    id: number;
    subCategoryId: number;
    name: string;
    price: number;
    inStock: boolean;
    shortDescription: string;
    isFixedPrice?: boolean;
    nextArrivalDate?: string;
    description: IDescriptionData[];
    photos: IPhoto[];
}

export interface IBackProduct extends Omit<IProduct, ''> {}

export interface ICreateProduct {
}

// @ts-ignore
export interface IChangeProduct extends Omit<IProduct, 'photos'> {
    photos?: ICreatePhoto[];
}

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
    id: number;
    link: string;
}

export type ICreatePhoto = Omit<IPhoto, 'id'> & {
    id?: number
};

export interface ICreateProduct {

}

export interface IChangeProduct {
    name?: string;
    price?: number;
    shortDescription?: string;
    description?: IDescriptionData[];
    photos?: ICreatePhoto[];
}

export interface ICreateProduct {
    id: number;
    price: number;
    name: string;
    shortDescription: string;
    photos?: ICreatePhoto[];
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
    groupPhotoLink: string;
    name: string;
    subCategoryCount?: number;
}

export interface ISubCategory {
    id: number;
    categoryId: number;
    subgroupPhotoLink: string;
    name: string;
    productCount?: number;
}
