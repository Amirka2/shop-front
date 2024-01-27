import {makeAutoObservable} from "mobx";

import {IDescriptionData} from "@/entities";

export class ProductDescriptions {
  public descriptions: IDescriptionData[] = [];
  public productId: number = -1;
  private activeDescriptionId: number | null;
  private counter = 0;

  constructor() {
    makeAutoObservable(this);
    this.activeDescriptionId = -1;
  }

  set(descriptions: IDescriptionData[]) {
    this.descriptions = descriptions;
    this.counter = descriptions[descriptions.length - 1]?.id + 1;
  }

  get() {
    return this.descriptions;
  }

  public setProductId = (productId: number) => {
    this.productId = productId;
  }

  public addDescription = (description: Omit<IDescriptionData, 'id'>) => {
    const id = this.counter;

    this.descriptions.push({
      id,
      ...description
    });
    this.counter += 1;

    this.activeDescriptionId = this.descriptions.length - 1;
  }

  public deleteDescription = (id: number) => {
    this.set(this.descriptions.filter(d => d.id !== id));
    console.log({...this.descriptions.map(d => d.id)})
  }

  public changeActiveDescriptionHeader = (header: string) => {
    this.descriptions
      .filter(d => d.id === this.activeDescriptionId)[0].header = header;
  }

  public changeActiveDescriptionText = (text: string) => {
    this.descriptions
      .filter(d => d.id === this.activeDescriptionId)[0].text = text;
  }

  public setActiveDescription = (id: number | null) => {
    this.activeDescriptionId = id;
  }

  public getActiveDescription = () => {
    return this.descriptions.filter(d => d.id === this.activeDescriptionId)[0];
  }
}
