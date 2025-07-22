export interface NavLink {
  id: string;
  label: string;
  href: string;
  description?: string;
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
