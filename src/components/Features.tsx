import { CheckCircle, Users, Clock, Globe } from "lucide-react";

const Features = () => {
  const stats = [
    { number: "100+", label: "Proyectos Completados" },
    { number: "98%", label: "Satisfacción del Cliente" },
    { number: "24/7", label: "Soporte Técnico" },
    { number: "30+", label: "Tecnologías Dominadas" },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Calidad Garantizada",
      description:
        "Código limpio, testing automatizado y mejores prácticas en cada proyecto.",
    },
    {
      icon: Users,
      title: "Equipo Experto",
      description:
        "Desarrolladores senior con más de 5 años de experiencia en tecnologías modernas.",
    },
    {
      icon: Clock,
      title: "Entrega Puntual",
      description:
        "Metodologías ágiles que garantizan entregas en tiempo y forma.",
    },
    {
      icon: Globe,
      title: "Alcance Global",
      description:
        "Trabajamos con clientes de todo el mundo, adaptándonos a diferentes husos horarios.",
    },
  ];

  return (
    <section id="caracteristicas" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-10">
            Números que Hablan por Nosotros
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué Elegirnos?
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Principales Tecnologías que Dominamos
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-700 font-semibold text-lg">React</div>
            <div className="text-red-700 font-semibold text-lg">Next.js</div>
            <div className="text-gray-700 font-semibold text-lg">
              TypeScript
            </div>
            <div className="text-gray-700 font-semibold text-lg">Node.js</div>
            <div className="text-red-700 font-semibold text-lg">Nestjs</div>
            <div className="text-gray-700 font-semibold text-lg">Laravel</div>
            <div className="text-gray-700 font-semibold text-lg">Vuejs</div>
            <div className="text-red-700 font-semibold text-lg">Flutter</div>
            <div className="text-gray-700 font-semibold text-lg">
              React Native
            </div>
            <div className="text-gray-700 font-semibold text-lg">Angular</div>
            <div className="text-red-700 font-semibold text-lg">AWS</div>
            <div className="text-gray-700 font-semibold text-lg">MongoDB</div>
            <div className="text-gray-700 font-semibold text-lg">Firebase</div>
            <div className="text-gray-700 font-semibold text-lg">GraphQL</div>
            <div className="text-red-700 font-semibold text-lg">PostgreSQL</div>
            <div className="text-gray-700 font-semibold text-lg">
              Otras tecnologías
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
