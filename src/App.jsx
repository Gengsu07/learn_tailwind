import {
  SpecialOffer,
  CustomerReview,
  Footer,
  Hero,
  PopularProduct,
  Services,
  Subscribe,
  SuperQuality,
} from "./sections";
import Navbar from "./components/Navbar";

const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8 padding">
      <Footer />
    </section>
  </main>
);

export default App;
