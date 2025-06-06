
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Challenge from '@/components/Challenge';
import SixDomains from '@/components/SixDomains';
import UnderTheHood from '@/components/UnderTheHood';
import GetInvolved from '@/components/GetInvolved';
import Roadmap from '@/components/Roadmap';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      <Hero />
      <Challenge />
      <SixDomains />
      <UnderTheHood />
      <GetInvolved />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
