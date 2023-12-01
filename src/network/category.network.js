import { publicRequest } from '../config/axios.config'

/* list of resource */
export const index = async () => {
    return await publicRequest.get(`/categories`);
};

/** category has assign product */
export const categoryHasAssignProduct = async(category_id) => {
    return await publicRequest.get(`/category/product/${category_id}`);
}

