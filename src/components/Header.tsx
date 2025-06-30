import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      name: "Inicio",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { name: "Servicios", action: () => scrollToSection("servicios") },
    { name: "Beneficios", action: () => scrollToSection("caracteristicas") },
    { name: "Testimonios", action: () => scrollToSection("testimonios") },
    { name: "Contacto", action: () => scrollToSection("contacto") },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href={"/"}
                className="text-xl font-bold text-orange-500 flex items-center"
              >
                <Image
                  src="/assets/logo/logo.png"
                  alt="Dingo Labs"
                  width={120}
                  height={40}
                />{" "}
                labs
              </Link>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-orange-500"
              >
                Iniciar Sesión
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => scrollToSection("contacto")}
              >
                Comenzar Gratis
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Iniciar Sesión
              </Button>
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => scrollToSection("contacto")}
              >
                Comenzar Gratis
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
