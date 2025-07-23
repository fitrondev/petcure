import { NavLink } from "react-router";

import { navLinks } from "@/constants/data";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  className?: string;
  link_className?: string;
};

const NavLinks = ({ className, link_className }: NavLinkProps) => {
  return (
    <nav className={cn("flex items-center gap-8", className)}>
      {navLinks.map((link) => {
        // Check if it's an anchor link (starts with #) or a route
        const isAnchorLink = link.href.startsWith("#");

        if (isAnchorLink) {
          return (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "hover:text-primary relative px-3 py-2 text-sm font-medium transition-all duration-300",
                "after:bg-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
                "text-muted-foreground",
                link_className
              )}
              aria-label={link.description}
            >
              {link.label}
            </a>
          );
        }

        return (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive }) =>
              cn(
                "hover:text-primary relative px-3 py-2 text-sm font-medium transition-all duration-300",
                "after:bg-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
                link_className,
                isActive ? "text-primary after:w-full" : "text-muted-foreground"
              )
            }
            aria-label={link.description}
          >
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavLinks;
