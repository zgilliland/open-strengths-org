
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">OpenStrengths</h3>
            <span className="text-sm text-gray-400">· © 2026 OpenStrengths Community</span>
          </div>
          <a href="https://github.com/open-strengths/docs/" className="text-primary hover:text-primary/80 text-sm">
            Join us on GitHub →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
