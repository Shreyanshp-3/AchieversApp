import AboutSection from './components/AboutSection';
import BookAppointment from './components/BookAppointment';
import ExpertTrainers from './components/ExpertTrainers';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import UpcomingEvents from './components/UpcomingEvents';
import WhatWeOffer from './components/Whatweoffer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatWeOffer />
      <BookAppointment />
      <ExpertTrainers />
      <Testimonials />
      <UpcomingEvents />
      <Footer />
      {/* <br/>
      <br/>
      <br/>
      <br/> */}
    </>
  );
}

export default App;
