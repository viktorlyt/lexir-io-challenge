import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';

function AddBrand() {
  return (
    <div>
      <Header />
      <main className='main max-w-7xl m-auto px-8 pb-0 text-[#2D2D2D]'>
        <section className='grid grid-cols-12 gap-6'>
          <AccountSidebar />

          <div className='col-start-4 col-end-13 p-14 pr-9 text-base font-normal bg-[#F9F9F9]'>
            <p className='text-5xl font-bold mb-10'>Brands</p>
            <div className='flex'>
              <div className='flex justify-end items-center h-14 font-bold w-full mb-14 mr-9 bg-[#ffffff]'>
                <img src="lupa.svg" alt="lupa" className='mr-8'/>
              </div>
              <div className='flex justify-end items-center w-60 px-6 h-14 font-bold mb-1 bg-[#2D2D2D] rounded'>
                <img src="plus_w.svg" alt="plus_w" className='mr-8'/>
                <p className='font-bold text-[#ffffff]'>Add Brand</p>
              </div>
            </div>
            <div className='flex justify-between mb-6 px-9 font-bold'>
              <p>Brand</p>
              <p>Product</p>
              <p>Last Update</p>
            </div>
            <div className='flex justify-between items-center px-9 mb-3 border h-14'>
              <img src="baldoria-logo.svg" alt="baldoria-logo" />
              <p>Vermouth</p>
              <p>02 May, 2022</p>
            </div>
            <div className='flex justify-between items-center px-9 border h-14'>
              <img src="erika-logo.svg" alt="erika-logo" />
              <p>Vodka & Gin </p>
              <p>12 Dec, 2022</p>
            </div>
          </div>

        </section>

          
      </main>
      <Footer />
    </div>
  );
}

export default AddBrand;