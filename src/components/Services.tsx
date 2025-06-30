import { Code, Smartphone, Cloud, Database, Shield, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description:
        "Aplicaciones web modernas y responsivas usando las últimas tecnologías como React, Next.js y TypeScript para mejorar la experiencia del usuario.",
      features: ["SPA & PWA", "SEO Optimizado", "UI/UX Moderno"],
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description:
        "Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android con React Native o Flutter.",
      features: ["Cross-platform", "Nativo", "App Store Ready"],
    },
    {
      icon: Cloud,
      title: "Soluciones Cloud",
      description:
        "Migración y desarrollo en la nube con AWS, Azure y Google Cloud para escalabilidad máxima.",
      features: ["Escalable", "Seguro", "Cost-effective"],
    },
    {
      icon: Database,
      title: "Sistemas Backend",
      description:
        "APIs robustas y bases de datos optimizadas para manejar grandes volúmenes de información.",
      features: ["APIs REST", "GraphQL", "Microservicios"],
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description:
        "Implementación de medidas de seguridad avanzadas para proteger tus datos y sistemas.",
      features: ["Encriptación", "Auditorías", "Compliance"],
    },
    {
      icon: Zap,
      title: "Automatización",
      description:
        "Automatización de procesos empresariales para mejorar la eficiencia y reducir costos.",
      features: ["RPA", "Workflows", "Integrations"],
    },
  ];

  return (
    <section id="servicios" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Ofrecemos soluciones tecnológicas completas para impulsar tu negocio
            al siguiente nivel
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-gray-200 hover:border-orange-200"
            >
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-lg mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
