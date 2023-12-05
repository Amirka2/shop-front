import { makeAutoObservable } from "mobx";
import { ICategory } from "@/entities";

export class CategoriesStore {
    public categories: ICategory[] = [];
    public isLoading = false;
    public isInitialized = false;

    constructor() {
        makeAutoObservable(this);
    }

    set(categories: ICategory[]) {
        this.categories = categories;
    }

    get() {
        return this.categories;
    }
}
