import AboutHero from '../components/AboutHero';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ContactDisclaimer from '../components/ContactDisclaimer';

export default function About() {
  return (
    <>
      <Navigation />
      <AboutHero />
      <ClientsSection />
      <ContactDisclaimer />
      <Footer />
    </>
  );
}
