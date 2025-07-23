import SectionTitle from "@/components/common/SectionTitle";
import TestimonialCard from "@/components/layouts/Testimonials/TestimonialCard";
import { testimonials } from "@/constants/data";

const Testimonials = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        {/* Section Title */}
        <SectionTitle
          title="Testimoni"
          highlightedText="Pelanggan"
          subtitle="Dengarkan pengalaman nyata dari para pemilik hewan peliharaan yang telah mempercayakan perawatan kesehatan hewan kesayangan mereka kepada PetCure."
          titleClassName="text-center"
          subtitleClassName="text-center"
        />

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
