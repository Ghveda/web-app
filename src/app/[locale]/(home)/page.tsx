import About from './about';
import AboutUs from './about-us';
import Features from './features';
import Header from './header';
import Partners from './partners';

export default function Home() {
  console.log('test');
  return (
    <main className="text-40">
      <Header />
      <About />
      <Features />
      <Partners />
      <AboutUs />
    </main>
  );
}
