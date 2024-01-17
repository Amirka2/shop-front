import { groupBy } from 'lodash'

import {ICategory, ISubCategory} from "@/entities";
import {apiFetch, HTTP_METHODS} from "@/shared/libs";

const URL = 'http://194.58.111.33';

interface CreateCategoryProps {
    title: string;
    photo: string;
}

interface CreateSubCategoryProps {
    title: string;
    categoryId: number;
    photo: string;
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

export const createCategory = async (token: string | undefined, { title, photo }: CreateCategoryProps) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    await apiFetch(URL + '/constrspb/group', {
        method: HTTP_METHODS.POST,
        body: {
            name: title,
            groupPhotoLink: photo,
        },
        headers: new Headers(headers)
    }).then(res => res && res.ok)
}

export const createSubCategory = async (token: string | undefined, {title, categoryId, photo}: CreateSubCategoryProps) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    await apiFetch(URL + '/constrspb/group/subgroup', {
        method: HTTP_METHODS.POST,
        body: {
            groupId: categoryId,
            name: title,
            subgroupPhotoLink: photo,
        },
        headers: new Headers(headers)
    }).then(res => res && res.ok)
}

export const groupSubCategories = (subCategories: ISubCategory[]) => {
    return groupBy(subCategories, 'categoryId');
}

export const deleteCategory = async (token: string, id: number) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    await apiFetch(URL + '/constrspb/group/' + id, {
        method: HTTP_METHODS.DELETE,
        headers: new Headers(headers)
    }).then(res => res && res.ok)
}

export const deleteSubCategory = async (token: string, id: number) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    await apiFetch(URL + '/constrspb/group/subgroup/' + id, {
        method: HTTP_METHODS.DELETE,
        headers: new Headers(headers)
    }).then(res => res && res.ok)
}
