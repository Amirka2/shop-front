export interface IProduct {
    id: number;
    subCategoryId: number;
    name: string;
    price: number;
    inStock: boolean;
    shortDescription: string;
    manufacturerId: number;
    priority: number;
    isFixedPrice?: boolean;
    nextArrivalDate?: string;
    productDescriptions: IDescriptionData[];
    // count: number;
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
    header?: string;
    text?: string;
}

export interface ICreateDescriptionData {
    productId: number;
    header: string;
    text: string;
}

export interface IManufacturer {
    id: number;
    name: string;
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
    products: ProductWithCount[];
}

export interface ProductWithCount extends IProduct {
    count: number;
}

export interface ICategory {
    id: number;
    name: string;
    groupPhotoLink: string;
    subCategoryCount?: number;
}

export interface ISubCategory {
    id: number;
    categoryId: number;
    subgroupPhotoLink: string;
    name: string;
    productCount?: number;
}
