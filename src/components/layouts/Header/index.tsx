import { FileText, MessageCircle } from "lucide-react";
import { Link } from "react-router";

import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";

import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="bg-background sticky top-0 left-0 z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* NavLinks */}
        <NavLinks className="hidden lg:flex" />

        {/* Button CTA */}
        <div className="flex items-center gap-4">
          <Button variant={"outline"} asChild className="hidden lg:flex">
            <Link to={"/"}>
              <FileText className="size-4" />
              Kuesioner
            </Link>
          </Button>

          <Button asChild className="hidden lg:flex">
            <Link to={"/"}>
              <MessageCircle className="size-4" />
              Hubungi Kami
            </Link>
          </Button>

          {/* Theme */}
          <ThemeToggle />

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
