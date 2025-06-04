import Nav from './js/Nav';
import { Routes, Route } from 'react-router-dom';
import About from './js/About';
import Home from './js/Home';
import Service from './js/Service';
import Pages from './js/Pages';
import Contact from './js/Contact';
import SectionOne from './js/SectionOne';
import SectionTwo from './js/SectionTwo';
import SectionThree from './js/SectionThree';
import SectionFour from './js/SectionFour';
import SectionFive from './js/SectionFive'
import SectionSix from './js/SectionSix'
import SectionSeven from './js/SectionSeven'
import SectionEight from './js/SectionEight'
import Footer from './js/Footer'
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <SectionOne/>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </div>
  );
}

export default App;
