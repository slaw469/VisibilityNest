import { Globe, Bot, TrendingUp} from 'lucide-react';
import { SITE } from '../site.config';

const ServicesSection = () => {
  const serviceIcons = [Globe, Bot, TrendingUp];

  return (
    <section id="services" className="py-24 sm:py-32 bg-background-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wider text-neutral-900">Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {SITE.services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon className="text-primary w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

