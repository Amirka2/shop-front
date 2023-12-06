import {makeAutoObservable} from "mobx";

import { IProduct } from "@/entities/interfaces";

export class Products {
  public products: IProduct[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get() {
    return this.products;
  }

  set(products: IProduct[]) {
    this.products = products;
  }
}
