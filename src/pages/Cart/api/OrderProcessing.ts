import {IOrder} from "@/entities";
import axios from "axios";
import {useStores} from "@/shared/hooks";

export const processOrder = function (order: IOrder) {
    return axios.post('http://45.130.146.93:12344/constrspb/mail/purchase', {
        ...order
    })

}
