// File: src/components/ContactSection.tsx
import { useState } from 'react';
import { Linkedin, Github, Calendar } from 'lucide-react';
import { SITE } from '../site.config';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Form Submission:', formData);
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wider text-neutral-900">Contact</h2>
        </div>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full bg-neutral-100 border-neutral-300 rounded-lg focus:ring-primary focus:border-primary px-4 py-3"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                type="text"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full bg-neutral-100 border-neutral-300 rounded-lg focus:ring-primary focus:border-primary px-4 py-3"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                type="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full bg-neutral-100 border-neutral-300 rounded-lg focus:ring-primary focus:border-primary px-4 py-3"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                required
              />
            </div>
            <div className="text-center">
              <button
                className="bg-primary text-background-dark px-8 py-3 rounded-full text-base font-bold tracking-wide hover:opacity-90 transition-opacity"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="flex justify-center gap-8 mt-16">
            <a
              className="flex items-center gap-2 text-neutral-500 hover:text-primary transition-colors"
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              className="flex items-center gap-2 text-neutral-500 hover:text-primary transition-colors"
              href={SITE.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              <span>Portfolio</span>
            </a>
            <a
              className="flex items-center gap-2 text-neutral-500 hover:text-primary transition-colors"
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-5 h-5" />
              <span>Calendly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

