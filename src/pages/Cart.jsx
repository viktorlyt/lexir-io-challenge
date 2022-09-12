import Header from '../components/Header';
import Footer from '../components/Footer';

function Cart() {
  return (
    <div>
      <Header />
      <main className='main max-w-7xl m-auto px-8 pb-0 text-[#2D2D2D]'>
        <section className='grid grid-cols-12 gap-6'>
          <div className='col-start-2 col-end-12 flex justify-start items-center px-10 mt-10 h-16 bg-[#DCF3D7] text-base font-normal rounded-lg'>
            <img src="galka.svg" alt="galka" className='mr-6' />
            <p>Thank you! Your order was placed successfully.</p>
          </div>  
          
          <div className='col-start-2 col-end-12 flex justify-start items-center mt-4 h-19 bg-[#F9F9F9] text-base font-normal rounded-lg'>
            <span className='py-2 px-7 w-full text-center border border-[#F2F2F2]'>
              <p className='text-[#AEAEAE]'>ORDER NUMBER</p>
              <p>XRQ4567</p>
            </span>
            <span className='py-2 px-7 w-full border border-[#F2F2F2] text-center'>
              <p className='text-[#AEAEAE]'>DATE</p>
              <p>April 22, 2021</p>
            </span>
            <span className='py-2 px-7 border border-[#F2F2F2] text-center'>
              <p className='text-[#AEAEAE]'>EMAIL</p>
              <p>customer@demo.com</p>
            </span>
            <span className='py-2 px-7 border border-[#F2F2F2] text-center'>
              <p className='text-[#AEAEAE]'>TOTAL</p>
              <p>€149.00</p>
            </span>
            <span className='block w-full py-2 px-7 border border-[#F2F2F2] text-center'>
              <p className='text-[#AEAEAE]'>PAYMENT METHOD</p>
              <p>Cash on delivery</p>
            </span>
          </div>  
          
          <div className='col-start-2 col-end-12 flex justify-start items-center mt-4 h-11 bg-[#F9F9F9] text-base font-normal rounded-lg'>
            <span className='flex items-center py-2 px-9 h-11 w-full text-left border border-[#F2F2F2]'>
              <p className='text-[#2D2D2D] text-xl font-bold'>Subtotal</p>
            </span>
            <span className='flex items-center py-2 px-9 h-11 w-64 text-left border border-[#F2F2F2]'>
              <p className='text-[#2D2D2D] text-base font-normal'>$832.00</p>
            </span>
          </div>  
          
          <div className='col-start-2 col-end-12 flex justify-start items-center -mt-4 h-16 text-base font-normal rounded-lg'>
            <span className='items-center py-2 px-9 h-16 w-full text-left'>
              <p className='mb-2.5 text-[#2D2D2D] font-bold'>Shipping:</p>
              <p className='text-[#2D2D2D] font-bold'>VAT</p>
            </span>
            <span className='items-center py-2 px-9 h-16 w-64 text-left'>
              <p className='mb-2.5 text-[#2D2D2D] text-base font-normal'>$17.00</p>
              <p className='text-[#2D2D2D] text-base font-normal'>20%</p>
            </span>
          </div>
          <div className='col-start-2 col-end-12 flex justify-start items-center mt-4 h-11 bg-[#F9F9F9] text-base font-normal rounded-lg'>
            <span className='flex items-center py-2 px-9 h-11 w-full text-left border border-[#F2F2F2]'>
              <p className='text-[#2D2D2D] text-xl font-bold'>Total</p>
            </span>
            <span className='flex items-center py-2 px-9 h-11 w-64 text-left border border-[#F2F2F2]'>
              <p className='text-[#2D2D2D] text-base font-normal'>$832.00</p>
            </span>
          </div>
  
          <div className='col-start-2 col-end-12 flex justify-start items-center mt-9 h-16'>
            <span className='flex items-center py-2 px-9 h-16 w-full text-left'>
              <h3 className='text-[#2D2D2D] text-xl font-bold'>Order Summary</h3>
            </span>
          </div>
          <div className='col-start-2 col-end-12 flex justify-start items-center mt-4 h-10 bg-[#F9F9F9] text-base font-normal rounded-lg'>
            <span className='flex items-center py-2 px-9 h-10 w-full text-left border border-[#F2F2F2]'>
              <p className='text-[#2D2D2D] text-base font-bold'>Product</p>
            </span>
            <span className='flex items-center py-2 px-9 h-10 w-64 text-left border border-[#F2F2F2]'>
              <p className='text-[#2D2D2D] text-base font-bold'>Quantity</p>
            </span>
            <span className='flex items-center py-2 px-9 h-10 w-64 text-left border border-[#F2F2F2]'>
              <p className='text-[#2D2D2D] text-base font-bold'>Unit Price</p>
            </span>
            <span className='flex items-center py-2 px-9 h-10 w-64 text-left border border-[#F2F2F2]'>
              <p className='text-[#2D2D2D] text-base font-bold'>Total</p>
            </span>
          </div>

          <div className='col-start-2 col-end-12 flex justify-start items-center -mt-4 mb-12 text-base font-normal rounded-lg'>
            <span className='items-center py-2 px-9 w-full text-left'>
              <p className='mb-2.5 text-[#2D2D2D]'>Amaro Alpino</p>
              <p className='mb-2.5 text-[#2D2D2D]'>Erika Spirits</p>
              <p className='mb-2.5 text-[#2D2D2D]'>Stockholms Bränneri</p>
            </span>
            <span className='items-center py-2 px-9 w-64 text-left'>
              <p className='mb-2.5 text-[#2D2D2D]'>5</p>
              <p className='mb-2.5 text-[#2D2D2D]'>2</p>
              <p className='mb-2.5 text-[#2D2D2D]'>22</p>
            </span>
            <span className='items-center py-2 px-9 w-64 text-left'>
              <p className='mb-2.5 text-[#2D2D2D]'>€22.55</p>
              <p className='mb-2.5 text-[#2D2D2D]'>€22.55</p>
              <p className='mb-2.5 text-[#2D2D2D]'>€22.55</p>
            </span>
            <span className='items-center py-2 px-9 w-64 text-left'>
              <p className='mb-2.5 text-[#2D2D2D]'>€125.66</p>
              <p className='mb-2.5 text-[#2D2D2D]'>€45.66</p>
              <p className='mb-2.5 text-[#2D2D2D]'>€1235.36</p>
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;