import { Link } from "react-router";

import LogoIpsum from "@/assets/logoipsum.svg";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
    >
      <div className="bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg p-1 transition-colors duration-300">
        <img
          src={LogoIpsum}
          alt="PetCure Logo"
          width={32}
          height={32}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="text-foreground text-2xl font-bold tracking-tight">
        Pet<span className="text-primary">Cure</span>
      </span>
    </Link>
  );
};

export default Logo;
