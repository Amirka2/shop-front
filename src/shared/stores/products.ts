import { makeAutoObservable } from "mobx";
import { IProduct } from "@/entities";

export class ProductsStore {
  public products: IProduct[] = [];
  public isLoading = false;
  public isInitialized = false;

  constructor() {
    makeAutoObservable(this);
  }

  set(products: IProduct[]) {
    this.products = products;
  }

  get() {
    return this.products;
  }
}
