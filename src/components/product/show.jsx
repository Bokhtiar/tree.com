import { Link } from "react-router-dom"
import { Images } from "../../utils/images"
import { Product } from "."

export const ProductShow = () => {
    return <>
        <section className="">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-3 container">
                {/* product image */}
                <div className=" col-span-1  md:my-5 rounded-lg">
                    <img src="https://previews.123rf.com/images/photoart23d/photoart23d1303/photoart23d130300031/18512763-tree-top-view.jpg" alt="" className="mx-auto md:h-96  h-72 rounded-2xl" />
                    <div className="grid grid-cols-4 md:grid-cols-7 gap-4 py-5 justify-center md:flex md:px-14">
                        <img src={Images.Logo} alt="" className="mx-auto md:h-14 h-14 w-28  border border-primary rounded-md hover:bg-primary" />
                        <img src={Images.Logo} alt="" className="mx-auto md:h-14 h-14 w-28  border border-primary rounded-md hover:bg-primary" />
                        <img src={Images.Logo} alt="" className="mx-auto md:h-14 h-14 w-28  border border-primary rounded-md hover:bg-primary" />
                        <img src={Images.Logo} alt="" className="mx-auto md:h-14 h-14 w-28  border border-primary rounded-md hover:bg-primary" />
                        <img src={Images.Logo} alt="" className="mx-auto md:h-14 h-14 w-28  border border-primary rounded-md hover:bg-primary" />
                        <img src={Images.Logo} alt="" className="mx-auto md:h-14 h-14 w-28  border border-primary rounded-md hover:bg-primary" />
                    </div>
                </div>

                {/* product image */}
                <div className=" col-span-1 md:my-5">
                    <p className="flex items-center mb-4">
                        <span className="text-gray-400 font-content text-sm">Home/</span>
                        <span className="text-gray-400 font-content px-1 text-sm"> Product/</span>
                        <span className="text-gray-600 font-content font-bold text-sm"> Mango tree</span>
                    </p>
                    <h3 className=" font-heading text-2xl text-primary">Mango Tree</h3>

                    <h4 className=" font-heading text-primary">400 TK</h4>

                    <p className="flex items-center font-content my-5">
                        <span class="material-symbols-outlined text-gray-400">
                            category
                        </span>
                        <span>Mango Tree</span>
                    </p>

                    <Link to="" className='font-bold border rounded-lg px-4 font-content md:text-[12px] text-[12px] py-1 border-primary hover:bg-primary hover:text-white transition delay-150 text-gray-600'>Add To Card</Link>
                    <h4 className="mt-5 font-heading text-gray-700 ">Product Details</h4>
                    <p className="text-gray-500 text-justify font-content text-sm">
                        Product Detail Pages are the pages that buyers see when they search for items on Amazon. Each product has its own page with detailed product information (exact product name, model number, offer price, product photograph, ASIN, product details, and more) and customer reviews. Barcode information is not included on this page.
                        To create a new Product Detail page, the seller must be registered with a Professional Seller account. Detail pages become a permanent part of the Amazon catalog, and sellers can create listings for these products on Amazon.
                    </p>
                </div>
            </section>

            {/* about treee */}
            <section className="container">
                <h4 className=" font-heading text-primary text-xl font-bold my-5">How To Plant Mango Tree:</h4>
                <p className=" font-content text-justify">
                    <p className="text-[14px] text-justify">কমলা গাছ চাষ করা সহজ এবং আপনার নিজের স্বাদিষ্ট কমলা উত্পাদনে আনন্দদায়ক অভিজ্ঞতা দেয়। একটি কমলা গাছ চাষ করতে নিম্নলিখিত পদক্ষেপগুলি অনুসরণ করুন:</p>
                    <h2 className=" text-primary font-semibold mt-3"> 1. উপযুক্ত স্থান নির্বাচন করুন:</h2>
                    <p className="text-justify">পূর্ণ সূর্যালোকে অবস্থান নির্বাচন করুন। কমলা গাছের জন্য প্রতিদিন অন্তত 6-8 ঘণ্টা সরাসরি সূর্যালোকের প্রয়োজন।
                        সেচ্ছাসেচ্ছিক এবং স্লাইটলি অ্যাসিডিক (পিএইচ প্রায় 6.0-6.5) মাটি নিশ্চিত করুন। যদি মাটি খুবই ক্লেই অথবা খুবই স্যান্ডি হয়, তবে এটি সম্পাদন করতে হতে পারে।
                        2. একটি সুস্থ গাছ কেনার জন্য:

                        একটি ভাল কমলা গাছ নিয়ে একটি বিশ্বস্ত নার্সারি বা বাগান সেন্টার থেকে কেনা যাক। আপনি কোন ধরণের কমলা চান, সেটি বিচার করুন, উদাহরণস্বরূপ, ভ্যালেন্সিয়া, নেভেল, বা ব্লাড কমলা।
                        3. প্রস্তুত চিত্র করুন:

                        গাছ চাষার বাকস্পেসের দ্বিগুণ চাওড়ি পরিমাপের একটি গর্ভ করুন এবং সেটির সাথে সমান গভীরভাবে খুদাই করুন।
                        গভীরে পেঁচান, গাছের জড়ো বলগুলি সংক্রান্ত কোনও ক্লান্ত অথবা গন্ধপূর্ণ করার সাথে হানা খাওয়ানোর চেষ্টা করবেন না।
                        4. গাছ চাষ করুন:

                        গাছটি পাট থেকে সাবধানভাবে নেওয়া হোক, গোড়া না করে জড়ের স্থানে ক্ষতি করতে না দিন।
                        গাছটি খোদাইর গর্ভের মাঝে রাখুন, নিশ্চিত করুন যেন জড়োর শীর্ষ চারপাশের মাটি পরিবর্তন না করে।
                        5. ফিরে আসুন এবং পানি দিন:

                        আপনি যত্নশীলভাবে গাছটি সম্পূর্ণ জড়ালে নিয়ে আসতে গিয়ে, এটি তার সাথে কোন জড়ো ক্ষতি করবেন না সেটা নিশ্চিত করুন।
                        প্ল্যান্টিং হোলটি মাটি দিয়ে ভরাড় দিন। এটি মাটি নির্ব
                    </p>
                    <h2 className=" text-primary font-semibold mt-3"> 1. উপযুক্ত স্থান নির্বাচন করুন:</h2>
                    <p className="text-justify">পূর্ণ সূর্যালোকে অবস্থান নির্বাচন করুন। কমলা গাছের জন্য প্রতিদিন অন্তত 6-8 ঘণ্টা সরাসরি সূর্যালোকের প্রয়োজন।
                        সেচ্ছাসেচ্ছিক এবং স্লাইটলি অ্যাসিডিক (পিএইচ প্রায় 6.0-6.5) মাটি নিশ্চিত করুন। যদি মাটি খুবই ক্লেই অথবা খুবই স্যান্ডি হয়, তবে এটি সম্পাদন করতে হতে পারে।
                        2. একটি সুস্থ গাছ কেনার জন্য:

                        একটি ভাল কমলা গাছ নিয়ে একটি বিশ্বস্ত নার্সারি বা বাগান সেন্টার থেকে কেনা যাক। আপনি কোন ধরণের কমলা চান, সেটি বিচার করুন, উদাহরণস্বরূপ, ভ্যালেন্সিয়া, নেভেল, বা ব্লাড কমলা।
                        3. প্রস্তুত চিত্র করুন:

                        গাছ চাষার বাকস্পেসের দ্বিগুণ চাওড়ি পরিমাপের একটি গর্ভ করুন এবং সেটির সাথে সমান গভীরভাবে খুদাই করুন।
                        গভীরে পেঁচান, গাছের জড়ো বলগুলি সংক্রান্ত কোনও ক্লান্ত অথবা গন্ধপূর্ণ করার সাথে হানা খাওয়ানোর চেষ্টা করবেন না।
                        4. গাছ চাষ করুন:

                        গাছটি পাট থেকে সাবধানভাবে নেওয়া হোক, গোড়া না করে জড়ের স্থানে ক্ষতি করতে না দিন।
                        গাছটি খোদাইর গর্ভের মাঝে রাখুন, নিশ্চিত করুন যেন জড়োর শীর্ষ চারপাশের মাটি পরিবর্তন না করে।
                        5. ফিরে আসুন এবং পানি দিন:

                        আপনি যত্নশীলভাবে গাছটি সম্পূর্ণ জড়ালে নিয়ে আসতে গিয়ে, এটি তার সাথে কোন জড়ো ক্ষতি করবেন না সেটা নিশ্চিত করুন।
                        প্ল্যান্টিং হোলটি মাটি দিয়ে ভরাড় দিন। এটি মাটি নির্ব
                    </p>
                    <h2 className=" text-primary font-semibold mt-3"> 1. উপযুক্ত স্থান নির্বাচন করুন:</h2>
                    <p className="text-justify">পূর্ণ সূর্যালোকে অবস্থান নির্বাচন করুন। কমলা গাছের জন্য প্রতিদিন অন্তত 6-8 ঘণ্টা সরাসরি সূর্যালোকের প্রয়োজন।
                        সেচ্ছাসেচ্ছিক এবং স্লাইটলি অ্যাসিডিক (পিএইচ প্রায় 6.0-6.5) মাটি নিশ্চিত করুন। যদি মাটি খুবই ক্লেই অথবা খুবই স্যান্ডি হয়, তবে এটি সম্পাদন করতে হতে পারে।
                        2. একটি সুস্থ গাছ কেনার জন্য:

                        একটি ভাল কমলা গাছ নিয়ে একটি বিশ্বস্ত নার্সারি বা বাগান সেন্টার থেকে কেনা যাক। আপনি কোন ধরণের কমলা চান, সেটি বিচার করুন, উদাহরণস্বরূপ, ভ্যালেন্সিয়া, নেভেল, বা ব্লাড কমলা।
                        3. প্রস্তুত চিত্র করুন:

                        গাছ চাষার বাকস্পেসের দ্বিগুণ চাওড়ি পরিমাপের একটি গর্ভ করুন এবং সেটির সাথে সমান গভীরভাবে খুদাই করুন।
                        গভীরে পেঁচান, গাছের জড়ো বলগুলি সংক্রান্ত কোনও ক্লান্ত অথবা গন্ধপূর্ণ করার সাথে হানা খাওয়ানোর চেষ্টা করবেন না।
                        4. গাছ চাষ করুন:

                        গাছটি পাট থেকে সাবধানভাবে নেওয়া হোক, গোড়া না করে জড়ের স্থানে ক্ষতি করতে না দিন।
                        গাছটি খোদাইর গর্ভের মাঝে রাখুন, নিশ্চিত করুন যেন জড়োর শীর্ষ চারপাশের মাটি পরিবর্তন না করে।
                        5. ফিরে আসুন এবং পানি দিন:

                        আপনি যত্নশীলভাবে গাছটি সম্পূর্ণ জড়ালে নিয়ে আসতে গিয়ে, এটি তার সাথে কোন জড়ো ক্ষতি করবেন না সেটা নিশ্চিত করুন।
                        প্ল্যান্টিং হোলটি মাটি দিয়ে ভরাড় দিন। এটি মাটি নির্ব
                    </p>
                </p>
            </section>



            {/* releted product */}
            <div className='bg-gray-100 my-16'>
                <section className='container py-16'>
                    <div className='p-5 bg-white py-4'>
                        {/* div header */}
                        <div className='flex items-center justify-between'>
                            <span className=' font-heading text-primary text-md md:text-xl py-5'>Suggested Product for you</span>
                        </div>

                        {/* product list */}
                        <section className='grid grid-cols-2 md:grid-cols-5 gap-4 my-4'>
                            <Product love="true"></Product>
                            <Product love="false"></Product>
                            <Product love="true"></Product>
                            <Product love="false"></Product>
                            <Product love="false"></Product>
                            <Product love="false"></Product>
                            <Product love="false"></Product>
                            <Product love="false"></Product>
                            <Product love="false"></Product>
                        </section>
                    </div>
                </section>
            </div>
        </section>
    </>
}