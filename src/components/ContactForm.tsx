import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-gray-600">
          Gracias por contactarnos. Te responderemos en menos de 2 horas
          hábiles.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Comienza tu experiencia con nosotros
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-400">
        <div>
          <Label htmlFor="name">Nombre completo *</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`mt-1 ${errors.name ? "border-red-500" : ""}`}
            placeholder="Tu nombre completo"
          />
          {errors.name && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.name}
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email corporativo *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
            placeholder="tu@empresa.com"
          />
          {errors.email && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.email}
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="mt-1"
            placeholder="+34 600 000 000"
          />
        </div>

        <div>
          <Label htmlFor="projectType">Tipo de proyecto</Label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) => handleInputChange("projectType", e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-input rounded-md bg-background focus:ring-2 focus:ring-ring focus:border-transparent"
          >
            <option value="">Selecciona un tipo</option>
            <option value="web">Desarrollo Web</option>
            <option value="mobile">App Móvil</option>
            <option value="backend">Sistema Backend</option>
            <option value="cloud">Soluciones Cloud</option>
            <option value="consulting">Consultoría</option>
          </select>
        </div>

        <div>
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`mt-1 ${errors.message ? "border-red-500" : ""}`}
            placeholder="Cuéntanos sobre tu proyecto..."
            rows={4}
          />
          {errors.message && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.message}
            </div>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
        >
          {isSubmitting ? "Enviando..." : "Solicitar Consulta Gratuita"}
          {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
        </Button>
      </form>

      <p className="mt-4 text-sm text-gray-500 text-center">
        * Campos obligatorios
      </p>
    </div>
  );
};

export default ContactForm;
