import { makeAutoObservable } from "mobx";
import { ISubCategory } from "@/entities";

export class SubCategoriesStore {
  public subCategories: ISubCategory[] = [];
  public isLoading = false;
  public isInitialized = false;

  constructor() {
    makeAutoObservable(this);
  }

  set(subCategories: ISubCategory[]) {
    this.subCategories = subCategories;
  }

  get() {
    return this.subCategories;
  }
}
