import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../utils/images'
import { useCart} from '../../contextApi/cartContext';

export const Navbar = () => {
  const { state } = useCart();
  const [carts, setCart] = useState()
  const [navBg, setNavBg] = useState(false);

  /** cart localstore */
  useEffect(()=> {
    let cartItem = JSON.parse(localStorage.getItem('carts'))
    setCart(cartItem ? cartItem.length : 0 )
  },[])

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
            <Link className="" to="/">
              <img src={Images.Logo} alt="" style={{ height: "45px", width: "60px" }} />
            </Link>
          </div>
          {/* responsive navbar end */}

          {/* all divice navbar start */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/" className='font-content font-semibold'>Home</Link></li>
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
                    <Link to="/dashboard/wishlist">
                      <img src={Images.Love} className='h-6 w-6' alt="" />
                      <span className="badge badge-sm indicator-item bg-primary text-white p-1">8</span>
                    </Link>
                  </div>
                </label>
              </div>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                  <div className="indicator">
                    <Link to="/dashboard/cart">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      <span className="badge badge-sm indicator-item bg-primary text-white p-1">
                       {/* {carts} */}
                        {state.cartItems.length}
                      </span>
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
                    <Link to="/dashboard" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li><Link to="/dashboard">Settings</Link></li>
                  <li><Link to="/dashboard">Logout</Link></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </>
}
