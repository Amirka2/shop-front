import {apiFetch, HTTP_METHODS} from "@/shared/libs";
import {ICategory} from "@/entities";

const URL = 'http://194.58.111.33';

export const getCategories = async () => {
    let body: any;
    let groups: ICategory[] = [];

    await apiFetch(URL + '/constrspb/group', {
        method: HTTP_METHODS.GET,
    }).then(res => {
        if (res && res.ok) {
            body = res.body;
            groups = body.groups;
        }
    })

    return groups;
}
