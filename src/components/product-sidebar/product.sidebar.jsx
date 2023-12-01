import { NetworkServices } from '../../network/index'
import { useCallback, useEffect, useState } from "react"
import { networkErrorHandeller } from "../../utils/helper"
import { MenuLoading } from './loading'

export const ProductSidebar = (props) => {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(10000)
    const [categories, setCategories] = useState()

    /** sidebar data pass for category id for category has assign product */
    const handleCategory = (category_id) => {
        props.onChildCategoryId(category_id)
    }

    /** price filter */
    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            min_price: minPrice,
            max_price: maxPrice
        }
        props.onChildPriceFilter(payload)
    }

    /** category list */
    const fetchCategory = useCallback(async () => {
        try {
            const response = await NetworkServices.Category.index()
            if (response.status === 200) {
                setCategories(response.data.data)
            }
        } catch (error) {
            networkErrorHandeller(error)
        }
    }, [])

    useEffect(() => {
        fetchCategory()
    }, [])

    return <section className="shadow">
        <h4 className=" font-heading text-primary py-3 px-2">Filter</h4>
        <hr class="mt-[-10px] border-gray-200 sm:mx-auto dark:border-gray-700" />

        {/* category */}
        <section className="my-4">
            <h4 className=" font-heading text-primary py-3 px-2">Category</h4>
            <div class="flex flex-col w-full">
                {
                    categories ?
                        categories.map((category, i) => {
                            return <button class="group border border-gray-100">
                                <div class="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
                                    <span class="truncate">{category.category_name}</span>
                                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                                    {
                                        category.childs.length > 0 ?
                                            category.childs.map((cat, i) => {
                                                return <span onClick={() => handleCategory(cat.category_id)} class="flex items-center h-8 px-4 text-sm hover:bg-gray-200" href="">{cat.category_name}</span>
                                            })
                                            : "Not Yet Data"
                                    }

                                </div>
                            </button>
                        }) : <div className='px-2'>
                            <MenuLoading />
                            <MenuLoading />
                            <MenuLoading />
                            <MenuLoading />
                            <MenuLoading />
                            <MenuLoading />
                            <MenuLoading />
                        </div>
                }
            </div>
        </section>

        <hr class="mt-[-10px] border-gray-200 sm:mx-auto dark:border-gray-700" />

        {/* price filter */}
        <h4 className=" font-heading text-primary py-3 px-2">Pricing</h4>
        <form onSubmit={handleSubmit} className='px-2'>
            <div className="flex gap-3">
                <input type="number" onChange={(e) => setMinPrice(e.target.value)} className="w-20 border border-primary rounded-md px-2" placeholder="0" name="" id="" />
                <input type="number" onChange={(e) => setMaxPrice(e.target.value)} className="w-20 border border-primary rounded-md px-2" placeholder="1000" name="" id="" />
            </div>
            <button type='submit' className="w-full bg-primary rounded-md my-2 text-white font-content">Pricing</button>
        </form>
    </section>
}