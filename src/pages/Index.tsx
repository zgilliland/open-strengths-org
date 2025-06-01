
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhyOpen from '@/components/WhyOpen';
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
      <WhyOpen />
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
