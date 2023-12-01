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

    return <section className="shadow px-2">
        <h4 className=" font-heading text-primary py-3">Filter</h4>
        <hr class="mt-[-10px] border-gray-200 sm:mx-auto dark:border-gray-700" />

        {/* category */}
        <section className="my-4">
            <h4 className=" font-heading text-primary py-3">Category</h4>

            <div className="join join-vertical w-full">
                {
                    categories ?
                        categories.map((category, i) => {
                            return <div className="collapse collapse-arrow  border border-base-300 my-2 ">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title h-2 text-sm font-content font-semibold">
                                    {category.category_name}
                                </div>
                                <div className="collapse-content">
                                    {
                                        category.childs.map((cat, i) => {
                                            return <li className=' cursor-pointer' onClick={() => handleCategory(cat.category_id)} > {cat.category_name} </li>
                                        })
                                    }
                                </div>
                            </div>
                        })
                        : <>
                            <MenuLoading />
                            <MenuLoading />
                            <MenuLoading />
                            <MenuLoading />
                            <MenuLoading />
                            <MenuLoading />
                            <MenuLoading />
                        </>

                }
            </div>
        </section>

        <hr class="mt-[-10px] border-gray-200 sm:mx-auto dark:border-gray-700" />

        {/* price filter */}
        <h4 className=" font-heading text-primary py-3">Pricing</h4>
        <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
            <input type="number" onChange={(e) => setMinPrice(e.target.value)} className="w-20 border border-primary rounded-md px-2" placeholder="0" name="" id="" />
            <input type="number" onChange={(e) => setMaxPrice(e.target.value)} className="w-20 border border-primary rounded-md px-2" placeholder="1000" name="" id="" />
        </div>
        <button type='submit' className="w-full bg-primary rounded-md my-2 text-white font-content">Pricing</button>
        </form>
    </section>
}