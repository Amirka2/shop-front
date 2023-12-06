import {apiFetch, HTTP_METHODS} from "@/shared/libs";
import {ISubCategory} from "@/entities";

const URL = 'http://194.58.111.33';

export const getSubCategories = async () => {
    let body: any;
    let subGroups: ISubCategory[] = [];

    await apiFetch(URL + '/constrspb/group/subgroup', {
        method: HTTP_METHODS.GET,
    }).then(res => {
        if (res && res.ok) {
            body = res.body;
            subGroups = body.subgroups;
        }
    })
    return subGroups;
}
