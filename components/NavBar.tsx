"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About me", "Skills", "Projects", "Contact"];

  const scrollAnimation = {
    duration: 0.5, // Adjust duration as needed (in seconds)
    ease: "easeOut", // Customize easing behavior (e.g., 'easeIn', 'easeInOut')
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" bg-nav-pattern"
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end"></NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
