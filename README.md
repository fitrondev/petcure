# PetCure - Klinik Hewan Modern

Sebuah website klinik hewan modern dan responsif yang dibangun dengan React, Vite, dan Tailwind CSS untuk menyediakan layanan perawatan hewan terbaik.

**Dibuat oleh:** [Fitron Ansori](https://github.com/fitronansori) | **Website:** [ansoridev.site](https://ansoridev.site) | **Support/Donasi:** [Saweria](https://saweria.co/fitronansori)

## 🚀 Fitur

- **Design Modern**: UI yang indah dan responsif dengan animasi yang smooth
- **React 19**: Versi terbaru dengan hooks dan performance optimization
- **Vite**: Build tool yang cepat dengan Hot Module Replacement
- **Tailwind CSS**: Framework CSS utility-first untuk styling yang cepat
- **TypeScript**: Type safety penuh di seluruh project
- **Component-based**: Komponen yang modular dan reusable
- **Mobile-first**: Design responsif untuk semua device
- **React Router**: Navigasi yang smooth antar halaman
- **Radix UI**: Komponen UI yang accessible dan customizable

## 📁 Struktur Project

```text
petcure/
├── public/
│   ├── logoipsum.svg        # Logo aplikasi
│   └── vite.svg             # Vite logo
├── src/
│   ├── App.tsx              # Komponen utama aplikasi
│   ├── main.tsx             # Entry point aplikasi
│   ├── index.css            # Global styles
│   ├── assets/
│   │   ├── images/          # Gambar dan aset visual
│   │   ├── logoipsum.svg    # Logo
│   │   └── react.svg        # React logo
│   ├── components/
│   │   ├── common/          # Komponen yang reusable
│   │   │   ├── Logo.tsx     # Komponen logo
│   │   │   ├── SectionTitle.tsx # Komponen judul section
│   │   │   └── ThemeToggle.tsx  # Toggle tema
│   │   ├── context/         # React context providers
│   │   │   └── theme-provider.tsx # Provider tema
│   │   ├── layouts/         # Komponen section halaman
│   │   │   ├── About/       # Section tentang
│   │   │   ├── Contact/     # Section kontak
│   │   │   ├── Faq/         # Section FAQ
│   │   │   ├── Footer/      # Footer
│   │   │   ├── Header/      # Header/Navigation
│   │   │   ├── Hero/        # Section hero
│   │   │   ├── Services/    # Section layanan
│   │   │   ├── Testimonials/ # Section testimonial
│   │   │   └── doctors/     # Komponen dokter
│   │   └── ui/              # UI components (Radix UI)
│   ├── constants/
│   │   └── data.ts          # Data statis dan interface
│   ├── layouts/
│   │   └── HomeLayout.tsx   # Layout utama
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── pages/
│       ├── Doctors/         # Halaman dokter
│       │   └── index.tsx
│       └── Home/            # Halaman beranda
│           └── index.tsx
├── components.json          # Config Radix UI
├── tailwind.config.ts       # Config Tailwind CSS
├── tsconfig.json            # Config TypeScript
└── vite.config.ts           # Config Vite
```

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 7
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Routing**: React Router 7
- **Animation**: tw-animate-css
- **Development**: ESLint, Prettier

## 📦 Dependencies

### Core Dependencies

- `react` & `react-dom`: Library React 19
- `vite`: Build tool yang cepat
- `typescript`: Type safety
- `tailwindcss`: Framework CSS utility-first
- `react-router`: Routing untuk SPA

### UI & Components

- `@radix-ui/*`: Headless UI primitives (accordion, avatar, dialog, dropdown-menu, slot)
- `lucide-react`: Icon library
- `class-variance-authority`: Component variants
- `clsx` & `tailwind-merge`: Utility functions
- `@tailwindcss/vite`: Tailwind CSS integration dengan Vite

## 🚦 Getting Started

### Prerequisites

Pastikan kamu punya Node.js 18+ yang sudah terinstall di komputer.

### Installation

1. **Clone repository**

   ```bash
   git clone <url-repo>
   cd petcure
   ```

2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. **Buka browser**

   Buka [http://localhost:5173](http://localhost:5173) untuk melihat hasilnya.

## 📜 Available Scripts

- `npm run dev` - Start development server dengan Vite
- `npm run build` - Build aplikasi untuk production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint untuk code quality
- `npm run format` - Format code dengan Prettier
- `npm run format:check` - Check format code dengan Prettier

## 🎨 Customization

### Mengubah Content

Edit data di `src/constants/data.ts` untuk customize:

- Navigation items
- Hero section content
- Services (layanan klinik)
- Doctor profiles
- Testimonials
- About section features
- Contact info
- FAQ items

### Styling

Project ini menggunakan Tailwind CSS untuk styling. Kamu bisa:

- Modify `tailwind.config.ts` untuk custom config
- Update `src/index.css` untuk global styles
- Customize component styles di file masing-masing
- Gunakan theme provider untuk dark/light mode

### Components

Semua section bersifat modular dan bisa ditemukan di `src/components/layouts/`:

- `Hero/` - Landing hero section
- `Services/` - Layanan klinik hewan
- `About/` - About section dengan fitur
- `Testimonials/` - Testimonial pelanggan
- `Contact/` - Contact form dan info
- `Faq/` - Frequently Asked Questions
- `Footer/` - Footer dengan informasi lengkap
- `doctors/` - Komponen untuk halaman dokter

## 🌐 Deployment

### Vercel (Recommended)

1. Push code kamu ke GitHub
2. Import repository di [Vercel](https://vercel.com)
3. Deploy dengan zero configuration

### Platform Lain

Project ini bisa di-deploy di platform mana pun yang support static sites atau SPA:

- Netlify
- Railway
- Heroku
- AWS S3 + CloudFront
- Google Cloud Platform
- GitHub Pages

## 📱 Features Overview

- **Responsive Design**: Works perfect di desktop, tablet, dan mobile
- **Modern UI**: Design yang clean dan professional dengan smooth animation
- **Doctor Profiles**: Showcase dokter hewan dengan spesialisasi dan jadwal
- **Service Catalog**: Layanan klinik hewan yang lengkap
- **Interactive Testimonials**: Testimonial dari pelanggan yang puas
- **FAQ Section**: Accordion FAQ untuk pertanyaan umum
- **Contact Integration**: Form kontak dan informasi lengkap
- **Theme Toggle**: Dark/Light mode support
- **Accessibility**: Built dengan Radix UI untuk accessibility terbaik
- **Performance**: Optimized dengan Vite untuk loading yang cepat

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/fitur-keren`)
3. Commit perubahan (`git commit -m 'Add fitur keren'`)
4. Push ke branch (`git push origin feature/fitur-keren`)
5. Buka Pull Request

## 📄 License

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🆘 Support

Kalau kamu mengalami masalah atau punya pertanyaan:

1. Check bagian [Issues](../../issues)
2. Buat issue baru kalau masalah kamu belum ada
3. Kasih detail sebanyak mungkin

## 🙏 Acknowledgments

- Built dengan [React](https://react.dev/) dan [Vite](https://vitejs.dev/)
- Styled dengan [Tailwind CSS](https://tailwindcss.com/)
- UI components dari [Radix UI](https://www.radix-ui.com/)
- Icons dari [Lucide](https://lucide.dev/)
- Routing dengan [React Router](https://reactrouter.com/)

**Happy coding!**
