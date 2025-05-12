// app/page.js
import Header         from '../components/Header';
import Hero           from '../components/Hero';
import AboutUs        from '../components/AboutUs';   // ← новый импорт
import Features       from '../components/Features';
import TrafficSources from '../components/TrafficSources';
import PricingMethods from '../components/PricingMethods';
import Contact        from '../components/Contact';

export default function Home() {
  return (
    <>
      <Header />

      {/* вертикальный поток секций */}
      <main>
        <Hero />
        <AboutUs />       
        <Features />
        <TrafficSources />
        <PricingMethods />
        <Contact />
      </main>
    </>
  );
}
