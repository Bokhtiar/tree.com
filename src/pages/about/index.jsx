import { PrimaryButton, WatchButton } from '../../components/button'
import { Images } from '../../utils/images'
export const About = () => {
    return <>
        <section className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className=' col-span-1'>
                    <img src={Images.Delivery1} className='md:h-[450px] h-[250px] w-full rounded' alt="" />
                </div>
                <div className='col-span-1 md:my-auto my-5'>
                    <h2 className=' font-heading text-center md:text-left text-2xl md:text-3xl text-primary'>Our Service & Benefits</h2>
                    <p className=' text-justify font-content leading-4 py-3'>In botany, a tree is a perennial plant with an elongated stem, or trunk, usually supporting branches and leaves. In some usages, the definition of a tree</p>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className=' col-span-1 flex items-center gap-1 place-content-center '>
                            <span class=" text-gray-500 material-symbols-outlined">
                                copy_all
                            </span>
                            <span className=' text-gray-500 font-content text-sm font-semibold'>asdfasdf asfasdfasdfasf adf</span>
                        </div>
                        {/* end of row */}
                        <div className=' col-span-1 flex items-center gap-1 place-content-center'>
                            <span class=" text-gray-500 material-symbols-outlined">
                                copy_all
                            </span>
                            <span className=' text-gray-500 font-content text-sm font-semibold'>asdfasdf asfasdfasdfasf adf</span>
                        </div>
                        {/* end of row */}

                        <div className=' col-span-1 flex items-center gap-1 place-content-center'>
                            <span class=" text-gray-500 material-symbols-outlined">
                                copy_all
                            </span>
                            <span className=' text-gray-500 font-content text-sm font-semibold'>asdfasdf asfasdfasdfasf adf</span>
                        </div>
                        {/* end of row */}

                        <div className=' col-span-1 flex items-center gap-1 place-content-center'>
                            <span class=" text-gray-500 material-symbols-outlined">
                                copy_all
                            </span>
                            <span className=' text-gray-500 font-content text-sm font-semibold'>asdfasdf asfasdfasdfasf adf</span>
                        </div>
                        {/* end of row */}
                        <div className=' col-span-1 flex items-center gap-1 place-content-center'>
                            <span class=" text-gray-500 material-symbols-outlined">
                                copy_all
                            </span>
                            <span className=' text-gray-500 font-content text-sm font-semibold'>asdfasdf asfasdfasdfasf adf</span>
                        </div>
                        {/* end of row */}
                        <div className=' col-span-1 flex items-center gap-1 place-content-center'>
                            <span class=" text-gray-500 material-symbols-outlined">
                                copy_all
                            </span>
                            <span className=' text-gray-500 font-content text-sm font-semibold'>asdfasdf asfasdfasdfasf adf</span>
                        </div>
                        {/* end of row */}


                    </div>
                    <div className='my-3 flex justify-center md:justify-start gap-2'>
                        <PrimaryButton />
                        <WatchButton />
                    </div>
                </div>
            </div>
        </section>

        {/* gallary */}
        <section className='container my-5'>
            <h3 className=' font-heading text-primary text-3xl my-4 flex'>Our Garden Photos  </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-0'>
                <img src={Images.G1} className='w-full md:h-64 h-32  md:hover:scale-125 transition delay-150' alt="" />
                <img src={Images.G2} className='w-full md:h-64 h-32  md:hover:scale-125 transition delay-150 ' alt="" />
                <img src={Images.G3} className='w-full md:h-64 h-32  md:hover:scale-125 transition delay-150 ' alt="" />
                <img src={Images.G4} className='w-full md:h-64 h-32  md:hover:scale-125 transition delay-150 ' alt="" />
                <img src={Images.G5} className='w-full md:h-64 h-32  md:hover:scale-125 transition delay-150 ' alt="" />
                <img src={Images.G6} className='w-full md:h-64 h-32  md:hover:scale-125 transition delay-150 ' alt="" />
                <img src={Images.G7} className='w-full md:h-64 h-32  md:hover:scale-125 transition delay-150 ' alt="" />
                <img src={Images.G8} className='w-full md:h-64 h-32  md:hover:scale-125 transition delay-150 ' alt="" />        
            </div>    
        </section>
        
    </>
}