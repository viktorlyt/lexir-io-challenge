import Header from '../components/Header';
import Footer from '../components/Footer';
import SuggestBrand from '../components/SuggestBrand';

function Brands() {
  return (
    <div>
      <Header />
      <main className='main max-w-7xl m-auto px-8 pb-0 text-[#2D2D2D]'>

        <h1 className="my-10 text-5xl font-bold">Brands</h1>
        <section className="flex justify-between mb-4">
          <img src="siwu.png" alt="siwu" />
          <img src="erika.png" alt="erika" />
          <img src="ninefold.png" alt="ninefold" />
        </section>
        <section className="flex justify-between mb-20">
          <img src="argala.png" alt="argala" />
          <img src="baldoria.png" alt="baldoria" />
          <img src="kiss_me.png" alt="kiss_me" />
        </section>
          
        <SuggestBrand />
      </main>
      <Footer />
    </div>
  );
}

export default Brands;