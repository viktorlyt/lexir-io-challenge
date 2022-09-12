import { Link } from "react-router-dom";

function AccountSidebar() {
  return (
    <div className='col-start-1 col-end-4 mt-24 px-3 text-base font-normal'>
      <div className='flex justify-start items-center h-14 mb-20'>
        <img src="leandro.png" alt="leandro" className='mr-3' />
        <span className='flex-col'>
          <p className='text-2xl font-bold'>Leandro Alves</p>
          <p className='text-[#9E9E9E]'>Company Name</p>
        </span>
      </div>
      <Link to='/_account' className="active:font-bold">
        <div className='flex justify-start items-center px-7 h-14  hover:bg-[#F9F9F9] '>
          <img src="icon1.svg" alt="Icons (Lexir)" className='mr-4' />
          <p>Dashboard</p>
        </div>
      </Link>
      <Link to='/addbrand' className="active:font-bold">
        <div className='flex justify-start items-center px-7 h-14  hover:bg-[#F9F9F9] '>
          <img src="icon2.svg" alt="Icons (Lexir)" className='mr-4' />
          <p>Brands</p>
        </div>
      </Link>
      <Link to='/_account' className="active:font-bold">
        <div className='flex justify-start items-center px-7 h-14  hover:bg-[#F9F9F9] '>
          <img src="icon3.svg" alt="Icons (Lexir)" className='mr-4' />
          <p>Products</p>
        </div>
      </Link>
      <Link to='/_account' className="active:font-bold">
        <div className='flex justify-start items-center px-7 h-14  hover:bg-[#F9F9F9] '>
          <img src="icon4.svg" alt="Icons (Lexir)" className='mr-4' />
          <p>Customers</p>
        </div>
      </Link>
      <Link to='/_account' className="active:font-bold">
        <div className='flex justify-start items-center px-7 h-14  hover:bg-[#F9F9F9] '>
          <img src="icon5.svg" alt="Icons (Lexir)" className='mr-4' />
          <p>Orders</p>
        </div>
      </Link>
      <Link to='/billing' className="active:font-bold">
        <div className='flex justify-start items-center px-7 h-14  hover:bg-[#F9F9F9] '>
          <img src="icon6.svg" alt="Icons (Lexir)" className='mr-4' />
          <p>Billing Profile</p>
        </div>
      </Link>
      <Link to='/accountDetails' className="active:font-bold">
        <div className='flex justify-start items-center px-7 h-14  hover:bg-[#F9F9F9] '>
          <img src="icon7.svg" alt="Icons (Lexir)" className='mr-4' />
          <p>Account details</p>
        </div>
      </Link>
      <Link to='/_account' className="active:font-bold">
        <div className='flex justify-start items-center px-7 mb-40 h-14  hover:bg-[#F9F9F9] '>
          <img src="icon8.svg" alt="Icons (Lexir)" className='mr-4' />
          <p>Logout</p>
        </div>
      </Link>
    </div> 
  );
}

export default AccountSidebar;