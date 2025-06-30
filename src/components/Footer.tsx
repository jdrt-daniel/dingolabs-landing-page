import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    servicios: [
      "Desarrollo Web",
      "Apps Móviles",
      "Consultoría",
      "Mantenimiento",
      "Testing QA",
    ],
    empresa: [
      "Sobre Nosotros",
      "Nuestro Equipo",
      "Carreras",
      "Blog",
      "Contacto",
    ],
    recursos: [
      "Documentación",
      "Tutoriales",
      "Casos de Estudio",
      "FAQ",
      "Soporte",
    ],
  };

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">
              Dingo Labs
            </h3>
            <p className="text-gray-300 mb-6">
              Transformamos ideas en soluciones tecnológicas innovadoras. Somos
              tu socio estratégico en el mundo digital.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300">info@dingolabs.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300">+ (591) 78232212</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300">La Paz, Bolivia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Dingo Labs. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
              >
                Términos de Servicio
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
