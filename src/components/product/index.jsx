import { Link } from 'react-router-dom'
import { Images } from '../../utils/images'
import { useCart } from '../../contextApi/cartContext'

export const Product = (props) => {


    /** add to card */
    const add_to_card = (product) => {
        var cartProducts = JSON.parse(localStorage.getItem('carts')) || []
        cartProducts.push(product);
        console.log(cartProducts);
        localStorage.setItem("carts", JSON.stringify(cartProducts));
    }    

    const { addToCart } = useCart();

    const handleAddToCart = (item) => {
        addToCart(item);
    };
    


    const product1 = {
        id: 1,
        name: "mango tree",
        price: "100",
        qty: 1,
    }

    const product2 = {
        id: 2,
        name: "Orange tree",
        price: "200",
        qty: 1,
    }

    return <>
        {/* https://www.youtube.com/watch?v=H8OjG7ChqoE&ab_channel=ThapaTechnical */}
        <div className='shadow rounded-xl my-2 relative bg-white'>
            <img src={Images.Logo} style={{ width: "100%" }} className='mx-auto h-42' alt="" />
            <div className='px-4  '>
                <h3 className=' font-heading md:text-[13px] text-[11px] text-primary'><Link to="/product/show/1">Mango Tree</Link></h3>

                <div className="flex items-center space-x-1 md:py-1 py-2">
                    <svg className="w-3 h-3 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-3 h-3 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-3 h-3 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-3 h-3 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-3 h-3 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                </div>

                <div className='flex items-center justify-between mb-3'>
                    <h3 className=' font-heading md:text-[11px] text-[8px]'>400TK</h3>
                    <span onClick={() => handleAddToCart(product1)} className=' border rounded-lg px-2 font-heading md:text-[11px] md: text-[8px] py-1 border-primary'>Add To Card</span>
                </div>

                {/* love */}
                <p onClick={() => handleAddToCart(product2)} className='absolute right-0 inset-y-0 p-3  '>
                    {
                        props.love === "true" ? <img src={Images.Love} className='h-6 w-6' alt="" /> : <span class=" text-gray-500 material-symbols-outlined">
                            favorite
                        </span>
                    }
                </p>
            </div>
        </div>
    </>
}