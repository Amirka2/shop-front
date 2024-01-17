import { makeAutoObservable } from "mobx";
import { ICategory } from "@/entities";
import {categories} from "@/app/shop/mock";

export class CategoriesStore {
    public categories: ICategory[] = [];
    public isLoading = false;
    public isInitialized = false;

    private adminCategory: ICategory;

    constructor() {
        makeAutoObservable(this);
        this.adminCategory = {
            id: 0,
            name: '',
            photo: ''
        }
    }

    set(categories: ICategory[]) {
        this.categories = categories;
    }

    get() {
        return this.categories;
    }

    public getIsLoading = () => {
        return this.isLoading;
    }

    public setLoading = (value: boolean) => {
        this.isLoading = value;
    }

    public setCategoryPhoto = (photoName: string) => {
        this.adminCategory.photo = photoName;
    }

    public setCategoryName = (name: string) => {
        this.adminCategory.name = name;
    }

    public getAdminCategory = () => {
        return this.adminCategory;
    }

    public clearAdminCategory = () => {
        this.adminCategory = {
            id: 0,
            name: '',
            photo: ''
        }
    }
}
