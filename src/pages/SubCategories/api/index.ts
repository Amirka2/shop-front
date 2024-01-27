import {apiFetch, HTTP_METHODS} from "@/shared/libs";
import {ISubCategory} from "@/entities";
import {BASE_URL} from "@/shared/constants";

export const getSubCategories = async (groupId: number) => {
    let body: any;
    let subGroups: ISubCategory[] = [];

    await apiFetch(`/constrspb/group/${groupId}/subgroups`, {
        method: HTTP_METHODS.GET,
    }).then(res => {
        if (res && res.ok) {
            body = res.body;
            subGroups = body.subgroups;
        }
    })
    return subGroups;
}
