import {apiFetch, HTTP_METHODS} from "@/shared/libs";
import { IProduct } from "@/entities";

const URL = 'http://194.58.111.33';

export const getProducts = async () => {
  let products: IProduct[] = [];

  await apiFetch(URL + '/constrspb/group/subgroup/product', {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      products = res.body.products;
    }
  })

  return products;
}
