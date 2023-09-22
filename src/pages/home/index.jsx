import { Images } from '../../utils/images'
import { PrimaryButton, WatchButton } from '../../components/button'
import { Product } from '../../components/product'

export const Home = () => {
    return <>
        {/* banner section  start here */}
        <section className='container my-6 md:my-24'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 my-auto">
                    <h2 className=' font-heading text-5xl text-primary text-center md:text-left'>TREE.COM</h2>
                    <p className='my-3 text-xl font-semibold leading-[20px] font-content text-justify'>This quote emphasizes the importance of taking action and planting trees for the benefit of the environment.</p>
                    <div className='flex items-center gap-4 justify-center md:justify-start'>
                        <PrimaryButton />
                        <WatchButton />
                    </div>
                </div>

                <div className="col-span-1 mt-6 md:mt-0">
                    <img src={Images.Banner} alt="" />
                </div>
            </div>
        </section>
        {/* banner section end here */}

        {/* abot card section start */}
        <section className='container'>
            <div className='grid md:flex items-center gap-4 justify-center'>
                {/* card one start */}
                <div className='col-span-1 md:w-[250px] shadow-md mt-[-10px] md:mt-[0px] p-2 py-3  md:py-2'>

                    <div className='flex items-center gap-2'>
                        <img src={Images.Logo} style={{ height: "50px", border: "1px solid green", marginTop: "5px" }}
                            className='rounded opacity-90' alt="" />
                        <div className=''>
                            <div className='flex justify-between items-center'>
                                <h3 className=' font-heading text-xl text-primary'>200+</h3>
                                <span className=' font-content font-semibold'>Country</span>
                            </div>
                            <p className='leading-[15px] text-sm font-content text-justify'> asdfalsf asa sdfasd lasdlfjasas fasodfas dasfasdf</p>
                        </div>
                    </div>
                </div>
                {/* card one end */}

                {/* card one start */}
                <div className='col-span-1 md:w-[250px] shadow-md mt-[-10px] md:mt-[0px] p-2 py-3  md:py-2'>
                    <div className='flex items-center gap-2'>
                        <img src={Images.Logo} style={{ height: "50px", border: "1px solid green", marginTop: "5px" }}
                            className='rounded opacity-90' alt="" />
                        <div className=''>
                            <div className='flex justify-between items-center'>
                                <h3 className=' font-heading text-xl text-primary'>300+</h3>
                                <span className=' font-content font-semibold'>International</span>
                            </div>
                            <p className='leading-[15px] text-sm font-content text-justify'> asdfalsf asa sdfasd lasdlfjasas fasodfas dasfasdf</p>
                        </div>
                    </div>
                </div>
                {/* card one end */}

                {/* card one start */}
                <div className='col-span-1 md:w-[250px] shadow-md mt-[-10px] md:mt-[0px] p-2 py-3  md:py-2'>
                    <div className='flex items-center gap-2'>
                        <img src={Images.Logo} style={{ height: "50px", border: "1px solid green", marginTop: "5px" }}
                            className='rounded opacity-90' alt="" />
                        <div className=''>
                            <div className='flex justify-between items-center'>
                                <h3 className=' font-heading text-xl text-primary'>500+</h3>
                                <span className=' font-content font-semibold'>Arrond</span>
                            </div>
                            <p className='leading-[15px] text-sm font-content text-justify'> asdfalsf asa sdfasd lasdlfjasas fasodfas dasfasdf</p>
                        </div>
                    </div>
                </div>
                {/* card one end */}
            </div>
        </section>
        {/* abot card section end */}

        {/* product start desing start here */}
        <div className='bg-gray-100 my-16'>
            <section className='container py-5'>
                <div className='p-5 bg-white'>
                    {/* div header */}
                    <div className='flex items-center justify-between'>
                        <span className=' font-heading text-primary text-md md:text-xl'>Special Product for you</span>
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

                    {/* product list */}
                    <section className='grid grid-cols-2 md:grid-cols-5 gap-4 my-4'>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                    </section>
                </div>
            </section>
        </div>
        {/* product start desing end here */}
    </>
}