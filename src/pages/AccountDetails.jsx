import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';

function AccountDetails() {
  return (
    <div>
      <Header />
      <main className='main max-w-7xl m-auto px-8 pb-0 text-[#2D2D2D]'>
        <section className='grid grid-cols-12 gap-6'>
          
          <AccountSidebar />

          <div className='col-start-4 col-end-13 p-14 pr-9 text-base font-normal bg-[#F9F9F9]'>
            <p className='text-5xl font-bold mb-10'>My Account</p>
            <div className='flex-col p-10 px-14 mb-10 border'>
              <p className='text-2xl font-bold mb-10 pb-4 border-b'>Account Details</p>
              <div className='flex justify-between'>
                <div className='flex-col'>
                  <p className='mb-1'>Email</p>
                  <p className='mb-12 text-lg font-bold'>jlalvesdesousa@lupum.com</p>
                  <p className='mb-1'>Password</p>
                  <p className='mb-12 text-lg font-bold'>*******************</p>
                  <p className='mb-1'>Two-factor authentication</p>
                  <p className='text-lg font-bold'>Not Enabled</p>
                </div>
                <div className='flex-col'>
                  <img src="edit.svg" alt="edit" className='mb-20' />
                  <img src="edit.svg" alt="edit" className='mb-20'/>
                  <img src="edit.svg" alt="edit" />
                </div>
              </div>
            </div>
            <div className='flex-col p-10 px-14 border'>
              <p className='text-2xl font-bold mb-10 pb-4 border-b'>Basic Info</p>
              <div className='flex justify-between'>
                <div className='flex-col'>
                  <div className='flex justify-between'>
                    <span className='flex-col mr-14'>
                      <p className='mb-3 font-bold'>First Name</p>
                      <input type='text' placeholder='Leandro' className='w-80 mb-9 px-4 h-12 bg-[#f9f9f9] rounded border border-[#cacece] placeholder:text-[#2D2D2D]'/>
                    </span>
                    <span className='flex-col'>
                      <p className='mb-3 font-bold'>Last Name</p>
                      <input type='text' placeholder='' className='w-80 mb-9 px-4 h-12 bg-[#f9f9f9] rounded border border-[#cacece] placeholder:text-[#2D2D2D]'/>
                    </span>
                  </div>
                  <span className='flex-col mb-20'>
                    <p className='mb-3 font-bold'>Company Name</p>
                    <input type='text' placeholder='Mirster Sco' className='w-full mb-24 px-4 h-12 bg-[#f9f9f9] rounded border border-[#cacece] placeholder:text-[#2D2D2D]'/>
                  </span>
                  <span className='flex-col'>
                    <button type='text' className='w-fit mb-9 px-8 h-12 bg-[#2D2D2D] rounded text-[#ffffff]'>
                      Update account info
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AccountDetails;