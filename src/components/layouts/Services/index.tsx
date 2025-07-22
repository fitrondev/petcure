import SectionTitle from "@/components/common/SectionTitle";
import ServiceCard from "@/components/layouts/Services/ServiceCard";
import { services } from "@/constants/data";

const Services = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        {/* Header */}
        <SectionTitle
          title="Layanan"
          highlightedText="Terbaik"
          subtitle="Kami menyediakan berbagai layanan kesehatan dan perawatan terlengkap dengan standar medis terbaik untuk hewan peliharaan kesayangan Anda."
        />

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
