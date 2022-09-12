import Header from '../components/Header';
import Footer from '../components/Footer';
import SuggestBrand from '../components/SuggestBrand';

function Page1() {
  return (
    <div>
      <Header />
      <main className='main max-w-7xl m-auto p-8 pb-0 text-[#2D2D2D]'>
        <nav className='main__nav flex justify-left items-center text-lg p-10'>
          <img src='home-button.svg' alt='home-button' className=' w-4 h-5'/>
          <p className='ml-4 mr-6 font-medium'>Home</p>
          <img src='Vector 705 (Stroke).svg' alt='Vector 705 (Stroke)' className='w-4 h-4'/>
          <p className='ml-4 mr-6 font-medium'>Spirits</p>
          <img src='Vector 705 (Stroke).svg' alt='Vector 705 (Stroke)' className='w-4 h-4'/>
          <p className='ml-4 mr-6 font-medium'>Kiss My</p>
          <img src='Vector 705 (Stroke).svg' alt='Vector 705 (Stroke)' className='w-4 h-4'/>
          <p className='ml-4 mr-6 font-bold'>Kiss My Rhubarb</p>
        </nav>

        <section className='grid grid-cols-12 gap-6'>
          <div className='col-start-1 col-end-9 mb-20 justify-center bg-[#E7E7E7]'>
            <img src='packshot-kiss-my-rhubarb.png' alt='packshot-kiss-my-rhubarb' className='flex m-auto p-10 w-188 h-123'/>
          </div>
          
          <div className='section__active-right col-start-9 col-end-13 flex-colomn'>
            <p className='text-5xl font-bold font-serif'>Kiss My Rhubarb</p>
            <p className='mb-9 text-xl font-bold text-[#CCCCCC] text-left'>APERITIF</p>
            <span className='flex mb-3 items-center justify-between'>
              <p className='flex items-center'>
                <img className='p-0 m-0 w-2 h-4' src="Vector (1).svg" alt="Vector (1)" />
                <img className='p-0 m-0 w-2 h-4' src="Vector (2).svg" alt="Vector (2)" />
                <img className='p-0 m-0 w-2 h-4' src="Vector (3).svg" alt="Vector (3)" />
                <p className='ml-3 font-bold text-lg'> IZEGEM, BELGIUM</p>
              </p>
              <p className='font-bold text-lg'>21% ABV</p>
            </span>
            <p className='mb-12 text-base text-left font-normal'>
              Kiss My Rhubarb is a fresh and aromatic Belgian aperitif. It uses bright and zesty supporting ingredients like pink grapefruit and lemon verbena to create an aperitif perfectly designed to pair with hot summery nights. 
            </p>
            <div className='flex justify-between items-center h-12 text-base font-normal mb-3'>
              <div className='w-51 h-12 justify-around items-center border-2 rounded border-[#F2F2F2] border-solid'>
                <p className='block px-20 py-3'>700ml</p>
              </div>
              <div className='w-31 flex items-center justify-around h-12 border-2 rounded border-[#F2F2F2] border-solid'>
                <img className='w-4 mx-4' src="minus.svg" alt="minus" />
                <img className='w-1 h-8' src="dash.svg" alt="minus" />
                <p className=' mx-4'>2</p>
                <img className='w-1 h-8' src="dash.svg" alt="plus" />
                <img className='w-4 mx-4' src="plus.svg" alt="plus" />
              </div>
            </div>
            <div className='block py-3 px-10 rounded h-13 justify-between bg-[#2D2D2D]'>
              <span className='flex justify-between items-center text-[#FFFFFF] font-bold'>
                <p>Add to Cart</p>
                <p>$230.33</p>
              </span>
            </div>
          </div>
        </section>

        <section className='grid grid-cols-12 gap-6'>
          <div className='col-start-1 col-end-8 justify-center text-left'>
            <h2 className='text-2xl font-bold mb-9'>Product Details</h2>
            <span className='text-base'>
              Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels’ and Wouters’ rebellious grandparents. Using carefully hand-selected stalks of rhubarb, and locally-sourced flowers and herbs, this summery aperitif perfectly expresses the brimming liveliness that characterizes the Belgian countryside in bloom.
              <br />
              <br />
              Kiss My Rhubarb is created in collaboration with local producers in Izegem that select only the freshest stalks of rhubarb using attentive and sustainable practices. By avoiding the pitfalls of overproduction and diminished flavour that large-scale harvesting methods can bring, Kiss My’s careful foraging process results in an aperitif that emphasises the tangy juiciness of its primary ingredient. 
            </span>
          </div>
          
          <div className='col-start-9 col-end-13 justify-center text-left'>
            <h2 className='text-base font-bold mb-9 ml-3'>Tasting notes</h2>
            <span className='mb-8 text-base font-normal flex items-center'>
              <img src='nose.svg' alt='nose' className=' ml-3 mr-10 w-6 h-7'/>
              <p>ASTRINGENT</p>
              <img src='Ellipse 51.svg' alt='Ellipse 51' className='mx-2 w-1 h-1'/>
              <p>FRUITY</p>
              <img src='Ellipse 51.svg' alt='Ellipse 51' className='mx-2 w-1 h-1'/>
              <p>COMPLEX</p>
            </span>
            <span className='mb-8 text-base font-normal flex items-center'>
              <img src='mouth.svg' alt='mouth' className=' ml-3 mr-10 w-6 h-6'/>
              <p>BITTER</p>
              <img src='Ellipse 51.svg' alt='Ellipse 51' className='mx-2 w-1 h-1'/>
              <p>FLAMBOYANT</p>
              <img src='Ellipse 51.svg' alt='Ellipse 51' className='mx-2 w-1 h-1'/>
              <p>BRIGHT</p>
            </span>
            <h2 className='text-base font-bold mb-4 ml-3'>Flavour Intensity</h2>
            <span className='mb-8 text-base font-normal flex items-center'>
              <img src='dash (1).svg' alt='dash (1)' className='ml-3 w-16 h-1'/>
              <img src='dash (1).svg' alt='dash (1)' className='mx-1 w-16 h-1'/>
              <img src='dash (1).svg' alt='dash (1)' className='w-16 h-1'/>
              <img src='dash (2).svg' alt='dash (2)' className='mx-1 w-16 h-1'/>
              <img src='dash (2).svg' alt='dash (2)' className='w-16 h-1'/>
            </span>
            <h2 className='text-base font-bold mb-8 ml-3'>Suggested Use</h2>
            <div className='flex ml-3'>
              <span className='mb-8 mr-2 w-26 h-8 text-xs bg-[#F9F9F9] font-normal flex justify-between items-center rounded p-3'>
                <p>In a cocktail</p>
                <img src='bocal.svg' alt='bocal' className='ml-3 w-3 h-3'/>
              </span>
              <span className='mb-27 w-26 h-8 text-xs bg-[#F9F9F9] font-normal flex justify-between items-center rounded p-3'>
                <p>At a party</p>
                <img src='dancing.svg' alt='dancing' className='ml-3 w-3 h-3'/>
              </span>
            </div>
          </div>
        </section>

        <SuggestBrand />
      </main>
      <Footer />
    </div>
  );
}

export default Page1;