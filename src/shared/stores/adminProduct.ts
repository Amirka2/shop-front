import { makeAutoObservable } from "mobx";

import {
  IChangeProduct,
  IDescriptionData,
  PRODUCT_DESCRIPTION_KEYS,
  PRODUCT_KEYS
} from "@/entities/interfaces";

export class AdminProduct {
  public product: IChangeProduct | undefined;
  public description: IDescriptionData | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  get() {
    return this.product;
  }

  set(product: IChangeProduct) {
    this.product = product;
  }

  public addProductField(fieldName: PRODUCT_KEYS, value: any) {
    const product = this.get();

    if (product) {
      // @ts-ignore
      product[fieldName] = value;
    }
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
