import { PrimaryButton, WatchButton } from '../../components/button'
import { Images } from '../../utils/images'

export const Contact = () => {
    return <>
        <section className="container my-12">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* contact information */}
                <div className=" col-span-1">
                    <h5 className=" font-content text-[10px] uppercase font-semibold">Contact in</h5>
                    <h1 className="font-heading text-primary text-xl md:text-3xl">Get In Touch With Us</h1>
                    <p className="my-4 leading-4 text-justify font-content text-gray-400">A Contact Us page is essential to building a brand's website as it allows visitors to contact you easily without leaving their browser. They also give you the opportunity to capture leads and improve customer service. Generally,</p>
                    {/* info card */}
                    <div className=''>
                        {/* card one start */}
                        <div className='col-span-1 md:w-[250px] shadow-md mt-[-10px] md:mt-[0px] p-2 py-3  md:py-2'>
                            <div className='flex items-center gap-2'>
                                <img src={Images.Location} style={{ height: "50px", border: "1px solid green", marginTop: "5px" }}
                                    className='rounded opacity-90 p-3 ' alt="" />
                                <div className=''>
                                    <h3 className=' font-heading text-sm text-primary'>Location</h3>
                                    <p className='leading-[15px] text-sm font-content text-justify'>Commercial Office For Rent Near Lotus Kamal Tower</p>
                                </div>
                            </div>
                        </div>
                        {/* card one end */}

                        {/* card one start */}
                        <div className='col-span-1 md:w-[250px] shadow-md mt-[-10px] md:mt-[0px] p-2 py-3  md:py-2'>
                            <div className='flex items-center gap-2'>
                                <img src={Images.Email} style={{ height: "50px", border: "1px solid green", marginTop: "5px" }}
                                    className='rounded opacity-90 p-3 ' alt="" />
                                <div className=''>
                                    <h3 className=' font-heading text-sm text-primary'>Email</h3>
                                    <p className='leading-[15px] text-sm font-content text-justify'>bokhtiar.swe@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        {/* card one end */}

                        {/* card one start */}
                        <div className='col-span-1 md:w-[250px] shadow-md mt-[-10px] md:mt-[0px] p-2 py-3  md:py-2'>
                            <div className='flex items-center gap-2'>
                                <img src={Images.Phone} style={{ height: "50px", border: "1px solid green", marginTop: "5px" }}
                                    className='rounded opacity-90 p-3 ' alt="" />
                                <div className=''>
                                    <h3 className=' font-heading text-sm text-primary'>Location</h3>
                                    <p className='leading-[15px] text-sm font-content text-justify'>+880 16318-107361</p>
                                </div>
                            </div>
                        </div>
                        {/* card one end */}
                    </div>
                </div>

                {/* contact form */}
                <div className='bg-primary rounded-md'>
                    <div className='p-12'>
                        <input type="text" className=' border border-primary py-2 w-full px-4 rounded-md mb-4 font-content' placeholder='Name' name="" id="" />
                        <input type="text" className=' border border-primary py-2 w-full px-4 rounded-md mb-4 font-content' placeholder='E-mail' name="" id="" />
                        <input type="text" className=' border border-primary py-2 w-full px-4 rounded-md mb-4 font-content' placeholder='Phone' name="" id="" />
                        <textarea name="" id="" cols="30" rows="4" className='w-full rounded-md px-4 py-1 font-content' placeholder='Message'></textarea>
                        <input type="submit" className='btn px-12 w-full mt-3 bg-gray-300 border border-none  font-content ' name="" id="" />
                    </div>
                </div>
            </section>


        </section>

        {/* service section */}
        <section className='container my-5'>
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

    </>
}