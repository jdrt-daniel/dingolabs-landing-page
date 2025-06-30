import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      company: "CEO, InnovateTech",
      image: "/assets/person/person-02.avif",
      content:
        "Dingo Labs transformó completamente nuestra operación digital. El equipo es profesional, creativo y siempre cumple con los plazos. Nuestra productividad aumentó un 300%.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      company: "Director, E-Commerce Plus",
      image: "/assets/person/person-01.avif",
      content:
        "La aplicación web que desarrollaron superó todas nuestras expectativas. El diseño es increíble y la funcionalidad es perfecta. Recomiendo Dingo Labs al 100%.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      company: "Fundadora, StartupHub",
      image: "/assets/person/person-02.avif",
      content:
        "Desde el primer día, el equipo de Dingo Labs mostró un compromiso excepcional con nuestro proyecto. La comunicación fue fluida y el resultado final, espectacular.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            La satisfacción de nuestros clientes es nuestra mayor motivación
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center">
                  <Image
                    className="h-12 w-12 rounded-full object-cover mr-4"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={120}
                    height={120}
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
