import AboutHero from '../components/AboutHero';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ContactDisclaimer from '../components/ContactDisclaimer';
import DirectorsSection from '../components/DirectorsSection';

export default function About() {
  return (
    <>
      <Navigation />
      <AboutHero />
      <DirectorsSection />
      <ClientsSection />
      <ContactDisclaimer />
      <Footer />
    </>
  );
}
