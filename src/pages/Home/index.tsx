import About from "@/components/layouts/About";
import Contact from "@/components/layouts/Contact";
import Faq from "@/components/layouts/Faq";
import Hero from "@/components/layouts/Hero";
import Services from "@/components/layouts/Services";
import Testimonials from "@/components/layouts/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Faq />
    </main>
  );
};

export default Home;
