import { makeAutoObservable } from "mobx";
import {ISubCategory} from "@/entities";

export class SubCategoriesStore {
  public subCategories: ISubCategory[] = [];
  public isLoading = false;
  public isInitialized = false;

  private adminSubCategory: ISubCategory;

  constructor() {
    makeAutoObservable(this);
    this.adminSubCategory = {
      id: 0,
      categoryId: 0,
      name: '',
      subgroupPhotoLink: ''
    }
  }

  set(subCategories: ISubCategory[]) {
    this.subCategories = subCategories;
  }

  get() {
    return this.subCategories;
  }

  public getIsLoading = () => {
    return this.isLoading;
  }

  public setLoading = (value: boolean) => {
    this.isLoading = value;
  }

  public setAdminSubCategoryPhoto = (photoName: string) => {
    this.adminSubCategory.subgroupPhotoLink = photoName;
  }

  public setAdminSubCategoryName = (name: string) => {
    this.adminSubCategory.name = name;
  }

  public getAdminSubCategory = () => {
    return this.adminSubCategory;
  }

  public clearAdminSubCategory = () => {
    this.adminSubCategory = {
      id: 0,
      categoryId: 0,
      name: '',
      subgroupPhotoLink: ''
    }
  }
}
