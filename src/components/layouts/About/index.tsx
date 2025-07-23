import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { aboutFeatures } from "@/constants/data";

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-14">
      <div className="container">
        {/* Section Title */}
        <SectionTitle
          title="Tentang"
          highlightedText="PetCure"
          subtitle="Kami adalah klinik hewan terpercaya yang berkomitmen memberikan perawatan terbaik untuk sahabat berbulu Anda dengan penuh kasih sayang dan profesionalisme."
          titleClassName="text-center"
          subtitleClassName="text-center"
        />

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Cerita Kami</h3>
              <p className="text-muted-foreground">
                PetCure didirikan dengan visi sederhana namun mulia: memberikan
                perawatan kesehatan terbaik untuk hewan peliharaan yang Anda
                cintai. Sejak tahun 2014, kami telah melayani ribuan hewan
                peliharaan dengan dedikasi tinggi.
              </p>
              <p className="text-muted-foreground">
                Tim kami terdiri dari dokter hewan bersertifikat dan staff
                berpengalaman yang memahami betul kebutuhan unik setiap hewan.
                Kami percaya bahwa setiap hewan peliharaan layak mendapatkan
                perawatan terbaik dengan penuh kasih sayang.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Misi & Visi</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <h5 className="font-medium">Misi</h5>
                  <p className="text-muted-foreground text-sm">
                    Memberikan layanan kesehatan hewan yang berkualitas tinggi
                    dengan teknologi modern dan pendekatan yang penuh kasih
                    sayang.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium">Visi</h5>
                  <p className="text-muted-foreground text-sm">
                    Menjadi klinik hewan terdepan yang dipercaya masyarakat
                    dalam memberikan perawatan kesehatan hewan peliharaan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-pink-100 dark:from-blue-900/30 dark:to-pink-900/30">
              <img
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80"
                alt="Tim PetCure"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-4 -bottom-4 size-24 rounded-full bg-gradient-to-br from-blue-200 to-pink-200 opacity-60 dark:from-blue-800/30 dark:to-pink-800/30" />
            <div className="absolute -top-4 -left-4 size-16 rounded-full bg-gradient-to-br from-pink-200 to-blue-200 opacity-40 dark:from-pink-800/30 dark:to-blue-800/30" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h3 className="mb-12 text-center text-2xl font-bold">
            Mengapa Memilih PetCure?
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {aboutFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={feature.id}
                  className="group bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-pink-100 transition-all duration-300 group-hover:scale-110 dark:from-blue-900/30 dark:to-pink-900/30">
                        <IconComponent className="size-8 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <h4 className="text-foreground mb-3 text-lg font-semibold">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
