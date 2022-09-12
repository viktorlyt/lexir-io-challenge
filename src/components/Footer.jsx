function Footer() {
  return (
    <footer className='bg-[#2D2D2D] grid grid-cols-12 gap-6 h-80 pl-9 pr-9 pt-10 text-[#FFFFFF]'>
        <div className='col-start-1 col-end-3'>
          <div className='flex max-w-'>
            <img src='l.svg' alt='l' className=''/>
            <img src='e.svg' alt='e' className='px-1'/>
            <div className='flex ml-8 -translate-x-12'>
              <img src='x1.svg' alt='x1' className=' translate-x-3.5 translate-y-1/3'/>
              <img src='x.svg' alt='x' className='px-1'/>
              <img src='i.svg' alt='i' className=''/>
              <img src='r.svg' alt='r' className='px-1'/>
            </div>
          </div>
        </div>
        <div className='col-start-3 col-end-13 flex justify-between text-base font-medium leading-8 text-left'>
          <div className=' flex-col'>
            <p className='text-[#8F8F8F]'>COMMUNITY</p>
            <p>Lexir for Brands</p>
            <p>Business Buyers</p>
            <p>Sales Affiliates</p>
          </div>
          <div>
            <p className='text-[#8F8F8F]'>PLATFORM</p>
            <p>Resources</p>
            <p>Pricing</p>
            <p>Get Started</p>
          </div>
          <div>
            <p className='text-[#8F8F8F]'>COMPANY</p>
            <p>About</p>
            <p>Contact</p>
            <p>Legal</p>
          </div>
          <div>
            <p className='text-[#8F8F8F]'>LEXIR SHOP</p>
            <p>Brands</p>
            <p>Spirits</p>
            <p>Wine</p>
            <p>Blog</p>
          </div>
          <div className='flex items-start justify-center'>
            <a href="https://medium.com/lexir">
              <img src='soc-1.svg' alt='soc-1' className='w-4.5 h-4.5'/>
            </a>
            <a href="https://www.facebook.com/LexirOfficial">
              <img src='soc-fb.svg' alt='soc-fb' className='w-4.5 h-4.5 mx-4'/>
            </a>
            <a href="https://www.instagram.com/lexirofficial/">
              <img src='soc-inst.svg' alt='soc-inst' className='w-4.5 h-4.5'/>
            </a>
            <a href="https://www.linkedin.com/company/lexir/">
              <img src='soc-in.svg' alt='soc-in' className='w-4.5 h-4.5 ml-4'/>
            </a>
          </div>
        </div>
        <div className='col-start-1 col-end-13 px-9 h-px bg-[#8F8F8F]'></div>
        <div className='flex col-start-1 col-end-13 justify-between items-center text-base -translate-y-6'>
          <p className='font-light'>© 2022 Lexir Inc.</p>
          <span className='flex font-medium'>
            <p className='mr-16'>Privacy</p>
            <p>Terms of service</p>
          </span>
        </div>
      </footer>
  );
}

export default Footer;