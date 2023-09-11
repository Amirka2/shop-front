import {IOrder} from "@/entities";
import axios from "axios";

export const processOrder = function (order: IOrder) {
    console.log({...order});
    axios.post('http://45.130.146.93:12344/constrspb/mail/purchase', {
        ...order
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
