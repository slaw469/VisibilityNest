// File: src/components/ProcessSection.tsx
import { SITE } from '../site.config';

const ProcessSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wider text-neutral-900">Our Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {SITE.process.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-primary text-2xl font-semibold">{step.step}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

