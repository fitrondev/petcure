import {
  Activity,
  Award,
  Heart,
  type LucideIcon,
  Scissors,
  Shield,
  Smile,
  Stethoscope,
  Syringe,
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

export const aboutStats: AboutStats[] = [
  {
    id: "patients",
    number: "5000+",
    label: "Pasien Ditangani",
    description: "Hewan peliharaan yang telah kami rawat",
  },
  {
    id: "experience",
    number: "10+",
    label: "Tahun Pengalaman",
    description: "Melayani dengan dedikasi tinggi",
  },
  {
    id: "doctors",
    number: "15+",
    label: "Dokter Profesional",
    description: "Tim medis berpengalaman",
  },
  {
    id: "satisfaction",
    number: "98%",
    label: "Tingkat Kepuasan",
    description: "Kepuasan pelanggan kami",
  },
];
