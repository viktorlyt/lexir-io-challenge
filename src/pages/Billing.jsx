import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';

function Billing() {
  return (
    <div>
      <Header />
      <main className='main max-w-7xl m-auto px-8 pb-0 text-[#2D2D2D]'>
        <section className='grid grid-cols-12 gap-6'>
          
          <AccountSidebar />

          <div className='col-start-4 col-end-13 p-14 pr-9 text-base font-normal bg-[#F9F9F9]'>
            <p className='text-5xl font-bold mb-10'>Billing profile details</p>
            <div className='flex-col p-10 px-14 mb-10 border'>
              <p className='text-2xl font-bold mb-10 pb-4 border-b'>Billing Information</p>
              <div className='flex justify-start mb-11'>
                <div className='flex-col w-60'>
                  <p className='mb-16 text-lg font-bold'>Credit card</p>
                  <p className='mb-6 text-lg font-bold'>Name</p>
                  <p className='mb-16 text-lg font-bold'>Address</p>
                  <p className='text-lg font-bold'>Next billing</p>
                </div>
                <div className='flex-col w-60'>
                  <p className='mb-12'>Mastercard ending in 3887 expires on 4/23</p>
                  <p className='mb-6'>Leandro Alves</p>
                  <p className='mb-12'>Agras Street 8798, 4000-458 Porto, Portugal </p>
                  <p className=''>9 April 2023</p>
                </div>
              </div>
              <button type='text' className='w-fit mr-6 px-8 h-12 bg-[#2D2D2D] rounded text-[#ffffff]'>
                Change credit card
              </button>
              <button type='text' className='w-fit px-8 h-12 bg-[#2D2D2D] rounded text-[#ffffff]'>
                Edit billing information
              </button>
            </div>
            <div className='flex-col p-10 px-14 mb-10 border'>
              <p className='text-2xl font-bold mb-4 pb-4 border-b'>Projects on this profile</p>
              <span className='flex justify-between mb-8 border-b font-bold'>
                <p className=''>Project</p>
                <p className=''>Product</p>
                <p className='-translate-x-3'>Last Update</p>
              </span>
              <span className='flex justify-between'>
                <p className='mb-4 w-26'>Lexir</p>
                <p className='ml-24 mb-4'>Lorem impsum 48</p>
                <p className='mb-4'>€19.25/month</p>
              </span>
            </div>
            <div className='flex-col p-10 pb-6 px-14 border'>
              <p className='text-2xl font-bold mb-4 pb-4 border-b'>Past invoices</p>
              <span className='flex justify-start items-center pb-4 mb-4 border-b font-bold'>
                <p className='w-36'>Invoice #</p>
                <p className='w-36'>Invoice date</p>
                <p className='w-36'>Amount</p>
                <p className='w-36'>Status</p>
              </span>
              <span className='flex justify-start items-center pb-4 mb-4 border-b'>
                <p className='w-36'>LXY-588-889</p>
                <p className='w-36'>01 Sep, 2022</p>
                <p className='w-32 mr-2'>€199.25</p>
                <p className='w-32 ml-3 text-[#1C8C64]'>Paid</p>
                <button type='text' className='w-36 px-2 h-9 bg-[#2D2D2D] rounded text-[#ffffff]'>
                  Request PDF
                </button>
              </span>
              <span className='flex justify-start items-center pb-4 mb-4 border-b'>
                <p className='w-36'>LXY-588-889</p>
                <p className='w-36'>01 Sep, 2022</p>
                <p className='w-32 mr-2'>€199.25</p>
                <p className='w-32 ml-3 text-[#1C8C64]'>Paid</p>
                <button type='text' className='w-36 px-2 h-9 bg-[#2D2D2D] rounded text-[#ffffff]'>
                  Request PDF
                </button>
              </span>
              <span className='flex justify-start items-center pb-4 mb-4 border-b'>
                <p className='w-36'>LXY-588-889</p>
                <p className='w-36'>01 Sep, 2022</p>
                <p className='w-32 mr-2'>€199.25</p>
                <p className='w-32 ml-3 text-[#CB5757]'>Refunded</p>
                <button type='text' className='w-36 px-2 h-9 bg-[#2D2D2D] rounded text-[#ffffff]'>
                  Request PDF
                </button>
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Billing;