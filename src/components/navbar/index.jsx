import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../utils/images'


export const Navbar = () => {

  const [navBg, setNavBg] = useState(false);
  console.log("s", navBg);
  const changeNavBg = () => {
    window.scrollY >= 300 ? setNavBg(true) : setNavBg(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])

  return <>
    <div className="bg-base-100 sticky top-0 z-50">
      <div className={navBg === true ? " bg-green-50" : ""}>
        <div className='navbar container'>
          {/* responsive navbar start */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="" className='font-content font-semibold'>Home</Link></li>
                <li><Link to="shop" className='font-content font-semibold'>Shop </Link></li>
                <li><Link to="about" className='font-content font-semibold'>About </Link></li>
                <li><Link to="contact" className='font-content font-semibold'>Contact </Link></li>
              </ul>
            </div>
            <Link className="">
              <img src={Images.Logo} alt="" style={{ height: "45px", width: "60px" }} />
            </Link>
          </div>
          {/* responsive navbar end */}

          {/* all divice navbar start */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="" className='font-content font-semibold'>Home</Link></li>
              <li><Link to="shop" className='font-content font-semibold'>Shop </Link></li>
              <li><Link to="about" className='font-content font-semibold'>About </Link></li>
              <li><Link to="contact" className='font-content font-semibold'>Contact </Link></li>
            </ul>
          </div>
          {/* all divice navbar end */}

          <div className="navbar-end mt-1">
            <div className="flex items-center gap-4">

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                  <div className="indicator">
                    <Link to="">
                      <img src={Images.Love} className='h-6 w-6' alt="" />
                      <span className="badge badge-sm indicator-item bg-primary text-white p-1">8</span>
                    </Link>
                  </div>
                </label>
              </div>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                  <div className="indicator">
                    <Link to="">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      <span className="badge badge-sm indicator-item bg-primary text-white p-1">4</span>
                    </Link>
                  </div>
                </label>
              </div>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                  <div className="w-10 rounded-full">
                    <span class="material-symbols-outlined">
                      account_circle
                    </span>
                    
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li><Link to="">Settings</Link></li>
                  <li><Link to="">Logout</Link></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </>
}


// <div className="">
//   <div className='flex items-center justify-between'>
//     {/* <span className=' font-heading text-primary text-md md:text-xl'>Special Product for you</span> */}

//     <div className="flex">
//       <input type="text" className="w-full  border border-primary rounded-md py-1 px-4 md:w-96" placeholder="Search" name="" id="" />
//       <button className="ml-[-35px] text-primary mt-2"><span class="material-symbols-outlined">
//         search
//       </span></button>
//     </div>
//     {/* 
//                         <div className='flex items-center gap-1 text-primary'>
//                             <span class="material-symbols-outlined">
//                                 apps
//                             </span>
//                             <span class="material-symbols-outlined">
//                                 window
//                             </span>
//                             <span class="material-symbols-outlined">
//                                 grid_view
//                             </span>
//                         </div> */}
//   </div>
//   <section className='grid grid-cols-2 md:grid-cols-5 gap-4'>

//     <Product love="true"></Product>
//     <Product love="false"></Product>
//     <Product love="true"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="true"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>
//     <Product love="false"></Product>

//   </section>
// </div>