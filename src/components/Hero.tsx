import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left my-6">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              <span className="block">Potencia tu negocio</span>
              <span className="block text-orange-500">con tecnología</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Desarrollamos software personalizado y soluciones tecnológicas que
              impulsan el crecimiento de tu empresa. Desde aplicaciones web
              hasta sistemas complejos, convertimos tus ideas en realidad
              digital.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
                  onClick={() => scrollToSection("contacto")}
                >
                  Comenzar Proyecto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-gray-600 hover:border-orange-500 text-gray-600 hover:text-orange-500"
                  onClick={() => scrollToSection("servicios")}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver Servicios
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                ✓ Consulta gratuita &nbsp;&nbsp; ✓ Soporte 24/7 &nbsp;&nbsp; ✓
                Garantía de calidad
              </p>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden h-80 ">
                <Image
                  className="object-cover"
                  src="/assets/img/banner.avif"
                  alt="Desarrollo de software"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Elementos flotantes */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 animate-bounce">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-500">
                  99.9% Tiempo activo
                </span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-orange-500">100+</div>
                <div className="text-sm text-gray-600">
                  Proyectos
                  <br />
                  completados exitosamente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
