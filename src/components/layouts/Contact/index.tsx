import SectionTitle from "@/components/common/SectionTitle";
import { contactInfo, socialMedia } from "@/constants/data";

import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";
import MapCard from "./MapCard";
import SocialMediaCard from "./SocialMediaCard";

const Contact = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        {/* Section Title */}
        <SectionTitle
          title="Hubungi"
          highlightedText="Kami"
          subtitle="Siap membantu Anda dan hewan peliharaan kesayangan. Hubungi kami untuk konsultasi, janji temu, atau informasi lebih lanjut tentang layanan kami."
          titleClassName="text-center"
          subtitleClassName="text-center"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info) => (
                <ContactInfoCard
                  key={info.id}
                  icon={info.icon}
                  title={info.title}
                  value={info.value}
                  description={info.description}
                />
              ))}
            </div>

            {/* Social Media */}
            <SocialMediaCard socialMedia={socialMedia} />

            {/* Map Placeholder */}
            <MapCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
