import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Floating Hearts */}
        <Heart className="absolute top-20 left-10 size-6 animate-pulse text-pink-300" />
        <Heart className="absolute top-32 right-20 size-4 animate-bounce text-red-300" />
        <Heart className="absolute bottom-40 left-20 size-5 animate-pulse text-pink-400" />

        {/* Sparkles */}
        <Sparkles className="absolute top-40 left-1/4 size-5 animate-spin text-yellow-400" />
        <Sparkles className="absolute right-1/3 bottom-60 size-4 animate-pulse text-blue-400" />

        {/* Stars */}
        <Star className="absolute top-60 right-10 size-4 animate-bounce text-yellow-300" />
        <Star className="absolute bottom-20 left-1/3 size-3 animate-pulse text-purple-300" />
      </div>

      <div className="relative z-10 container">
        <div className="grid min-h-screen grid-cols-1 items-center gap-8 py-10 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl">
                Kesehatan Terbaik untuk
                <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  Sahabat Berbulu{" "}
                </span>
                Anda
              </h1>
              <p className="text-lg text-gray-600 md:text-xl">
                Memberikan perawatan kesehatan terpercaya untuk hewan peliharaan
                kesayangan Anda. Dengan tim dokter hewan berpengalaman dan
                fasilitas modern.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group" asChild>
                <Link to={"/"}>
                  Konsultasi Sekarang
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button variant="outline" size="lg">
                <Link to={"/"}>Pelajari Lebih Lanjut</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-pink-100 p-8">
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Kucing lucu yang sehat dan bahagia"
                className="h-full w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
