import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <Header />
      <main className='main max-w-7xl m-auto px-8 pb-0 text-[#2D2D2D]'>
        <section className='grid grid-cols-12 gap-6'>
          <div className='col-start-1 col-end-5 mt-10 text-base font-normal'>
            <Link to='/account' className="active:font-bold">
              <div className='flex justify-start items-center px-7 h-12  hover:bg-[#F9F9F9] '>
                <img src="Icons (Lexir).svg" alt="Icons (Lexir)" className='mr-4' />
                <p>Account</p>
              </div>
            </Link>
            <Link to='/_account' className="active:font-bold">
              <div className='flex justify-start items-center px-7 h-12 hover:bg-[#F9F9F9] '>
                <img src="Icons (Lexir) (1).svg" alt="Icons (Lexir)" className='mr-4' />
                <p>Orders</p>
              </div>
            </Link>
            <Link to='/_account' className="active:font-bold">
            <div className='flex justify-start items-center px-7 h-12 hover:bg-[#F9F9F9] '>
              <img src="Icons (Lexir) (2).svg" alt="Icons (Lexir)" className='mr-4' />
              <p>Address</p>
            </div>
            </Link>
            <Link to='/_account' className="active:font-bold">
            <div className='flex justify-start items-center px-7 h-12 hover:bg-[#F9F9F9] '>
              <img src="Icons (Lexir) (3).svg" alt="Icons (Lexir)" className='mr-4' />
              <p>Help center</p>
            </div>
            </Link>
            <Link to='/_account' className="active:font-bold">
            <div className='flex justify-start items-center px-7 h-12 hover:bg-[#F9F9F9] '>
              <img src="Icons (Lexir) (4).svg" alt="Icons (Lexir)" className='mr-4' />
              <p>Logout</p>
            </div>
            </Link>
          </div> 

          <div className='col-start-5 col-end-9 mt-10 text-base font-normal'>
            <p className='text-2xl font-bold mb-10'>Account Information</p>
            <p className='font-bold mb-1'>Email</p>
            <p className='text-lg mb-10'>jlalvesdesousa@lupum.com</p>
            <p className='font-bold mb-1'>Password</p>
            <p className='text-lg font-bold mb-1'>*******************</p>
            <p className='text-xs mb-11'>Reset Password</p>
            <p className='text-2xl font-bold mb-8'>Personal Information</p>
            <p className='mb-1'>First Name</p>
            <input type='text' placeholder='Leandro' className='w-96 mb-9 px-4 h-11 rounded border-2 border-[#cacece] placeholder:text-[#2D2D2D]'/>
            <p>Phone Number</p>
            <p className='flex mb-16'>
              <img src="DropDown.png" alt="DropDown" className='h-11 border-2 border-[#cacece]'/>
              <input type='text' placeholder='Contact Number' className='w-96 mb-9 px-4 h-11 border-2 border-[#cacece]'/>
            </p>
            
            <p className='text-2xl font-bold mb-8'>Company Information</p>
            <p className='font-bold mb-1'>Business Name</p>
            <p className='text-lg mb-12'>Lupum</p>
            <p>Company Email</p>
            <input type='text' placeholder='jlalvesdesousa@lupum.com' className='w-96 mb-9 px-4 h-11 rounded border-2 border-[#cacece] placeholder:text-[#2D2D2D]'/>
            <p className='mb-3'>Company Number</p>
            <input type='text' placeholder='1256369988' className='w-96 mb-9 px-4 h-11 rounded border-2 border-[#cacece] placeholder:text-[#2D2D2D]'/>
            <p className='text-lg font-bold mb-1'>Business Registration Document</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className='col-start-9 col-end-13 mt-10 text-base font-normal'>
            <div className='flex justify-end mb-80 '>
              <img src="edit.svg" alt="edit" className='justify-self-end'/>
            </div>
            <div className='flex justify-start translate-y-2 mb-3'>
              <p>Last Name</p>
            </div>
            <input type='text' placeholder='' className='w-96 mb-64 px-4 h-11 rounded border-2 border-[#cacece] placeholder:text-[#2D2D2D]'/>
            <p className='translate-y-4 mb-5'>Company Address</p>
            <input type='text' placeholder='Agras Street 8798, 4000-458 Porto, Portugal ' className='w-96 mb-7 px-4 h-11 rounded border-2 border-[#cacece] placeholder:text-[#2D2D2D]'/>
            <p className='mb-0'>Phone Number</p>
            <input type='text' placeholder='+325 889 565 214' className='w-96 mb-7 px-4 h-11 rounded border-2 border-[#cacece] placeholder:text-[#2D2D2D]'/>
          </div>

          <div className='mb-60 flex-col justify-items-center justify-center text-center items-center col-start-5 col-end-13 mt-3 text-base font-normal '>
            <img className='self-center m-auto mb-3' src="Icons (Lexir) (5).svg" alt="Icons (Lexir) (5)" />
            <p className='mb-3 text-xs font-bold text-[#6F6F6F]'>Drag and drop files here to upload</p>
            <p className='text-xs text-[#6F6F6F]'>Only PDF files accepted</p>
          </div>
        </section>

          
      </main>
      <Footer />
    </div>
  );
}

export default Account;