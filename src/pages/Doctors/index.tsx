import { Link } from "react-router";

import SectionTitle from "@/components/common/SectionTitle";
import DoctorCard from "@/components/layouts/doctors/DoctorCard";
import { doctors } from "@/constants/data";

const Doctors = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Doctors Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <SectionTitle
            title="Dokter"
            highlightedText="Berpengalaman"
            subtitle="Tim medis kami terdiri dari dokter hewan spesialis dengan keahlian di berbagai bidang untuk memberikan perawatan komprehensif."
            titleClassName="text-center"
            subtitleClassName="text-center"
          />

          {/* Doctors Grid */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="from-primary/10 to-primary/5 mt-16 rounded-2xl bg-gradient-to-r p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold md:text-3xl">
              Butuh Konsultasi Segera?
            </h3>
            <p className="text-muted-foreground mt-4 md:text-lg">
              Hubungi kami untuk membuat janji temu dengan dokter hewan pilihan
              Anda atau untuk layanan darurat 24/7.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+6221234567890"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors"
              >
                Hubungi Sekarang
              </a>
              <Link
                to="/#contact"
                className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium transition-colors"
              >
                Buat Janji Temu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
