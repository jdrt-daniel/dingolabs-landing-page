
import { CheckCircle } from "lucide-react";
import ContactForm from "./ContactForm";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="mt-4 text-lg text-orange-100">
              Únete a más de 500 empresas que ya confían en nosotros para sus soluciones tecnológicas. 
              Comienza tu proyecto hoy mismo con una consulta gratuita.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-orange-100">
                <CheckCircle className="h-5 w-5 mr-3 text-orange-200" />
                <span>Consulta inicial gratuita</span>
              </div>
              <div className="flex items-center text-orange-100">
                <CheckCircle className="h-5 w-5 mr-3 text-orange-200" />
                <span>Propuesta personalizada en 24h</span>
              </div>
              <div className="flex items-center text-orange-100">
                <CheckCircle className="h-5 w-5 mr-3 text-orange-200" />
                <span>Garantía de satisfacción 100%</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
