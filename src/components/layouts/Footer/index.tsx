import { Link } from "react-router";

import Logo from "@/components/common/Logo";
import { contactInfo, navLinks, socialMedia } from "@/constants/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container">
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Logo />
              <p className="text-muted-foreground mt-4 max-w-md">
                PetCure adalah klinik hewan terpercaya yang menyediakan layanan
                perawatan kesehatan lengkap untuk hewan peliharaan kesayangan
                Anda dengan fasilitas modern dan tim profesional.
              </p>
              <div className="mt-6 flex space-x-4">
                {socialMedia.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.id}
                      to={social.url}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent className="size-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground mb-4 font-semibold">Navigasi</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-foreground mb-4 font-semibold">Kontak</h3>
              <ul className="space-y-3">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <li key={info.id} className="flex items-start space-x-3">
                      <IconComponent className="text-muted-foreground mt-1 size-4 shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{info.value}</p>
                        <p className="text-muted-foreground text-xs">
                          {info.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} PetCure. Semua hak dilindungi.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
