import About from "@/components/layouts/About";
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
    </main>
  );
};

export default Home;
