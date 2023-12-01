import { useState } from "react"
import { NetworkServices } from '../../network/index'
import { Product } from "../../components/product"
import { ProductSidebar } from "../../components/product-sidebar/product.sidebar"
import { ProductLoading } from "../../components/product/loading"

export const Shop = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    /** category has assing product */
    const handleCategory = async (category_id) => {
        setLoading(true)
        const response = await NetworkServices.Category.categoryHasAssignProduct(category_id)
        if (response.status === 200) {
            setProducts(response.data.data.data)
            setLoading(false)
        }
    }

    /** price filter */
    const handlePriceFilter = async (payload) => {
        setLoading(true)
        const response = await NetworkServices.Product.PriceFilter(payload)
        if (response.status === 200) {
            setProducts(response.data.data)
            setLoading(false)
        }
             
    }


    return <>
        <section className="container">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-5">
                <div className="md:col-span-1">
                    <ProductSidebar onChildPriceFilter={handlePriceFilter} onChildCategoryId={handleCategory} />
                </div>
                {/* sidebar end */}
                <div className="md:col-span-4">
                    <div className='flex items-center justify-between'>
                        {/* <span className=' font-heading text-primary text-md md:text-xl'>Special Product for you</span> */}

                        <div className="flex">
                            <input type="text" className="w-full  border border-primary rounded-md py-1 px-4 md:w-96" placeholder="Search" name="" id="" />
                            <button className="ml-[-35px] text-primary mt-2"><span class="material-symbols-outlined">
                                search
                            </span></button>
                        </div>

                        <div className='flex items-center gap-1 text-primary'>
                            <span class="material-symbols-outlined">
                                apps
                            </span>
                            <span class="material-symbols-outlined">
                                window
                            </span>
                            <span class="material-symbols-outlined">
                                grid_view
                            </span>
                        </div>
                    </div>
                    <section className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                        {
                            !loading ?
                                products.map((product, i) => {
                                    return <Product key={i} {...product} ></Product>
                                })
                                : <>
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                    <ProductLoading />
                                </>
                        }
                    </section>
                </div>
                {/* product view */}
            </div>
        </section >
    </>
}