import { SITE } from '../site.config';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light border-t border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-neutral-500 text-sm">
        <p>© {currentYear} {SITE.brand.split('—')[0].trim()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;

