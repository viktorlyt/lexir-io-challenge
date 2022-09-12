import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header justify-between flex p-8 border-b-4 shadow-md">
      <Link to='/'><img src='logo.svg' alt='logo' className=' w-24 h-6'/></Link>
      <div className='header__rightside flex justify-around align-baseline font-medium text-sm'>
      <Link to="/addbrand" className="mx-6 min-w-fit active:font-bold">PRODUCTS</Link>
        <Link to="/brands" className="active:font-bold">BRANDS</Link>
        <Link to='/account' className="active:font-bold">
          <div className='sign-in flex mx-6'>
            <img className='w-5 h-5' src='Vector-1.svg' alt='Vector-1'/>
            <p className='ml-2.5 min-w-fit'>SIGN IN</p>
          </div>
        </Link>
        <Link to='/cart' className="active:font-bold">
          <div className='cart flex'>
            <img className='w-5 h-4' src='Vector_header.svg' alt='Vector_header'/>
            <p className=' mr-6 ml-2.5'>CART</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;