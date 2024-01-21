import {IOrder} from "@/entities";
import {apiFetch, HTTP_METHODS} from "@/shared/libs";

export const processOrder = function (order: IOrder) {
    return apiFetch('/constrspb/mail/purchase', {
        method: HTTP_METHODS.POST,
        body: order
    })
}
