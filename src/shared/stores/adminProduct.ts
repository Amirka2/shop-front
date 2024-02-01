import {makeAutoObservable} from "mobx";

import {
  IChangeProduct,
  ICreatePhoto,
  IDescriptionData,
  IPhoto,
  PRODUCT_DESCRIPTION_KEYS,
  PRODUCT_KEYS
} from "@/entities/interfaces";

export class AdminProduct {
  public product: IChangeProduct | undefined;
  public description: IDescriptionData | undefined;
  public photos: ICreatePhoto[] = [];
  public isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  get() {
    return this.product;
  }

  set(product: IChangeProduct) {
    this.product = product;

    if (product.photos) {
      this.photos = product.photos;
    }
  }

  public getIsLoading = () => {
    return this.isLoading;
  }

  public setLoading = (value: boolean) => {
    this.isLoading = value;
  }

  public addProductField(fieldName: PRODUCT_KEYS, value: any) {
    const product = this.get();
    if (fieldName === PRODUCT_KEYS.PHOTOS) {
      console.log({...this.product})
    }

    if (product) {
      // @ts-ignore
      product[fieldName] = value;
    }
  }

  public addPhoto = (photoName: string, id = -1) => {
    this.photos.push({
      id: id,
      link: photoName
    });
  }

  public deletePhotoFromStore = (photoId: number) => {
    this.photos = this.photos.filter(p => p.id !== photoId);
  }

  public getDescription(id: number): IDescriptionData {
    if (!this.product) {
      throw new Error('Продукта нет');
    }

    if (this.product && this.product.description) {
      let filteredDescription = this.product.description
        .filter(d => d.id === id)[0];

      if (!filteredDescription) {
        filteredDescription = {
          id,
        }
        this.product.description.push(filteredDescription);
      }

      return filteredDescription;
    }

    const firstDescription = {
      id,
    };
    this.product.description = [firstDescription];

    return firstDescription;
  }

  public addDescriptionField(id: number, fieldName: PRODUCT_DESCRIPTION_KEYS, value: any) {
    console.log('id in store', id)
    const description = this.getDescription(id);
    try {
      // @ts-ignore
      description[fieldName] = value;
    } catch (e) {
      console.error('error while trying to add description field')
    }
    console.log(description)
  }

  public deleteDescription(id: number) {
    if (this.product && this.product.description) {
      let filteredDescriptions = this.product.description
        .filter(d => d.id !== id);

      this.product.description = filteredDescriptions;
    }
  }

  public clear() {
    this.product = undefined;
  }
}
