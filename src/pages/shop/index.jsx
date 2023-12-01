import { useCallback, useEffect, useState } from "react"
import { NetworkServices } from '../../network/index'
import { Product } from "../../components/product"
import { ProductSidebar } from "../../components/product-sidebar/product.sidebar"
import { ProductLoading } from "../../components/product/loading"
import { networkErrorHandeller, numberToArray } from "../../utils/helper"

export const Shop = () => {

    const size = 10;
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState(false)

    /** fetch product */
    const fetchProduct = useCallback(async () => {
        try {
            setLoading(true)
            const response = await NetworkServices.Product.index(page, size)
            if (response.status === 200) {
                setPagination(true)
                setProducts(response.data.data.data);
                setCount(response.data.data.last_page);
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            networkErrorHandeller(error)
        }
    }, [page])

    /** category has assing product */
    const handleCategory = async (category_id) => {
        setLoading(true)
        const response = await NetworkServices.Category.categoryHasAssignProduct(category_id)
        if (response.status === 200) {
            setProducts(response.data.data.data)
            setPagination(false)
            setLoading(false)
        }
    }

    /** price filter */
    const handlePriceFilter = async (payload) => {
        setLoading(true)
        const response = await NetworkServices.Product.PriceFilter(payload)
        if (response.status === 200) {
            setProducts(response.data.data)
            setPagination(false)
            setLoading(false)
        }
    }

    /** search intial loading product */
    const productSearch = async() => {
        setLoading(true)
        const response = await NetworkServices.Product.ProductSearch({search})
        if (response.status === 200) {
            console.log("response", response.data.data);
            setProducts(response.data.data)
            setPagination(false)
            setLoading(false)
        }
    }


  

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])


    useEffect(()=> {
        productSearch()
    }, [search])

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
                            <input type="text" onfocusout={productSearch} onChange={(e) => setSearch(e.target.value)} className="w-full  border border-primary rounded-md py-1 px-4 md:w-96" placeholder="Search" name="" id="" />
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
                                products.length > 0 ?
                                products.map((product, i) => {
                                    return <Product key={i} {...product} ></Product>
                                }) : <div className="max-w-screen-lg mx-auto pb-10 flex">
                                        <img className=" flex h-screen w-full bg-blue-400 justify-center items-center ml-60 " src="https://static.vecteezy.com/system/resources/thumbnails/009/007/126/small/document-file-not-found-search-no-result-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" alt="" />
                                </div>
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

                    {
                        pagination ? <div className='flex items-center gap-2'>
                            <button
                                onClick={() => setPage(page - 1)}
                                disabled={loading || page === 1}
                            >
                                <span class="mt-[4px] material-symbols-outlined">
                                    chevron_left
                                </span>
                            </button>

                            <button
                            >
                                {
                                    numberToArray(count).map((num, i) => {
                                        return <span className={num === page ? 'bg-green-500 text-white rounded border px-2' : 'border px-2'} onClick={() => setPage(num)}>{num}</span>
                                    })
                                }
                            </button>
                            <button
                                onClick={() => setPage(page + 1)}
                                disabled={loading || products.length < size}
                            >
                                <span class="mt-[4px] material-symbols-outlined">
                                    chevron_right
                                </span>
                            </button>
                        </div> : ""
                    }
                   

                </div>
                {/* product view */}
            </div>
        </section >
    </>
}