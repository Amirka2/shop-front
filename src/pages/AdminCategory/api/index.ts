import {ICategory, ISubCategory} from "@/entities";
import {apiFetch, HTTP_METHODS} from "@/shared/libs";

const URL = 'http://194.58.111.33';

interface CreateCategoryProps {
    title: string;
}

interface CreateSubCategoryProps {
    title: string;
    categoryId: number;
}

export const getCategories = async () => {
    let categories: ICategory[] = [];
    await apiFetch(URL + '/constrspb/group/', {
        method: HTTP_METHODS.GET,
    }).then(res => {
        if (res && res.ok) {
            const backCategories = res.body.groups;
            categories = backCategories.map((c: { groupPhotoLink: string; }) => ({
                ...c,
                photo: c.groupPhotoLink,
            }));

            return categories
        }
    })
    return categories;
}

export const getSubCategories = async () => {
    let subCategories: ISubCategory[] = [];
    await apiFetch(URL + '/constrspb/group/subgroup/', {
        method: HTTP_METHODS.GET,
    }).then(res => {
        if (res && res.ok) {
            const backCategories = res.body.subgroups;
            subCategories = backCategories.map((c: { subgroupPhotoLink: string; groupId: number; }) => ({
                ...c,
                categoryId: c.groupId,
                photo: c.subgroupPhotoLink,
            }));

            return subCategories
        }
    })
    return subCategories;
}

export const createCategory = ({title}: CreateCategoryProps): void => {
    console.log(title);
}

export const createSubCategory = ({title, categoryId}: CreateSubCategoryProps): void => {
    console.log(title, categoryId);
}
