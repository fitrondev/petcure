import {
  Activity,
  Award,
  Clock,
  Facebook,
  Heart,
  Instagram,
  type LucideIcon,
  Mail,
  MapPin,
  Phone,
  Scissors,
  Shield,
  Smile,
  Stethoscope,
  Syringe,
  Twitter,
  Users,
  Zap,
} from "lucide-react";

export interface NavLink {
  id: string;
  label: string;
  href: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface AboutFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AboutStats {
  id: string;
  number: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  petName?: string;
  petType?: string;
}

export interface ContactInfo {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialMedia {
  id: string;
  name: string;
  url: string;
  icon: LucideIcon;
}

export const navLinks: NavLink[] = [
  {
    id: "home",
    label: "Beranda",
    href: "/",
    description: "Halaman utama PetCure",
  },
  {
    id: "services",
    label: "Layanan",
    href: "/services",
    description: "Layanan perawatan hewan",
  },
  {
    id: "about",
    label: "Tentang",
    href: "/about",
    description: "Tentang PetCure",
  },
  {
    id: "doctors",
    label: "Dokter",
    href: "/doctors",
    description: "Tim dokter hewan profesional",
  },
  {
    id: "contact",
    label: "Kontak",
    href: "/contact",
    description: "Hubungi kami",
  },
];

export const services: Service[] = [
  {
    id: "consultation",
    title: "Konsultasi Kesehatan",
    description:
      "Pemeriksaan menyeluruh dan konsultasi dengan dokter hewan berpengalaman untuk menjaga kesehatan hewan peliharaan Anda.",
    icon: Stethoscope,
    features: [
      "Pemeriksaan fisik lengkap",
      "Konsultasi nutrisi",
      "Rencana perawatan",
      "Follow-up berkala",
    ],
  },
  {
    id: "vaccination",
    title: "Vaksinasi",
    description:
      "Program vaksinasi lengkap untuk melindungi hewan peliharaan dari berbagai penyakit berbahaya.",
    icon: Syringe,
    features: [
      "Vaksin dasar",
      "Vaksin tambahan",
      "Jadwal vaksinasi",
      "Sertifikat vaksin",
    ],
  },
  {
    id: "grooming",
    title: "Grooming & Spa",
    description:
      "Layanan perawatan dan kecantikan untuk menjaga kebersihan dan penampilan hewan peliharaan Anda.",
    icon: Scissors,
    features: [
      "Mandi dan blow dry",
      "Potong kuku",
      "Pembersihan telinga",
      "Styling bulu",
    ],
  },
  {
    id: "emergency",
    title: "Layanan Darurat",
    description:
      "Layanan darurat 24/7 untuk menangani kondisi kritis dan keadaan darurat hewan peliharaan Anda.",
    icon: Zap,
    features: [
      "Tersedia 24/7",
      "Tim siaga",
      "Peralatan lengkap",
      "Ambulans hewan",
    ],
  },
  {
    id: "surgery",
    title: "Operasi & Bedah",
    description:
      "Layanan operasi dengan teknologi modern dan tim bedah berpengalaman untuk berbagai kondisi medis.",
    icon: Activity,
    features: [
      "Operasi minor",
      "Operasi mayor",
      "Sterilisasi",
      "Perawatan pasca operasi",
    ],
  },
  {
    id: "dental",
    title: "Perawatan Gigi",
    description:
      "Perawatan kesehatan gigi dan mulut untuk menjaga kebersihan dan kesehatan oral hewan peliharaan.",
    icon: Smile,
    features: [
      "Pembersihan karang gigi",
      "Pencabutan gigi",
      "Perawatan gusi",
      "Konsultasi dental",
    ],
  },
];

export const aboutFeatures: AboutFeature[] = [
  {
    id: "experience",
    title: "Pengalaman Terpercaya",
    description:
      "Lebih dari 10 tahun melayani kesehatan hewan peliharaan dengan dedikasi tinggi dan profesionalisme.",
    icon: Award,
  },
  {
    id: "team",
    title: "Tim Profesional",
    description:
      "Dokter hewan bersertifikat dan staff berpengalaman yang siap memberikan perawatan terbaik.",
    icon: Users,
  },
  {
    id: "care",
    title: "Perawatan Penuh Kasih",
    description:
      "Kami memahami ikatan emosional antara Anda dan hewan peliharaan, memberikan perawatan dengan penuh kasih sayang.",
    icon: Heart,
  },
  {
    id: "safety",
    title: "Keamanan Terjamin",
    description:
      "Fasilitas modern dengan standar keamanan tinggi dan protokol kesehatan yang ketat.",
    icon: Shield,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    role: "Pemilik Kucing",
    content:
      "PetCure benar-benar luar biasa! Dr. Amanda sangat sabar dan teliti dalam memeriksa Whiskers. Fasilitas yang bersih dan modern membuat saya merasa tenang meninggalkan kucing kesayangan di sini.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
    petName: "Whiskers",
    petType: "Kucing Persia",
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    role: "Pemilik Anjing",
    content:
      "Layanan grooming di PetCure sangat memuaskan. Max selalu terlihat tampan setelah grooming, dan yang terpenting dia tidak stress karena staff yang sangat ramah dan berpengalaman.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    petName: "Max",
    petType: "Golden Retriever",
  },
  {
    id: "testimonial-3",
    name: "Lisa Rodriguez",
    role: "Pemilik Kelinci",
    content:
      "Ketika Bunny sakit tengah malam, layanan darurat PetCure sangat membantu. Tim medis langsung tanggap dan berhasil menyelamatkan kelinci kesayangan saya. Terima kasih PetCure!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    petName: "Bunny",
    petType: "Kelinci Holland Lop",
  },
  {
    id: "testimonial-4",
    name: "David Kim",
    role: "Pemilik Burung",
    content:
      "Konsultasi nutrisi untuk burung kakak tua saya sangat membantu. Dr. Sari memberikan panduan yang detail dan mudah dipahami. Sekarang Coco lebih sehat dan aktif.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    petName: "Coco",
    petType: "Kakak Tua",
  },
  {
    id: "testimonial-5",
    name: "Emma Thompson",
    role: "Pemilik Hamster",
    content:
      "Meskipun hewan peliharaan saya kecil, PetCure tetap memberikan perhatian yang sama besar. Pemeriksaan rutin untuk Peanut selalu dilakukan dengan hati-hati dan profesional.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    petName: "Peanut",
    petType: "Hamster Syrian",
  },
  {
    id: "testimonial-6",
    name: "Robert Wilson",
    role: "Pemilik Iguana",
    content:
      "Sulit menemukan dokter hewan yang paham reptil, tapi di PetCure saya menemukan ahlinya. Dr. Budi sangat knowledgeable tentang perawatan iguana dan memberikan saran yang sangat berharga.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    petName: "Spike",
    petType: "Iguana Hijau",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    id: "address",
    title: "Alamat",
    value: "Jl. Kesehatan Hewan No. 123",
    description: "Jakarta Selatan, DKI Jakarta 12345",
    icon: MapPin,
  },
  {
    id: "phone",
    title: "Telepon",
    value: "+62 21 1234 5678",
    description: "Hubungi kami kapan saja",
    icon: Phone,
  },
  {
    id: "email",
    title: "Email",
    value: "info@petcure.com",
    description: "Kirim pesan kepada kami",
    icon: Mail,
  },
  {
    id: "hours",
    title: "Jam Operasional",
    value: "24/7 Darurat",
    description: "Senin-Minggu: 08:00 - 20:00",
    icon: Clock,
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: "facebook",
    name: "Facebook",
    url: "https://facebook.com/petcure",
    icon: Facebook,
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/petcure",
    icon: Instagram,
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/petcure",
    icon: Twitter,
  },
];
