import {groupBy} from "lodash";

import {apiFetch, HTTP_METHODS} from "@/shared/libs";
import {IManufacturer, IProduct} from "@/entities";

interface ManufacturerGroupModel {
  manufacturer: IManufacturer;
  products: IProduct[];
  count: number;
}

export const getManufacturers = async (subCategoryId: number) => {
  let response: ManufacturerGroupModel[] = [];

  await apiFetch('/constrspb/group/subgroup/' + subCategoryId + '/products', {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      response = res.body.manufacturerGroupModels;
    }
  })

  return Promise.resolve(response);
}
