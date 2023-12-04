import {publicRequest} from '../config/axios.config'
/* list of resource */
export const index = async (page, size) => {
    return await publicRequest.get(`/products?page=${page}&size=${size}`);
};

/* resource show */
export const show = async (id) => {
    return await publicRequest.get(`/product/${id}`)
}

/** price filter */
export const PriceFilter = async(payload,page) => {
    return await publicRequest.post(`product/price/filter?page=${page}`, payload)
}

/** product search */
export const ProductSearch = async(query, page, size) =>{
    return await publicRequest.post(`product/serach?page=${page}`, query)
}
