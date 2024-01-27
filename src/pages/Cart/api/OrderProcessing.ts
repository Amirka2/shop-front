import axios from "axios";

import {IOrder} from "@/entities";
import { URL } from '@/shared/constants';

export const processOrder = function (order: IOrder) {
    return axios.post(URL + '/constrspb/mail/purchase', {
        ...order
    })
}
