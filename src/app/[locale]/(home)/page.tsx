import Footer from '@/app/layouts/footer';
import About from './about';
import AboutUs from './about-us';
import Features from './features';
import Header from '@/app/layouts/header';
import Partners from './partners';

export default function Home() {
  return (
    <main className="text-40">
      <Header />
      <About />
      <Features />
      <Partners />
      <AboutUs />
      <Footer />
    </main>
  );
}
