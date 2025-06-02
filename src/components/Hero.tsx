
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Animated background element */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-96 h-96 mx-auto mt-32 animate-slow-rotate">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#8B5FBF" strokeWidth="2" opacity="0.3" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#E53E3E" strokeWidth="2" opacity="0.3" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#38A169" strokeWidth="2" opacity="0.3" />
            <circle cx="100" cy="100" r="20" fill="none" stroke="#DD6B20" strokeWidth="2" opacity="0.3" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Strengths science,{' '}
          <span className="bg-gradient-to-r from-insight to-drive bg-clip-text text-transparent">
            set free.
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          OpenStrengths is the first open-source, peer-reviewed framework for 
          discovering and developing human potential.
        </h2>

        <div className="flex justify-center animate-fade-in">
          <Button size="lg" className="text-lg px-8 py-6 group" asChild>
            <Link to="/white-paper">
              <FileText className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Read White Paper
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
