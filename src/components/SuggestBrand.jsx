function SuggestBrand() {
  return (
    <section className='grid grid-cols-12 gap-0 mb-0'>
      <div className='col-start-1 col-end-7 pl-9 pt-12 pr-4 h-100 justify-center text-left bg-[#F9F9F9]'>
        <p className='text-5xl font-bold mb-9 font-serif'>Have a brand you’d like to see on <span className='text-5xl text-[#1C8C64]'>Lexir</span>?</p>
        <span className='text-base'>
          Lexir is always looking to connect with new exciting craft brands from around the world. If you have a brand in mind that you'd like to see on Lexir, let us know.
        </span>
        <div className='block py-3 px-10 mt-7 w-60 rounded h-13 justify-between bg-[#2D2D2D]'>
          <span className='flex justify-center items-center text-[#FFFFFF] font-bold'>
            <p>Suggest a Brand</p>
          </span>
        </div>
      </div>
      <div className='col-start-7 col-end-13 ml-0 pl-0 h-100'>
        <img src='pexels-cottonbro-4254032.png' alt='pexels-cottonbro-4254032' className='object-cover'/>
      </div>
    </section>
  );
}

export default SuggestBrand;