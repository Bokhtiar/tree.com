import { Link } from "react-router-dom"
import { Images } from "../../utils/images"

export const Footer = () => {
    return <>
        <section className="bg-green-50">
            <footer className=" md:py-20 py-10  text-base-content container">

                <div className="grid grid-cols-2 md:grid-cols-4 justify-between   ">
                    <aside className="mx-auto col-span-4 md:col-span-1">
                        <img src={Images.Logo} className="h-16 mx-auto" alt="" />
                        <p className=" font-content font-semibold text-center">Tree.com <br />Providing reliable tech since 1992</p>
                    </aside>
                    <div className=" col-span-1 my-5 md:my-0">
                        <header className="font-heading text-primary">Services</header>
                        <ul className="">
                            <li>
                                <Link to="/" className=" font-content">Branding</Link>
                            </li>
                            <li>
                                <Link to="/" className=" font-content">Design</Link>
                            </li>
                            <li>
                                <Link to="/" className=" font-content">Marketing</Link>
                            </li>
                            <li>
                                <Link to="/" className=" font-content">Advertisement</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1 my-5 md:my-0">
                        <header className="font-heading text-primary">Company</header>
                        <ul>
                            <li>
                                <Link to="/" className=" font-content">Branding</Link>
                            </li>
                            <li>
                                <Link to="/" className=" font-content">Design</Link>
                            </li>
                            <li>
                                <Link to="/" className=" font-content">Marketing</Link>
                            </li>
                            <li>
                                <Link to="/" className=" font-content">Advertisement</Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" col-span-1 my-5 md:my-0">
                        <header className="font-heading text-primary">Legal</header>
                        <ul>
                            <li>
                                <Link to="/" className=" font-content">Branding</Link>
                            </li>
                            <li>
                                <Link to="/" className=" font-content">Design</Link>
                            </li>
                            <li>
                                <Link to="/" className=" font-content">Marketing</Link>
                            </li>
                            <li>
                                <Link to="/" className=" font-content">Advertisement</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </footer>




            <div className="">
                <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700" />
                <span class="text-primary text-center font-content block text-sm text-gray-500 sm:text-center dark:text-gray-400 py-3">© 2023 <a href="https://flowbite.com/" class="hover:underline">Bokhtiar</a>. All Rights Reserved.</span>

            </div>



        </section>
    </>
}