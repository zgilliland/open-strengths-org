
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">OpenStrengths</h3>
            <p className="text-gray-300 mb-4">
              A nonprofit, open-source strengths framework grounded in measurement science. Free for everyone, forever.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">© 2026 OpenStrengths Community</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">License (Apache-2.0)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Legal Notice */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              CliftonStrengths® is a registered trademark of Gallup, Inc. and is not affiliated with OpenStrengths.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-2xl">🌟</span>
              <span className="text-sm text-gray-400">Built with open hearts and open minds</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Made possible by contributors around the world. 
            <a href="https://github.com/open-strengths/docs/" className="text-primary hover:text-primary/80 ml-1">
              Join us on GitHub →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
